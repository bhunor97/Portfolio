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

email.onclick = () => {
  sendEmail();
};

// CURSOR
new kursor({
  type: 1,
  removeDefaultCursor: false,
  color: "#fff",
});
