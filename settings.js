let saveMessage = document.getElementById("saveMessage");
let error = document.getElementById("passwordError");
let ruleLength = document.getElementById("ruleLength");
let ruleNumber = document.getElementById("ruleNumber");
let toggle = document.getElementById("themeToggle");

document.getElementById("saveAccount").addEventListener("click", () => {
  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  error.textContent = "";

  if (!username || !email || !password) {
    error.textContent = "All fields are required";
    return;
  }

  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    error.textContent = "Please enter a valid email address";
    return;
  }
  if (password.length < 8) {
    error.textContent = "Password must be at least 8 characters";
    return;
  }

  if (!/\d/.test(password)) {
    error.textContent = "Password must include a number";
    return;
  }

  localStorage.setItem("username", username);
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);

  saveMessage.textContent = "Saved successfully!";
  saveMessage.style.color = "limegreen";

    setTimeout(() => {
    saveMessage.textContent = "";
  }, 3000);

});



window.addEventListener("load", () => {
  document.getElementById("username").value = localStorage.getItem("username") || "";
  document.getElementById("email").value = localStorage.getItem("email") || "";

  let theme = localStorage.getItem("theme");
  if (theme === "light") {
    document.body.classList.add("light-mode");
    toggle.checked = false;
  } else {
    document.body.classList.remove("light-mode");
    toggle.checked = true;
  }
});

toggle.addEventListener("change", () => {
  if (toggle.checked) {
    document.body.classList.remove("light-mode");
    localStorage.setItem("theme", "dark");
  } else {
    document.body.classList.add("light-mode");
    localStorage.setItem("theme", "light");
  }
});



/*Password strength*/
let passwordInput = document.getElementById("password");
let barFill = document.getElementById("strengthBarFill");
let text = document.getElementById("strengthText");
passwordInput.addEventListener("input", () => {
  let value = passwordInput.value;
  saveMessage.textContent = "";
  let strength = 0;

  if (value.length >= 8) strength++;
  if (/\d/.test(value)) strength++;
  if (/[A-Z]/.test(value)) strength++;
  if (/[!@#$%^&*]/.test(value)) strength++;

  if (value.length === 0) {
    barFill.style.width = "0%";
    text.textContent = "";
  } else if (strength <= 1) {
    barFill.style.width = "30%";
    barFill.style.background = "red";
    text.textContent = "Weak";
  } else if (strength <= 3) {
    barFill.style.width = "60%";
    barFill.style.background = "orange";
    text.textContent = "Medium";
  } else {
    barFill.style.width = "100%";
    barFill.style.background = "green";
    text.textContent = "Strong";
  }

  if (value.length >= 8) {
    ruleLength.textContent = "✔ At least 8 characters";
    ruleLength.style.color = "limegreen";
  } else {
    ruleLength.textContent = "❌ At least 8 characters";
    ruleLength.style.color = "red";
  }

  if (/\d/.test(value)) {
    ruleNumber.textContent = "✔ Contains a number";
    ruleNumber.style.color = "limegreen";
  } else {
    ruleNumber.textContent = "❌ Contains a number";
    ruleNumber.style.color = "red";
  }

  error.textContent = "";
});

let emailNotif = document.getElementById("emailNotif");
let offersNotif = document.getElementById("offersNotif");

window.addEventListener("load", () => {
  emailNotif.checked = localStorage.getItem("emailNotif") === "true";
  offersNotif.checked = localStorage.getItem("offersNotif") === "true";
});

emailNotif.addEventListener("change", () => {
  localStorage.setItem("emailNotif", emailNotif.checked);
});

offersNotif.addEventListener("change", () => {
  localStorage.setItem("offersNotif", offersNotif.checked);
});