var mark= window.prompt("enter the percentage of mark");
var a=document.getElementById("check");

//condition

if(mark>=90){
    a.innerHTML="your grade is A";
}else if(mark>=80){
    a.innerHTML="your grade is B";
}else if(mark>=65){
    a.innerHTML="your grade is C";
}
else if(mark>=55){
    a.innerHTML="your grade is D";
}
else if(mark>=40){
    a.innerHTML="your grade is E";
}