var a= document.getElementsByName("text")[0];
var b= document.getElementsByName("text1")[0];
var c=document.getElementById("trial");

a.style.height="22px";
b.style.height="22px";

function result(){
  c.innerHTML= Number(a.value)+Number(b.value);
    
}
