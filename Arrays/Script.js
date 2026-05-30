
let marks = [35, 55, 86, 98, 99];
console.log(marks);



let names = ["chikuu", "pinku", "sonu", "monu", "tonny", "rony", "shoni"];

for(let i=0; i<names.length; i++){
    console.log(names[i]);
}


let cities = ["nandurbar", "dhule", "pune", "mumbai", "delhi", "nashik"];

for(let city of cities) {
    console.log(city);
}

/* Practice Que 1 for a given array with  marks of
students -> [85,97,44,37,76,60] find the average 
marks of the entire class */

let Marks = [85, 97, 44, 37, 76, 60];
let sum = 0;
for(let val of Marks ) {
    sum += val;
}

let avg =  sum / Marks.length;
console.log(`avg marks of the class =  ${avg}`);


/* Practice Que 2 for a given array with prices of 5 item -> [250,645,300,900,50]
all item have an offer of 10% OFF on them. change the array to
store final price after applying offer. */

let items = [250, 645, 300, 900, 50];
let i = 0;
for(let val of items) {
    let offer = val / 10;
    items[i] = items[i] - offer;
    console.log(`value after offer = ${items[i]}`);
    i++;
}


    //    Array Methods //
    // push(): add to end

    let fruitItems = ["apple", "pinapple", "stroberry", "gava", "lichi"];
    console.log(fruitItems);
    let deleteItem = fruitItems.pop();
    console.log(fruitItems);
    console.log("deleted" , deleteItem);

    // concat() :  joins multiple arrays and returns result

    let chainnesFood = ["nudlas", "manchurian", "soya juice"];
    let junkFood = ["pizza", "burger"];
    
    let foods = chainnesFood.concat(junkFood);
    console.log(foods);

    // unshift() : add to start //
    let studentNames = ["rahul", "rina",, "sima", "sonu"];
    let val = studentNames.shift();
    console.log("deleted" , val);

    // slice (): return a piece of the array
    let productname = ["himalaya", "patanjali", "dot and key", "mamaearth"];
    console.log(productname);
    console.log(productname.slice(1,4));

    // splice() :  change original array(add, remove, replace)
    let arr = [22, 45, 56, 77, 33, 43, 21];
    arr.splice(33, 22);


    /* practice Que create an array to store comapanies
        -> "Bloomberg", "Microsoft",  "Uber", "Google"
        "IBM", "Netflix"

        a. remove the first comapny from the array
        b. remove uber & add ola in its place
        c. add amazon at the end*/

        let companies = ["Bloomberg", "Microsoft",  "Uber", "Google", "IBM", "Netflix"];
        companies.shift();
        companies.splice(2, 1, "Ola");
        companies.push("Amazon");
    
    