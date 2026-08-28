// rest operator;
function calculateCartprice(...num1){
    return num1;
}
console.log(calculateCartprice(200, 300, 400,500))

// agar hame value ko skip kar ke karna hoga to ya us value ko print na karna hoga ;

function call(...num1){
    return num1
}
console.log(call(100,34,4555,666,77))


// or hame jab bhi koi value ko skip karna hau or kisi or value me dalna fo 
// ham kux is tarkie se karte hain

function pritvalue(a,b,...num){
    return num
}
console.log(pritvalue(100,466,777,888))

const user = {
    name : "anup",
    age : 34
}
function defination(user){

}

// function with arrays;

// const myarray = [200, 300,400,800]
// function returarray(getarray){
//     return getarray[1]
// }
// console.log(returarray(myarray))


//short exaple of array;

// const array = [100,200,300]
// for(let i = 0; i <array.length; i++){
//     console.log(array[i])
// }

