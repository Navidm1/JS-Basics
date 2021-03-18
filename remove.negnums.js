var x = [1,-2,4,1];
for (var i = 0; i < x.length; i++){
  if (x[i] < 0){
    x.splice(i, 1);
  }
}
console.log(x);