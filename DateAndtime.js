// 

// let newdate = new Date(2023, 0 , 23, 5, 3);
// let newdate = new Date(2023, 0 , 23);
// console.log(newdate)

// // tostring;
// console.log(newdate.toString())

// //toDatestring;

// console.log(newdate.toDateString())

// // tolocaldatestring;

// console.log(newdate.toLocaleDateString())

// let mydate = new Date("2026-01-14");
// // console.log(mydate.toLocaleString())

// let  mytimestamp = Date.now()
// // console.log(mytimestamp)
// // console.log(mydate.getTime())
// console.log(Date.now()/1000);

// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
// console.log(newDate)

// console.log(newDate.getDay())


// **IMPORTNAT METHOD **-->
 newDate.toLocaleString('default',{
    weekday : "long",
 })