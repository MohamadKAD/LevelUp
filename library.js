if (!localStorage.getItem("library")) {
  localStorage.setItem("library", JSON.stringify([]));
}

const container = document.getElementById("libraryContainer");
const details = document.getElementById("libraryDetails");
const libraryCount = document.getElementById("libraryCount");
const searchBar = document.getElementById("searchBar");
const sortSelect = document.getElementById("sortSelect");
const favoriteOnly = document.getElementById("favoriteOnly");

let games = JSON.parse(localStorage.getItem("library")) || [];
let selectedGameTitle = games[0]?.title || null;

function saveGames() {
  localStorage.setItem("library", JSON.stringify(games));
}

function getFavoriteLabel(game) {
  return game.favorite ? "&#9733; Favorited" : "&#9734; Favorite";
}

function getFavoriteIcon(game) {
  return game.favorite ? "&#9733;" : "&#9734;";
}

function getGameDescription(game) {
  const category = game.category || "your collection";
  return `${game.title} is part of ${category}. This panel stays on the right so you can browse your library list without losing your place.`;
}

function normalizeSelection(filteredGames) {
  if (filteredGames.length === 0) {
    selectedGameTitle = null;
    return null;
  }

  const matchingGame = filteredGames.find((game) => game.title === selectedGameTitle);

  if (matchingGame) {
    return matchingGame;
  }

  selectedGameTitle = filteredGames[0].title;
  return filteredGames[0];
}

function renderDetails(game) {
  if (!game) {
    details.innerHTML = `
      <div class="library-details-empty">
        <h2>No matching games</h2>
        <p>Try changing the search, sort, or favorite filter to find a title.</p>
      </div>
    `;
    return;
  }

  const imageMarkup = game.image
    ? `<img class="library-details-image" src="${game.image}" alt="${game.title}">`
    : `<div class="library-details-placeholder">No cover available</div>`;

  details.innerHTML = `
    <div class="library-details-card">
      ${imageMarkup}
      <div class="library-details-copy">
        <span class="library-details-label">Owned Game</span>
        <h2>${game.title}</h2>
        <p class="library-details-category">Category: ${game.category || "Library Title"}</p>
        <p class="library-details-description">${getGameDescription(game)}</p>
        <div class="library-review-block">
          <label class="library-review-label" for="gameReviewInput">Your Review</label>
          <textarea id="gameReviewInput" class="library-review-input" rows="6" placeholder="Write what you think about this game...">${game.review || ""}</textarea>
          <p class="library-review-hint">Your review saves while you type and can be edited anytime.</p>
        </div>
        <button type="button" class="profileBtn library-favorite-btn" id="favoriteToggleBtn">
          ${getFavoriteLabel(game)}
        </button>
      </div>
    </div>
  `;

  document.getElementById("favoriteToggleBtn").addEventListener("click", () => {
    toggleFavoriteByTitle(game.title);
  });

  document.getElementById("gameReviewInput").addEventListener("input", (event) => {
    updateReviewByTitle(game.title, event.target.value);
  });
}

function renderGames() {
  let filtered = [...games];
  const searchValue = searchBar.value.toLowerCase();

  filtered = filtered.filter((game) => game.title.toLowerCase().includes(searchValue));

  if (favoriteOnly.checked) {
    filtered = filtered.filter((game) => game.favorite);
  }

  if (sortSelect.value === "az") {
    filtered.sort((a, b) => a.title.localeCompare(b.title));
  } else {
    filtered.sort((a, b) => b.title.localeCompare(a.title));
  }

  container.innerHTML = "";
  libraryCount.textContent = `${filtered.length} game${filtered.length === 1 ? "" : "s"}`;

  const selectedGame = normalizeSelection(filtered);

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="library-empty-state">
        <p>No games found.</p>
      </div>
    `;
    renderDetails(null);
    return;
  }

  filtered.forEach((game) => {
    const item = document.createElement("button");
    item.type = "button";
    item.className = "library-list-item";

    if (game.title === selectedGame?.title) {
      item.classList.add("active");
    }

    item.innerHTML = `
      <span class="library-list-title">${game.title}</span>
      <span class="library-list-favorite">${getFavoriteIcon(game)}</span>
    `;

    item.addEventListener("click", () => {
      selectedGameTitle = game.title;
      renderGames();
    });

    container.appendChild(item);
  });

  renderDetails(selectedGame);
}

function toggleFavorite(index) {
  games[index].favorite = !games[index].favorite;
  saveGames();
  renderGames();
}

function toggleFavoriteByTitle(title) {
  const index = games.findIndex((game) => game.title === title);

  if (index === -1) {
    return;
  }

  toggleFavorite(index);
}

function updateReviewByTitle(title, review) {
  const index = games.findIndex((game) => game.title === title);

  if (index === -1) {
    return;
  }

  games[index].review = review;
  saveGames();
}

searchBar.addEventListener("input", renderGames);
sortSelect.addEventListener("change", renderGames);
favoriteOnly.addEventListener("change", renderGames);

renderGames();

