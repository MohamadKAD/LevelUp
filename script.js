const games = [
  { id: 1, title: "Elden Ring", category: "Trending", image: "https://th.bing.com/th/id/R.0c97e85926652e895f4a5ad36bc89cbc?rik=15NhUK566GC8lA&pid=ImgRaw&r=0" },
  { id: 2, title: "Red Dead Redemption 2", category: "Top Rated", image: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/05/red-dead-redemption-2-key-art.jpg?q=49&fit=crop&w=825&dpr=2" },
  { id: 3, title: "Call of Duty: BO7", category: "Trending", image: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2025/06/call-of-duty-black-ops-7-key-art-from-teaser-trailer.jpg" },
  { id: 4, title: "FC 26", category: "New Releases", image: "https://www.allkeyshop.com/blog/wp-content/uploads/EA-SPORTS-FC-26-Launch-Allkeyshop-Deals-2025-Sept_Banner.webp" },
  { id: 5, title: "Ark Raiders", category: "New Releases", image: "https://media.rawg.io/media/games/5af/5af62b2725a440cf6858ce66b30151e5.jpg" },
  { id: 6, title: "Minecraft", category: "Top Rated", image: "https://tse1.mm.bing.net/th/id/OIP.eyRo_SP8EGVg5jfGqeN64wHaEK?rs=1&pid=ImgDetMain&o=7&rm=3" },
  { id: 7, title: "Gran Turismo", category: "Trending", image: "https://tse3.mm.bing.net/th/id/OIP.xcP-eGMm7wLk4zbrUh4nRgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3" },
  { id: 8, title: "Counter-Strike 2", category: "Top Rated", image: "https://th.bing.com/th/id/OIP.UdnicE24I7N3ooW1nkZP3wHaLH?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3" },
  { id: 9, title: "Cyberpunk 2077", category: "Spring Sale", image: "https://gamingbolt.com/wp-content/uploads/2023/09/cyberpunk-2077-key-art-1024x577.jpg" },
  { id: 10, title: "The Witcher 3", category: "Top Rated", image: "https://image.api.playstation.com/vulcan/ap/rnd/202211/0711/kh4MUIuMmHlktOHar3lVl6rY.png" },
  { id: 11, title: "Assassin’s Creed Mirage", category: "", image: "https://cdnb.artstation.com/p/assets/covers/images/075/167/577/large/sina-pakzx-kasra-sina-pakzx-kasra-assassins-creed-mirage-cover.jpg?1713905121" },
  { id: 12, title: "Death Stranding 2", category: "Trending", image: "https://tse2.mm.bing.net/th/id/OIP.wzTdibgonX89CC0I5m-RoQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" }
];


function renderGames(filterCategory = null, searchQuery = "") {
  let container = document.querySelector(".game-grid");
  container.innerHTML = "";

  const filteredGames = games.filter(game => {
    const matchesCategory = filterCategory ? game.category === filterCategory : true;
    const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  filteredGames.forEach(game => {
    const card = document.createElement("div");
    card.classList.add("game-card");
    card.innerHTML = `
      <img src="${game.image}" alt="${game.title}">
      <h3>${game.title}</h3>
      <button onclick='buyGame(${JSON.stringify(game)})'>Get Now!</button>`;
    container.appendChild(card);
  });
}
renderGames();

let searchInput = document.querySelector(".search-bar input");
let searchButton = document.querySelector(".search-bar button");

searchButton.addEventListener("click", () => {
  renderGames(null, searchInput.value);
});
searchInput.addEventListener("keyup", () => {
  renderGames(null, searchInput.value);
});

document.querySelectorAll(".category-banner").forEach(banner => {
  banner.addEventListener("click", () => {
    const category = banner.querySelector("h3").textContent;
    renderGames(category);
  });
});



function buyGame(game) {
  localStorage.setItem("selectedGame", JSON.stringify(game));
  window.location.href = "Payment.html";
}
