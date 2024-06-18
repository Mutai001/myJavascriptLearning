// Define the sum function using the spread operator to accept any number of arguments
export function sum(...args) {
    return args.reduce((a, b) => a + b, 0)
}

// Export the function using ESM syntax
export default sum

// Example usage (these lines would typically be in a separate test file or a different module)
console.log(sum(1, 2, 3, 4, 5)) // returns 15
console.log(sum(2, 342, 54, 2, 51)) // returns 451
console.log(sum(1, 12, 34, 2, 42, 12)) // returns 103