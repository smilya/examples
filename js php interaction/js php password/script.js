'use strict'

document.querySelector(".button").onclick = function () {

  let form = document.querySelector("form");

  fetch("./handler.php", {
    method: "POST",
    body: new FormData(form)
  }).then(responce => responce.text())
    .then(result => onAnswer(result));  
  
}

function onAnswer(result) {
  let passwordForm = document.getElementById("passwordForm");
  let main = document.querySelector("main");

  if (result == false) {
    let input = document.querySelector('#passwordForm input');
    input.value = '';
    input.placeholder = "try again";
  }
  else {
    document.getElementById('passwordForm').classList.add('hidden');
    let mainInner = document.createElement("main");
    mainInner.innerHTML = result;
    let main = document.querySelector("main");
    main.append(mainInner);
  }
}
