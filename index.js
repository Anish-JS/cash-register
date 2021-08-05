const billAmount = document.querySelector("#bill-amount");
const checkButton = document.querySelector("#check-button");
const cashGiven = document.querySelector("#cash-given");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const nextButton = document.querySelector("#next-button");
const table = document.querySelector(".change-table");
const label = document.querySelector("#label");

// console.log(nextButton);

// cashInput.style.display = "none";
table.style.display = "none";
checkButton.style.display = "none";
label.style.display = "none";
cashGiven.style.display = "none";

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];
// console.log(billAmount);

// console.log(checkButton);

// console.log(cashGiven);

const validateCash = () => {
  hideMessage();
  if (!isNaN(cashGiven.value) && cashGiven.value > 0) {
    if (cashGiven.value >= billAmount.value) {
      console.log(cashGiven.value >= billAmount.value);
      const amountToBeReturned = cashGiven.value - billAmount.value;
      calcuateChange(amountToBeReturned);
    } else {
      showMessage(
        "The cash provided is less than the bill Amount, Do you wanna do the dishes?"
      );
    }
  } else showMessage("Please provide cash");
};

const validateBillAmount = () => {
  hideMessage();
  if (!isNaN(billAmount.value) && billAmount.value > 0) {
    checkButton.style.display = "block";
    label.style.display = "block";
    cashGiven.style.display = "block";
  } else showMessage("Enter a number greater than 0");
};

const showMessage = (errorMessage) => {
  message.style.display = "block";
  message.innerText = errorMessage;
};

const calcuateChange = (amountToBeReturned) => {
  for (let i = 0; i < availableNotes.length; i++) {
    const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
    amountToBeReturned %= availableNotes[i];

    noOfNotes[i].innerText = numberOfNotes;
  }
  table.style.display = "block";
};

const hideMessage = () => {
  message.style.display = "none";
};

nextButton.addEventListener("click", validateBillAmount);

checkButton.addEventListener("click", validateCash);
