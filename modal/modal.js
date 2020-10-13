const btn = document.querySelector(".showModal");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close")


const toggleModal =  () => {
   overlay.classList.toggle("show");
   modal.classList.toggle('show-modal');
}

btn.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);