let display = document.getElementById("display");
let currentInput = "";
let operation = "";
let previousInput = "";

document.querySelector(".buttons").addEventListener("click", (event) => {
  const value = event.target.getAttribute("data-value");
  if ("0123456789.".includes(value)) {
    currentInput += value;
  } else if ("+-*/".includes(value)) {
    previousInput = currentInput;
    currentInput = "";
    operation = value;
  } else if (value === "=") {
    currentInput = String(operate(previousInput, currentInput, operation));
    operation = "";
  }
  display.value = currentInput;
});

function operate(a, b, op) {
  a = parseFloat(a);
  b = parseFloat(b);
  switch (op) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
  }
}
