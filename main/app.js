let hamburgerDiv = document.getElementById("hamburger");
let navUl = document.getElementById("nav-ul");
// navUl.style.display = "flex";

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
