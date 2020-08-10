function sendObjStr(str) {
  fetch('http://localhost:8000/', {
    method: "POST",
    body: str + 'w'
  }).then(response => response.text())
    .then(console.log)
}

function getUsers(partAmount, partNumber) {
  fetch('http://localhost:8000', {
    method: 'POST',
    body: `{"partAmount":${partAmount},"partNumber":${partNumber}}` + 'g'
  }).then(response => response.json())
    .then(console.log);
} 