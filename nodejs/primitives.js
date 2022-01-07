/**
 *
 * @param {*} x
 * @returns
 */
 const isPalindrome = (x) => {
    if (isNaN(x) || x < 0) return false;
  
    // Get length of the input digits
    let lengthOfDigits = Math.ceil(Math.log10(x));
    let extractionMask = Math.pow(10, lengthOfDigits - 1); // The significat extraction mask of the digits
    // The Palindrome nubmer will have odd or even numbers. Hence iterate the loop to the half of the digits and match the
    for (let digit = 0; digit < lengthOfDigits / 2; digit++) {
      // Get the first digit by dividing mask
      let firstDigit = Math.floor(x / extractionMask);
      // get the last deigit by applying module of 10
      let lastDigit = x % 10;
      if (firstDigit !== lastDigit) {
        return false;
      }
      // Remove the first digit from X
      x %= extractionMask;
      // Remove the last digit from X and extract the remaining digits
      x = Math.floor(x / 10);
      // Remove the 2 0's from mask as the 2 digit has been removed
      extractionMask = extractionMask / 100;
    }
  
    return true;
  };
  
  
  
  
  /**
   * 
   * const num1 = "100"; // 4
   * const num2 = "101"; // 5
   * const sum = "1001"; // 9
   * 
   Approch1 : 
   Adding two binary with built in function 
   -> parseInt('num', 2) - this will convert binary to numeric number
   -> Number(num).toString(2) - This will convert number to binary 
  */
  
  const additionOfBinary = (bNumOne, bNumTwo) => {
    // If numOne or numTwo is empty return the non empty value
    if (!bNumOne || !bNumTwo) return bNumOne || bNumTwo;
    return (parseInt(bNumOne, 2) + parseInt(bNumTwo, 2)).toString(2);
  }; 
  
  
  
  /**
   Approch2 : 
   Adding two binary without built in function 
   Using XOR 
   XOR of same digit 0
   XOR of same different digit 1
   Carry  will flip when num1 and mum2 are equal
  */
  
  const additionOfBinaryWithoutBuiltinFunction = (bNumOne, bNumTwo) => {
    // If numOne or numTwo is empty return the non empty value
    if (!bNumOne || !bNumTwo) return bNumOne || bNumTwo;
  
    // the digits are in string format 
    let sum = '';
    let carry = 0;
    let numOneLength = bNumOne.length -1;
    let numTwoLength = bNumTwo.length -1;
    // Iterate the loop until the length equals to 0
    while(numOneLength >= 0 || numTwoLength >= 0){
      let digitFromOne = bNumOne[numOneLength] || '0';  // Assign zero when digit not found in binary
      let digitFromTwo = bNumTwo[numTwoLength] || '0';  // Assign zero when digit not found in binary
      sum = String(digitFromOne ^ digitFromTwo ^ carry) + sum;
  
      if( digitFromOne === digitFromTwo && digitFromOne !== String(carry)){
          carry = Number(!carry);
      }
      
      numOneLength--;
      numTwoLength--;
    }
    
    if(carry){
      sum = String(carry) + sum;
    }
    
    return sum;
    
  }
  
  
  module.exports = {
    isPalindrome,
    additionOfBinary,
    additionOfBinaryWithoutBuiltinFunction
  };