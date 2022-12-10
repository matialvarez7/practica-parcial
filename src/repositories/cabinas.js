const {Cabina, Direccion} = require('../../db/models');


async function todasLasCabinas(){
    return await Cabina.findAll({
        attributes: ['id', 'numero', 'direccionId'],
        include:[{
            model: Direccion,
            attributes: ['provincia', 'ruta', 'kilometro']
        }],
        order:[['numero']]
    })
}

async function cabinaPorId(id){
    return await Cabina.findOne({
        where:{id},
        attributes: ['numero', 'direccionId'],
        include:[{
            model: Direccion,
            attributes: ['provincia', 'ruta', 'kilometro']
        }]
    })
}

async function cabinasPorDireccion(id){
    return await Cabina.findAll({
        attributes: ['numero', 'direccionId'],
        include:[{
            model: Direccion,
            attributes: ['provincia', 'ruta', 'kilometro'],
            where:{id}
        }],
    })
}

module.exports ={
    todasLasCabinas,
    cabinaPorId,
    cabinasPorDireccion
}