var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';

router.use('/assets', express.static('assets'));

router.use(function (req,res,next) {
    console.log("/" + req.method);
    next();
  });

router.get("/", function(req, res) {
    res.sendFile(path + "index.html");
});

router.get("/join",function(req,res){
    res.sendFile(path + "join.html");
  });

app.use("/",router);

app.listen(3000,function(){
    console.log("Live at Port 3000");
  });