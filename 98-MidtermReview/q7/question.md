Write a Javascript loop that will iterate from 40 to 60, both included, and log if the number is odd or even.

### Solution here please ...

for (var x=40; x<=60; x++) {
        <!-- Feedback: the first if condition is not needed as it is 
        covered by the second one. -->
        if (x === 40) {
                console.log(x +  " is even");
        }
        else if (x % 2 === 0) {
                console.log(x + " is even");   
        }
        else {
                console.log(x + " is odd");
        }
}

<!-- 0.75 credit -->