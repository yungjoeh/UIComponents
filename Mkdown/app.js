const select = el => document.querySelector(el);

const pre = select('.show');
const main = select('.main');
const edit = select('.edit');
const close = select('.close');
const text = select('textarea');
console.log(text);
edit.addEventListener("click", ()=> {
  
  edit.textContent = edit.textContent === 'Edit' ? 'Show' : 'Edit';
  pre.classList.toggle("showMain");
  
});

text.addEventListener('input' , e => {
  pre.innerHTML = marked(e.target.value);
});

