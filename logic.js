const sideBar=document.querySelector(".side-bar") ;
const toggleBtn=document.querySelector(".toggle-btn") ;
const crossMark=document.querySelector(".fa-xmark") ;


toggleBtn.addEventListener("click",function(){
    sideBar.classList.toggle("active");
})

crossMark.addEventListener("click",function(){
    sideBar.classList.remove("active");
})