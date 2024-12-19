document.addEventListener('DOMContentLoaded', () => {
  const num1 = document.getElementById('num1');
  const num2 = document.getElementById('num2');
  const result = document.getElementById('result');

  const calculate = (operation) => {
    const n1 = parseFloat(num1.value);
    const n2 = parseFloat(num2.value);

    if (isNaN(n1) && operation !== 'sqrt' && operation !== 'sin' && operation !== 'cos' && operation !== 'tan') {
      result.textContent = "Result: Please enter valid numbers!";
      return;
    }

    let res;
    switch (operation) {
      case 'add':
        res = n1 + n2;
        break;
      case 'subtract':
        res = n1 - n2;
        break;
      case 'multiply':
        res = n1 * n2;
        break;
      case 'divide':
        res = n2 !== 0 ? n1 / n2 : "Cannot divide by zero";
        break;
      case 'sqrt':
        res = n1 >= 0 ? Math.sqrt(n1) : "Invalid input for square root";
        break;
      case 'pow':
        res = Math.pow(n1, n2);
        break;
      case 'sin':
        res = Math.sin((n1 * Math.PI) / 180); // Convert to radians
        break;
      case 'cos':
        res = Math.cos((n1 * Math.PI) / 180); // Convert to radians
        break;
      case 'tan':
        res = Math.tan((n1 * Math.PI) / 180); // Convert to radians
        break;
      default:
        res = "Invalid operation";
    }
    result.textContent = `Result: ${res}`;
  };

  const clearInputs = () => {
    num1.value = "";
    num2.value = "";
    result.textContent = "Result: ";
  };

  document.getElementById('add').addEventListener('click', () => calculate('add'));
  document.getElementById('subtract').addEventListener('click', () => calculate('subtract'));
  document.getElementById('multiply').addEventListener('click', () => calculate('multiply'));
  document.getElementById('divide').addEventListener('click', () => calculate('divide'));
  document.getElementById('sqrt').addEventListener('click', () => calculate('sqrt'));
  document.getElementById('pow').addEventListener('click', () => calculate('pow'));
  document.getElementById('sin').addEventListener('click', () => calculate('sin'));
  document.getElementById('cos').addEventListener('click', () => calculate('cos'));
  document.getElementById('tan').addEventListener('click', () => calculate('tan'));
  document.getElementById('clear').addEventListener('click', clearInputs);
});
