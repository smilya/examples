let formData = new FormData();
formData.set('first_name', 'Honey');
formData.set('last_name', 'Sobakevich');
formData.set('email', 'sobakevich@honey.wof');
formData.set('pass1', 'gav');
formData.set('pass2', 'gav');

let loginData = new FormData();
loginData.set('email', 'sobakevich@honey.wof');
loginData.set('pass', 'gav');

function post(formData) {
  fetch('http://smilya.ru/php/reg_app/registration.php', {
    method: "POST",
    body: formData
  }).then(responce => responce.json()).then(console.log)
}

function getLoadURL(formData) {
  fetch('http://smilya.ru/php/reg_app/load.php', {
    method: "POST",
    body: formData
  }).then(responce => responce.text())
    .then(url => document.location.href = url);
}

function login(formData) {
  fetch('http://smilya.ru/php/reg_app/login.php', {
    method: "POST",
    body: formData
  }).then(responce => responce.json()).then(console.log)    
}