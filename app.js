"use strict";
const sectionCenter = document.querySelector(".section-center");
const ButtonContainer = document.querySelector(".btn-container");

const request = fetch(
  "https://api.rawg.io/api/games?key=73601ec88eab474386a6952aa8b34734&dates=2019-09-01,2019-09-30&platforms=18,1,"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const gameArticles = data.results;
    let displayGames = gameArticles.map(function (games) {
      const genre = games.genres.map(function (element) {
        console.log(element.name);
      });

      return `<article class="menu-item">
          <img class="photo" src="${games.background_image}" />         
    <div class="item-info">
    <header class='meta'>
    <h4>${games.name}</h4>
    </header>
    <h4 class="price">Released ${games.released}</h4>
         <div class="underline"></div>
         <br>
          <div class='meta'><h3>Metacritic:<span class=rating>${
            games.metacritic
          }</span></h3>
           <p class="item-text">
              ${[genre]}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, sint quam. Et reprehenderit fugiat nesciunt inventore
              laboriosam excepturi! Quo, officia.
            </p>
            </div>
    </div>
    </article>`;
    });

    displayGames = displayGames.join("");
    sectionCenter.insertAdjacentHTML("beforeend", displayGames);
  });
// });
