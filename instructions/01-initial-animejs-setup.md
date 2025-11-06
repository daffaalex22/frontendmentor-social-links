# Step 1: Setting Up anime.js Library

Welcome to the anime.js learning project! In this first step, we'll set up the anime.js library so you can start creating amazing animations.

## What is anime.js?

anime.js is a lightweight JavaScript animation library that makes it easy to create smooth, performant animations on the web. We'll be using it to bring life to our social links profile page.

## Setup Instructions

### 1. Add anime.js to Your Project

The easiest way to add anime.js to your project is through a CDN (Content Delivery Network). This means you don't need to download any files - you just add a script tag to your HTML.

**Open `index.html` and find the `<head>` section.** Add the following line right before the closing `</head>` tag:

```html
<!-- Add anime.js library via CDN -->
<script src="https://cdn.jsdelivr.net/npm/animejs/dist/bundles/anime.umd.min.js"></script>
```

**Where to place it:** Look for this line in your `index.html`:
```html
<link rel="stylesheet" href="style.css">
```

Add the anime.js script right after it:
```html
<link rel="stylesheet" href="style.css">

<!-- Add anime.js library via CDN -->
<script src="https://cdn.jsdelivr.net/npm/animejs/dist/bundles/anime.umd.min.js"></script>
```

### 2. Create Your Animation Script File

Now we need to create a JavaScript file where we'll write our animations.

**Create a new file called `script.js` in the root directory** (same level as `index.html` and `style.css`).

For now, just add a simple test to make sure everything is working:

```javascript
// Test file to verify anime.js is loaded
console.log('script.js loaded successfully!');
console.log('anime.js version:', anime.version);
```

### 3. Link Your Script File

Now we need to tell the browser to load our `script.js` file.

**Add this line just before the closing `</body>` tag in `index.html`:**

```html
<!-- Link to our animation script -->
<script src="script.js"></script>
```

**Where to place it:** Look for the closing `</body>` tag and add the script right before it:
```html
  </div>

  <div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">Daffa Alexander</a>.
  </div>

  <!-- Link to your animation script -->
  <script src="script.js"></script>
</body>
</html>
```

### 4. Verify Basic Script Setup

Before we add the anime.js configuration, let's make sure our basic setup is working correctly.

1. **Save all files** (`index.html` and `script.js`)
2. **Open `index.html` in your browser**
3. **Open the browser's developer console** (F12 or right-click → Inspect → Console)

You should see these messages in the console:
```
script.js loaded successfully!
anime.js version: 3.2.1
```

*(The version number might be different, but that's okay!)*

**If you see these messages:** Great! Your basic setup is working and you're ready for the next step.

**If you don't see these messages:** Go back and check the troubleshooting section below before proceeding.

### 5. Configure anime.js Setup

Now that we have anime.js loaded and our script file linked successfully, let's set up the proper structure for our animation code. This includes importing the anime.js functions we'll use and ensuring our code runs only after the page is fully loaded.

**Replace the content in your `script.js` file with this setup code:**

```javascript
// Import the functions we need from anime.js
const { animate, stagger } = anime;

// Wait for the DOM to be fully loaded before running animations
document.addEventListener('DOMContentLoaded', function() {
    
    console.log('DOM fully loaded!');
    console.log('anime.js functions ready:', { animate, stagger });
    
    // Your animations will go here in the next step!
    
});
```

**What this code does:**

1. **`const { animate, stagger } = anime;`**
   - This is called "destructuring" - we're extracting the `animate` and `stagger` functions from the global `anime` object
   - `animate`: The main function for creating animations
   - `stagger`: A function for creating delayed animations across multiple elements

2. **`document.addEventListener('DOMContentLoaded', function() { ... });`**
   - This ensures our animation code only runs after the HTML page is fully loaded
   - Prevents errors from trying to animate elements that don't exist yet
   - This is a best practice for any JavaScript that manipulates the DOM

**Why this setup is important:**
- Using `animate` and `stagger` directly makes our code cleaner and more readable
- The DOMContentLoaded listener prevents timing issues where animations might fail because elements aren't ready yet
- This structure will be the foundation for all the animations we'll create

## Final Verification

Now that you've completed the full setup, let's verify everything is working correctly.

1. **Save all files** (`index.html` and the updated `script.js`)
2. **Refresh your browser** (or reopen `index.html`)
3. **Open the browser's developer console** (F12 or right-click → Inspect → Console)

You should see these messages in the console:
```
script.js loaded successfully!
anime.js version: 3.2.1
DOM fully loaded!
anime.js functions ready: {animate: ƒ, stagger: ƒ}
```

*(The version number might be different, but that's okay!)*

If you see all these messages, your complete anime.js setup is ready for animations! 🎉

## Troubleshooting

### "anime is not defined" Error
- Make sure you added the anime.js CDN script correctly in the `<head>` section
- Check that you have an internet connection (the CDN needs to download the library)
- Verify the script tag is spelled correctly

### "Cannot destructure property 'animate' of 'anime'" Error
- Make sure the anime.js CDN is loaded before your script.js file
- Check that the CDN script is in the `<head>` section, not at the bottom of the body
- Verify the anime.js CDN URL is correct

### "script.js not found" Error
- Make sure `script.js` is in the same directory as `index.html`
- Check that the filename is spelled correctly (case-sensitive)
- Verify the script src path in your HTML

### "DOMContentLoaded not working" or No Console Messages
- Make sure you added the console.log statements inside the DOMContentLoaded event listener
- Check that the script tag is placed before `</body>`
- Try refreshing the page with Ctrl+F5 (hard refresh)
- Verify there are no JavaScript syntax errors in your code

## What's Next?

Once you have anime.js set up and working, you're ready to start creating animations! In the next step, we'll learn how to create basic fade-in and slide animations for the profile card.

## Summary of Changes

Your `index.html` should now have these additions:
1. Anime.js CDN script in the `<head>` section
2. Your `script.js` linked before `</body>`

And you should have a new `script.js` file with:
- Proper destructuring of anime.js functions (`animate`, `stagger`)
- DOMContentLoaded event listener setup
- Console verification messages

Great job! You now have a complete anime.js setup ready for creating animations! 🎉