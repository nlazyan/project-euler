
	//Smallest multiple


var num, result = 1;
for(var i=2; i<20; i++){
	num=i;
	for(var j=2; j<i; j++){

	  while(num%j == 0 && (result*num/j)%i==0){
		num=num/j;
	}
	}
	result *=num;
}
console.log(result);

