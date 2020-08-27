let getButton = document.getElementById('getButton');
let textArea = document.getElementById('contentArea');

getButton.addEventListener('click', () => {
  fetch('http://localhost:3000/get')
  .then(resp => resp.text())
  .then((text) => textArea.innerHTML = text)
});
