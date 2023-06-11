// giving the functionality to the operators to perform the given calculations

//  Declaring a variable result which can be used through the entire code

let result = document.getElementById('result');

// Function for all the arithmetic operators(+,-,*,/)

function appendValue(value) {
  result.value += value;
}

// Function for to clear the result(AC)

function clearResult() {
  result.value = '';
}

// Function for to get the result after performing an operation(=)

function calculate() {
  try {
    result.value = eval(result.value);
  } catch (error) {
    result.value = 'Error';
  }
}
 
// Function to calculate square of numbers(sq)
function calculateSquare() {
  try {
    const number = eval(result.value);
    result.value = number * number;
  } catch (error) {
    result.value = 'Error';
  }
}

// Function for the backspace button(delete)

function backspace() {
  var result = document.getElementById('result');
  result.value = result.value.slice(0, -1);
}