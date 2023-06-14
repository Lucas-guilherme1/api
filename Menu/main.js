const seguidores = document.querySelector("#seguidores");
const user = document.querySelector("#seguidores");



window.addEventListener("DOMContentLoaded", async () => {
  await fetch("https://api.github.com/users/LUSKIA")
    .then(function (response) {
      return response.json();
    })
    .then(function (object) {
      console.log(object);
    });

  await fetch("https://api.github.com/users/LUSKIA/followers")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        data.map((item) => {

            seguidores.innerHTML += `<img src="${item.avatar_url}"></img>
            <p>${item.login}</p>`;

        });
    });
});

