// var str = "Hello World";

// var str2 = str.slice(7, 9)

// document.write (str2);

// var meats = "1, 2, 3, 4, 5, 6, 7";
// var meatsArray = meats.split(",");
// document.write (meatsArray);

var myArray = new Array();
myArray[0] = 8;
myArray[1] = "hello";
document.write(myArray[1]);
document.write("<br><br>")

var myCar = new Object();
myCar.maxSpeed = 50;
myCar.driver = "Richard";

document.write(myCar.driver); 
document.write("<br>"); 
document.write(myCar.driver.length); 
document.write("<br>");
myCar.drive = function()    {
    document.write("now driving");
};
myCar.drive();

var myVar = "hey";
