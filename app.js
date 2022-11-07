whatever();

function whatever() {
  return fetch("data.json")
    .then((result) => result.json())
    .then((content) => {
      console.log(content);
    });
}
