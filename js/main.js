const hamburgerMenu = document.querySelector(".hamburger");
const navbarLinks = document.querySelector(".navbar--links");

hamburgerMenu.addEventListener("click", () => {
  if (hamburgerMenu.classList.contains("active")) {
    hamburgerMenu.classList.remove("active");
    navbarLinks.style.display = "none";
  } else if (!hamburgerMenu.classList.contains("active")) {
    hamburgerMenu.classList.add("active");
    navbarLinks.style.display = "flex";
  }
});
