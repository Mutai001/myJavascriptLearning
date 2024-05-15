// this is for loop - for loop is the most commonly used iterative statement. It's perfect when you know how many times you need to iterate.

// for (var k = 5; k <= 10; k++) {
//     console.log(k);
// }

// this is for loop - ideal when you want the loop to run as long as a specific condition is true, but you don't know how many times you'll need to iterate.

// let p = 20
// while (p <= 200) {
//     console.log(p);
//     p++;
// }

//Do.. while loop
//do...while loop is a type of loop similar to the while loop. The critical difference is that the do...while loop guarantees that the loop will run at least once.
// let x = 10
// do {
//     console.log(x);
//     x++;
// } while (x < 18);

//For in loop
//The for...in loop is designed for iterating over the properties of an object.


const book = {
    title: 'The Alchemist',
    author: 'Paulo',
    year: 1988
}
for (let key in book) {
    console.log(key);
    console.log(book[key]);
}