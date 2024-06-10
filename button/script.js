const counterElement = document.getElementById('counter');
const plusbtn = document.getElementById('plusbtn');
const minusbtn = document.getElementById('minusbtn');

let counter = 0;

const updateCounter = (value) => {
    counter = counter + value;
    counterElement.textContent = counter;

    if (counter >= 10) {
        plusbtn.setAttribute('disabled', true);
    } else {
        plusbtn.removeAttribute('disabled', false);
    }

    if (counter <= 0) {
        minusbtn.setAttribute('disabled', true);
    } else {
        minusbtn.removeAttribute('disabled', false);
    }
}

plusbtn.addEventListener('click', () => {
    updateCounter(1);
});

minusbtn.addEventListener('click', () => {
    updateCounter(-1);
});


counterElement.textContent = counter;

minusbtn.removeAttribute('disabled');