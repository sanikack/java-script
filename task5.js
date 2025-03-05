var num= window.prompt("enter the number");
var result=document.getElementById("check");

switch(num){
    case "1":
        result.innerHTML=("sunday");
        break;
    case "2":
        result.innerHTML=("monday");
        break;
        case "3":
            result.innerHTML=("tuesday");
            break;
          case "4":
                result.innerHTML=("wednesday");
                break;
                case "5":
                    result.innerHTML=("thursday");
                    break;
                    case "6":
                        result.innerHTML=("friday");
                        break;
                        case "7":
                                result.innerHTML=("saturday");
                                break;
}

