//fizzbuzz solution 

//store the numbers
const numbers = [];

//look through the numbers until 100 and then add them to the array
for (let i = 0; i <= 100; i++) {
numbers.push(i)

}

//loop through the numbers again and this time for each number check for a remainder using modulus
//if % by number then print the string else the number

numbers.forEach(n => {
    if (n % 3 === 0 && n % 5 === 0) {
        console.log('fizzbuzz');
    } else if (n % 3 === 0) {
        console.log('buzz');
    } else if (n % 5 === 0 ){//this 
    console.log('fizz');
    } else {
        console.log(n);
    }
});


