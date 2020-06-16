/* 
Palidrome
Author: ellenupark
Created: June 16th 2020

This code will determine if a given number is a palidrome.
It takes in one argument, value, which is the number to check.
*/

const isPalidrome = (value) => {
  
    // Variables containing value as array
    let array = value.toString().split('');
    let reverseArray = value.toString().split('').reverse();


    // Checks if num input is valid
    if (!Number.isInteger(value) || isNaN(value)) {
        return 'Invalid input. Please input valid number.'
    };
  
    // Main function 
    for (let i = 0; i < array.length; i++) {
      if (array[i] === reverseArray[i]) {
        continue;
      } else {
        return value + ' is not a palidrome.';
      }
    }
    return value + ' is a palidrome.';
  };

// Call isPalidrome() function
isPalidrome(value)