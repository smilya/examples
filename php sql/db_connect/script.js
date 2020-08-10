document.querySelector('button').addEventListener('click', getData);
let resultPlace = document.querySelector('.result');
let bodyObj = {
  id: 61,
  class: 'bird',
  name: 'hawk'
};
let body = JSON.stringify(bodyObj);

function getData() {
  fetch('http://smilya.ru/php/Tests/script.php',{
  method: "POST",
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  body: body
})
  .then(responce => responce.json()).then(console.log);
  // .then(result => resultPlace.innerText = result);
  // .then(result => console.log(result));
}