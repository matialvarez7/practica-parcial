const {Empleado} = require('../../db/models');
const {Op} = require('sequelize')

async function nuevoEmpleado(nombre, apellido, dni,){
    return await Empleado.create({
        nombre,
        apellido,
        dni,
        ingresoNomina: Date.now()
    })
};

async function coincidencias(parametro){
    return await Empleado.findAll({
        where:{
            [Op.or]: [{nombre:{[Op.substring]:parametro}},{apellido:{[Op.substring]:parametro}}, {dni:{[Op.substring]:parametro}}]
        }
    })
}

module.exports={
    nuevoEmpleado,
    coincidencias
}