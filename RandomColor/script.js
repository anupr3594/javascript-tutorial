// generate a random  color

const randomcolor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)];

    }
    return color;
};
let itevalid;
 const  startchanging = function(){
    if(!itevalid){
     itevalid = setInterval(changebgcolor , 1000)
    }
    function changebgcolor(){

        document.body.style.backgroundColor = randomcolor();
    }
 }
 const stopchanging = function(){
     clearInterval(itevalid)
    //  itevalid = null;
 } 

document.querySelector("#start").addEventListener('click', startchanging);
document.querySelector("#stop").addEventListener('click', stopchanging);

