const btn = document.querySelector('.btn');
const text = document.querySelector('h1');


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onstart = e => {
  console.log('Voice activated');
}

recognition.onresult = e => {
  const ind = e.resultIndex;
  const transcript = e.results[ind][0].transcript;
  readText(transcript);
  text.innerHTML = transcript;
};

function readText(message) {
  const speech = new SpeechSynthesisUtterance();
  speech.text = message;
  speech.rate = 1;
  speech.volume = 1;
  speech.pitch = 1;
  
  window.speechSynthesis.speak(speech);
}

btn.addEventListener('click', ()=> {
  recognition.start();
});