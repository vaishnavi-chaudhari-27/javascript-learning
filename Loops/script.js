
// for loop //

for(let count=1; count<=6; count++) {
    console.log("Vaishu");
}


// calculate sum of 1 to n //

let sum = 0;
for(let i=1; i<=5; i++){
    sum = sum + i;
}
console.log("sum = ", sum);
console.log("loop has ended");


// print 1 to 10 //
for(let i=1; i<=10; i++){
    console.log("i = " , i);
}


// while Loop //

let i = 1;
while(i<=5) {
    console.log("i = ", i);
    i++;
}


// for-of Loop //

// let str = "chikku";
// let size = 0;
// for(let i of str) {
//     console.log("i=", i);
//     size++;
// }
// console.log("string size = ", size);


// for-in Loop //

let student = {
    name: "Smita patil",
    age: 18,
    CGPA: 8.90,
    isPass: true,
};


for(let key in student) {
    console.log("key=", key, "value=", student[key]);
}


/* Practice Que 1  print all even numbers from 0 to 100 */

for(let num=0; num<=100; num++) {
   if(num % 2 == 0) {
    console.log("num =", num)
   }
}



/* Practice Que 2  Create a game where you start
with any random game number. Ask the user to keep guessing
the game number until the user enters correct value. */

let gameNum = 25;
let userNum  = prompt("Guess the game number : ");

while(userNum != gameNum) {
   prompt("You enterd wrong number. Guess again : ");
}
console.log("congratulations, you entered the right number");


// string //

// let string = "vaishnnvai";
// console.log(str[3]);



let obj = {
    item: "Choclate",
    price: 50,
};
let output = `the cost of ${obj.item} is ${obj.price} rupes`;
console.log(output);

// console.log("the cost of", obj.item, "is", obj.price, "rupees");


// Templete Literals //

let specialString = `THis is a My Laptop ${1+2+3}`;
console.log(specialString);

// next line (\n) //
console.log("vaishnavi\nchudhari");

// Tap  (\t)
console.log("vaishnavi\tchudhari");


// String methods //
    // toUpperCase//
// let String = "WellCome";
// String = String.toUpperCase();
// console.log(String);
 
    // toLowerCase //
// let String = "WellCome";
// String = String.toLowerCase();
// console.log(String);

    //  str.trim() //
// let str = " Vaishnavi Chaudhari ";
// console.log(str.trim());

    // str.slice(start, end?) //
// let str = "0123456789";
// console.log(str.slice(1,8));

    //  str1.concat(str2) joins str2 with str1 //

    // let String1  = "vaishnavi";
    // let String2 = "chaudhari";

    // let res = "My Name is " + String1 + String2;
    // console.log(res);

    // str.replace(searchVal,newVal) //

    // let String = "hello";
    // console.log(String.replace("llo", "y"));


    // str.charAt(idx) //
    // let String = "iLoveChikku";
    // String = String.replace("i","I");
    // console.log(String);


    /* Practice Que prompt the user to enter their
    full name. Generate a username for them based on the
    input. Start username with @, followed by their fulll
    name and endng with the fullname length.

    eg: user name = "vaishnavichaudhari", username should be "@vaishnavichaudhari11234" */

    let fullName = prompt("Enter your fullname Without Spaces");
    let username = "@" + fullName + fullName.length;
    console.log(username);
