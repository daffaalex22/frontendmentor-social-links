// Basic Animations with js v4
// This file demonstrates fundamental animation concepts using the new v4 API

// Note: Using global anime object from CDN
// In js v4, we access functions through the global anime object

// Wait for the DOM to be fully loaded

const { animate, stagger } = anime;

document.addEventListener('DOMContentLoaded', function() {
    
    // 1. BASIC FADE-IN ANIMATION
    // The most fundamental animation - making elements appear smoothly
    // Note: In v4, 'targets' becomes the first argument, 'easing' becomes 'ease'
    animate('.profile-card', {
        opacity: [0, 1],           // Animate from transparent to fully visible
        translateY: [50, 0],        // Slide up from 50px below to original position
        duration: 1000,            // Animation lasts 1 second
        ease: 'outQuad'            // Smooth deceleration (starts fast, ends slow)
    });

    console.log('Basic fade-in animation initialized!');

    // 2. STAGGERED ANIMATION
    // Animate multiple elements with a delay between each one
    // Note: In v4, we use stagger() function
    animate('.link-btn', {
        opacity: [0, 1],           // Fade in each button
        translateY: [30, 0],       // Slide up from below
        delay: stagger(100), // 100ms delay between each button
        duration: 800,             // Each button animates for 800ms
        ease: 'outExpo'            // Exponential easing for smooth effect
    });

    console.log('Staggered animation for social links added!');

    // 3. SCALE ANIMATION
    // Make the avatar appear with a scaling effect
    // Note: 'easeOutElastic' becomes 'outElastic' in v4
    animate('.avatar', {
        scale: [0, 1],             // Start tiny, grow to full size
        opacity: [0, 1],           // Fade in while scaling
        duration: 1200,            // Longer duration for dramatic effect
        ease: 'outElastic'         // Bouncy elastic effect
    });

    console.log('Scale animation for avatar added!');

    // 4. ROTATION ANIMATION
    // Add a subtle rotation to the name
    animate('.name', {
        rotate: [-5, 0],           // Start slightly tilted, rotate to normal
        opacity: [0, 1],           // Fade in
        duration: 1000,
        delay: 500,                // Start after 500ms
        ease: 'outQuad'
    });

    console.log('Rotation animation for name added!');

    // 5. COLOR ANIMATION
    // Animate the bio text color
    // Note: In v4, 'value' property becomes 'to' in object syntax
    animate('.bio', {
        color: [
            { to: '#666666' },       // Start with gray
            { to: '#FFFFFF' }        // End with white
        ],
        opacity: [0, 1],
        duration: 1500,
        delay: 800,
        ease: 'linear'
    });

    console.log('Color animation for bio added!');
    console.log('All basic animations initialized!');
});