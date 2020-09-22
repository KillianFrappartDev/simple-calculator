//DOM Elements
const input = document.querySelector('.input');
const buttons = document.querySelectorAll('button');
const clearBtn = document.querySelector('.button.clear');
const execBtn = document.querySelector('.execute');

//Helper variables
let currentOperation;
let isOperating = false;

//Functions
const clear = () => {
  input.innerHTML = '';
  currentOperation = '';
  isOperating = false;
};

const execute = () => {
  const inputs = input.innerHTML.split(/[\D]/);

  let result;
  switch (currentOperation) {
    case '+':
      result = parseInt(inputs[0]) + parseInt(inputs[1]);
      break;

    case '-':
      result = parseInt(inputs[0]) - parseInt(inputs[1]);
      break;

    case '*':
      result = parseInt(inputs[0]) * parseInt(inputs[1]);
      break;

    case '/':
      result = parseInt(inputs[0]) / parseInt(inputs[1]);
      break;

    default:
      result = 'Invalid inputs';
      break;
  }

  input.innerHTML = result;
  currentOperation = '';
  isOperating = false;
};

//Event Listeners
for (const btn of buttons) {
  if (!btn.classList.contains('special')) {
    btn.addEventListener('click', (e) => {
      input.innerHTML = input.innerHTML + e.target.innerHTML;
    });
    currentOperation;
  }

  if (btn.classList.contains('operator')) {
    btn.addEventListener('click', (e) => {
      if (isOperating) {
        console.log('exec');
        execute();
        input.innerHTML = input.innerHTML + e.target.innerHTML;
        currentOperation = btn.innerHTML;
        isOperating = true;
      } else {
        currentOperation = btn.innerHTML;
        isOperating = true;
      }
    });
  }
}

clearBtn.addEventListener('click', clear);

execBtn.addEventListener('click', execute);
