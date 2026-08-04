
// object literals;
const mysm = Symbol["anup"]
const user = {
    name : "anup",
    age : 18,
    [mysm] : "anup",
    state : "jaipur",
    email : "anup@gmail.com",
     isLoggedIn : false,
     lastlogindays  : ["mondays", "saturday"],
     city :{
        name : "sasaram",
        pincode : 343546
     }

}

user.email = "anupdsdv@gamil.com"
user.age = 34
// Object.freeze(user)
// console.log(user)
// THERE ARE TWO METHODS TO PRINT THE VALUE IN OBJECTS;

//1. dot using;

// console.log(user.age)

// //2-> "quotes method";
// console.log(user["age"])

// console.log(user.city["name"])


// SYUMBOL;

// const mysm = Symbol("Anup")
// const user1 = {
//     [mysm] : "Anup"
// }
// console.log(user1[mysm])


// OBJECT DECLARED WITH FUNCTIONS;

// user.greeting = function(){
//     console.log("hello js user")
// }

// user.greetingTwo = function(){
//     console.log(`hello js user ${this.name}`)
// }
// console.log(user.greeting())
// console.log(greetingTwo())

let name = "Anup"
let age = 24

console.log(`my name is ${name} and age is ${age}`)