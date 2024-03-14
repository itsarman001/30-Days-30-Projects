let uppercseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

let lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let mixCharacters = uppercseCharacters.concat(lowercaseCharacters);

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

let specialCharacters = ['#', '!', '@', '_', '$', '%', '&']

document.querySelector(".generate").addEventListener('click', generatePassword)

document.querySelector(".copy").addEventListener('click', copyPassword)

function randomIndex(arr) {
    let passwordElement = arr[Math.floor(Math.random() * arr.length)]
    return passwordElement
}

function generatePassword() {
    let password = "";
    let passElement = randomIndex(uppercseCharacters);
    password += passElement;
    passElement = randomIndex(lowercaseCharacters);
    password += passElement;

    for (let i = 0; i < 9; i++) {
        passElement = randomIndex(mixCharacters);
        password += passElement;
    }

    passElement = randomIndex(specialCharacters);
    password += passElement;

    for (let i = 0; i < 5; i++) {
        passElement = randomIndex(numbers);
        password += passElement;
    }

    passElement = randomIndex(specialCharacters);
    password += passElement;

    document.getElementById("passwordDisplay").value = password;
}

function copyPassword() {
    // Get the text field
    const copyText = document.getElementById("passwordDisplay");

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);

    // alerting user that password has been copied
    document.querySelector(".alert").innerHTML = "Password Copied";

    // removing alert
    setTimeout(() => {
        document.querySelector(".alert").innerHTML = "";
    }, 1500);
}

