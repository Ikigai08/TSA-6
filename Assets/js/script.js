// Function to show signup form
function showSignup(){
  document.getElementById("signUp").style.display = "flex";
  document.getElementById("login").style.display = "none";
  document.getElementById("btns2").style.backgroundColor = "white";
  document.getElementById("btns1").style.backgroundColor = "#cdb4db";
}

// Function to show login form
function showLogin(){
  document.getElementById("signUp").style.display = "none";
  document.getElementById("login").style.display = "flex";
  document.getElementById("btns1").style.backgroundColor = "white";
  document.getElementById("btns2").style.backgroundColor = "#cdb4db";
}

// Function to validate login form
function validateLogin() {
  // Redirect to another page for simplicity
  window.location.href = "info.html";
}

// Function to validate signup form
function validateSignup(event) {
  event.preventDefault(); // Prevent default form submission

  // Retrieve form values
  var firstName = document.getElementById("firstName").value.trim();
  var lastName = document.getElementById("lastName").value.trim();
 var email = document.getElementById("email").value.trim();
  var password = document.getElementById("password").value.trim();

  // Store user data in the URL as query parameters
  var url = `info.html?firstName=${firstName}&lastName=${lastName}&email=${email}&password=${password}`;

  // Redirect to another page with the user data as query parameters
  window.location.href = url;
}

// Attach the validateSignup function to the form's submit event
document.getElementById("signUpForm").addEventListener("submit", validateSignup);