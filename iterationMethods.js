//You are given an array of numbers. Your task is to use iteration methods to filter and transform this array.

const numbers = [10, 13, 20, 25, 38, 35, 40];


// Task 1: Filtering
//Create a new array containing numbers that are greater than or equal to 25.

const filteredArray1 = numbers.filter( number => number >= 25);
console.log(filteredArray1);

//Create a new array containing numbers that are divisible by 5.

const filteredArray2 = numbers.filter(number => number % 5 === 0);
console.log(filteredArray2);

// ### Task 2: Mapping
// Create a new array that contains each number squared.

const mappedArray1 = numbers.map(number => number**2);
console.log(mappedArray1);

// Create a new array that contains each number multiplied by 2.

const mappedArray2 = numbers.map(number => number*2);
console.log(mappedArray2);

// Filter the numbers that are greater than or equal to 20 and then square each of them.

const combinedArray1 = numbers.filter(number => number >=20).map(number => number**2);
console.log(combinedArray1);

// Filter the numbers that are divisible by 5 and then multiply each of them by 3.

const combinedArray2 = numbers.filter(number => number % 5 === 0).map(number => number*3);
console.log(combinedArray2);

// Part 4
// logger(numbers)
// Accepts an array and Logs every element of the array

const logger = array => array.forEach(element => console.log(element));
logger(numbers);

// toCelsius(temperatures)
// Accepts an array of temperatures in degrees Fahrenheit & Returns an array of temperatures in degrees Celsius -
// The conversion is C = (F - 32) * (5/9)

const toCelsius = arraytest => arraytest.map(degree => (degree - 32) * (5/9));
const CelsiusArray =  toCelsius(numbers);
console.log(CelsiusArray);


// hottestDays(temperatures, threshhold)
// Accepts an array of temperatures - Accepts a threshhold temperature - Returns an array of temperatures exceed the threshhold

const hottestDays = (temperatures, threshhold) => temperatures.filter(temp => temp >= threshhold);
const hottestDaysArray = hottestDays(numbers,30);
console.log(hottestDaysArray);

// logHottestDays(temperatures, threshhold)
// Accepts an array of temperatures IN DEGREES FAHRENHEINT
// Accepts a threshhold temperature IN DEGREES FAHRENHEINT
// Logs temperatures that exceed the threshhold to the console IN DEGREES CELSIUS

const logHottestDays = (temperatures, threshhold) => logger(temperatures.filter(temp => temp >= threshhold));
logHottestDays(numbers,35);