if (!localStorage.getItem("library")) {
  fetch("library.json")
    .then(res => res.json())
    .then(data => {
      localStorage.setItem("library", JSON.stringify(data.games));
      location.reload();
    });
}

const container = document.getElementById('libraryContainer');
const searchBar = document.getElementById('searchBar');
const sortSelect = document.getElementById('sortSelect');
const favoriteOnly = document.getElementById('favoriteOnly');

let games = JSON.parse(localStorage.getItem('library')) || [];

function renderGames() {
  let filtered = [...games];

  const searchValue = searchBar.value.toLowerCase();

  filtered = filtered.filter(game =>
    game.title.toLowerCase().includes(searchValue)
  );

  if (favoriteOnly.checked) {
    filtered = filtered.filter(game => game.favorite);
  }

  if (sortSelect.value === "az") {
    filtered.sort((a, b) => a.title.localeCompare(b.title));
  } else {
    filtered.sort((a, b) => b.title.localeCompare(a.title));
  }

  container.innerHTML = "";

  filtered.forEach((game, index) => {
    const realIndex = games.indexOf(game);

    const card = document.createElement('div');
    card.classList.add('game-card');

    card.innerHTML = `
      <img src="${game.image}" alt="${game.title}">
      <h3>${game.title}</h3>
      <button onclick="toggleFavorite(${realIndex})">
        ${game.favorite ? "★ Favorited" : "☆ Favorite"}
      </button>
    `;

    container.appendChild(card);
  });
}

function toggleFavorite(index) {
  games[index].favorite = !games[index].favorite;
  localStorage.setItem('library', JSON.stringify(games));
  renderGames();
}

searchBar.addEventListener('input', renderGames);
sortSelect.addEventListener('change', renderGames);
favoriteOnly.addEventListener('change', renderGames);

renderGames();