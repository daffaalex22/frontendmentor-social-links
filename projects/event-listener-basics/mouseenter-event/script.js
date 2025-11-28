// MouseEnter Event Example
// Get references to the cards and info elements
const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');
const card3 = document.getElementById('card3');
const info = document.getElementById('info');
const hoverCount = document.getElementById('hover-count');
const currentCard = document.getElementById('current-card');
const allCards = document.querySelectorAll('.card');

// Initialize hover counter
let hovers = 0;

// Add mouseenter event listener to card1
card1.addEventListener('mouseenter', function() {
    info.textContent = "You're hovering over Card 1!";
    updateStats('Card 1');
    highlightCard(this);
});

// Add mouseenter event listener to card2
card2.addEventListener('mouseenter', function() {
    info.textContent = "You're hovering over Card 2!";
    updateStats('Card 2');
    highlightCard(this);
});

// Add mouseenter event listener to card3
card3.addEventListener('mouseenter', function() {
    info.textContent = "You're hovering over Card 3!";
    updateStats('Card 3');
    highlightCard(this);
});

// Add mouseenter event listener to all cards at once
allCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        // Get custom data from data-info attribute
        const cardInfo = this.getAttribute('data-info');
        if (cardInfo) {
            console.log(cardInfo);
        }
        
        // Change background color based on card ID
        const colors = {
            'card1': '#fff5f5',
            'card2': '#f5fff5',
            'card3': '#f5f5ff'
        };
        
        this.style.backgroundColor = colors[this.id] || '#fff';
    });
});

// Add mouseenter event listener to the document body
document.body.addEventListener('mouseenter', function(event) {
    // Only log if entering the body from outside
    if (event.target === document.body) {
        console.log('Mouse entered the page');
    }
});

// Helper function to update statistics
function updateStats(cardName) {
    hovers++;
    hoverCount.textContent = hovers;
    currentCard.textContent = cardName;
}

// Helper function to highlight the active card
function highlightCard(card) {
    // Remove active class from all cards
    allCards.forEach(c => c.classList.remove('active'));
    // Add active class to current card
    card.classList.add('active');
}