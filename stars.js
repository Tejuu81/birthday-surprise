for(let i=0;i<80;i++){

const star=document.createElement("div");

star.innerHTML="✨";

star.style.position="fixed";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.opacity=Math.random();

star.style.fontSize=(8+Math.random()*12)+"px";

star.style.pointerEvents="none";

star.style.animation="twinkle 2s infinite";

document.body.appendChild(star);

}