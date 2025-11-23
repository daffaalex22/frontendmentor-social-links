# 🤖 Robot Builder Workshop - Anime.js v4+ Edition

A futuristic robot assembly interface built with HTML, CSS, and anime.js v4+ animations. Build your custom robot by selecting different parts and watch it come to life with smooth animations!

## 🚀 Features

- **Interactive Part Selection**: Choose from heads, bodies, arms, and legs
- **Real-time Robot Preview**: See your robot assemble as you select parts
- **Dynamic Stats System**: Robot stats change based on selected parts
- **Smooth Animations**: Powered by anime.js v4+ with modern `animate` API
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Visual Feedback**: Hover effects, selection states, and activation sequence

## 🎯 Live Demo

Open `index.html` in your browser to see the project in action!

## 📁 Project Structure

```
robot-builder-workshop/
├── index.html          # Main HTML structure
├── index.css           # All styling (including responsive)
├── index.js            # anime.js animations and interactivity
└── README.md           # This file
```

## 🎬 Animation Features

### Page Load Animations
- Header slides down with fade-in effect
- Robot preview area slides in from left
- Part categories appear with staggered animations
- Part cards scale and fade in sequentially

### Interactive Animations
- Hover effects on part cards with lift and glow
- Part selection with elastic bounce
- Robot part replacement animations
- Stat bar filling animations

### Robot Activation
- Complete robot assembly sequence
- Floating animation for activated robot
- Glowing effects and particle animations
- Dynamic robot name generation

## 🛠️ Technical Implementation

### anime.js v4+ Features Used
- **animate() method**: Core animation function for all effects
- **stagger() utility**: Coordinated animations for multiple elements
- **Event-driven animations**: mouseenter, mouseleave, click events
- **DOM selection**: querySelectorAll and querySelector for element targeting
- **Selection logic**: Tracking selected parts and updating UI
- **Loop patterns**: forEach loops for element collections

### Key Animation Patterns
```javascript
// Basic animate usage
animate('.element', {
    opacity: [0, 1],
    translateY: [50, 0],
    duration: 1000,
    ease: 'outExpo'
});

// Staggered animations
animate('.multiple-elements', {
    scale: [0.8, 1],
    delay: stagger(100, { start: 300 }),
    duration: 800,
    ease: 'outBack'
});

// Event-driven animations
element.addEventListener('mouseenter', () => {
    animate(element, {
        scale: 1.05,
        duration: 300,
        ease: 'outQuad'
    });
});
```

## 🎨 Customization

### Adding New Robot Parts

1. Add HTML structure following existing pattern:
```html
<div class="part-card" data-category="head" data-part="new-head">
    <div class="part-preview new-head">
        <div class="part-emoji">🤖</div>
    </div>
    <h4 class="part-name">New Head</h4>
    <div class="part-stats">
        <span class="stat-tag">Power: 30</span>
        <span class="stat-tag">Speed: 20</span>
    </div>
</div>
```

2. Add part data to JavaScript:
```javascript
const partsData = {
    head: {
        'new-head': { power: 30, speed: 20, defense: 10, emoji: '🤖' }
    }
};
```

3. Add corresponding CSS styling:
```css
.part-preview.new-head {
    background: linear-gradient(135deg, #444, #666);
    border: 2px solid #00ff88;
}
```

### Modifying Animation Timings

Edit the configuration object in `index.js`:

```javascript
const config = {
    pageLoad: { duration: 1200, ease: 'outExpo' },
    partAnimation: { duration: 800, ease: 'outBack' },
    hover: { duration: 300, ease: 'outQuad' },
    selection: { duration: 600, ease: 'outElastic(1, .6)' },
    assembly: { duration: 1000, ease: 'outQuart' },
    activation: { duration: 1500, ease: 'outElastic(1, .8)' }
};
```

## 📱 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## ♿ Accessibility

- Semantic HTML5 structure
- Keyboard navigation support
- ARIA labels where appropriate
- Reduced motion support for users who prefer it

## 🎯 Performance Tips

- Use `will-change` property for elements that will be animated
- Limit the number of simultaneous animations
- Use hardware acceleration with `transform: translateZ(0)`
- Clean up animations when elements are removed

## 🔧 Development

### Local Development

1. Clone or download the project
2. Open `index.html` in a modern browser
3. No build process required - pure HTML/CSS/JS

### Testing Animations

- Check browser console for any errors
- Test hover effects on part cards
- Verify selection animations work smoothly
- Confirm robot activation sequence

### Debug Mode

Add this to enable console logging:

```javascript
// Add at the top of index.js
const DEBUG = true;

if (DEBUG) {
    console.log('Robot Builder Workshop initialized');
}
```

## 📚 Learning Resources

- [Anime.js v4+ Documentation](https://animejs.com/)
- [Web Animations API Guide](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API)
- [CSS Transforms Performance](https://web.dev/optimize-css-triggers/)

## 🚀 Next Steps

- Add sound effects for part selection and robot activation
- Implement robot saving/loading functionality
- Create additional robot categories (weapons, accessories)
- Add robot battle system with animated combat
- Implement robot customization with colors and patterns

## 📄 License

This project is open source and available under the [MIT License](LICENSE). Feel free to use it for learning, teaching, or as a foundation for your own projects.

**Happy Building!** 🤖✨