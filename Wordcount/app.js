const form = document.querySelector("form");
const display = document.querySelector('p');

const eventListener = (el , type , handler) =>  {
  for(t of type) {
    el.addEventListener(`${t}` , handler);
  }
}

const wordLength = str => str.length === 0 ? 0 : str.split(" ").length;

const isSentence = str => {
   if(str[str.length - 1] === '.') return true;
  return false;
}

function countWordsAndSentences(str) {
  let wordsLength;
  wordsLength = wordLength(str);
  let sentences = 
        str.replace(/\r|\n/g, "");
        
  sentences = sentences.split(". ");
  for(let i in sentences) {
    if(sentences[i] === "") {
      console.log('i am empty');
       sentences.splice(i , 1);
    }
   // console.log(sentences);
  }
  sentencesLen = sentences.length;
  //sentences
  return {sentencesLen , wordsLength}
}


eventListener(form , ["input", "submit"] , function(e) {
  if(e.type === "submit") e.preventDefault();
  let {sentencesLen, wordsLength} = countWordsAndSentences(e.target.value);
  display.textContent = `You typed ${wordsLength} words and ${sentencesLen} sentences.`;
})