
let addbtn = document.querySelector(".add");
let removebtn = document.querySelector(".remove");
let h5 = document.querySelector("h5");

addbtn.addEventListener("click",()=>{
    h5.textContent ="Friend";
    h5.style.color ="gold";
})

removebtn.addEventListener("click",()=>{
    h5.textContent ="Stranger";
       h5.style.color ="red";
})

