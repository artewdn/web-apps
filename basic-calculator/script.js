const buttonsElement = document.querySelectorAll("button");
const inputFieldElement = document.getElementById("result");

for(let i = 0; i < buttonsElement.length; i++) {
  buttonsElement[i].addEventListener("click", () => {
  const buttonValue = buttonsElement[i].textContent;
  if (buttonValue === "C") {
    clearResult();
  } else if (buttonValue === "=") {
    calculateResult();
  } else if (buttonValue === "Del") {
    deleteValue();
  }else if(buttonValue == undefined) {
    return buttonValue = 0;
  }else {
    appendValue(buttonValue);
  }
  })
}

function clearResult() {
  inputFieldElement.value= "";
}

function calculateResult() {
  inputFieldElement.value = eval(inputFieldElement.value)
}

function deleteValue() {
  inputFieldElement.value = inputFieldElement.value.slice(0, -1);
}

function appendValue(btn) {
  // inputFieldElement.value = inputFieldElement.value + btn;
  inputFieldElement.value += btn;
}
