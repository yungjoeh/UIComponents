const select = el => document.querySelector(el);

const form = select(".form");
const cardAnswer = select(".card-answer");
const cardQuestion = select(".card-question");
const cardGrid = select(".card-grid");
const saveBtn = select(".save");
const addQuestionBtn = select('.addQuestions');
const textArea = select('.questions');
const input = select('.answers');
const showHide = select('.show-hide');
const card = select('.card');

let questions = [];


const generateId = () => {
  const lettersAndSymbols = [];
  let id = '';
  for(let i = 65; i <= 126; i++) {
    lettersAndSymbols.push(String.fromCharCode(i));
  }
  for(let i = 0; i < lettersAndSymbols.length; i++) {
    id += lettersAndSymbols[Math.floor(Math.random() * lettersAndSymbols.length)];
    if(i === 10) break;
  }
  return id;
}


//event listeners helper function
const evtList = (el, type , handler) => {
  for(let t of type) {
    el.addEventListener(t , handler);
  }
}

class Question {
  constructor(question, answer) {
    this.question = question;
    this.answer = answer;
  }
}

class UI {};


UI.prototype.showQuestions = function (questions){
   cardGrid.innerHTML = '';
   const cards = questions.map(q => `
    <div class="card" data-id=${q.id}>
        <h2 class="card-question">${q.question}</h2>
        <p class="card-answer hide">${q.answer}</p>
        <a href="#" class="show-hide">show/hide answer</a>
        
        <div class="ctas">
          <button class="edit">Edit</button>
          <button class="delete">Delete</button>
        </div>
      </div>

   `).join('');
   cardGrid.innerHTML = cards;
}

UI.prototype.showHide = function (el) {
  return el.classList.toggle('hide');
}

UI.prototype.addToLocalStorage = function(data) {
  localStorage.clear();
  const questions = JSON.stringify(data);
  localStorage.setItem('flash-cards' , data);
}

const ui = new UI();

function display(e) {
  e.preventDefault();
  const id = generateId();
  const question = textArea.value;
  const answer = input.value;
  if(question === '' || answer === '') return;
  questions.push({id , ...new Question(question, answer)});
  ui.addToLocalStorage(questions);
  ui.showQuestions(questions);
  ui.showHide(this);
  this.reset();
}


function handleCards({target}) {
  if(target.classList.contains('show-hide')) {
    event.preventDefault();
    const answer = target.previousElementSibling;
    ui.showHide(answer);
  } else if(target.classList.contains('delete')) {
    const parent = target.parentElement.parentElement;
    const id = parent.dataset.id;
    cardGrid.removeChild(parent);
    
    let tempData = questions.filter(q => q.id !== id);
    questions = tempData;
    ui.addToLocalStorage(tempData);
  } else if(target.classList.contains('edit')) {
    const parent = target.parentElement.parentElement;
    const id = parent.dataset.id;
    cardGrid.removeChild(parent);
    
    form.classList.remove('hide');
    
    let selected = questions.find(q => q.id === id);
    let tempData = questions.filter(q => q.id !== id);
    
    questions = tempData;
    textArea.value = selected. question;
    input.value = selected.answer;
  }
}




evtList(form , ["submit"] , display);
evtList(addQuestionBtn, ['click'] , () => {
   ui.showHide(form);
});
evtList(cardGrid, ['click'] , handleCards);