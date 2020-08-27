let fs = require('fs');
let http = require('http');

let header = "Main page";
let message = "What's up, dude?";

http.createServer(handler).listen(8000, '127.0.0.1', "Server start!");

function handler(request, response) {
  console.log(`Requested address: ${request.url}`);
  let filePath = './index.html';
  let filePathArr = request.url.match(/(?<=\/).+/);
  if (filePathArr) filePath = filePathArr[0];
  let extentionArr = filePath.match(/(?<=.+\.)\w{2,4}/);
  if (extentionArr) {
    switch (extentionArr[0]) {
      case "css":
        response.setHeader('Content-type', 'text/css');      
        break;
    
      case "ico":
        filePath = './source/favicon.ico';
        break;
    }
  }

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      response.statusCode = 404;
      response.end("file not found");
      return;
    }
    else {
      data = data.replace("{header}", header).replace("{message}", message);
      response.write(data);
      response.end();
      return;
    }
  });  
}
