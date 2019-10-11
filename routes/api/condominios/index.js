var express= require('express');
var router = express.Router();
var filemodel = require('../filemodel');

var conCollection = filemodel.getCondominios();

router.get('/', function(req, res){
  res.json({
    "entity":"Condominios",
    "version":"0.0.1"
  });
}); //get


router.get('/all', function(req,res){
 conCollection=filemodel.getCondominios();
 res.json(conCollection);

}) //get all

module.exports = router;