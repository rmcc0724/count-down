function mul (...num) {
var total = num[0];
for(var i=0;i<num.length-1;i++){
  total *= num[i+1]
}
return total;
}
