const billAmount = document.querySelector('#bill-amount');
const checkButton = document.querySelector('#check-button');
const cashGiven = document.querySelector('#cash-given');
const message = document.querySelector('#error-message');
const noOfNotes=document.querySelectorAll('.no-of-notes');

// console.log(noOfNotes);

const availableNotes=[2000,500,100,20,10,5,1];
// console.log(billAmount);

// console.log(checkButton);

// console.log(cashGiven);

const validateBillAmount = () => {
    hideMessage();
    if (billAmount.value > 0) {
        if (cashGiven.value >= billAmount.value) {
            console.log(cashGiven.value);
            console.log(billAmount.value)
            const amountToBeReturned = cashGiven.value - billAmount.value;
            calcuateChange(amountToBeReturned);


        } else {
            showMessage("The cash provided is less than the bill Amount, Do you wanna do the dishes?");
        }

    } else {
        showMessage("Invalid Bill Amount");
    }

}

const showMessage = (errorMessage) => {
    message.style.display = "block";
    message.innerText = errorMessage;

}

const calcuateChange = (amountToBeReturned) => {

    for(let i=0;i<availableNotes.length;i++){

        const numberOfNotes=Math.trunc(amountToBeReturned/availableNotes[i]);
        amountToBeReturned %=availableNotes[i];

        noOfNotes[i].innerText=numberOfNotes;
    }
}

const hideMessage = () => {
    message.style.display = "none"
}
checkButton.addEventListener("click", validateBillAmount);