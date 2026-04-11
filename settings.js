document.getElementById("saveAccount").addEventListener("click", () => {
  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

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
  alert("Account settings saved!");
});

window.addEventListener("load", () => {
  document.getElementById("username").value = localStorage.getItem("username") || "";
  document.getElementById("email").value = localStorage.getItem("email") || "";
});

let toggle = document.getElementById("themeToggle");
window.addEventListener("load", () => {
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
const passwordInput = document.getElementById("password");
const barFill = document.getElementById("strengthBarFill");
const text = document.getElementById("strengthText");

passwordInput.addEventListener("input", () => {
  const value = passwordInput.value;

  let strength = 0;

  if (value.length >= 8) strength++;
  if (/\d/.test(value)) strength++;
  if (/[A-Z]/.test(value)) strength++;
  if (/[!@#$%^&*]/.test(value)) strength++;

  if (value.length === 0) {
    barFill.style.width = "0%";
    text.textContent = "";
    return;
  }

  if (strength <= 1) {
    barFill.style.width = "30%";
    barFill.style.background = "red";
    text.textContent = "Weak";
  } 
  else if (strength === 2 || strength === 3) {
    barFill.style.width = "60%";
    barFill.style.background = "orange";
    text.textContent = "Medium";
  } 
  else {
    barFill.style.width = "100%";
    barFill.style.background = "green";
    text.textContent = "Strong";
  }
});

/*not following the password rules*/
const error = document.getElementById("passwordError");

passwordInput.addEventListener("blur", () => {
  const value = passwordInput.value;

  if (value.length < 8) {
    error.textContent = "Password must be at least 8 characters";
  } 
  else if (!/\d/.test(value)) {
    error.textContent = "Password must include a number";
  } 
  else {
    error.textContent = "";
  }
});

passwordInput.addEventListener("input", () => {
  error.textContent = "";
});