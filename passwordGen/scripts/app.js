let timeout;


const screen = document.querySelector('.screen');
const btn = document.querySelector('.generatePassword');

const genAlpha = () => {
  let alphabets = [];
  for(let i = 50; i <= 123; i++) {
    alphabets.push(String.fromCharCode(i));
  }
  return alphabets;
}

let characters = genAlpha();

const generatePassword = () => {
  const rand = alpha => {
    let i = 0;
    let passWord = "";
    while(i < alpha.length) {
      let rand = Math.floor(Math.random() * alpha.length);
      passWord += alpha[rand];
      if(passWord.length === 14) break;
      i++;
    }
    return passWord;
  }
  screen.textContent = rand(characters);
}



btn.addEventListener("click", () => {
  generatePassword();
  clearInterval(timeout);
});

window.addEventListener("load", () => {
 timeout = setInterval(generatePassword, 50);
})