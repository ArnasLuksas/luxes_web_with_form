//image modal popup

// all images inside the image modal content class
const lightboxImage = document.querySelectorAll(".object img");
// selecting image modal popup div
const modalPopup = document.querySelector(".image-modal-popup");
//selecting body (using var bacause with const I get error about body(because of safari))
//select main, body doesnt workng because I use it for navigation overflow.
var main = document.querySelector("main");

// dynamically selects all elements inside modal popup
const modalElement = (element) =>
  document.querySelector(`.image-modal-popup ${element}`);

// closes modal on clicking anywhere and adds overflow back
document.addEventListener("click", () => {
  main.style.overflow = "auto";
  modalPopup.style.display = "none";
});
// loops over each modal content img and adds click event functionality
lightboxImage.forEach((img) => {
  // const data = img.dataset;
  img.addEventListener("click", (e) => {
    main.style.overflow = "hidden";
    e.stopPropagation();
    modalPopup.style.display = "block";
    // modalElement("h1").innerHTML = data.title;
    // modalElement("p").innerHTML = data.description;
    // modalElement("a").href = data.url;
    // modalElement(".secondary-link").href = data.repo;
    modalElement("img").src = img.src;
  });
});
