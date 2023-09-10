let currentInput = '0';
let previousInput = '';
let selectedOperator = '';

const display = document.getElementById('display');

function updateDisplay() {
  display.textContent = currentInput;
}

function appendDigit(digit) {
  if (currentInput === '0') {
    currentInput = digit;
  } else {
    currentInput += digit;
  }
  updateDisplay();
}

function handleOperator(operator) {
  if (selectedOperator !== '') {
    performCalculation();
  }
  selectedOperator = operator;
  previousInput = currentInput;
  currentInput = '0';
}

function performCalculation() {
  const prev = parseFloat(previousInput);
  const curr = parseFloat(currentInput);
  if (selectedOperator === '+') {
    currentInput = (prev + curr).toString();
  } else if (selectedOperator === '-') {
    currentInput = (prev - curr).toString();
  } else if (selectedOperator === '*') {
    currentInput = (prev * curr).toString();
  } else if (selectedOperator === '/') {
    currentInput = (prev / curr).toString();
  }
  selectedOperator = '';
  updateDisplay();
}

document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;
    if (!isNaN(value) || value === '.') {
      appendDigit(value);
    } else if (value === 'C') {
      currentInput = '0';
      selectedOperator = '';
      updateDisplay();
    } else if (value === '=') {
      performCalculation();
    } else {
      handleOperator(value);
    }
  });
});
