// var myCar = {

//     maxSpeed:70,
//     driver: "Richard",
//     drive: function(speed, time)   {
//         console.log(speed * time);
//         },
//     logDriver: function()   {
//         console.log("driver name is " + this.driver);
//             }
// };

var Car = function(maxSpeed, driver)    {

    this.maxSpeed = maxSpeed;
    this.driver = driver;
    this.drive = function(speed, time) {
        console.log(speed * time);
    };
    this.logDriver = function() {        
        console.log("driver name is " + this.driver +" "+ this.maxSpeed);
    };
}

var myCar = new Car(30, "Richard");
var myCar2 = new Car(50, "two");
var myCar3 = new Car(60, "three");
var myCar4 = new Car(70, "four");

myCar.drive(60, 2);
myCar3.logDriver();
console.log(myCar4.maxSpeed);

