# Click Event Mini-Project

This mini-project teaches the basics of click event listeners in JavaScript.

## Learning Objectives

- Understand how to add click event listeners to elements
- Learn different ways to select elements and attach events
- Practice event handling with functions
- Explore event objects and properties

## Files

- `starter/` - Contains the starter files for students to build upon
  - `index.html` - Basic HTML structure with buttons
  - `style.css` - Basic styling for the page
  - `script.js` - Starter JavaScript with TODO comments

- `index.html` - Complete example with additional features
- `style.css` - Complete styling with interactive effects
- `script.js` - Complete JavaScript implementation

## Key Concepts

### Adding Click Event Listeners

```javascript
// Method 1: Using addEventListener with a named function
element.addEventListener('click', functionName);

// Method 2: Using addEventListener with an anonymous function
element.addEventListener('click', function() {
    // Code to execute when clicked
});

// Method 3: Using addEventListener with an arrow function
element.addEventListener('click', () => {
    // Code to execute when clicked
});
```

### Selecting Multiple Elements

```javascript
// Select all elements with a specific class
const allButtons = document.querySelectorAll('.btn');

// Add event listeners to all elements
allButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Handle click for each button
    });
});
```

### Event Object

When an event occurs, the event handler receives an event object:

```javascript
element.addEventListener('click', function(event) {
    console.log(event.target); // The element that was clicked
    console.log(event.type);   // The type of event (e.g., "click")
});
```

## Exercises

1. Complete the starter file by implementing all the TODO comments
2. Add a new button that changes the text color when clicked
3. Create a button that toggles the visibility of an element
4. Add a click event that prevents the default behavior of a link

## Extension Ideas

- Add a double-click event listener
- Implement a right-click context menu
- Create a drag-and-drop interface using click events