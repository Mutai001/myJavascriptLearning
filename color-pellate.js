/**
 * Create a 6 digit hexCode for the background color
 */
function generateRandomHexCode() {
    const hexCharacters = '0123456789ABCDEF';
    let hexCode = '#';
    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * 16);
        hexCode += hexCharacters[randomIndex];
    }
    return hexCode;
}

/**
 * Creates 5 DOM Nodes with different background colors
 */
function generateColorPalette() {
    const colorsContainer = document.getElementById('colors');
    // Clear any existing color blocks
    colorsContainer.innerHTML = '';

    for (let i = 0; i < 5; i++) {
        const colorBlock = document.createElement('div');
        colorBlock.classList.add('color-block');

        const hexCode = generateRandomHexCode();
        colorBlock.style.backgroundColor = hexCode;
        colorBlock.setAttribute('data-color', hexCode);

        colorsContainer.appendChild(colorBlock);
    }
}