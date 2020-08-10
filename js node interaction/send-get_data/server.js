let http = require('http');
let server = http.createServer( requestHandler );
server.listen(8000, '127.0.0.1', console.log('Server start'));

let writeData = require('./write');
let readData = require('./read');

function requestHandler(request, response) {
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
  response.writeHead(200, {'Content-Type': 'text/html'});
  let body = '';
  let result = null;
  request.on('data', chunk => {
      body += chunk.toString();
  });
  request.on('end', () => {
      let actionCode = body.slice(-1);
      let obj = JSON.parse(body.match(/.+(?=.)/)[0]); 
      switch (actionCode) {
        case 'w':                 
          result = writeData(obj);
          break;
      
        case 'g':
          result = JSON.stringify(readData(obj.partAmount, obj.partNumber)); 
          break;
      }      
      response.end(result); 
  });  
}