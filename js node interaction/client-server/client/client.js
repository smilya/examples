const http = require('http');

const requestConfig = {
  hostname: "localhost",
  path: '/dir',
  method: 'GET',
  // headers: {Accept: 'text/html'},
  port: 8000,
};

let request = http.request(requestConfig, requestCallback);
request.end();

function requestCallback(response) {
  response.on('data', (chunk) => {
    // process.stdout.write(chunk.toString());
    console.log(chunk.toString())
  })
  // response.on('end', () => console.log('the end'))
}
