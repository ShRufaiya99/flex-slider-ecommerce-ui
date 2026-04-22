let img = document.querySelectorAll(".box-img")
let imgbox = document.querySelector(".imgbox")
let mainimg = document.querySelector(".mainimg")
let btn = document.querySelector(".btn")
console.log(img)

img.forEach((img)=>{
   img.addEventListener("click",()=>{
    console.log(img.src);
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth",
    })
    imgbox.classList.remove("hidden");
    mainimg.src = img.src;
   });
});

btn.addEventListener("click", ()=>{
    imgbox.classList.toggle("hidden")
})