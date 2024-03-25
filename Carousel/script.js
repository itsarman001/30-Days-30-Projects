// Get references to the previous button, next button, and the item list container
const preBtn = document.getElementById("preBtn");
const nextBtn = document.getElementById("nextBtn");
const itemList = document.getElementById("item-list");

// Define the width of each item and the margin between them
const itemWidth = 300;
const margin = 16;

// Add event listener for clicking the previous button
preBtn.addEventListener('click', () => {
    // Scroll the item list to the left by subtracting the width of an item and the margin
    itemList.scrollLeft -= itemWidth + margin;
});

// Add event listener for clicking the next button
nextBtn.addEventListener('click', () => {
    // Scroll the item list to the right by adding the width of an item and the margin
    itemList.scrollLeft += itemWidth + margin;
});
