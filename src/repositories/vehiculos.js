const {Vehiculo} = require('../../db/models');

async function vehiculoExistente(patente){
    console.log("Verificando si existe");
    return await Vehiculo.findOne({
        where:{patente}
    })
}

async function nuevoVehiculos(patente, tipoVehiculo){
    console.log("registrando vehiculos");
    return await Vehiculo.create({
        patente,
        tipoVehiculo
    })
}

module.exports = {
    nuevoVehiculos,
    vehiculoExistente
}