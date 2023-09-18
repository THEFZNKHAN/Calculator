const input1 = document.getElementById("input-1");
const input2 = document.getElementById("input-2");
const operationButtons = document.querySelectorAll(".operation");
const conti = document.getElementById("conti-btn");
const result = document.getElementById("result");
const clear = document.getElementById("clear-btn");
const submit = document.getElementById("submit-btn");

let resultValue;
const output = () => {
    const value1 = parseFloat(input1.value);
    const value2 = parseFloat(input2.value);

    if (operationButtons[1].classList.contains("selected")) {
        resultValue = value1 + value2;
    } else if (operationButtons[2].classList.contains("selected")) {
        resultValue = value1 - value2;
    } else if (operationButtons[3].classList.contains("selected")) {
        resultValue = value1 * value2;
    } else if (operationButtons[4].classList.contains("selected")) {
        if (value2 !== 0) {
            resultValue = value1 / value2;
        } else {
            resultValue = "Error: Division by zero";
        }
    } else if (operationButtons[5].classList.contains("selected")) {
        resultValue = value1 % value2;
    } else {
        resultValue = value1 + value2;
    }

    result.textContent = resultValue;
};
submit.addEventListener("click", output);

operationButtons.forEach((button) => {
    button.addEventListener("click", () => {
        operationButtons.forEach((btn) => {
            btn.classList.remove("selected");
        });
        button.classList.add("selected");
        operationButtons[0].textContent = button.textContent;
    });
});

conti.addEventListener("click", () => {
    output();
    input1.value = resultValue;
    input2.value = null;
});

clear.addEventListener("click", () => {
    input1.value = null;
    input2.value = null;
    result.textContent = "";
});
