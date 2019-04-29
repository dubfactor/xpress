What is the output of the following code?  Why?  (75% credit given for the 2nd question)

```
var arr = [];
arr[0]  = 'a';
arr[1]  = 'b';
arr.foo = 'c';
alert(arr.length);
```

### Solution here please ...
output is an alert "2"

arr is an array declared for var variable

the array has two items [0, 1]

although the 'foo' variable is set to 'c', that has no use here.
<!-- Feedback: the variable foo is a property of the arr object, not a member
and length measures how many members are there. -->

the length of array arr[0,1] (arr.length) is 2


0.75 credit