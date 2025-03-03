var principle= document.getElementById("text1");
var iterest= document.getElementById("text2");
var years= document.getElementById("text3");
var sum= document.getElementById("result");

function answer(){
sum.innerHTML= "answer = "+ principle.value*iterest.value*years.value/100;
}