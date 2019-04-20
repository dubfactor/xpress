Your task is to make a JS function that can take any non-negative integer as an argument and return it with its digits re-arranged in descending order. Essentially, rearrange the digits to create the highest possible number.

Also, ensure that an invalid input would return 0 and that you are returning an integer.


Hint: you may use several Number, String and Array methods chained together to arrive at the desired result. 

### Examples:

    Input: 21445 Output: 54421

    Input: 145263 Output: 654321

    Input: 1254859723 Output: 9875543221


### Solution here please ...
x=1465392 ;
descendingOrder(x);function descendingOrder(n){
  let arr = n.toString().split('');
  let arrNum = [];
  console.log(arr);
  for(var i = 0; i < arr.length; i++){
    arrNum.push(parseInt(arr[i]));
    console.log(arrNum)
  }
  
  let sorted = arrNum.sort(function(a, b){return b-a});
  let sorted2 = sorted.join('');
  return parseInt(sorted2);
}