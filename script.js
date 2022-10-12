// console.log("hello world");

let animal = 'RAT!';

console.log(animal);

var number1 = 5;

var number2 = 10;

function mathIntro(number1, number2){
    console.log("I have two numbers " + number1 + " and " + number2 + ". Lets do some math with these numbers!")
}

function addition(number1, number2){
    let equalToo = number1 + number2
    console.log("When added " + number1 + " plus " + number2 + " is equal too " + equalToo + ".")
}

function subtraction(number1, number2){
    let equalToo = number1 - number2;
    console.log("When subtracted " + number1 + " minus " + number2 + " is equal too " + equalToo + ".")
}

function multiplication(number1, number2){
    let equalToo = number1 * number2;
    console.log("When multiplied " + number1 + " times " + number2 + " is equal too " + equalToo + ".");
}

function division(number1, number2){
    let equalToo = number1 / number2;
    console.log("When divided " + number1 + " divided by " + number2 + " is equal too " + equalToo + ".");
}

let sum = number1 + number2;
let diff = number1 - number2;
let mult = number1 * number2;
let div = number2 / number1;

console.log(sum);
console.log(diff);

// mathIntro(2, 5);
addition(3, 4);
subtraction(15, 12);
multiplication(2, 3);
division(20, 4);