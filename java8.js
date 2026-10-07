var counter=0;


function onClickButton(el){
counter++;
el.innerHTML="ХУШ ОМАДЕД БА ОЛАМИ ДАРХО:" +counter;
console.log(el.onclick);
//el.style.background="red"
//el.style.color="blue";

el.style.cssText="border-radius:  5px; border:0;  font-size: 20px"
}


 function onInput(el){
if(el.value=="Hello")
alert("и тебе привет!");
    console.log(el.value);
 }