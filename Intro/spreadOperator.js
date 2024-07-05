console.log('Spread Operator Practice Lab');

// 1. Function to find the maximum value in an array
export function findMaxValue(arr) {
    return Math.max(...arr);
}

// 2. Function to merge two arrays
export function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

// 3. Function to merge two objects
export function mergeObjects(obj1, obj2) {
    return {...obj1, ...obj2 };
}

// 4. Function to clone an object
export function cloneObject(obj) {
    return {...obj };
}

// Example usage
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const maxVal = findMaxValue(array1);
const mergedArray = mergeArrays(array1, array2);
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObject = mergeObjects(obj1, obj2);
const clonedObject = cloneObject(obj1);

console.log('Max Value:', maxVal); // Output: Max Value: 3
console.log('Merged Array:', mergedArray); // Output: Merged Array: [1, 2, 3, 4, 5, 6]
console.log('Merged Object:', mergedObject); // Output: Merged Object: { a: 1, b: 2, c: 3, d: 4 }
console.log('Cloned Object:', clonedObject); // Output: Cloned Object: { a: 1, b: 2 }