document.write(this, " #1"); //1
document.write("<br>");
var myCar2 = {

    maxSpeed:70,
    driver:"Richard2",
    drive: function(speed, time)    {
        document.write(speed * time, " #3"); //3
        document.write("<br>");
        document.write(this.driver, " #4");  //#4
        document.write("<br>");
        document.write(this.maxSpeed, " #5");  //#5
        document.write("<br>");
        document.write(this.drive, " #6");  //#6
        document.write("<br>");
            },
            test: function() {
                console.log(this, "FUN");
            }
        };  
            

document.write(myCar2.maxSpeed, " #2"); //2
//document.write(this.MyCar2.driver);
document.write("<br>");
myCar2.test(this);
console.log(myCar2.driver, "console");
console.log(test);


