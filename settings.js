let username = document.getElementById("username").value;
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

document.getElementById("saveAccount").addEventListener("click", () => {
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