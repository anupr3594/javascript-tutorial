// function name(){
//     console.log("anup")
//     console.log("kumar")

// }
// name()
 
//adding the numbers


// function add(a, b){
//    console.log(a+b)

// }
// add(2, 4)

// function addnumber(num1 , num2){
//     // let result = num1 + num2;
//     // return result

//     return num1 + num2

// }
// const result = addnumber(5, 6)
// console.log("result :", result);


// kon kon tarike se value le sakte hain;

// function username(name){
//     return `${username} just logged in`
// }
// console.log(username("anup"))


// yaha pe using kare ke jab hamara value undefined ho;

// function username(name){
//     if(name == undefined){
//         console.log("please enter the name")
//         return
//     }
//     return `${name} just logged in`
// }
// console.log(username("anup"))

// practice;

// function username(name){
//     if(name == undefined){
//         console.log("print enter the name")
//         return
//     }

//     return `${name} just logged in`
// }
// console.log(username("aanup"))

// proffesional code;
// default value;

function gamename(name = "PUBG"){
    if(name == undefined){
        console.log("please enter the game name");
        return;
    }
    return `${name} is a game`

}
console.log(gamename())