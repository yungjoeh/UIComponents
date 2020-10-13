const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector(".operators");
const display = document.querySelector(".screen");


const calculate = (n1, operator, n2) => {
  let res;
  if(operator === "add") {
    return parseFloat(n1) + parseFloat(n2);
  }
  
  if (operator === "divide") {
    return parseFloat(n1) / parseFloat(n2);
  }
  
  if (operator === "multiply") {
    return parseFloat(n1) * parseFloat(n2);
  }
  
  if (operator === "minus") {
    return parseFloat(n1) - parseFloat(n2);
  }
  
};

keys.addEventListener("click", e => {
  if(e.target.matches("button")) {
    
    const key = e.target;
    const action = key.dataset.op;
    const keyContent= key.textContent;
    const displayedNum = display.textContent;
    const previousKeyType = calculator.dataset.previousKeyType;
    
    
    Array.from(key.parentNode.children).forEach(k => k.classList.remove("is-depressed"));
    
    if(!action) {
   
      if(displayedNum === '0' || previousKeyType === 'operator' || previousKeyType === 'equals') {
        display.textContent = keyContent;
      } else {
        display.textContent = displayedNum + keyContent;
      }
      
      
      calculator.dataset.previousKeyType = "number";
    }
    
    if(action === "add" ||
      action === "minus" ||
      action === "divide" ||
      action === "multiply") {
        
    const firstValue = calculator.dataset.firstValue;
    const operator = calculator.dataset.operator;
    const secondValue = displayedNum;
    
    if (firstValue && operator && previousKeyType !== 'operator' && previousKeyType !== 'equals') {
      const calcValue = calculate(firstValue, operator, secondValue);
      
      display.textContent = calcValue;
      
      calculator.dataset.firstValue = calcValue;
    } else {
      calculator.dataset.firstValue = displayedNum;
    }
        
        
     key.classList.add("is-depressed");
        
        calculator.dataset.previousKeyType = "operator";
        
        calculator.dataset.firstValue = displayedNum;
        calculator.dataset.operator = action;
      
      }
    
    if(action === "decimal") {
      if(!displayedNum.includes('.')) {
        display.textContent = displayedNum + '.';
      } else if(previousKeyType === 'operator' || previousKeyType === 'equals') {
        display.textContent = '0.';
      }
      
      calculator.dataset.previousKeyType = "decimal";
    }
    
    if(action === "equals") {
      let firstValue = calculator.dataset.firstValue;
      const operator = calculator.dataset.operator;
      const secondValue = displayedNum;
      
      if(firstValue) {
        if(previousKeyType === 'equals') {
          firstValue = displayedNum;
          secondValue = calculator.dataset.modValue;
        }
        
        display.textContent = calculate(firstValue, operator , secondValue);
      }
      
      calculator.dataset.previousKeyType = "equals";
      calculator.dataset.modValue = secondValue;
    }
    
    if(action === "clear") {
      if(key.textContent === "AC") {
        calculator.dataset.firstValue = '';
        calculator.dataset.modValue = '';
        calculator.dataset.operator = '';
        calculator.dataset.previousKeyType = '';
      } else {
        key.textContent = "AC";
      }
      display.textContent = 0;
      
      calculator.dataset.previousKeyType = "clear";
    }
    
    if (action !== 'clear') {
      const clearBtn = calculator.querySelector("[data-op=clear]")
      clearBtn.textContent = "CE";
    }
    
  }
 
});