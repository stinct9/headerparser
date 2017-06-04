var express = require("express");
var app = express();

app.get('/:data', function(req,res) {
    var data = req.params.data;
    console.log(data);
    
    res.end(data);
})


app.listen(8080, function () {
   console.log("App listening on 8080."); 
});