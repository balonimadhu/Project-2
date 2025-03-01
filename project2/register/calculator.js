const display = document.getElementById("input-field");
const buttons = document.querySelectorAll("button");
let buttonarr = [...buttons]; //we can use array.from also overhere
console.log(buttonarr);
let str = "";
for (const button of buttonarr) {
  button.addEventListener("click", function (event) {
    if (event.target.innerHTML == "AC") {
      str = "";
      display.value = str;
    } else if (event.target.innerHTML == "DEL") {
      str = str.substring(0, str.length - 1);
      display.value = str;
    } else if (event.target.innerHTML == "=") {
      str = calculate(str).toString();
      display.value = str;
    } else {
      str += event.target.innerHTML;

      display.value = str;
    }
  });
}
const calculate = (operation) => {
  let total = 0;
  let currValue = "";
  let endOperator = "+";

  for (let i = 0; i < operation.length; i++) {
    const value = operation[i];

    if (!isNaN(value) || value === ".") {
      currValue += value;
    }
    if (isNaN(value) || i === operation.length - 1) {
      if (currValue) {
        const num = parseFloat(currValue);
        switch (endOperator) {
          case "+":
            total += num;
            break;
          case "-":
            total -= num;
            break;
          case "*":
            total *= num;
            break;
          case "/":
            total /= num;
            break;
          case "%":
            total %= num;
            break;
        }
      }
      currValue = "";
      endOperator = value;
    }
  }
  return total;
};
