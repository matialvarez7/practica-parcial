var express = require('express');
var router = express.Router();
const Vehi = require('../src/repositories/vehiculos');
const minimoPatente = 6;
const maximoPatente = 8;
const minimoTipoVehiculo = 1;
const maximoTipoVehiculo = 7;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', async function(req, res, next) {

    if(req.body.patente == undefined){
        return res.status(400).json({
            message: "PATENTE_INDEFINIDA"
        })
    }

    if(req.body.patente.length < minimoPatente || req.body.patente.length > maximoPatente){
        return res.status(400).json({
            message: "PATENTE_INVALIDA",
            description: "Debe ingresar una patente que contenga entre 6 y 8 caracteres"
        })
    }

    if(req.body.tipoVehiculo == undefined){
        return res.status(400).json({
            message: "TIPO_DE_VEHICULO_INDEFINIDO"
        })
    }

    if(req.body.tipoVehiculo < minimoTipoVehiculo || req.body.tipoVehiculo > maximoTipoVehiculo){
        return res.status(400).json({
            message: "TIPO_DE_VEHICULO_INVALIDO",
        })
    }

    if(isNaN(req.body.tipoVehiculo)){
        return res.status(400).json({
            message: "TIPO_DE_VEHICULO_INVALIDO",
            description: "Debe ingresar un número"
        })
    }

    try{
        console.log("Entro al try");
        let existe = await Vehi.vehiculoExistente(req.body.patente);
        if(existe){
            return res.status(201).json({
                id: existe.id,
                isNew: false
            })
        }else{
            let nuevo = await Vehi.nuevoVehiculos(req.body.patente, req.body.tipoVehiculo);
            return res.status(201).json({
                id: nuevo.id,
                isNew: true
            })
        }
    }catch(e){
        console.log(e);
        res.status(500).json({
            message: "ERROR"
        })
    }



});

module.exports = router;