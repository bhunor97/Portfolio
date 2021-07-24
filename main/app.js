let hamburgerDiv = document.getElementById("hamburger");
let navUl = document.getElementById("nav-ul");
let phone = document.getElementById("phoneNumber");
let email = document.getElementById("email");

// HAMBURGER MENU
function myFunction() {
  if (navUl.style.display === "none") {
    navUl.style.display = "flex";
  } else {
    navUl.style.display = "none";
  }
}

hamburgerDiv.onclick = () => {
  myFunction();
};

// MOBILE NUMBER
phone.onclick = () => {
  alert("06-30-945-2343");
};

// EMAIL
function sendEmail() {
  window.location = "mailto:bhun0r97@gmail.com";
}

email.onclick = () => {
  sendEmail();
};
