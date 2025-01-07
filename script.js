const search = document.getElementById('search');
const emojiContainer = document.getElementById('emojiContainer');
const btn = document.getElementById('btn');
const buttons = document.querySelectorAll('.buttons button');

// Function to display emojis based on a filter
function displayEmojis(filter = "") {
    emojiContainer.innerText = ""; // Clear the container
    emojiList.forEach((ele) => {
        if (filter === "" || ele.category === filter || ele.description.includes(filter)) {
            let p = document.createElement('p');
            p.innerText = ele.emoji;
            emojiContainer.append(p);
        }
    });
}

// Load all emojis on window load
window.addEventListener('load', () => {
    displayEmojis();
});

// Search button functionality
btn.addEventListener('click', () => {
    let inputValue = search.value.toLowerCase();
    displayEmojis(inputValue);
});

// Add click event listeners to category buttons
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const category = button.textContent.toLowerCase(); // Get category name from button text
        displayEmojis(category);
    });
});
