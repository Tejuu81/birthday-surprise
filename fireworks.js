const canvas = document.createElement("canvas");
document.body.appendChild(canvas);

canvas.style.position = "fixed";
canvas.style.top = "0";
canvas.style.left = "0";
canvas.style.width = "100%";
canvas.style.height = "100%";
canvas.style.pointerEvents = "none";
canvas.style.zIndex = "999";

const ctx = canvas.getContext("2d");

function resize(){
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
}

resize();

window.addEventListener("resize",resize);

function firework(){

let x=Math.random()*canvas.width;
let y=Math.random()*canvas.height/2;

for(let i=0;i<60;i++){

let angle=Math.random()*Math.PI*2;
let speed=Math.random()*5+2;

let dx=Math.cos(angle)*speed;
let dy=Math.sin(angle)*speed;

animate(x,y,dx,dy);

}

}

function animate(x,y,dx,dy){

let alpha=1;

function draw(){

ctx.beginPath();

ctx.arc(x,y,3,0,Math.PI*2);

ctx.fillStyle="rgba(255,255,255,"+alpha+")";

ctx.fill();

x+=dx;

y+=dy;

dy+=0.03;

alpha-=0.01;

if(alpha>0){

requestAnimationFrame(draw);

}

}

draw();

}

setInterval(firework,1500);