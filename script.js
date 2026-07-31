// =========================
// Birthday Surprise Website
// By Tejuuu ❤️
// =========================

// Smooth Page Fade
document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("loaded");
});

// -------------------------
// Floating Hearts
// -------------------------

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";

    const hearts=["❤️","💕","💖","💗","💘"];

    heart.innerHTML=hearts[Math.floor(Math.random()*hearts.length)];

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(20+Math.random()*25)+"px";

    heart.style.animationDuration=(5+Math.random()*6)+"s";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },9000);

}

setInterval(createHeart,400);

// -------------------------
// Button Click Animation
// -------------------------

document.querySelectorAll("button").forEach(btn=>{

btn.addEventListener("click",()=>{

btn.style.transform="scale(.95)";

setTimeout(()=>{

btn.style.transform="scale(1)";

},150);

});

});

// -------------------------
// Scroll Animation
// -------------------------

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(".fade").forEach(el=>{

observer.observe(el);

});

// -------------------------
// Gallery Image Zoom
// -------------------------

document.querySelectorAll(".photo img").forEach(img=>{

img.addEventListener("click",()=>{

const overlay=document.createElement("div");

overlay.style.position="fixed";

overlay.style.top="0";

overlay.style.left="0";

overlay.style.width="100%";

overlay.style.height="100%";

overlay.style.background="rgba(0,0,0,.9)";

overlay.style.display="flex";

overlay.style.justifyContent="center";

overlay.style.alignItems="center";

overlay.style.zIndex="9999";

const photo=document.createElement("img");

photo.src=img.src;

photo.style.maxWidth="90%";

photo.style.maxHeight="90%";

photo.style.borderRadius="20px";

overlay.appendChild(photo);

overlay.onclick=()=>overlay.remove();

document.body.appendChild(overlay);

});

});

// -------------------------
// Surprise Message
// -------------------------

setTimeout(()=>{

const popup=document.createElement("div");

popup.style.position="fixed";

popup.style.top="0";

popup.style.left="0";

popup.style.width="100%";

popup.style.height="100%";

popup.style.background="rgba(0,0,0,.75)";

popup.style.display="flex";

popup.style.justifyContent="center";

popup.style.alignItems="center";

popup.style.fontSize="45px";

popup.style.color="white";

popup.style.zIndex="99999";

popup.innerHTML="❤️ Happy Birthday Kapil ❤️";

popup.onclick=()=>popup.remove();

document.body.appendChild(popup);

},90000);

// -------------------------
// Console Message ❤️
// -------------------------

console.log("Made with ❤️ by Tejuuu for Kapil");