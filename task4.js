
var mark= window.prompt("enter the mark");
var a=document.getElementById("check");

//condition

if(mark>=100){
    a.innerHTML="enter the correct mark";
}else if(mark>=50){
    a.innerHTML="passed";
}else if(mark<=50){
    a.innerHTML="failed";
}