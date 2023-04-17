console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
};

// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return name;
};

// Remember to call the function to test
console.log('Hello', helloName());

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  // return firstNumber + secondNumber;
  return firstNumber + secondNumber
};

console.log('first number plus second number =', addNumbers(1,3))

// 4. Function to multiply three numbers & return the result
function multiplyThree( numberOne, numberTwo, numberThree){
return numberOne * numberTwo * numberThree;
};

console.log('1st number times 2nd number times 3rd number =', multiplyThree(1, 2, 3))

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  };
  else {
    return;
  };
};

// Call the function to test each outcome (true & false)
isPositive(4);
isPositive(-4);
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast( array ) {
  if (array.length > 0) {
    return array[array.length-1];
  };
  else {
    return 'undefined'
  };
};

console.log("the last element of the array is:", getLast([3, 6, 7]));
console.log("the last element of the array is:", getLast([]);

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find( value, array ){
  let exist = false;
  for (int i = 0; i < (array.length -1); i++) {
    if (array[i] == value) {
      exist = true;
    };
  };
  return exist
};

console.log("find -- should say true", find(4, [5, 6, 7, 4]));
console.log("find -- should say false", find(2, [5, 6, 7, 4]));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  char ch1 = string.charAt(0)
  if (letter == char) {
    return true;
  };
  else {
    return false;
  };
};
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll(arrayNew ) {
  let sum = 0
  // TODO: loop to add items
  for(int i = 0; i <(arrayNew.length-1); i++) {
    sum = sum + arrayNew[i];
  }
  return sum;
};

console.log('sum of array - should be 4', sumAll([6, 7, -7, -6, 4]));
console.log('sum of array - should be 40', sumAll([6, 0, 34));
  
// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
