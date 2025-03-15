// inheritence oop

class car{
    constructor(Model,color,price){
       this.  Model=Model
       this.  color=color
       this.  price=price

    }
    details(){
        document.write("the"+this.Model+this.color+"color vehicle");
    
    }
    
}
class car2 extends car{

}
var car1=new car("bokatti","red","6lakh");
console.log(car1);
details();





