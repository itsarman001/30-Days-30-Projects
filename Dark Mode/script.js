// JavaScript code to handle theme toggling and storage

// Get the theme toggle button and body element
const themeToggleBtn = document.getElementById("themeToggleBtn");
const body = document.body;

// Event listener for theme toggle button click
themeToggleBtn.addEventListener("click", () => {
    // Toggle dark mode class on body
    body.classList.toggle("darkMode");
    // Update button text
    buttonText();
    // Save theme preference
    saveTheme();
});

// Function to update button text based on theme
function buttonText() {
    body.classList.contains("darkMode") ? themeToggleBtn.innerHTML = "Light Mode" : themeToggleBtn.innerHTML = "Dark Mode";
};

// Function to save theme preference to localStorage
function saveTheme() {
    if (body.classList.contains("darkMode")) {
        localStorage.setItem("theme", "enable");
    } else {
        localStorage.setItem("theme", "disable")
    };
};

// Function to retrieve and apply saved theme preference
function getTheme() {
    if (localStorage.getItem("theme") === "enable") {
        body.classList.add("darkMode");
    } else {
        body.classList.remove("darkMode");
    }
};

// Call functions to initialize theme and button text
getTheme();
buttonText();
