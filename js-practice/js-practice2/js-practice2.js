// /*js-practice2.js*/
// function greetings()    {
// console.log("Hey guys!");
// console.log(Where is the meeting?);
// }

// //you can't see this

// function area(length, width)	{
// 	return (length * width);
// }

// var result = area(10, 2);

// document.write("The answer is " + result);
// function oddeven (x) {
//     var number = x;
//     If x%2 = 0;
//     console.log("number is even");
//     else console.log("number is odd")
// }

// function isHighest(x, y, z) {
//     var x = 6;
//     var y = 8;
//     var z = 4;
//     if (x < y && x < z) {
//         return x;
//     }
//     elseif(y < x && y < z)   {
//         return x;
//     }
//     if (z < x && z < y) {
//         return z;
//     }
//     console.log(isHighest);
// }
// (y < x && y < z);
// return (y);
// elseif (z < x && z < y);
// return (z);
// }


function isHighest() {
    var a = 0;
    for (var i=0; i < arguments.length; i++) {
        a += arguments[i];
    }
    return a;
}
 
console.log(max(2, 3));         // 3
console.log(max(-10, 1));       // 1
console.log(max(1, 1, 1, 1));   // 1
console.log(max());             // 0