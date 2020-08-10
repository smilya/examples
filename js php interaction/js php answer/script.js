'use strict'

let remoteAnswer;

document.querySelector(".button").onclick = function () {

  let form = document.querySelector("form");

  fetch("./handler.php", {
    method: "POST",
    body: new FormData(form)
  }).then(responce => responce.text())
    .then(result => remoteAnswer(result));  
  
}


