var express = require('express');
var router = express.Router();
const Empleado = require('../src/repositories/empleados');
const caracteresMinimos = 2;
const caracteresMaximos = 50;
const minimoDni = 10000000;
const maximoDni = 70000000;
const regEx_number = /\d/g;
const regEx_special_character = /[$&+,:;=?@#|'<>.^*()%!-]/g;

/* GET home page. */
router.get('/:parametro', async function(req, res, next) {
    let coincidencias = await Empleado.coincidencias(req.params.parametro);
    if(coincidencias.length === 0){
        res.status(404).json({
            message: "NO_HAY_COINCIDENCIAS"
        })
    }else{
        res.status(200).json(coincidencias);
    }

});

router.post('/', async function(req, res, next) {
    
    if(req.body.nombre == undefined){
        return res.status(400).json({
            message: "NOMBRE_INDEFINIDO"
        })
    }

    if(req.body.nombre.length < caracteresMinimos || req.body.nombre.length > caracteresMaximos){
        return res.status(400).json({
            message: "NOMBRE_INVALIDO"
        })
    }

    if(regEx_number.test(req.body.nombre)){
        return res.status(400).json({
            message: "NOMBRE_INVALIDO"
        })
    }

    if(regEx_special_character.test(req.body.nombre)){
        return res.status(400).json({
            message: "NOMBRE_INVALIDO"
        })
    }

    if(req.body.apellido == undefined){
        return res.status(400).json({
            message: "APELLIDO_INDEFINIDO"
        })
    }

    if(req.body.apellido.length < caracteresMinimos || req.body.apellido.length > caracteresMaximos){
        return res.status(400).json({
            message: "APELLIDO_INVALIDO"
        })
    }

    if(regEx_number.test(req.body.apellido)){
        return res.status(400).json({
            message: "APELLIDO_INVALIDO"
        })
    }

    if(regEx_special_character.test(req.body.apellido)){
        return res.status(400).json({
            message: "APELLIDO_INVALIDO"
        })
    }

    if(req.body.dni == undefined){
        return res.status(400).json({
            message: "DNI_INDEFINIDO"
        })
    }

    if(req.body.dni < minimoDni || req.body.dni > maximoDni){
        return res.status(400).json({
            message: "DNI_INVALIDO"
        })
    }

    if(isNaN(req.body.dni)){
        return res.status(400).json({
        message: "DNI_INVALIDO"
    })
    }
    
    try{
        if(await Empleado.nuevoEmpleado(req.body.nombre, req.body.apellido, req.body.dni)){
            res.status(201).json({
                message: "ALTA_NUEVO_EMPLEADO"
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