const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");

function toggleMenu() {
  if (menu.classList.contains("showMenu") || button1.classList.contains("closeMenu") || button2.classList.contains("closeMenu") || button3.classList.contains("closeMenu")) {
    menu.classList.remove("showMenu");
    button1.classList.remove("closeMenu");
    button2.classList.remove("closeMenu");
    button3.classList.remove("closeMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    button1.classList.add("closeMenu");
    button2.classList.add("closeMenu");
    button3.classList.add("closeMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);
button1.addEventListener("click", toggleMenu);
button2.addEventListener("click", toggleMenu);
button3.addEventListener("click", toggleMenu);