const testimonial = document.querySelector('.testimonial');
const cards = document.querySelectorAll(".card");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const active = document.querySelector(".active");
let current = 0;



const width = cards[current].clientWidth;

spreader(width);
cards[current].style.display = 'block';
function spreader(width) {
  Array.from(cards).forEach((card, index) => {
    //card.style.transform = `translateX(${index * width}px)`;
    card.style.display = 'none';
  })
}; 

function moveRight() {
  cards[current].style.display = 'none';
  current++;
  current %= cards.length;
  cards[current].style.display = 'block';
}

function moveLeft() {
  cards[current].style.display = 'none';
  current--;
  if(current < 0) {
    current = cards.length;
    current--;
  }
  cards[current].style.display= "block";
}

nextBtn.addEventListener('click', moveRight)
prevBtn.addEventListener('click', moveLeft)