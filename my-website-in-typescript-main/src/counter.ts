let count: number = 0;
const countDisplay = document.getElementById('count') as HTMLSpanElement;
const incrementBtn = document.getElementById('incrementBtn') as HTMLButtonElement;
const resetBtn = document.getElementById('resetBtn') as HTMLButtonElement;

function updateCountDisplay() {
    countDisplay.innerText = count.toString();
}

function incrementCount() {
    count++;
    updateCountDisplay();
}

function resetCount() {
    count = 0;
    updateCountDisplay();
}

incrementBtn.addEventListener('click', incrementCount);
resetBtn.addEventListener('click', resetCount);

updateCountDisplay();