var express = require("express");
var router = express.Router();

router.get('/', function(req, res, next){
    res.render('form',{ 
        name: 'Ryu Ho Chang',
        blog: 'gocoder.tistory.com',
        homepage: 'gocoder.net'
    });
});

router.post('/',function(req,res,next){
    res.json(req.body);}
);

module.exports = router;