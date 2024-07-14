function decipher(ciphertext, needle) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    function shiftChar(char, shift) {
        if (!char.match(/[a-zA-Z]/)) {
            return char;
        }

        const isUpperCase = char === char.toUpperCase();
        char = char.toLowerCase();

        const index = (alphabet.indexOf(char) - shift + 26) % 26;
        let shiftedChar = alphabet[index];

        return isUpperCase ? shiftedChar.toUpperCase() : shiftedChar;
    }

    for (let shift = 0; shift < 26; shift++) {
        let decoded = '';

        for (let i = 0; i < ciphertext.length; i++) {
            decoded += shiftChar(ciphertext[i], shift);
        }

        if (decoded.includes(needle)) {
            return decoded;
        }
    }

    return "Invalid";
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let ciphertext = '';
let knownWord = '';

rl.question('', (ciphertextInput) => {
    ciphertext = ciphertextInput;
    rl.question('', (knownWordInput) => {
        knownWord = knownWordInput;

        const plaintext = decipher(ciphertext, knownWord);
        console.log(plaintext);

        rl.close();
    });
});