// index.js

/**
 * @param {number} n
 * @return {Function} counter
 */
export function createCounter(n) {
    let current = n;
    return function() {
        return current++;
    };
}

// Sample Test Cases

const counter1 = createCounter(10);
console.log(counter1()); // 10
console.log(counter1()); // 11
console.log(counter1()); // 12

const counter2 = createCounter(42);
console.log(counter2()); // 42
console.log(counter2()); // 43
console.log(counter2()); // 44