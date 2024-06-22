const imageContainerEl=document.querySelector(".image-container");

const buttonEL=document.querySelector(".btn");
buttonEL.addEventListener("click",()=>{
    imagenum=10;
   add_images()
})


function add_images(){
    for(let index=0;index<imagenum;index++)
    {
        const newImgEl=document.querySelector("img");
        newImgEl.src=`https://picsum.photos/300?random=${Math.floor(Math.random()*2000)}`
        imageContainerEl.appendChild(newImgEl)
    }
    
}