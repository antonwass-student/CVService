/**
 * Created by A546454 on 2017-05-16.
 */
var express = require('express');
var router = express.Router();

router.get('/qr', function(req, res, next) {
    res.json({test:5});
});

router.post('/qr', function(req, res, next){
    res.json({data:5});
});


//@Eddie Använd denna endpointen för objekt-identifiering
router.post('/identify', function(req, res, next){

    //Ta ut bildens raw-data från request.
    var imageRaw = req.body.imageData;

    //Omvandla bilden till lämpligt format

    //Identifiera objekt i bidlen
    var objectName = "Identifiera objekt.";

    //Skicka tillbaka svar
    res.json({success:true, object: objectName});
});

module.exports = router;
