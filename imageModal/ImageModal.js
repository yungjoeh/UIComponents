const images = document.querySelectorAll("[data-show]");
const modal = document.querySelector(".img-modal");

let first = getModalBackground(images[0]);
modal.style.background = first;

function getModalBackground(el) {
  return el.getAttribute("data-show");
}

function setModalBackground(el , attr) {
  return el.style.background = attr;
}

function initialize() {
[...images].forEach(img => {
  img.addEventListener("click", changeModal)
});

}

function changeModal() {
  let mod = getModalBackground(this);
  setModalBackground(modal, mod);
}

initialize();