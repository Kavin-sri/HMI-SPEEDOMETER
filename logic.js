var speed=0;
var prevspeed=0;
var currentscale=1;
function increaseSpeed(){
   if(speed<180){
       speed=speed+10;
       addclass();
       currentscale=currentscale+1;
       changeactive();
       changeText();
   }

}
function decreaseSpeed(){
   if(speed>0){
       speed=speed- 10;
       addclass();
       currentscale=currentscale-1;
       changeactive();
       changeText();
   }

}
function addclass(){
   let newClass="speed-"+speed;
   let prevClass="speed-"+prevspeed;
   let el=document.getElementsByClassName("arrow-wrapper")[0];
   if(el.classList.contains(prevClass)){
       el.classList.remove(prevClass);
       el.classList.add(newClass);
   }
   prevspeed=speed;
}

function changeactive(){
    let tempclass="speedometer-scale"+currentscale;
    let el=document.getElementsByClassName(tempclass)[0];
    el.classList.toggle("active");
}

function changeText(){
    let el=document.getElementsByClassName("km")[0];
    el.innerText=speed;
}