
	//Largest palindrome product
function rev(num){
	return num.toString().split("").reverse().join("");
} 
var result=1;
var revArr = [];
for (var i = 999; i>100; i--) {
for (var j = 999; j>100; j--) {
	result = i*j;
	if(rev(result)==result)
	 	revArr.push(result);   	
	};
};
function arrayMax(arr) {
  return arr.reduce(function (p, v) {
    return ( p > v ? p : v );
  });
}
console.log(arrayMax(revArr));