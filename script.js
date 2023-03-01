var num1 = [1,2,3,4,6,8];
    
var num2 = [5,6,7,8,9,10];

var all = [...num1, ...num2]
all.sort(function(a, b){return a - b});

console.log(all)