let play=document.querySelector("#play");
let key=false;
play.addEventListener("click",function(){
    document.querySelector("#screen").style.opacity="1";
    document.querySelector("#play").style.transform="translate(-50%,-50%) scale(0.001)";
    key=true;
}
)
var add="";
for(let i=1;i<=90;i++)
{
    add+=`<div class="bubble">${Math.floor(Math.random()*10)}</div>`;
}
let score=document.querySelector("#score");
score.innerHTML=`<div class="box">${0}</div>`;
document.querySelector("#bottom").innerHTML=add;
let global_time=60;
let hit=document.querySelector("#hit");
let a=Math.floor(Math.random()*10);
hit.innerHTML=`<div class="box">${a}</div>`;
document.querySelector("#timer").innerHTML=`<div class="box">${global_time}</div>`
let t=setInterval(function(){
    if(global_time==0){
      document.querySelector("#screen").style.opacity="0.1";
      document.querySelector("#play").style.transform="translate(-50%,-50%) scale(1)";
      document.querySelector("#play").textContent="GAME OVER";
      clearTimeout(t);
    }
      

    else if(key){
      global_time--;
      document.querySelector("#timer").innerHTML=`<div class="box">${global_time}</div>`; 
    }
},1000)
let bubbles=document.querySelectorAll(".bubble");
let update=function()
{
    bubbles.forEach(function(bubble){
        bubble.textContent=`${Math.floor(Math.random()*10)}`;
    })
}
let scr=0;
let update_score=function(){
    if(key){
    scr+=10;
    score.innerHTML=`<div class="box">${scr}</div>`
    }
}

for(let i=0;i<bubbles.length;i++)
    bubbles[i].addEventListener("click",function(){
         if(bubbles[i].textContent==hit.textContent && global_time>0){
         update_score();
         a=Math.floor(Math.random()*10);
         hit.innerHTML=`<div class="box">${a}</div>`; 
         update();
         }
         else{
            bubbles[i].style.backgroundColor="red";
            setTimeout(function(){
                bubbles[i].style.backgroundColor="rgb(68, 116, 68)"
            },500);
         }
         
        }
    )