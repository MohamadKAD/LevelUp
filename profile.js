if (!localStorage.getItem("profile")) {
  fetch("profile.json")
    .then(res => res.json())
    .then(data => {
      localStorage.setItem("profile", JSON.stringify(data));
      location.reload();
    });
}

const profileBanner = document.getElementById('profileBanner');
const avatarPreview = document.getElementById('avatarPreview');
const displayNameInput = document.getElementById('displayNameInput');
const displayNamePreview = document.getElementById('displayNamePreview');
const aboutInput = document.getElementById('aboutInput');
const aboutPreview = document.getElementById('aboutPreview');
const avatarInput = document.getElementById('avatarInput');
const backgroundInput = document.getElementById('backgroundInput');
const saveProfileBtn = document.getElementById('saveProfileBtn');
const saveStatus = document.getElementById('saveStatus');

let profile = JSON.parse(localStorage.getItem('profile')) || {};
const defaultAvatar =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160"><rect width="160" height="160" rx="80" fill="%23252b36"/><circle cx="80" cy="62" r="28" fill="%23ff4757"/><path d="M32 138c10-24 31-36 48-36s38 12 48 36" fill="%23ff4757"/></svg>';

function loadProfile() {
  const displayName = profile.displayName || profile.username || "Player";
  const about = profile.about || "";
  const avatar = profile.avatar || defaultAvatar;
  const background = profile.background || "";

  displayNameInput.value = displayName;
  aboutInput.value = about;
  displayNamePreview.textContent = displayName;
  aboutPreview.textContent = about || "Tell people a little bit about yourself.";
  avatarPreview.src = avatar;

  if (background) {
    profileBanner.style.backgroundImage = `url("${background}")`;
  } else {
    profileBanner.style.backgroundImage = "";
  }
}

function previewImage(file, key, callback) {
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function() {
    profile[key] = reader.result;
    callback(reader.result);
  };
  reader.readAsDataURL(file);
}

avatarInput.addEventListener('change', function() {
  previewImage(this.files[0], 'avatar', (image) => {
    avatarPreview.src = image;
  });
});

backgroundInput.addEventListener('change', function() {
  previewImage(this.files[0], 'background', (image) => {
    profileBanner.style.backgroundImage = `url("${image}")`;
  });
});

displayNameInput.addEventListener('input', function() {
  displayNamePreview.textContent = this.value.trim() || "Player";
});

aboutInput.addEventListener('input', function() {
  aboutPreview.textContent = this.value.trim() || "Tell people a little bit about yourself.";
});

function saveProfile() {
  profile.displayName = displayNameInput.value.trim() || "Player";
  profile.username = profile.displayName;
  profile.about = aboutInput.value.trim();

  localStorage.setItem('profile', JSON.stringify(profile));
  saveStatus.textContent = "Profile saved.";
}

saveProfileBtn.addEventListener('click', saveProfile);

loadProfile();
