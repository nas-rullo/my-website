var number=15;
var isHasHouse=true;

if(number==15 && isHasHouse==true){
   console.log("OK");
}else if(number<10){
console.log("OK!");
}else if(number==7){
    console.log("7!");
}else if(number>=15){
   console.log(">=15!"); 
}

else {
    console.log("Else!");
}

var stroka ="word 23";

switch(stroka) {
    case "4":
        console.log("olami daru tirezaho 4")
    break;
     case "45":
        console.log("olami daru tirezaho 45")
    break;
     case "word":
        console.log("olami daru tirezaho <<word>>")
    break;
    default:
        console.log("default");
        break;
}