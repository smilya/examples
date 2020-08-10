let fs = require('fs');
function getData(partAmount, partNum) {
  let rawData = fs.readFileSync('data.txt', 'utf8');
  let dataArr = rawData.match(/.+(?=\n)/g);
  let result = [];
  for (let i = partAmount * (partNum - 1); i < partAmount * partNum; i++) {
    if (dataArr[i]) {
      result.push(dataArr[i]);
    }        
  }
  return result.map(str => JSON.parse(str));
}

module.exports = getData;
