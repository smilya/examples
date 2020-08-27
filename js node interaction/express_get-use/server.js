const express = require('express');
const fs = require('fs');
const server = express();

let header = 'My page';
let message = "My message";

server.use((req, resp, next) => {
  let now = new Date();
  let date = now.getDate();
  let month = now.getMonth() + 1;
  let year = now.getFullYear();
  let hour = now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();
  let str = `${date}:${month}:${year}, ${hour}:${min}:${sec}. Request: ${req.url}\n`;
  fs.appendFile('./source/requests.log', str, (err) => {
    if (err) { console.log(err) }    
  })
  next();
})

server.get('/favicon.ico', (req, resp) => {
  fs.readFile('./source/favicon.ico', (err, icon) => {
    resp.send(icon);
  });  
});

// server.get('/source/style.css', (req, resp) => {
server.get(/.+\.css$/, (req, resp) => {
  
  fs.readFile('./source/style.css', (err, style) => {
    resp.setHeader('Content-type', "text/css");
    resp.send(style);
  });
});

server.get(/\/(index(\.html)?)?$/, (req, resp) => {
  fs.readFile('./index.html', 'utf8', (err, data) => {
    data = data.replace('{header}', header).replace('{message}', message);
    resp.send(data);
  });
});

server.get((/\/about.*/), (req, resp) => {
  fs.readFile('./source/about.html', 'utf8', (err, data) => {
    resp.send(data);
  });
  
});

server.get(/.*/, (req, resp) => {
  fs.readFile('./source/404.html', 'utf8', (err, data) => {
    resp.send(data);
  });  
}); 


server.listen(8000);