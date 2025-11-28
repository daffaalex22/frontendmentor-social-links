# KeyDown Event Mini-Project

This mini-project teaches the basics of keydown event listeners in JavaScript.

## Learning Objectives

- Understand how to add keydown event listeners to elements
- Learn about different keyboard event properties (key, code, which)
- Practice detecting special keys and modifier keys
- Explore keyboard shortcuts and preventing default behavior

## Files

- `starter/` - Contains the starter files for students to build upon
  - `index.html` - Basic HTML structure with input field
  - `style.css` - Basic styling for the page
  - `script.js` - Starter JavaScript with TODO comments

- `index.html` - Complete example with additional features
- `style.css` - Complete styling with interactive effects
- `script.js` - Complete JavaScript implementation

## Key Concepts

### Adding KeyDown Event Listeners

```javascript
// Using addEventListener with an anonymous function
element.addEventListener('keydown', function(event) {
    // Code to execute when a key is pressed
    console.log(event.key); // The value of the key pressed
});

// Using addEventListener with an arrow function
element.addEventListener('keydown', (event) => {
    // Code to execute when a key is pressed
    console.log(event.code); // The physical key on the keyboard
});
```

### Event Properties

- `event.key`: The value of the key pressed (e.g., "a", "Enter", "Shift")
- `event.code`: The physical key on the keyboard (e.g., "KeyA", "Enter", "ShiftLeft")
- `event.which`: The numeric keyCode (deprecated, but still useful)
- `event.shiftKey`: Boolean indicating if Shift was pressed
- `event.ctrlKey`: Boolean indicating if Ctrl was pressed
- `event.altKey`: Boolean indicating if Alt was pressed
- `event.metaKey`: Boolean indicating if Meta (Cmd) was pressed

### Detecting Special Keys

```javascript
element.addEventListener('keydown', function(event) {
    // Check for specific keys
    if (event.key === 'Enter') {
        console.log('Enter key pressed');
    }
    
    // Check for arrow keys
    if (event.key.startsWith('Arrow')) {
        console.log('Arrow key pressed:', event.key);
    }
    
    // Check for modifier keys
    if (event.ctrlKey && event.key === 'a') {
        console.log('Ctrl+A pressed');
    }
});
```

### Preventing Default Behavior

```javascript
element.addEventListener('keydown', function(event) {
    // Prevent the default action for a specific key
    if (event.key === ' ') {
        event.preventDefault();
        console.log('Space key default action prevented');
    }
});
```

## Exercises

1. Complete the starter file by implementing all the TODO comments
2. Add a keydown event that changes the background color based on the key pressed
3. Create a simple game that uses arrow keys to move an element
4. Add keyboard shortcuts for common actions (copy, paste, save, etc.)

## Extension Ideas

- Create a text editor with keyboard shortcuts
- Implement a piano that plays sounds using keyboard keys
- Add a keydown event that creates a visual effect for each key
- Build a typing speed test that tracks keystrokes