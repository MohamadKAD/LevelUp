document.getElementById("redeemBtn").addEventListener("click", () => {
  const keyInput =
    document.getElementById("keyInput") ||
    document.querySelector(".input-keys");
  const input = keyInput ? keyInput.value.trim() : "";
  const keys = JSON.parse(localStorage.getItem("validKeys")) || [];

  let found = false;

  for (let i = 0; i < keys.length; i++) {
    if (keys[i].code === input) {
      if (keys[i].used) {
        document.getElementById("result").textContent = "Key already used";
        return;
      }

      const redeemedGame = keys[i].game;
      keys[i].used = true;

      let library = JSON.parse(localStorage.getItem("library")) || [];
      const exists = library.some((g) => g.title === redeemedGame.title);
      if (!exists) {
        library.push({ ...redeemedGame, favorite: false });
      }
      localStorage.setItem("library", JSON.stringify(library));

      const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
      const updatedWishlist = wishlist.filter(
        (game) => game.title !== redeemedGame.title,
      );
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));

      keys.splice(i, 1);

      localStorage.setItem("validKeys", JSON.stringify(keys));

      document.getElementById("result").textContent =
        `Unlocked ${redeemedGame.title}`;

      displayKeys();
      if (keyInput) keyInput.value = "";
      found = true;
      break;
    }
  }

  if (!found) {
    document.getElementById("result").textContent = "Invalid key";
  }
});

const container = document.getElementById("keysContainer");

function displayKeys() {
  container.innerHTML = "";

  const keys = JSON.parse(localStorage.getItem("validKeys")) || [];

  keys.forEach((k) => {
    if (!k.used) {
      const div = document.createElement("div");
      div.className = "key-row";
      const title = k.game && k.game.title ? k.game.title : "Unknown game";
      div.textContent = `${title}: ${k.code}`;
      container.appendChild(div);
    }
  });
}

displayKeys();
