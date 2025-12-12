// Click Event Example
// Get references to the buttons and message element
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const resetBtn = document.getElementById('reset');
const message = document.getElementById('message');
const counter = document.getElementById('counter');
const body = document.body;

// Initialize click counter
let clickCount = 0;

// Add click event listener to btn1
btn1.addEventListener('click', function() {
    message.textContent = 'Button 1 was clicked!';
    updateCounter();
    highlightButton(btn1);
});

// Add click event listener to btn2
btn2.addEventListener('click', function() {
    message.textContent = 'Button 2 was clicked!';
    updateCounter();
    highlightButton(btn2);
});

// Add click event listener to btn3
btn3.addEventListener('click', function() {
    message.textContent = 'Button 3 was clicked!';
    updateCounter();
    highlightButton(btn3);
});

// Add click event listener to reset button
resetBtn.addEventListener('click', function() {
    clickCount = 0;
    counter.textContent = clickCount;
    message.textContent = 'Counter has been reset!';
    resetButtonStyles();
});

// Add click event listener to the document body
body.addEventListener('click', function(event) {
    // Only change background if clicking on the body, not on buttons
    if (event.target === body) {
        const colors = ['#f5f5f5', '#e8f4fc', '#f8f9fa', '#fff5f5', '#f5fff5'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        body.style.backgroundColor = randomColor;
    }
});

// Add click event listener to all buttons at once using querySelectorAll
const allButtons = document.querySelectorAll('.btn');
allButtons.forEach(button => {
    button.addEventListener('click', function() {
        console.log(`Button with ID "${this.id}" was clicked`);
    });
});

// Helper function to update the counter
function updateCounter() {
    clickCount++;
    counter.textContent = clickCount;
}

// Helper function to highlight the clicked button
function highlightButton(button) {
    // Reset all buttons first
    resetButtonStyles();
    // Add highlight class to clicked button
    button.classList.add('clicked');
}

// Helper function to reset button styles
function resetButtonStyles() {
    allButtons.forEach(button => {
        button.classList.remove('clicked');
    });
}