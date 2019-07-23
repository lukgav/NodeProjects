const fs = require("fs");
const http = require('http');
// const canvas = require("./canvasDrawer.js")

function OnRequest(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    // console.log(' - Test Write HEad');
    fs.readFile('./src/index.html', null, function(error, data) {
        // console.log(' - Test Enter Read File');
        if(error){
            console.log(error);
            // console.log(' - Test Error condition');
            response.writeHead(404);
            // console.log(' - Test Error 404');
            response.write('File not found');
        } else {
            // console.log(' - Test success condition');
            console.log('Server is on port 3000')
            response.write(data);
        }
        response.end();
    }); 
};

http.createServer(OnRequest).listen(3000);
