const express = require('express');
const server = express();

server.get('/source/style.css', (req, resp) => {
  resp.setHeader('Content-type', 'text/css');
  resp.sendFile(__dirname + '/source/style.css');
})

server.get('/', (req, res) => {
  res.send('<h1>Main page</h1>')
})

server.get('/pet', (req, res) =>{
  let dataStr = `Name: ${req.query.name}\nAge: ${req.query.age}`;
  console.log(dataStr);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send(dataStr);
})

server.listen(8000);

// resp.setHeader('Access-Control-Allow-Origin', '*');