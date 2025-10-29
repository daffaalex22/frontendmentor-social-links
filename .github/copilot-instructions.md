# Copilot Instructions

This is a teaching project for learning anime.js, a lightweight JavaScript animation library. The goal is to enhance an existing social links profile page with engaging animations and interactive effects.

## Project Overview

The project is a single-page static website that serves as a practical introduction to anime.js. Students will learn how to add smooth animations, transitions, and micro-interactions to a functional social links profile page. The existing HTML and CSS structure provides a foundation for implementing various animation techniques.

## Key Files

- `index.html`: The main HTML structure of the profile card that will be animated.
- `style-guide.md`: Design specifications including colors, typography, and layout dimensions.
- `style.css`: Existing CSS styles that define the base appearance and layout.
- `assets/`: Contains necessary assets including the profile picture and font files.
- `script.js`: JavaScript file where anime.js animations will be implemented (create this file if it doesn't exist).

## Learning Objectives

Students will learn to:
1. **Basic Animations**: Fade-in, slide, and scale effects for page elements
2. **Staggered Animations**: Coordinated animations for multiple elements
3. **Interactive Animations**: Hover effects and click interactions
4. **Timeline Animations**: Complex animation sequences
5. **Performance Optimization**: Efficient animation techniques

## Development Workflow

1. **Setup anime.js**: Add the anime.js library to the project via CDN or npm
2. **Initial Animations**: Create page load animations for the profile card
3. **Button Interactions**: Add hover and click animations to social links
4. **Advanced Techniques**: Implement timeline-based animations and physics effects
5. **Refinement**: Fine-tune timing, easing, and performance

## Animation Examples

### Basic Fade-in Animation
```javascript
// Fade in the profile card on page load
anime({
  targets: '.profile-card',
  opacity: [0, 1],
  translateY: [50, 0],
  duration: 1000,
  easing: 'easeOutQuad'
});
```

### Staggered Button Animation
```javascript
// Animate social buttons with stagger effect
anime({
  targets: '.social-link',
  opacity: [0, 1],
  translateY: [30, 0],
  delay: anime.stagger(100),
  duration: 800,
  easing: 'easeOutExpo'
});
```

### Hover Effect
```javascript
// Scale buttons on hover
document.querySelectorAll('.social-link').forEach(link => {
  link.addEventListener('mouseenter', () => {
    anime({
      targets: link,
      scale: 1.05,
      duration: 300,
      easing: 'easeOutQuad'
    });
  });
});
```

## Teaching Tips

- Start with simple animations and gradually increase complexity
- Demonstrate different easing functions and their effects
- Show how to chain animations using timelines
- Emphasize performance considerations and best practices
- Encourage experimentation with different animation parameters
d