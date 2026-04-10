let bought = document.querySelectorAll(".btn-keys");
document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", (e) => {
    const amount = e.target.dataset.amount;
    window.location.href = `Payment.html?amount=${amount}`
  });
});