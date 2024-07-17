/**
 * Class representing a trinary number.
 */
export class Trinary {
    /**
     * Create a number.
     * @param {string} trinaryNumber
     */
    constructor(trinaryNumber) {
        this.trinaryNumber = trinaryNumber;
    }

    /**
     * Get the decimal equivalent of the trinary number
     * @return {number} decimalNumber
     */
    toDecimal() {
        // Check if the number is a valid trinary number
        if (!/^[012]+$/.test(this.trinaryNumber)) {
            return 0;
        }

        let decimalNumber = 0;
        const digits = this.trinaryNumber.split('').reverse();

        // Convert each digit
        for (let i = 0; i < digits.length; i++) {
            const digit = parseInt(digits[i], 10);
            decimalNumber += digit * Math.pow(3, i);
        }

        return decimalNumber;
    }
}

// Sample Test Cases
const firstNumber = new Trinary("102012");
console.log(firstNumber.toDecimal()); // Output: 302

const secondNumber = new Trinary("1211112");
console.log(secondNumber.toDecimal()); // Output: 9841
