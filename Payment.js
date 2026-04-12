const params = new URLSearchParams(window.location.search);
const amount = parseInt(params.get("amount"), 10);

const form = document.getElementById("paymentForm");

function removeFromWishlist(gameTitle) {
  const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  const updatedWishlist = wishlist.filter((game) => game.title !== gameTitle);
  localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const selectedGame = JSON.parse(localStorage.getItem("selectedGame"));
  const isKeysPurchase = Number.isInteger(amount) && amount > 0;
  const isGamePurchase = !isKeysPurchase && !!selectedGame;

  if (!isKeysPurchase && !isGamePurchase) {
    alert("Invalid purchase details.");
    return;
  }

  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const address = document.getElementById("address").value.trim();
  const city = document.getElementById("city").value.trim();
  const state = document.getElementById("state").value.trim();
  const zipCode = document.getElementById("zipCode").value.trim();
  const nameOnCard = document.getElementById("nameOnCard").value.trim();
  const cardNumber = document.getElementById("cardNumber").value.trim();
  const expMonth = document.getElementById("expMonth").value.trim();
  const expYear = document.getElementById("expYear").value.trim();
  const cvv = document.getElementById("cvv").value.trim();

  if (
    !fullName ||
    !email ||
    !address ||
    !city ||
    !state ||
    !zipCode ||
    !nameOnCard ||
    !cardNumber ||
    !expMonth ||
    !expYear ||
    !cvv
  ) {
    alert("Please fill in all fields.");
    return;
  }

  const validMonths = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "novemeber",
    "december",
  ];

  if (!validMonths.includes(expMonth)) {
    alert("Invalid month. Please enter a full month name, e.g., 'June'.");
    return;
  }

  const cleanCard = cardNumber.replace(/\s/g, "");
  if (cleanCard.length !== 16 || isNaN(cleanCard)) {
    alert("Invalid card number, must be 16 digits.");
    return;
  }

  if (cvv.length !== 3 || isNaN(cvv)) {
    alert("Invalid CVV.");
    return;
  }

  const currentYear = new Date().getFullYear();
  if (expYear < currentYear) {
    alert("Card has expired");
    return;
  }

  if (isNaN(zipCode)) {
    alert("Zip code must be numeric");
    return;
  }

  alert("Processing payment...");
  setTimeout(() => {
    const success = true;
    if (success) {
      const order = {
        fullName: fullName,
        email: email,
        address: address,
        city: city,
        state: state,
        zipCode: zipCode,
        nameOnCard: nameOnCard,
        last4Digits: cleanCard.slice(-4),
        date: new Date().toLocaleString(),
      };
      let orders = JSON.parse(localStorage.getItem("orders")) || [];
      orders.push(order);
      localStorage.setItem("orders", JSON.stringify(orders));

      if (isGamePurchase) {
        let library = JSON.parse(localStorage.getItem("library")) || [];
        const exists = library.some((g) => g.title === selectedGame.title);
        if (!exists) {
          library.push({ ...selectedGame, favorite: false });
          localStorage.setItem("library", JSON.stringify(library));
        }
        removeFromWishlist(selectedGame.title);
        localStorage.removeItem("selectedGame");
      }

      if (isKeysPurchase) {
        const keys = generateKeysWithGames(amount);
        localStorage.setItem("validKeys", JSON.stringify(keys));
      }

      alert("payment successful!");
      form.reset();
      window.location.href = isKeysPurchase
        ? "RedeemKeys.html"
        : "library.html";
    }
  }, 1500);
});
