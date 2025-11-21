# 🎮 Game Character Selection - Anime.js v4+ Edition

A modern, animated character selection interface built with HTML, CSS, and anime.js v4+ animations.

## 🚀 Features

- **Smooth Page Load Animations**: Staggered card entrance with fade-in effects
- **Interactive Hover Effects**: Cards lift and avatars pulse on hover
- **Character Selection**: Animated selection indicators and state management
- **Dynamic Stats**: Animated progress bars with counting numbers
- **Start Game Flow**: Engaging button animations and transitions
- **Background Effects**: Floating particles for ambient visual interest
- **Performance Optimized**: Uses transform properties and hardware acceleration
- **Responsive Design**: Works across desktop, tablet, and mobile devices
- **Accessibility**: Respects `prefers-reduced-motion` settings

## 🎯 Live Demo

Simply open `index.html` in your browser to see the animations in action.

## 📁 Project Structure

```
game-character-selection/
├── index.html                  # Main HTML structure
├── index.css                   # Styling and layout
├── index.js                    # Anime.js v4+ animations
├── ANIMATION_GUIDE.md          # Detailed animation documentation
└── README.md                   # This file
```

## 🎬 Animation Features

### 1. Page Load Sequence
- Header slides up and fades in (1.2s)
- Character cards animate in with stagger effect (0.8s each)
- Selection summary appears last

### 2. Character Interactions
- **Hover Effects**: Cards lift, avatars pulse, glow effects
- **Selection**: Smooth transition with elastic animations
- **State Management**: Visual feedback for selected character

### 3. Stats Animation
- Progress bars fill with stagger effect
- Numbers count up dynamically
- Different colors for each stat type

### 4. Button States
- Disabled: Gray appearance
- Enabled: Animated gradient background
- Hover: Lift and scale effects
- Click: Elastic bounce animation

### 5. Background Particles
- Floating blue particles
- Performance optimized
- Auto-cleanup system

## 🛠️ Technical Implementation

### Anime.js v4+ API Usage

The implementation uses the modern anime.js v4+ syntax:

```javascript
const { animate, stagger, timeline } = anime;

// Basic animation
animate('.element', {
    opacity: [0, 1],
    translateY: [50, 0],
    duration: 1000,
    ease: 'outQuad'
});

// Staggered animation
animate('.elements', {
    opacity: [0, 1],
    delay: stagger(100),
    duration: 800,
    ease: 'outBack'
});
```

### Key Differences from v3:
- Uses `animate()` function directly
- `stagger()` function instead of `anime.stagger()`
- `ease` property instead of `easing`
- Better Web Animations API integration

## 🎨 Customization

### Modifying Animation Timings

Edit the configuration object in `index.js`:

```javascript
const config = {
    pageLoad: { duration: 1200, ease: 'outExpo' },
    cardAnimation: { duration: 800, ease: 'outBack' },
    hover: { duration: 300, ease: 'outQuad' },
    selection: { duration: 600, ease: 'outElastic(1, .6)' },
    stats: { duration: 1000, ease: 'outQuart', delay: 200 }
};
```

### Adding New Characters

1. Add HTML structure following existing pattern:
```html
<div class="character-card" data-character="new-character">
    <!-- Character content -->
</div>
```

2. Add corresponding CSS styling:
```css
.new-character-avatar {
    background: linear-gradient(135deg, #color1, #color2);
}
```

3. Animations will automatically apply via class selectors.

### Creating Custom Effects

Follow the existing patterns in the code:

```javascript
function initCustomEffect() {
    animate('.custom-element', {
        // Animation properties
        translateY: [0, -100],
        opacity: [1, 0],
        duration: 1000,
        ease: 'outQuad'
    });
}
```

## 📱 Browser Support

- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+
- ✅ Mobile browsers

## ♿ Accessibility

- Respects `prefers-reduced-motion` media query
- Reduced animation durations for accessibility
- Maintains functionality without animations
- Keyboard navigation support

## 🎯 Performance Tips

1. **Hardware Acceleration**: Uses transform properties for GPU acceleration
2. **Efficient Selectors**: Optimized CSS selectors
3. **Particle Management**: Limited number of active particles
4. **Reduced Motion**: Automatically adapts for user preferences
5. **Will-Change**: CSS hints for browser optimization

## 🔧 Development

### Local Development

1. Clone or download the project
2. Open `index.html` in a modern browser
3. No build process required - pure HTML/CSS/JS

### Testing Animations

- Check browser console for any errors
- Test hover effects on character cards
- Verify selection animations work smoothly
- Confirm start game button functionality

### Debug Mode

Add this to enable console logging:

```javascript
// Add at the top of index.js
const DEBUG = true;

if (DEBUG) {
    console.log('Animation system initialized');
}
```

## 📚 Learning Resources

- [Anime.js v4+ Documentation](https://animejs.com/)
- [Web Animations API Guide](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API)
- [CSS Transforms Performance](https://web.dev/optimize-css-triggers/)

## 🚀 Next Steps

Potential enhancements:

1. **Sound Effects**: Add audio feedback for interactions
2. **More Characters**: Expand the character roster
3. **Advanced Animations**: Add timeline-based sequences
4. **3D Effects**: Implement CSS 3D transforms
5. **Game Integration**: Connect to actual game mechanics

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

---

Built with ❤️ using anime.js v4+