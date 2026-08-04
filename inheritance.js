function Car (name, brand, year){
    this.name  = name
    this.brand = brand
    this.year = year
}

Car.prototype.start = function(){
    console.log("Car Started")
}

Car.prototype.stop = function(){
    console.log("Car Stopped")
}

function Racingcar(){
    Car.call(this,name,brand,year)
    this.carSpeed = 200
}
Racingcar.prototype.nitrogas = function(){
    console.log("Nitrogen gas")
}
function offroading(){
    Car.call(this,name,brand,year)
    this.offroading = "thar"
}
 offroading.prototype.suv = function(){
    console.log("Suv")
 }

 function luxciary(){
    Car.call(this, name,brand,year)
    this.comfort = "sedan"
 }
 luxciary.prototype.comfort = function(){
    console.log("sedan")
 }

 
