//navigation menu
let menuToggle = document.querySelector(".nav-toggler");
menuToggle.addEventListener("click", () => {
  let navLinks = document.querySelector(".nav-links");

  let logoText = document.getElementById("logo-text");
  let logoCircle = document.getElementById("logo-circle");
  let logoFill = document.getElementById("logo-fill");

  // show navigation menu
  navLinks.classList.toggle("active");
  // change icon
  menuToggle.classList.toggle("menu");
  if (menuToggle.classList[1] == null) {
    menuToggle.lastElementChild.style.display = "inline";
    menuToggle.firstElementChild.style.display = "none";
  } else {
    menuToggle.lastElementChild.style.display = "none";
    menuToggle.firstElementChild.style.display = "inline";
  }
  // change logo fill color
  if (menuToggle.classList[1] == null) {
    logoText.style.fill = "#ffffff";
    logoCircle.style.fill = "#ffffff";
    logoFill.style.fill = "#000000";
  } else {
    logoText.style.fill = "#242A45";
    logoCircle.style.fill = "#5267DF";
    logoFill.style.fill = "#ffffff";
  }
});

// tabs
let tabs = document.querySelectorAll(".tab-links");
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    let dataTarget = tab.attributes["data-target"].nodeValue;

    // remove .active
    document.querySelector(".tab-links.active").classList.remove("active");

    // add .active on clicked tab
    tab.classList.add("active");

    // remove current .show
    document.querySelector(".show").classList.remove("show");

    // show targeted element
    document.getElementById(dataTarget).classList.add("show");
  });
});
