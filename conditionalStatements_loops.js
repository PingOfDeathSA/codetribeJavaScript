// Exercise 1: Temperature check


let temperature = 7;


if (temperature < 0) {
    console.log("It's freezing!");
   } else if (temperature >= 0 && temperature <= 15) {
    console.log("It's cold.");
} else if (temperature >= 16 && temperature <= 25) {
       console.log("It's mild.");
  } else {
    console.log("It's warm.");
}


// Exercise 2: Divisibility Check

let divisible_number =6;

if (divisible_number % 2 ===0 && divisible_number % 3 ===0) {
    console.log('Divisible by both.');
} else if ( divisible_number % 2 ===0) {
    console.log('Divisible by 2.');
} else if (divisible_number % 3 ===0) {
    console.log('Divisible by 3.');
} else {
    console.log("Not divisible by 2 or 3.");
}

switch (true) {
    case divisible_number % 2 ===0 && divisible_number % 3 ===0:
        console.log('Divisible by both.');
        break;
    case divisible_number % 2 ===0:
        console.log('Divisible by 2.');
        break;
    case divisible_number % 3 ===0:
        console.log('Divisible by 3.');
        break;
    default:
        console.log("Not divisible by 2 or 3.");
        break;
}

// Exercise 3: For loops

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

for (let i = 20; i >= 1; i--) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);


const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

var large_numbers = [3,7, 2, 5, 10, 6];
 var target = 0;
for (let i = 0; i < large_numbers.length; i++) {    
    if (large_numbers[i] > target) {
        target = large_numbers[i];
    }
}
console.log(target);


// Exercise 4: While loops

// 1. Print numbers from 1 to 10.
let all_numbers = 1;
while (all_numbers <= 10) {
    console.log(all_numbers);
    all_numbers++;
}

// 2. Print all even numbers between 1 and 20.
let even_numbers = 2; 
while (even_numbers <= 20) {
    console.log(even_numbers);
    even_numbers += 2; 
}

// 3. Calculate the sum of all numbers from 1 to 100 and print the result.
let sum2 = 0;
let j = 1;
while (j <= 100) {
    sum2 += j;
    j++;
}
console.log( sum2);

// 4. Print all multiples of 5 less than 50.
let k = 1;
while (k < 50) {
    if (k % 5 === 0) {
        console.log(k);
    }
    k++;
}

// Exercise 5: Do While loops

/*
Exercise 5: Do While loops
1. Print numbers from 1 to 10.
2. Calculate the sum of all numbers from 1 to 100 and print the result.
3. Prompt the user to enter a number greater than 10. Keep asking until
they enter a valid number.
4. Create a simple guessing game where the user must guess a number
between 1 and 10. The game continues until the user guesses the correct
number.
*/ 

// 1. Print numbers from 1 to 10.

let all_numbers2 = 1;
do {
    console.log(all_numbers2);
    all_numbers2++;
} while (all_numbers2 <= 10);

// 2. Calculate the sum of all numbers from 1 to 100 and print the result.  

let do_while_sum = 0;
let l = 1;
do {
    do_while_sum += l;
    l++;
} while (l <= 100);
console.log(do_while_sum);

// 3. Prompt the user to enter a number greater than 10. Keep asking until they enter a valid number.

let user_number;

// do {
//     user_number = parseInt(prompt('Enter a number greater than 10: '));
//     if (user_number > 10) {
//         alert('You entered: ' + user_number);
//     } else {
//         alert('Please enter a number greater than 10.');
//     }
// } while (user_number <= 10);

// 4. Create a simple guessing game where the user must guess a number between 1 and 10. The game continues until the user guesses the correct number.

// let correct_number = Math.floor(Math.random() * 10) + 1;
// let user_input;

// do {
//     user_input = parseInt(prompt('Guess a number between 1 and 10: '));

//     if (user_input === correct_number) {
//         alert('You have won the game!');
//     } else if (user_input >= 1 && user_input <= 10) {
//         alert('Try again! Your guess was incorrect. The correct number was: '+correct_number);
//     } else {
//         alert('Please enter a number between 1 and 10.');
//     }
// } while (user_input !== correct_number);

