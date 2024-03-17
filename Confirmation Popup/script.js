document.getElementById("open").addEventListener('click', ()=>{
    document.getElementById("popup").classList.add("openPopup")
})

document.getElementById("close").addEventListener('click', ()=>{
    document.getElementById("popup").classList.remove("openPopup")
})