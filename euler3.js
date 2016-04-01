// Largest prime factor

var givenNum = 600851475143;
var result;
for (var i = 2; i <=givenNum ; i++) {
   while(givenNum%i==0){
	 givenNum = givenNum/i;
   };
   result=i;
};
console.log(result);