// Even Fibonacci numbers
var fib = [1,2];
var sum = 2;
for (var i =2; i <=31; i++) {
	
	 fib[i] = fib[i-1]+fib[i-2];
	 if (fib[i]%2==0) {
	 	sum+=fib[i];
	 }; 
};
console.log("sum: "+sum);