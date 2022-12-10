const {assert} = require('chai');
const request = require('supertest');
const app = require('../app');
const Cabina = require('../db/models');

describe('Cabinas', function(){
    describe('Listar cabinas existente', function(){
        // before(async function(){
            
        //     let existe = await Cabina.findOne({where:{numero:3}})
        //     if(existe){
        //         await existe.destroy();
        //     }
        //     await Cabina.create({
        //         numero: 3,
        //         direccionId: 1
        //     })
        // })

        // after(async function(){
        //     let existe = await Cabina.findOne({where:{numero:3}})
        //     if(existe){
        //         await existe.destroy();
        //     }
        // })

        it('En cada petición incluye el objeto anidado', function(done){
            request(app)
                .get('/cabinas')
                .expect(200)
                .end(function(err, res){
                    let esObjeto = true
                    for(let i = 0; i < res.body.length; i++){
                        let objeto = res.body[i].Direccion
                        if(!assert.typeOf(res.body[i].Direccion, 'object')){
                            esObjeto = false;
                            break;
                        }
                    }
                    assert.isTrue(esObjeto)
                    if(err) done(err)
                    return done()
                })
        })
    })
})