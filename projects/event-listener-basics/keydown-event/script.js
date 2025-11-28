// KeyDown Event Example
// Get references to the input and display elements
const textInput = document.getElementById('textInput');
const info = document.getElementById('info');
const keyDisplay = document.getElementById('keyDisplay');
const keyCode = document.getElementById('keyCode');
const modifierKeys = document.getElementById('modifierKeys');
const keyCount = document.getElementById('keyCount');
const specialKeyCount = document.getElementById('specialKeyCount');

// Initialize counters
let totalKeys = 0;
let specialKeys = 0;

// Add keydown event listener to the document
document.addEventListener('keydown', function(event) {
    // Update the keyDisplay with the key that was pressed
    keyDisplay.textContent = event.key;
    keyCode.textContent = event.code;
    
    // Update modifier keys display
    const modifiers = [];
    if (event.shiftKey) modifiers.push('Shift');
    if (event.ctrlKey) modifiers.push('Ctrl');
    if (event.altKey) modifiers.push('Alt');
    if (event.metaKey) modifiers.push('Meta');
    
    modifierKeys.textContent = modifiers.length > 0 ? modifiers.join(' + ') : 'None';
    
    // Update total key count
    totalKeys++;
    keyCount.textContent = totalKeys;
    
    // Check for special keys
    if (isSpecialKey(event.key)) {
        specialKeys++;
        specialKeyCount.textContent = specialKeys;
    }
    
    // Log to console
    console.log(`Key pressed: ${event.key}, Code: ${event.code}`);
});

// Add keydown event listener to the text input
textInput.addEventListener('keydown', function(event) {
    // Update the info with the key that was pressed
    info.textContent = `You pressed "${event.key}" in the input field`;
    
    // Handle special keys in the input
    if (event.key === 'Enter') {
        info.textContent = 'Enter key pressed - form would be submitted';
        event.preventDefault(); // Prevent form submission for demo
    } else if (event.key === 'Escape') {
        info.textContent = 'Escape key pressed - clearing input';
        this.value = '';
        event.preventDefault();
    } else if (event.key === ' ') {
        info.textContent = 'Space key pressed - adding space';
        // Don't prevent default for space, we want it to work normally
    }
});

// Helper function to check if a key is special
function isSpecialKey(key) {
    const specialKeys = [
        'Enter', 'Escape', 'Tab', 'Backspace', 'Delete',
        'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight',
        'Home', 'End', 'PageUp', 'PageDown',
        'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12'
    ];
    
    return specialKeys.includes(key) || key.startsWith('Arrow') || key.startsWith('F');
}

// Add keyboard shortcuts
document.addEventListener('keydown', function(event) {
    // Ctrl+A: Select all text in input
    if (event.ctrlKey && event.key === 'a') {
        info.textContent = 'Ctrl+A pressed - selecting all text';
        textInput.select();
        event.preventDefault();
    }
    
    // Ctrl+C: Copy notification
    if (event.ctrlKey && event.key === 'c') {
        info.textContent = 'Ctrl+C pressed - copying selected text';
    }
    
    // Ctrl+V: Paste notification
    if (event.ctrlKey && event.key === 'v') {
        info.textContent = 'Ctrl+V pressed - pasting text';
    }
    
    // Ctrl+Z: Undo notification
    if (event.ctrlKey && event.key === 'z') {
        info.textContent = 'Ctrl+Z pressed - undoing last action';
    }
});