// Artimetic Operators //
let x = 5;
let y = 6;

console.log("x + y = ", x + y);
console.log("x - y = ", x-y);
console.log("x * y = ", x * y);
console.log("x / y = ", x / y);
console.log("x % y = ",  x  % y);
console.log("x ** y = ",  x  ** y);



// Unary Operators //
let a = 4;
let b = 3;

console.log("a = ", a, " &  b = ", b);

console.log("a++ = ", a++);
console.log("a-- = ", a--);



// Asignment Operators //
let a = 5
let b = 2;

a **= 4;
console.log("a = ", a);



// Comparison Operators //
let a = 5;  
let b = 5;

console.log("5 === 5 ", a === b);
console.log("5 != 2 ",  a != b);


// Logical Operator //

let a = 3;
let b = 6;

let cond1 = a > b;
let cond2 = a === 6;
console.log("cond1 && cond2 = ", cond1 && cond2);
console.log("cond1 || cond2 =", a < b || a ===6);
console.log("!(6<5) = ", !(a === 6));



// Conditional Statements //
//    if statement //
let age = 20;
if(age > 18) {
    console.log("you can vote");
}

if(age < 18) {
    console.log("you cant not vote");
}


// if-else statement //

let mode = "blue";
let color;

if(mode === "dark") {
    color = "black";
} else {
    color = "white";
}
console.log(color);



let num = 25;
if(num % 2 === 0) {
    console.log(num, "is even");
} else {
    console.log(num, "is odd");
}


// else if //

let mode =  "dark";
let color;

if(mode === "dark") {
    color = "black";
} else if (mode === "blue") {
    color = "blue";
} else {
    color = "white";
}
console.log(color);


// Practice Que 1 //
/* Get user to input a number using prompt("Enter a number")
check if the number is a multiple of 5 or not */

let num = prompt("enter a number:");

if(num % 5 === 0) {
    console.log(num, "is a multiple of 5");
} else {
    console.log(num, "is Not a multiple of 5");
}



// practice que 2 //
/* write a code which can give grades to student
according to their scores.
90-100,A
70-89,B
60-69,C
50-59,D
0-49,F */

let score = prompt("Enter your score (0-100):");
let grade;

if(score >= 90 && score <= 100) {
    grade = 'A';
} else if (score >= 70 && score <= 89) {
    grade = 'B';
} else if (score >= 60 && score <= 69) {
    grade = 'C';
} else if (score >=50 && score <= 59) {
    grade = 'D';
} else if (score >= 0 && score  <= 49) {
    grade = 'F';
}

console.log("according to your scores, your grade was : ", grade )


