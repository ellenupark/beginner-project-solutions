/* 
Armstrong Number
Author: ellenupark
Created: June 15th 2020

This code will determine if a given number is an armstrong number.
It takes in one argument, value, which is the number to check.
*/

function isArmstrongNumber(value) {
  
    let sum = 0;
    let valueArray = value.toString().split('');
    let valueLength = valueArray.length
    
    // Checks if value input is valid

    if (value < 0 || !Number.isInteger(value) || isNaN(value)) {
        return 'Invalid value. Please input integer.'
    };

    // Loops through each number in valueArray, raises it to the power of value and adds it to sum

    for (let i = 0; i < valueArray.length; i++) {
      sum += Math.pow(valueArray[i], valueLength)
    }
    
    // Prints outcome of isArmstrongNumber()

    if (sum === value) {
      return value + ' is an armstrong number.';
    } else {
      return value + ' is not an armstrong number.';
    }
  }


  // Call isArmstrongNumber() function
  isArmstrongNumber(value);