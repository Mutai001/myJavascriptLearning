document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('input-text');
    const output = document.getElementById('output');
    const uppercaseBtn = document.getElementById('uppercase-btn');
    const lowercaseBtn = document.getElementById('lowercase-btn');
    const resetBtn = document.getElementById('reset-btn');

    uppercaseBtn.addEventListener('click', () => {
        const text = inputText.value;
        const upperText = text.toUpperCase();
        inputText.value = upperText;
        output.textContent = upperText;
    });

    lowercaseBtn.addEventListener('click', () => {
        const text = inputText.value;
        const lowerText = text.toLowerCase();
        inputText.value = lowerText;
        output.textContent = lowerText;
    });

    resetBtn.addEventListener('click', () => {
        inputText.value = '';
        output.textContent = '';
    });
});