# MouseLeave Event Mini-Project

This mini-project teaches the basics of mouseleave event listeners in JavaScript.

## Learning Objectives

- Understand how to add mouseleave event listeners to elements
- Learn the difference between mouseleave and mouseout events
- Practice event handling with visual feedback
- Explore combining mouseenter and mouseleave for complete hover effects

## Files

- `starter/` - Contains the starter files for students to build upon
  - `index.html` - Basic HTML structure with cards
  - `style.css` - Basic styling for the page
  - `script.js` - Starter JavaScript with TODO comments

- `index.html` - Complete example with additional features
- `style.css` - Complete styling with interactive effects
- `script.js` - Complete JavaScript implementation

## Key Concepts

### Adding MouseLeave Event Listeners

```javascript
// Using addEventListener with an anonymous function
element.addEventListener('mouseleave', function() {
    // Code to execute when mouse leaves the element
});

// Using addEventListener with an arrow function
element.addEventListener('mouseleave', () => {
    // Code to execute when mouse leaves the element
});
```

### MouseLeave vs MouseOut

- `mouseleave`: Only fires when the mouse leaves the element, not when it leaves child elements
- `mouseout`: Fires when the mouse leaves the element OR any of its child elements

### Combining MouseEnter and MouseLeave

```javascript
element.addEventListener('mouseenter', function() {
    // Code to execute when mouse enters
    this.style.backgroundColor = '#f0f0f0';
});

element.addEventListener('mouseleave', function() {
    // Code to execute when mouse leaves
    this.style.backgroundColor = '#fff';
});
```

### Accessing Data Attributes

```javascript
// HTML: <div data-message="Goodbye!"></div>
element.addEventListener('mouseleave', function() {
    const message = this.getAttribute('data-message');
    console.log(message); // "Goodbye!"
});
```

## Exercises

1. Complete the starter file by implementing all the TODO comments
2. Add a new card with a different mouseleave effect
3. Create a mouseleave event that triggers an animation
4. Add a mouseleave event that plays a sound (using the Web Audio API)

## Extension Ideas

- Create a dropdown menu that closes on mouseleave
- Implement a tooltip system that disappears on mouseleave
- Add a mouseleave event that saves data to localStorage
- Create a game where the player must avoid moving the mouse out of a certain area