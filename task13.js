var word= window.prompt("enter the word");
var result= word.split("");
var reverse= result.reverse();
var reverseword= reverse.join("");

if(word==reverseword){
    document.write("this is pallindrome");
}
else{
    document.write("this is not pallindrome");
}