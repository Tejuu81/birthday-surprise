const quotes=[

"Every love story is beautiful, but ours is my favorite ❤️",

"You are my today and all my tomorrows ❤️",

"Forever begins with you ❤️",

"I fall in love with you every single day ❤️"

];

let i=0;

setInterval(function(){

document.getElementById("quote").innerHTML=quotes[i];

i++;

if(i==quotes.length){

i=0;

}

},4000);