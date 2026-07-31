const canvas = document.createElement("canvas");
document.body.appendChild(canvas);

canvas.style.position = "fixed";
canvas.style.top = "0";
canvas.style.left = "0";
canvas.style.width = "100%";
canvas.style.height = "100%";
canvas.style.pointerEvents = "none";
canvas.style.zIndex = "9999";

const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let confetti = [];

for (let i = 0; i < 250; i++) {

    confetti.push({

        x: Math.random() * canvas.width,

        y: Math.random() * canvas.height,

        r: Math.random() * 6 + 4,

        d: Math.random() * 250,

        color: `hsl(${Math.random()*360},100%,60%)`,

        tilt: Math.random() * 10 - 10,

        tiltAngle: 0

    });

}

function drawConfetti(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    confetti.forEach(c=>{

        ctx.beginPath();

        ctx.lineWidth=c.r;

        ctx.strokeStyle=c.color;

        ctx.moveTo(c.x+c.tilt,c.y);

        ctx.lineTo(c.x,c.y+c.tilt);

        ctx.stroke();

    });

    update();

}

function update(){

    confetti.forEach(c=>{

        c.y+=2;

        c.x+=Math.sin(c.d);

        c.tiltAngle+=0.05;

        c.tilt=Math.sin(c.tiltAngle)*15;

        if(c.y>canvas.height){

            c.y=-20;

            c.x=Math.random()*canvas.width;

        }

    });

}

setInterval(drawConfetti,20);