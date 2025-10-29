// Basic Animations with anime.js
// This file demonstrates fundamental animation concepts

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. BASIC FADE-IN ANIMATION
    // The most fundamental animation - making elements appear smoothly
    anime({
        targets: '.profile-card',
        opacity: [0, 1],           // Animate from transparent to fully visible
        translateY: [50, 0],        // Slide up from 50px below to original position
        duration: 1000,            // Animation lasts 1 second
        easing: 'easeOutQuad'       // Smooth deceleration (starts fast, ends slow)
    });

    console.log('Basic fade-in animation initialized!');
});