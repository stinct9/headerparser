var express = require("express");
var app = express();

var getClientAddress = function (req) {
        return (req.headers['x-forwarded-for'] || '').split(',')[0] 
        || req.connection.remoteAddress;
};



app.get('/whoami', function(req,res) {
    
    var ip = req.connection.remoteAddress;
    var client = req.connection.client;
    
    var getClientAddress = req.headers['x-forwarded-for'];
    var userAgent = req.headers['user-agent'].split('(')[1].split(')')[0] ;
    var lang = req.headers['accept-language'].split(',')[0];
    
    console.log(getClientAddress);
    console.log(userAgent);
    console.log(lang);
    
    var data = {
        ipaddress : getClientAddress,
        language : lang,
        software : userAgent
    };
    
    res.end(JSON.stringify(data));
})


app.listen(8080, function () {
   console.log("App listening on 8080."); 
});

