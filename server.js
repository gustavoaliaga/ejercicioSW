var http =  require('http');
var fs = require('fs');
var path = require('path');


function run(){
    function onRequest(req, res){

        var filePath;
        if(req.url == '/'){
            filePath = './views' + '/index.html';
        }else{
            filePath = './views' + req.url;
        }
        console.log(filePath); // return '/' or '/style' or ...

        var extension = path.extname(filePath); // '.html' or '.css' or '.js'
        var contentType = 'text/html';
        switch(extension){
            case '.css':
                contentType = 'text/css';
                break;
            case '.js':
                contentType = 'text/javascript'; 
                break;
        }

        fs.exists(filePath, function(exist){
            if(exist){
                fs.readFile(filePath, function(err, cont){
                    if(err){
                        res.writeHead(500); // '500' is a error
                        res.end();
                    }else{
                        res.writeHead(200, {'Content-Type':contentType}); // '200' All is OK
                        res.end(cont); // cont is the content of the page
                    }
                });
            }else{
                res.writeHead(404); // '404' Page not found
                res.end();
            }
        });
    }
    var server = http.createServer(onRequest).listen(8080);
    console.log('Servidor corriendo en puerto 8080');
}
 
exports.run = run;