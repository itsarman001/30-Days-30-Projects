let hide = document.getElementById("hide");
let show = document.getElementById("show");
let password = document.getElementById("password");

hide.addEventListener('click', ()=>{
    hide.classList.add("display");
    show.classList.remove("display");
    password.setAttribute("type", "password")
})

show.addEventListener('click', ()=>{
    show.classList.add("display");
    hide.classList.remove("display");
    password.setAttribute("type", "text")
})