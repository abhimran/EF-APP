import "./styles/main.scss";
import "@fortawesome/fontawesome-free/css/all.css";
import templateHTML from "./template.html?raw";

document.querySelector("#app").innerHTML = templateHTML;

const searchContainer = document.getElementById("searchContainer");
const searchIcon = document.getElementById("searchIcon");
const closeIcon = document.getElementById("closeIcon");
const menuItems = document.querySelector(".menu-bottom-main");

searchIcon.addEventListener("click", () => {
  searchContainer.style.display = "flex";
  menuItems.style.display = "none";
  searchIcon.style.display = "none";
});

closeIcon.addEventListener("click", () => {
  searchContainer.style.display = "none";
  menuItems.style.display = "flex";
  searchIcon.style.display = "flex";
});
