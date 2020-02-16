'use strict'

let fieldData_1 = document.querySelector("input[name='data_1']");
let fieldData_2 = document.querySelector("input[name='data_2']");
let fieldData_3 = document.querySelector("input[name='data_3']");

function makeArrJSON() {
  let answer = [];
  answer.push(fieldData_1.value);
  answer.push(fieldData_2.value);
  answer.push(fieldData_3.value);
  return JSON.stringify(answer);
};

function clearFields() {
  fieldData_1.value = '';
  fieldData_2.value = '';
  fieldData_3.value = '';
}

function clearDataScreen() {
  let strDivs = document.querySelectorAll('.dataScreen > div');
  for (let i of strDivs) {
    i.remove();
  }
}

function writerAnswer(result) {
  if (!result) {
    alert("Запись не удалась");
  }
  else {
    alert("Данные записаны успешно");
    clearFields();
  }
}

function readerAnswer(result) {
  clearDataScreen();
  let arr = JSON.parse(result);
  for (let i=1; i<=arr.length; i++) {
    let elem = document.createElement('div');
    elem.innerText = i + ". " + arr[i-1];
    document.querySelector('.dataScreen').append(elem);
  }
}

document.querySelector("#sendData").onclick = function () {
  fetch("./writer.php", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: makeArrJSON()
  }).then(response => response.text())
    .then(result => writerAnswer(result));    
}

document.querySelector("#getData").onclick = function () {
  fetch("./reader.php", {
    method: "POST",

  }).then(response => response.text())
    .then(result => readerAnswer(result));    
}

// То же, но более универсально брать данные из разных файлов на сервере
function askData(dataFile) {
  fetch("./unireader.php",{
    method: "POST",
    body: dataFile,
  }).then(response => response.text()).then(answer => readerAnswer(answer));  
}

let dataButtons = document.querySelectorAll(".button.serialButton");

for (let i=1; i<=dataButtons.length; i++) {
  dataButtons[i-1].onclick = function() {
    askData('data-' + i);
  }
}

// document.querySelector("#getData-" + '1').onclick = function() {
//  askData("data-" + "1");
// }