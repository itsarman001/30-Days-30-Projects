// function generateQR() {
//     const api = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
//     let qrBox = document.getElementById("qrBox")
//     let qrImg = document.getElementById("qrImg");
//     let qrSrc = document.getElementById("qrSrc");

//     if (qrSrc.length > 0) {
//         qrImg.src = api + qrSrc.value;
//         qrBox.classList.add("active")
//     } else {
//         qrImg.classList.remove("active")
//         qrSrc.classList.add("error")
//         setTimeout(() => {
//             qrSrc.classList.remove("error")
//         }, 1000);
//     }
// }

document.getElementById("generateBtn").addEventListener('click', ()=>{
    {
        const api = "https://api.qrserver.com/v1/create-qr-code/?size=125x125&data=";
        let qrBox = document.getElementById("qrBox")
        let qrImg = document.getElementById("qrImg");
        let qrSrc = document.getElementById("qrSrc");
    
        if (qrSrc.value.length > 0) {
            qrImg.src = api + qrSrc.value;
            qrBox.classList.add("active")
        } else {
            qrImg.classList.remove("active")
            qrSrc.classList.add("error")
            setTimeout(() => {
                qrSrc.classList.remove("error")
            }, 1000);
        }
    }
})