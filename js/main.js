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

// ? services section

const tabs = document.querySelectorAll(".tab");
const tabPanes = document.querySelectorAll(".tab-pane");

tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    const targetTabContent = document.querySelector(
      `#${tab.dataset.tabTarget}`
    );

    tabs.forEach((tab) => tab.classList.remove("active"));
    tabPanes.forEach((tabPane) => tabPane.classList.remove("active"));

    tab.classList.add("active");
    targetTabContent.classList.add("active");
  });
});
