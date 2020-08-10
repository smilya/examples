let http = require('http');
let fs = require('fs');

const methods = Object.create(null);

http.createServer( requestHandler ).listen(8000);

/* function requestHandler(request, response) {
  request.on('data', (chunk) => {
    response.write(chunk.toString().toUpperCase());    
  });
  request.on('end', () => {
    response.end();
  })

  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
  response.writeHead(200, {'Content-Type': 'text/plain'});
} */

function requestHandler(request, response) {
  function respond(code, body, type) {
    if (!type) type = 'text/plain';
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    response.writeHead(code, {'Content-Type': type});
    if (body && body.pipe) body.pipe(response);
    else response.end(body);
  }

  if (request.method in methods) {
    methods[request.method](urlToPath(request.url), respond, request);
  }
  else 
    respond(405, 'Method ' + request.method + ' not allowed');

  function urlToPath(url) {
    let path = require('url').parse(url).pathname;
    return '.' + decodeURIComponent(path);
  }

}

methods.GET = function(path, respond) {
  fs.stat(path, (error, stats) => {
    if (error && error.code == 'ENOENT') respond(404, 'File not found');
    else if (error) respond(500, error.toString());
    else if (stats.isDirectory()) fs.readdir(path, (error, files) => {
      if (error) respond(500, error.toString());
      else respond(200, files.join('\n'));
    });
    else
    respond(200, fs.createReadStream(path), 'text/plain');
  })
}

