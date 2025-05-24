const readline = require ('readline-sync');


// Prompt user for input

const name = readline.question('What is your name? ');
const age = readline.question('What is your age? ');
const email = readline.question('What is your email? ');

// Display the collected information
console.log('\nSubmited Data:');
console.log(`Name: ${name}`);
console.log(`Age: ${age}`);
console.log(`Email: ${email}`);