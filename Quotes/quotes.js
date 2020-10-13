console.log("hello");
const parent = document.querySelector('.quotes-container');
const btn = document.querySelector(".generateQuote");
const bq = document.querySelector("blockquote p");
const author = document.querySelector("blockquote a.author");

/*async function getQuotes(url) {
  const quotes = await fetch(url);
  const res = await quotes.json();
  return res;
} */

//getQuotes("/Quotes/allTheQuotes.json")
 // .then(d =>arr.push(...d));

const quotes = [
  {
    author: "kanayo ebigwei",
    quote: "hshsi sosnsj iwow wiiowbwbiwbwb eiow whwvwiw9i wiwobw wobsiwj wiw9wb wiwbbwi"
  },
  {
    author: "Isioma Ebigwei",
    quote: "hshsi sosnsj iwow wiiowbwbiwbwb eiow wh"
  },
  {
    author: "Ifeanyi ebigwei",
    quote: "hshsi sosnsj iwow wiiowbwbiwbwb eiow whwvwiw9i wiwobw wobsiwj wiw9wb wiwbbwi beje eiw wow wow wiw wow wiw wbwow wowjwj wow wiw w wiwkw wiwkw wiwbwbwiwi2 wiw8w wi nwi "
  }

]
  
function generateRandom(quotes) {
  const random = len => Math.floor(Math.random() * len);
  let rand = random(quotes.length);
  display(quotes[rand])
  return quotes[rand];
}

function display(quotes) {
  bq.innerHTML = "";
  bq.innerHTML = quotes.quote;
  author.textContent = quotes.author;
}

btn.addEventListener("click", () => {
  generateRandom(quotes)
});

window.addEventListener("DOMContentLoaded", () => {
  generateRandom(quotes);
})