var express = require('express');
var router = express.Router();
const Cabina = require('../src/repositories/cabinas');

/* GET home page. */
router.get('/', async function(req, res, next) {
    res.status(200).json(await Cabina.todasLasCabinas());
});

router.get('/:id', async function(req, res, next){
    res.json(await Cabina.cabinaPorId(req.params.id));
});

router.get('/direcciones/:id', async function(req, res, next){

    res.json(await Cabina.cabinasPorDireccion(req.params.id));

});

module.exports = router;