
const plusButtons = document.querySelectorAll('.plus-btn');
plusButtons.forEach(plusBtn => {
    plusBtn.addEventListener('click', (event) => {
        const inputElement = event.target.nextElementSibling;
        let currentValue = parseInt(inputElement.value);
        currentValue++;
        inputElement.value = currentValue;
    });
});
const minusButtons = document.querySelectorAll('.minus-btn');
minusButtons.forEach(minusBtn => {
    minusBtn.addEventListener('click', (event) => {
        const inputElement = event.target.previousElementSibling;
        let currentValue = parseInt(inputElement.value);
        if (currentValue > 1) {
            currentValue--;
            inputElement.value = currentValue;
        }
    });
});
const removeBtns = document.querySelectorAll('.remove-btn');

removeBtns.forEach((btn) => {
btn.addEventListener('click', () => {
btn.parentElement.parentElement.remove();
});
});




