let fs = require('fs');

function writeData(obj) {
  let userString = JSON.stringify(obj);
  fs.appendFile('data.txt', `${userString}\n`, ()=> {console.log('data updated')});
  return 'true';
}

module.exports = writeData;