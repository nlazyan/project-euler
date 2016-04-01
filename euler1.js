//Multiples of 3 and 5

 var number = 1000;
 var sum = 0;
 for (var i = 1; i <number; i++) {
   if (i%3==0||i%5==0)
 	sum+=i; 	 
 }
 console.log(sum)