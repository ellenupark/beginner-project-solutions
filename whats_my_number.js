/* 
What's My Number
Author: ellenupark
Created: June 17th 2020

This code returns a single number between 1 and 1000 that meets the following criteria:

1. The number has two or more digits.
2. The number is prime.
3. The number does NOT contain a 1 or 7 in it.
4. The sum of all of the digits is less than or equal to 10.
5. The first two digits add up to be odd.
6. The second to last digit is even and greater than 1.
7. The last digit is equal to how many digits are in the number.

*/

const findNum = () => {

    // Determines if num is a prime number.
    const findPrime = (num) => {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    };

    // Determines if num does NOT contain 1 or 7.
    const oneOrSeven = (num) => {
        if (Array.from(String(num), Number).includes(7) || Array.from(String(num), Number).includes(1)) {
          return false;
        } else {
          return true;
        }
    };

    // Determines if the sum of all of the digits in num is less than or equal to 10.
    const sumOfAll = (num) => {
        if (Array.from(String(num), Number).reduce(function (acc, curr) {
          return acc + curr;
        }) <= 10) {
          return true;
        } else {
          return false;
        }
    };
    
    // Determines if the first two digits of num add up to be odd.
    const firstTwo = (num) => {
        if (Array.from(String(num), Number).splice(0, 2).reduce(function (acc, curr) {
          return acc + curr;
        }) % 2 > 0) {
          return true;
        } else {
          return false;
        }
    };

    // Determines if the second to last digit in num is even and greater than 1.
    const secondLast = (num) => {
        if (Array.from(String(num), Number).splice(-2, 1) > 1 && Array.from(String(num), Number).splice(-2, 1) % 2 === 0) {
          return true;
        } else {
          return false;
        }
    };

    // Determines if the last digit of num is equal to how many digits are in the number.
    const lastNum = (num) => {
        if (Array.from(String(num), Number).splice(-1, 1) == Array.from(String(num), Number).length) {
          return true;
        } else {
          return false;
        }
    };
    
    // Main function. Loops through all numbers between 10 and 1000.
    for (let i = 10; i <= 1000; i++) {
        if (findPrime(i) && oneOrSeven(i) && sumOfAll(i) && firstTwo(i) && secondLast(i) && lastNum(i)) {
            return i;
        }
    }
}

// Call findNum() function
findNum()
