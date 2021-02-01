var element = document.querySelector(".main");
document.querySelector(".mobile").addEventListener("click", ()=>{
    element.classList.add("active");
});
document.querySelector(".icon-close").addEventListener("click", ()=>{
    element.classList.remove("active");
});