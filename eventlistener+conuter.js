// Add the click event listener here
document.addEventListener('DOMContentLoaded', function() {
    const counterBtn = document.getElementById('counter-btn');
    const countDisplay = document.getElementById('count-display');
    let count = 0;

    counterBtn.addEventListener('click', function() {
        count++;
        countDisplay.textContent = count;
    });
});