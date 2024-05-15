//1. right angle triangle

for (let i = 1; i <= 10; i++) {
    console.log('*'.repeat(i));
}
//2. inverted right Angle Triangle
for (let i = 10; i >= 1; i--) {
    console.log('*'.repeat(i));
}


//3. Equilateral Triangle
for (let i = 1; i <= 10; i++) {
    console.log(' '.repeat(10 - i) + '*'.repeat(i * 2 - 1));
}
//4. inverted Equilateral triangle

for (let i = 10; i >= 1; i--) {
    console.log(' '.repeat(10 - i) + '*'.repeat(i * 2 - 1));
}
//5. pyramid

for (let i = 1; i <= 10; i++) {
    console.log(' '.repeat(10 - i) + '*'.repeat(i * 2 - 1) + ''.repeat(10 - i));
}
// 6. Inverted pyramid

for (let i = 10; i >= 1; i--) {
    console.log(' '.repeat(10 - i) + '*'.repeat(i * 2 - 1) + ''.repeat(10 - i));
}
//7. Diamond

for (let i = 1; i <= 10; i++) {
    console.log(' '.repeat(10 - i) + '*'.repeat(i * 2 - 1) + ''.repeat(10 - i));
}
for (let i = 10; i >= 1; i--) {
    console.log(' '.repeat(10 - i) + '*'.repeat(i * 2 - 1) + ''.repeat(10 - i));
}


// Inverted pyramid with asterisks
const invertedHeight = 6;
for (let i = invertedHeight; i >= 1; i--) {
    const asterisks = '*'.repeat(i);
    console.log(asterisks);
}

// Diamond pattern
const diamondHeight = 5;
for (let i = 1; i <= diamondHeight; i++) {
    const spaces = ' '.repeat(diamondHeight - i);
    const asterisks = '*'.repeat(2 * i - 1);
    console.log(spaces + asterisks);
}
//half diamond
for (let i = diamondHeight - 1; i >= 1; i--) {
    const spaces = ' '.repeat(diamondHeight - i);
    const asterisks = '*'.repeat(2 * i - 1);
    console.log(spaces + asterisks);
}

// T shape pattern with horizontal line at the top
const tHeight = 7;
console.log('*'.repeat(tHeight));
for (let i = 1; i < tHeight; i++) {
    console.log('*');
}

//middle height
// const tWidth = 7;
// for (let i = 1; i <= tWidth; i++) {
//     if (i === Math.ceil(tWidth / 2)) {
//         // Print the horizontal line for the T
//         // console.log('*'.repeat(tWidth));
//     } else {
//         // Print the vertical lines for the T
//         console.log('*'.repeat(tWidth));
//     }
// }