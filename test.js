// Function to print the pattern with n rows
function printPattern(n) {
    // Loop for each row
    for (let i = 1; i <= n; i++) {
        let pattern = '';
        // Loop for printing * based on row number
        for (let j = 1; j <= i; j++) {
            pattern += '*';
        }
        console.log(pattern);
    }
}

// Example 3
console.log("Example 3:");
printPattern(6);

// Function to print the inverted pattern with n rows
function printInvertedPattern(n) {
    // Loop for each row in reverse order
    for (let i = n; i >= 1; i--) {
        let pattern = '';
        // Loop for printing * based on row number
        for (let j = 1; j <= i; j++) {
            pattern += '*';
        }
        console.log(pattern);
    }
}

// Example 4
console.log("\nExample 4:");
printInvertedPattern(6);

// Function to print the pyramid pattern with n rows
function printPyramidPattern(n) {
    // Loop for each row
    for (let i = 1; i <= n; i++) {
        let pattern = '';
        // Loop for printing spaces
        for (let j = 1; j <= n - i; j++) {
            pattern += ' ';
        }
        // Loop for printing * based on row number
        for (let k = 1; k <= i; k++) {
            pattern += '*';
        }
        console.log(pattern);
    }
    // Loop for each row in reverse order (except the first row)
    for (let i = n - 1; i >= 1; i--) {
        let pattern = '';
        // Loop for printing spaces
        for (let j = 1; j <= n - i; j++) {
            pattern += ' ';
        }
        // Loop for printing * based on row number
        for (let k = 1; k <= i; k++) {
            pattern += '*';
        }
        console.log(pattern);
    }
}

// Example 5
console.log("\nExample 5:");
printPyramidPattern(5);

// Function to print the diamond pattern with n rows
function printDiamondPattern(n) {
    // Upper half of the diamond
    for (let i = 1; i <= n; i++) {
        let pattern = '';
        // Loop for printing spaces
        for (let j = 1; j <= n - i; j++) {
            pattern += ' ';
        }
        // Loop for printing * based on row number
        for (let k = 1; k <= 2 * i - 1; k++) {
            pattern += '*';
        }
        console.log(pattern);
    }
    // Lower half of the diamond (excluding the last row)
    for (let i = n - 1; i >= 1; i--) {
        let pattern = '';
        // Loop for printing spaces
        for (let j = 1; j <= n - i; j++) {
            pattern += ' ';
        }
        // Loop for printing * based on row number
        for (let k = 1; k <= 2 * i - 1; k++) {
            pattern += '*';
        }
        console.log(pattern);
    }
}

// Example 6
console.log("\nExample 6:");
printDiamondPattern(5);

// Function to print the vertical line pattern with n rows
function printVerticalLinePattern(n) {
    // Loop for each row
    for (let i = 1; i <= n; i++) {
        if (i === 1) {
            console.log('*'.repeat(n));
        } else {
            console.log('*');
        }
    }
}

// Example 7
console.log("\nExample 7:");
printVerticalLinePattern(8);

// Function to print the horizontal line pattern with n rows
function printHorizontalLinePattern(n) {
    console.log('*'.repeat(n));
    for (let i = 1; i <= n; i++) {
        console.log('*');
    }
}

// Example 8
console.log("\nExample 8:");
printHorizontalLinePattern(8);