// console.log('Hello world!');


// const num1 = 10;
// const num2 = 20;

// addNumbers(num1,num2);

// function addNumbers(num1, num2){
//   let sum = num1 + num2;
//   return sum;
// }

// const a = Math.random() * 9;
// console.log(a);


//example1
// function greet(){
//   console.log('Hello world!');
// }
// greet();
// console.log('Outside the function');





//example2
// function greet(name){   //here "name" is paramter in which the value will be stored.
//   console.log(`Hello ${name}`);
// }
// greet('Kusay');       //here "kusay" is a value called an argument.
// greet('Dawana');





//example3
// function addNumbers(num1, num2){
//   let sum = num1 + num2 ;
//   console.log(`The sum of ${num1} and ${num2} is ${sum}`);
// }
// addNumbers(5, 4); //we can pass as many arguments.Here we have pass two.




// example4
// function square(num){
//   return num * num;
// }

// let result = square(4);
// console.log(`Square of the number is: ${result}`);





//example5
// function display(){
//   console.log('This is display function');
//   return 'This is return value';
//   console.log('This is after return which will not executed');
// }

// let msg = display();
// console.log('the message is:', msg);





//example6
// let squareRoot = Math.sqrt(9);
// console.log('Square root of 9 is:', squareRoot);

// let power = Math.pow(2, 5);
// console.log('The 2^5 is:', power);

// let string = "Kusay Dawana";
// let newString = string.toUpperCase();
// console.log('The uppercase string is:', newString);




// example7
// let square = function(num){
//   return num * num;
// }

// console.log(square(8));




// example8
// function factorialNumber(num){
//   let result = 1;
//   for (let index = 1; index <= num; index++) {
//     result *= index;
//   }
//   return result;
// }

// let result = factorialNumber(5);
// console.log('The result is: ', result);



// example9 Default parameters
// function add(x=2, y=6){
//   return x + y;
// }

//  let result = add(5, 20);
//  console.log(`${result}`);

//  let result1 = add(10);
//  console.log(`${result1}`);
 
//  let result2 = add();
//  console.log(`${result2}`);
 


// example10 Arrow functions
// const add = (a, b) => a + b;

// let result = add(5, 10);
// console.log(`${result}`);


// const squareRoot = (num) => {
//   return Math.sqrt(num);
// };

// let result = squareRoot(25);
// console.log(`${result}`);



//example11
// const add7 = (num) =>{
//     return num + 7;
// }
// let result = add7(43);
// console.log(`${result}`);

// console.log(add7(20));



//example12
// function multiply(num, num1) {
//   return num * num1;
// }

// console.log(multiply(40, 50));



// DOM Manipulation
// document.getElementById("demo").innerHTML = "hello world";

// let variable = document.getElementById("demo");
// variable.innerHTML = "Well done you reach to the DOM";

// let element = document.getElementById("demo");
// element.style.color = "lightgray";
// element.style.padding = "20px";
// element.style.backgroundColor = "black";
// element.innerHTML = "Good bye for today. We will come tomorrow to learn javascript and master it!";



//area of triangle
// let base = prompt('Enter the base: ');
// let height = prompt('Enter the height: ');
// function areaTriangle(base, height){
//   return 0.5 * base * height;
// }
// let result = areaTriangle(base, height);
// console.log(`${result}`);



//Swapping of two variables
// let a = 5;
// let b = 10;
// console.log(`${a}`);
// console.log(`${b}`);
// function swap() {
//   let a = 5;
// let b = 10;
// console.log('Before Swapping');
// console.log(`${a}`);
// console.log(`${b}`);
// let temp = a;
//     a = b;
//     b = temp;
//     console.log('After Swapping');
// console.log(`${a}`);
// console.log(`${b}`);
// }

// swap();



//Fibonacci series
// let n = prompt('Enter the number: ');
// function fibonacci(n){
//   if(n <= 1){
//     return n;
//   }
//   let a = 0, b = 1;
//   for (let i = 2; i <= n; i++) {
//     let next = a + b;
//     a = b;
//     b = next;
//   }

//   return b;
// }

// console.log(fibonacci(n))



//Quadratic Equation
// let a = prompt('Enter the value of a: ');
// let b = prompt('Enter the value of b: ');
// let c = prompt('Enter the value of c: ');

// const quadratic = (a, b, c) => {
//   let discriminant = b * b - 4 * a * c;
//   let root1, root2;
//   if(discriminant > 0 ){
//     root1 = (-b + Math.sqrt(discriminant)) / 2 * a;
//     root2 = (-b - Math.sqrt(discriminant)) / 2 * a;
//     console.log(`The roots are ${root1} and ${root2} and both the roots are real and different.`);
//   }
//   else if(discriminant === 0){
//     root1 = root2 = -b / 2 * a;
//     console.log(`The roots are ${root1} and ${root2} and both the roots are real and equal.`);
//   }
//   else{
//     console.log('The roots are complex and different');
//   }
// }

// quadratic(a, b, c);



//Kilometers to miles
// let kilometer = prompt('Enter the value in kilometer: ');
// function kiloToMile(kilometer){
//   return kilometer * 0.621371;
// }

// console.log(kiloToMile(kilometer));



//Celsius to Fahrenheit
// let celsius = prompt('Enter the value in celsius: ');
// function celsiusToFarenheit(celsius){
//   return celsius * 1.8 + 32;
// }

// console.log(celsiusToFarenheit(celsius));


//Generate a random Number
function randomNumber(){
  let num = Math.random() * 10;
  console.log(`The random number is generated is: ${num}`);
}

randomNumber();

