var array= [3,9,5,1,4,7];
document.write(array+"<br>");
array.sort(function(a,b){
    return b-a;
})
document.write(array);