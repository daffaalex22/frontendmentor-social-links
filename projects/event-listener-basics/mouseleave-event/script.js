// MouseLeave Event Example
// Get references to the cards and info elements
const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');
const card3 = document.getElementById('card3');
const info = document.getElementById('info');
const exitCount = document.getElementById('exit-count');
const lastCard = document.getElementById('last-card');
const allCards = document.querySelectorAll('.card');

// Initialize exit counter
let exits = 0;

// Add mouseleave event listener to card1
card1.addEventListener('mouseleave', function() {
    const message = this.getAttribute('data-message');
    info.textContent = message;
    updateStats('Card 1');
    markAsVisited(this);
});

// Add mouseleave event listener to card2
card2.addEventListener('mouseleave', function() {
    const message = this.getAttribute('data-message');
    info.textContent = message;
    updateStats('Card 2');
    markAsVisited(this);
});

// Add mouseleave event listener to card3
card3.addEventListener('mouseleave', function() {
    const message = this.getAttribute('data-message');
    info.textContent = message;
    updateStats('Card 3');
    markAsVisited(this);
});

// Add mouseleave event listener to all cards at once
allCards.forEach(card => {
    card.addEventListener('mouseleave', function() {
        // Reset background color after a delay
        setTimeout(() => {
            this.style.backgroundColor = '#fff';
        }, 500);
        
        // Log to console when leaving any card
        console.log(`Mouse left ${this.id}`);
    });
    
    // Also add mouseenter for better UX
    card.addEventListener('mouseenter', function() {
        // Change background color on mouseenter
        const colors = {
            'card1': '#fff5f5',
            'card2': '#f5fff5',
            'card3': '#f5f5ff'
        };
        
        this.style.backgroundColor = colors[this.id] || '#fff';
    });
});

// Add mouseleave event listener to the document body
document.body.addEventListener('mouseleave', function(event) {
    // Only log if leaving the body (moving outside the viewport)
    if (event.target === document.body) {
        console.log('Mouse left the page');
        info.textContent = 'Goodbye! Come back soon!';
    }
});

// Helper function to update statistics
function updateStats(cardName) {
    exits++;
    exitCount.textContent = exits;
    lastCard.textContent = cardName;
}

// Helper function to mark a card as visited
function markAsVisited(card) {
    card.classList.add('visited');
}