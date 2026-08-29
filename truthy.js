// const useremail = "anup@3594.com"
// if(useremail){
//     console.log("Got user email")
// }else{
//     console.log("Don't have user email");
    
// }

// const useremail = []
// if(useremail){
//     console.log("Got the useremail")
// }else{
//     console.log("Don't have user email")
// }

// FALSY VALUES ----------
// false, " ", 0 , -0, bigint, 0N, null , undefined, NAN;
// They are all falsy values;

// TRUTHY VALUES--
// true, [], 1, "0"==> this is true value, 'false' ==> it is also called true value, {},
// function(){}==>this is also called truthy value;


// HOW TO CHECK ARRAY AND OBJECT IS EMPTY;

// const array = [1]
// if(array.length == 0){
//     console.log("array is empty")
// }else{
//     console.log("array is not empty")
// }


// Now for objects;

const emptycheck = {name :"anup"}
if(Object.keys(emptycheck).length === 0){
    console.log("this is empty")
}else{
    console.log("this is not empty")
}




