const containerEl=document.querySelector(".container");
const carrier=["student","freelancer","web developer","cloud engineer","devOps architect"];
let charIndex=0;
let index=0;
update();
function update(){
    charIndex++;
    containerEl.innerHTML=`<h1>I am ${carrier[index].slice(0,1)==="I"?"an":"a"} ${carrier[index].slice(0,charIndex)} </h1>`;
    if(charIndex===carrier[index].length)
    {
       index++;
       charIndex=0;
    }
    if(index==carrier.length)
    { 
        index=0;
    }
    setTimeout(update,400);
}