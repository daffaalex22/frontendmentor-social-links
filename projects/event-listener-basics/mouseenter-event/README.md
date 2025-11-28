# MouseEnter Event Mini-Project

This mini-project teaches the basics of mouseenter event listeners in JavaScript.

## Learning Objectives

- Understand how to add mouseenter event listeners to elements
- Learn the difference between mouseenter and mouseover events
- Practice event handling with visual feedback
- Explore event delegation and selecting multiple elements

## Files

- `starter/` - Contains the starter files for students to build upon
  - `index.html` - Basic HTML structure with cards
  - `style.css` - Basic styling for the page
  - `script.js` - Starter JavaScript with TODO comments

- `index.html` - Complete example with additional features
- `style.css` - Complete styling with interactive effects
- `script.js` - Complete JavaScript implementation

## Key Concepts

### Adding MouseEnter Event Listeners

```javascript
// Using addEventListener with an anonymous function
element.addEventListener('mouseenter', function() {
    // Code to execute when mouse enters the element
});

// Using addEventListener with an arrow function
element.addEventListener('mouseenter', () => {
    // Code to execute when mouse enters the element
});
```

### MouseEnter vs MouseOver

- `mouseenter`: Only fires when the mouse enters the element, not when it enters child elements
- `mouseover`: Fires when the mouse enters the element OR any of its child elements

### Selecting Multiple Elements

```javascript
// Select all elements with a specific class
const allCards = document.querySelectorAll('.card');

// Add event listeners to all elements
allCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        // Handle mouseenter for each card
    });
});
```

### Accessing Data Attributes

```javascript
// HTML: <div data-info="Some information"></div>
element.addEventListener('mouseenter', function() {
    const info = this.getAttribute('data-info');
    console.log(info); // "Some information"
});
```

## Exercises

1. Complete the starter file by implementing all the TODO comments
2. Add a new card with a different mouseenter effect
3. Create a mouseenter event that changes the text content of an element
4. Add a mouseenter event that plays a sound (using the Web Audio API)

## Extension Ideas

- Combine mouseenter with mouseleave for complete hover effects
- Create a tooltip system that appears on mouseenter
- Implement a dropdown menu that opens on mouseenter
- Add a mouseenter event that triggers an animation