const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["*", "+", "=", "-", "%", "/"];
let output = "";
function calculate(newValue) {
  if (newValue === "=" && output != "") {
    output = eval(output.replace("%", "/100"));
  } else if (newValue === "AC") {
    output = "";
  } else if (newValue === "DEL") {
    output = output.toString().slice(0, -1);
  } else {
    if (output === "" && specialChars.includes(newValue)) return;
    output += newValue;
  }
  display.value = output;
}
buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
