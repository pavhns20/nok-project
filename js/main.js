/* On click of the hamburger menu, open the hamburger menu */
document
  .querySelector(".hamburger-icon")
  .addEventListener("click", function () {
    document.querySelector(".hamburger-menu").classList.add("menu-open");
  });

/* On click of the cross, close the hamburger menu */
document.querySelector(".menu-close").addEventListener("click", function () {
  document.querySelector(".hamburger-menu").classList.remove("menu-open");
});
