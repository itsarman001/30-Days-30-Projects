let submit = document.getElementById("submit");
let alert = document.querySelector(".alert");

document.getElementById("password").addEventListener('input', () => {
    let password = document.getElementById("password");

    if (password.value.length <= 6) {
        alert.textContent = "Password Strength is: Weak";
        password.style.borderColor = "#EE4266"
    } else if (password.value.length < 8) {
        alert.textContent = "Password Strength is: Fair";
        password.style.borderColor = "#B0C5A4"
    } else if (password.value.length > 8) {
        alert.textContent = "Password Strength is: Strong";
        password.style.borderColor = "#337357"
    }
})

document.getElementById("submit").addEventListener('click', ()=>{
    let password = document.getElementById("password");
    password.value = ""
    password.style.borderColor = "#EEEEEE";
})