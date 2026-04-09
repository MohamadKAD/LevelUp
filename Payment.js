const form = document.getElementById("paymentForm");

form.addEventListener("submit", function(event){
  event.preventDefault()

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

  if(!fullName || !email || !address || !city || !state || !zipCode || !nameOnCard || !cardNumber || !expMonth || !expYear || !cvv){
    alert("Please fill in all fields.");
    return;
  }

const validMonths = [
  "January", "February", "March", "April", "May", "June", 
  "July", "August", "September", "October", "November", "December"
];

if (!validMonths.includes(expMonth)) {
  alert("Invalid month. Please enter a full month name, e.g., 'June'.");
  return;
}

const cleanCard = cardNumber.replace(/\s/g, "");
  if(cleanCard.length !== 16 || isNaN(cleanCard)){
    alert("Invalid card number. Must be 16 digits, 15 if you are using american express.");
    return;
  }

  if(cvv.length !== 3 || isNaN(cvv)){
    alert("Invalid CVV.");
    return;
  }

  const currentYear = new Date().getFullYear();
  if(expYear < currentYear){
    alert("Card has expired");
    return;
  }

  if(isNaN(zipCode)){
    alert("Zip code must be numeric");
    return;
  }

  alert("Processing payment...");
  setTimeout(()=>{
    const success = true;
    if(success){
      
      const order = {
        fullName : fullName,
        email : email,
        address : address,
        city : city,
        state : state,
        zipCode : zipCode,
        nameOnCard : nameOnCard,
        last4Digits: cleanCard.slice(-4),
        date: new Date().toLocaleString()
      };
      let orders = JSON.parse(localStorage.getItem("orders")) || [];
      orders.push(order);
      localStorage.setItem("orders", JSON.stringify(orders));


      /* ADDED */
      let library = JSON.parse(localStorage.getItem("library")) || [];
      let selectedGame = JSON.parse(localStorage.getItem("selectedGame"));

      if(selectedGame){
        selectedGame.favorite = false;

        const exists = library.some(g => g.title === selectedGame.title);
        if(!exists){
          library.push(selectedGame);
        }

        localStorage.setItem("library", JSON.stringify(library));
      }

      alert("payment successful!");
      form.reset();
    }
  }, 1500);
});