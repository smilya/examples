

function query(name, age) {
  let url = new URL('http://localhost:8000/pet');
  url.search = new URLSearchParams({
    name: name,
    age: age,
  });

  fetch(url)
  .then(r => r.text())
  .then(console.log)
}