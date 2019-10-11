var express= require('express');
var router = express.Router();

//Rutas de cada Entidad
var condiminiosApiRoutes = require('./condominios/index');
//localhost:3000/api/con/
router.use('/con',condiminiosApiRoutes);

module.exports=router;