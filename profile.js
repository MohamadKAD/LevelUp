if (!localStorage.getItem("profile")) {
  fetch("profile.json")
    .then(res => res.json())
    .then(data => {
      localStorage.setItem("profile", JSON.stringify(data));
      location.reload();
    });
}

const avatar = document.getElementById('avatar');
const usernameInput = document.getElementById('usernameInput');
const emailInput = document.getElementById('emailInput');
const aboutInput = document.getElementById('aboutInput');
const uploadAvatar = document.getElementById('uploadAvatar');

let profile = JSON.parse(localStorage.getItem('profile')) || {};

function loadProfile() {
  usernameInput.value = profile.username || "";
  emailInput.value = profile.email || "";
  aboutInput.value = profile.about || "";
  avatar.src = profile.avatar || "images/avatar.png";

  updateGamesCount();
}

uploadAvatar.addEventListener('change', function() {
  const file = this.files[0];
  const reader = new FileReader();
  reader.onload = function() {
    profile.avatar = reader.result;
    avatar.src = reader.result;
  };
  if (file) reader.readAsDataURL(file);
});

function saveProfile() {
  profile.username = usernameInput.value;
  profile.email = emailInput.value;
  profile.about = aboutInput.value;

  localStorage.setItem('profile', JSON.stringify(profile));
}

function updateGamesCount() {
  let library = JSON.parse(localStorage.getItem("library")) || [];
  document.getElementById("gamesCount").textContent = "Games Owned: " + library.length;
}

loadProfile();