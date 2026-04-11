let theme = localStorage.getItem("theme");

if (theme === "light") {
  document.body.classList.add("light-mode");
} else {
  document.body.classList.remove("light-mode");
}