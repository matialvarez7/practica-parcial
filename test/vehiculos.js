const {assert, expect} = require('chai');
const request = require('supertest');
const app = require('../app');
const { post } = require('../routes');

describe('Alta de nuevos vehiculos', function(){
    describe('Verifica de datos para el registro', function(){
        it('Si no ingresa la patente no puedo crearlo', function(done){
            request(app)
                .post('/vehiculos')
                .send({
                    patente: undefined,
                    tipoVehiculo: 1,
                })
                .expect(400)
                .end(function(err, res){
                    assert.equal(res.body.message, "PATENTE_INDEFINIDA")
                    if(err) done(err)
                    return done()
                })
        })

        it('Si la patente no tiene entre 6 y 8 caracteres no pued ingresarla', function(done){
            request(app)
                .post('/vehiculos')
                .send({
                    patente: "AAA5",
                    tipoVehiculo: 1,
                })
                .expect(400)
                .end(function(err, res){
                    assert.equal(res.body.message, "PATENTE_INVALIDA")
                    assert.equal(res.body.description, "Debe ingresar una patente que contenga entre 6 y 8 caracteres")
                    if(err) done(err)
                    return done()
                })
        })

        it('Si no ingresa el tipo de vehiculos no puedo registrarlo', function(done){
            request(app)
                .post('/vehiculos')
                .send({
                    patente: "A069KDD",
                    tipoVehiculo: undefined,
                })
                .expect(400)
                .end(function(err, res){
                    assert.equal(res.body.message, "TIPO_DE_VEHICULO_INDEFINIDO")
                    if(err) done(err)
                    return done()
                })
        })

        it('Si el tipo de vehiculos no es un digito entre 1 y 7 no puedo registrarlo', function(done){
            request(app)
                .post('/vehiculos')
                .send({
                    patente: "A069KDD",
                    tipoVehiculo: 8,
                })
                .expect(400)
                .end(function(err, res){
                    assert.equal(res.body.message, "TIPO_DE_VEHICULO_INVALIDO")
                    if(err) done(err)
                    return done()
                })
        })

        it('Si existe un nuevo vehículo el codigo de respuesta es 201', function(done){
            request(app)
                .post('/vehiculos')
                .send({
                    patente: "A069KDD",
                    tipoVehiculo: 1
                })
                .expect(201)
                .end(function(err, res){
                    assert.property(res.body, "id")
                    assert.isFalse(res.body.isNew)
                    if(err) done(err)
                    return done()
                })
        })
    })
})