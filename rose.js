for(let i=0;i<40;i++){

let petal=document.createElement("div");

petal.innerHTML="🌹";

petal.style.position="fixed";

petal.style.left=Math.random()*100+"%";

petal.style.top="-50px";

petal.style.fontSize=(20+Math.random()*20)+"px";

petal.style.animation=`fall ${5+Math.random()*6}s linear infinite`;

petal.style.animationDelay=Math.random()*5+"s";

document.body.appendChild(petal);

}