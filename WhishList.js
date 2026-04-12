const WISHLIST_KEY = "wishlist";
const LIBRARY_KEY = "library";

const wishlistContainer = document.getElementById("wishlistContainer");
const emptyWishlistMessage = document.getElementById("emptyWishlistMessage");
const wishlistSearchInput = document.getElementById("wishlistSearchInput");
const wishlistSearchButton = document.getElementById("wishlistSearchButton");

function getWishlistGames() {
  return JSON.parse(localStorage.getItem(WISHLIST_KEY)) || [];
}

function saveWishlistGames(wishlist) {
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
}

function getLibraryGames() {
  return JSON.parse(localStorage.getItem(LIBRARY_KEY)) || [];
}

function syncWishlistWithOwnedGames() {
  const libraryTitles = new Set(getLibraryGames().map((game) => game.title));
  const wishlist = getWishlistGames();
  const cleanedWishlist = wishlist.filter(
    (game) => !libraryTitles.has(game.title),
  );

  if (cleanedWishlist.length !== wishlist.length) {
    saveWishlistGames(cleanedWishlist);
  }

  return cleanedWishlist;
}

function removeFromWishlist(gameTitle) {
  const wishlist = getWishlistGames();
  const updatedWishlist = wishlist.filter((game) => game.title !== gameTitle);
  saveWishlistGames(updatedWishlist);
  renderWishlist(wishlistSearchInput.value);
}

function buyFromWishlist(game) {
  localStorage.setItem("selectedGame", JSON.stringify(game));
  window.location.href = "Payment.html";
}

function renderWishlist(searchQuery = "") {
  const wishlist = syncWishlistWithOwnedGames();
  const normalizedSearch = searchQuery.trim().toLowerCase();

  const filteredWishlist = wishlist.filter((game) =>
    game.title.toLowerCase().includes(normalizedSearch),
  );

  wishlistContainer.innerHTML = "";

  if (wishlist.length === 0) {
    emptyWishlistMessage.textContent = "Your wishlist is empty.";
    return;
  }

  if (filteredWishlist.length === 0) {
    emptyWishlistMessage.textContent = "No wishlist games match your search.";
    return;
  }

  emptyWishlistMessage.textContent = "";

  filteredWishlist.forEach((game) => {
    const card = document.createElement("div");
    card.classList.add("game-card");
    card.innerHTML = `
			<img src="${game.image}" alt="${game.title}">
			<h3>${game.title}</h3>
			<div class="card-actions">
				<button class="buy-now-btn">Buy Now!</button>
				<button class="remove-btn">Remove</button>
			</div>
		`;

    card.querySelector(".buy-now-btn").addEventListener("click", () => {
      buyFromWishlist(game);
    });

    card.querySelector(".remove-btn").addEventListener("click", () => {
      removeFromWishlist(game.title);
    });

    wishlistContainer.appendChild(card);
  });
}

wishlistSearchButton.addEventListener("click", () => {
  renderWishlist(wishlistSearchInput.value);
});

wishlistSearchInput.addEventListener("input", () => {
  renderWishlist(wishlistSearchInput.value);
});

renderWishlist();
