const {assert} = require('chai');
const request = require('supertest');
const app = require('../app')

describe('Alta de empleados de empleados', function(){
    describe('Verificación del nombre', function(){
        it('Si no ingreso el nombre no puedo crearlo', function(done){
            request(app)
                .post('/empleados')
                .send({
                    nombre: undefined,
                    apellido: "alvarez",
                    dni: 35000000
                })
                .expect(400)
                .end(function(err, res){
                    assert.equal(res.body.message, "NOMBRE_INDEFINIDO")
                    if(err) done(err)
                    return done()
                })
        })

        it('Si el nombre no tiene entre 2 y 50 caracteres no puedo crearlo', function(done){
            request(app)
            .post('/empleados')
            .send({
                nombre: "m",
                apellido: "alvarez",
                dni: 35000000
            })
            .expect(400)
            .end(function(err, res){
                assert.equal(res.body.message, "NOMBRE_INVALIDO")
                if(err) done(err)
                return done()
            })
        })

        it('Si el nombre tiene un número no puedo crearlo', function(done){
            request(app)
            .post('/empleados')
            .send({
                nombre: "matias7",
                apellido: "alvarez",
                dni: 35000000
            })
            .expect(400)
            .end(function(err, res){
                assert.equal(res.body.message, "NOMBRE_INVALIDO")
                if(err) done(err)
                return done()
            })
        })
        
        it('Si el nombre tiene un caracter especial no puedo crearlo', function(done){
            request(app)
            .post('/empleados')
            .send({
                nombre: "matias?",
                apellido: "alvarez",
                dni: 35000000
            })
            .expect(400)
            .end(function(err, res){
                assert.equal(res.body.message, "NOMBRE_INVALIDO")
                if(err) done(err)
                return done()
            })
        })
    })

    describe('Verificacion del apellido', function(){
        it('Si no ingreso el apellido no puedo crearlo', function(done){
            request(app)
                .post('/empleados')
                .send({
                    nombre: "matias",
                    apellido: undefined,
                    dni: 35000000
                })
                .expect(400)
                .end(function(err, res){
                    assert.equal(res.body.message, "APELLIDO_INDEFINIDO")
                    if(err) done(err)
                    return done()
                })
        })

        it('Si el apellido no tiene entre 2 y 50 caracteres no puedo crearlo', function(done){
            request(app)
            .post('/empleados')
            .send({
                nombre: "matias",
                apellido: "alvarezzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz",
                dni: 35000000
            })
            .expect(400)
            .end(function(err, res){
                assert.equal(res.body.message, "APELLIDO_INVALIDO")
                if(err) done(err)
                return done()
            })
        })

        it('Si el apellido tiene un número no puedo crearlo', function(done){
            request(app)
            .post('/empleados')
            .send({
                nombre: "matias",
                apellido: "alvarez7",
                dni: 35000000
            })
            .expect(400)
            .end(function(err, res){
                assert.equal(res.body.message, "APELLIDO_INVALIDO")
                if(err) done(err)
                return done()
            })
        })
        
        it('Si el nombre tiene un caracter especial no puedo crearlo', function(done){
            request(app)
            .post('/empleados')
            .send({
                nombre: "matias",
                apellido: "alvarez?",
                dni: 35000000
            })
            .expect(400)
            .end(function(err, res){
                assert.equal(res.body.message, "APELLIDO_INVALIDO")
                if(err) done(err)
                return done()
            })
        })
    })

    describe('Veriicación del dni', function(){
        it('Si no ingreso el dni no puedo crearlo', function(done){
            request(app)
                .post('/empleados')
                .send({
                    nombre: "matias",
                    apellido: "alvarez",
                    dni: undefined
                })
                .expect(400)
                .end(function(err, res){
                    assert.equal(res.body.message, "DNI_INDEFINIDO")
                    if(err) done(err)
                    return done()
                })
        })

        it('Si no es un número no puedo ingresarlo', function(done){
            request(app)
            .post('/empleados')
            .send({
                nombre: "matias",
                apellido: "alvarez",
                dni: "abc"
            })
            .expect(400)
            .end(function(err, res){
                assert.equal(res.body.message, "DNI_INVALIDO")
                if(err) done(err)
                return done()
            })
        })

        it('Si no está entre 10 y 70 millones no puedo ingresarlos', function(done){
            request(app)
            .post('/empleados')
            .send({
                nombre: "matias",
                apellido: "alvarez",
                dni: 80000000
            })
            .expect(400)
            .end(function(err, res){
                assert.equal(res.body.message, "DNI_INVALIDO")
                if(err) done(err)
                return done()
            })
        })
    }) 
})

describe('Busqueda de empleados', function(){
    describe('Empleados por parametro', function(){
        it('Si enviamos ani como parametro trae a Cosme Fulanito', function(done){
            request(app)
                .get('/empleados/ani')
                .expect(200)
                .end(function(err, res){
                    assert.equal(res.body[0].nombre, "Cosme")
                    if (err) done(err)
                    return done()
                })
        })
    })
})
