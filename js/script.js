const loginBtn = document.getElementById("loginBtn");
const emailField = document.getElementById("emailBox");
const passwordField = document.getElementById("passBox");

loginBtn.addEventListener("click", () => {
  const email = emailField.value;
  const password = passwordField.value;
  console.log(email, password);
  if (email === "admin@gmail.com" && password === "admin") {
    window.location.href = "/bank.html";
  } else {
    alert("enter correct email and password");
  }
});

//Bank account management
const depositBalance = document.getElementById("depositBalance");
const withdrawBalance = document.getElementById("withdrawBalance");
const totalBalance = document.getElementById("totalBalance");
