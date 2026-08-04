const heros = ["salman", "amir", "aman"]
const tollywood = ["allu", "prsahsant", "ram"]

// tollywood.push(heros)
// console.log(tollywood[3][1]);

//ADDING THE ARRAYS;
//===> concate method;

// tollywood.concat(heros)
// console.log(tollywood)

// const anup = tollywood.concat(heros)
// console.log(anup)

//spread operator;
// means all elements are spread 
// ...elemntsname to initalisattion;

// const allheros = [...tollywood, ...heros]
// console.log(allheros)

//**** FLAT METHOD */

// const numbers = [1,2,3,4,[2,6,7],8,[6,7,8,9,[4,5]]]
// const a1 = numbers.flat(Infinity)
// console.log(a1)


// isArrays --> this is method is used to find the value is present inour arrays or not and they return true or false;
console.log(Array.isArray("anup"))


// FROM method;
//--> the from method is defined as a connvert the value in arrays form it is called form;

console.log(Array.from("Anup kumar rai"))


console.log(Array.from({name: "Anup"}))// intersting case for interview point;


// example

// OF METHOD;
// --> IT IS used to also use to convert the elemnts in arrays;


let score1 = 200
let score2 = 300
let score3 = 400

console.log(Array.of(score1,score2,score3))


