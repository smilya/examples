function cars(action, type, name) {
  let body = JSON.stringify(
    {
      action: action,
      type: type,
      name: name
    });
   fetch('http://smilya.ru/php/Tests/cars.php', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: body
  }).then(response => response.json())
    .then(console.log)
}