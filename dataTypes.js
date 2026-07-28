// "use strict";
// const { use } = require("react");

 // treat all JS code newer version;

// alert( 3 + 3) // we are using nodejs not browser;

// console.log(3 +3)
//  console.log("anup") // this is use  to print the value nad perfom the opertaion 


// DATATYPES;

// 1 --> number => to power 53
// bignit
//string
 //boolean => true or false;
 // null => standalone;
 //undefined
 //Symbol => uniqueness ke liya 


 // object
//  let age = 22
//  console.log(typeof  age);
 
// null ko ham jab console karte hain to object output aata hain;
// console.log(typeof null)
// console.log(typeof undefined)

// numeric -->
// const score = 100
// const scoreValue = 100.3

// const islogged = false // for  boolean
// const outisdeTemp = null

// let useremail // OUTPUT -> undefined dega;

// SYMBOL;

// const id = Symbol('123')
// const loggedid = Symbol('123')

// console.log(id == loggedid)

// const bignumber = 353465654n
// console.log(bignumber)

// Arrays basic -->

// const heros = ["shaktimaan", "nagaaraj", "doga"];
// console.log(heros)

// object;

// let heros ={
//     name : "anup",
//     age : 22,
//     id : 1223
// }
// console.log(heros)

// // SYMBOL
// let id = Symbol('1123')
// console.log(typeof id)

// let myfunction = function(){
//     console.log("hello world")
// }
// myfunction()

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let myname = "ANUP"
// let anothername =  myname
// anothername = "kumar"
// console.log(anothername)
// console.log(myname);

let userone = {
    email : "anup@google.com",
    upi : "user@ybl"
}
let usertwo = userone;

console.log(usertwo)

usertwo.email = "aman@gmal.com"

console.log(userone.email);
console.log(usertwo.email);







