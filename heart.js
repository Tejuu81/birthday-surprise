setInterval(function(){

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"%";

heart.style.top="100%";

heart.style.fontSize=(20+Math.random()*30)+"px";

heart.style.pointerEvents="none";

heart.style.transition="8s linear";

document.body.appendChild(heart);

setTimeout(function(){

heart.style.top="-100px";

heart.style.opacity="0";

},100);

setTimeout(function(){

heart.remove();

},8000);

},400);