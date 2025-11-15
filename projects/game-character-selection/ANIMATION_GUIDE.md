# Game Character Selection - Anime.js v4+ Animation Guide

This guide explains the comprehensive animation system implemented using anime.js v4+ for the Game Character Selection interface.

## 🎯 Animation Overview

The character selection interface features smooth, engaging animations that enhance user experience while maintaining performance. All animations use the modern anime.js v4+ API with the `animate` function.

## 📦 Anime.js v4+ Setup

### CDN Integration
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/4.0.0/anime.min.js"></script>
```

### Import Functions
```javascript
const { animate, stagger, timeline } = anime;
```

## 🎬 Animation Steps Implementation

### 1. Page Load Animations (`initPageLoadAnimations`)

**Purpose**: Create an impressive first impression when the page loads.

**Effects**:
- **Header Animation**: 
  - Fades in from opacity 0 to 1
  - Slides up from -50px to 0
  - Duration: 1200ms with `outExpo` easing
  - Delay: No initial delay

- **Character Cards Staggered Entry**:
  - All cards animate in sequence with stagger effect
  - Each card: fade in + slide up + scale from 0.8 to 1
  - Stagger delay: 150ms between cards
  - Starts after 300ms delay
  - Duration: 800ms with `outBack` easing

- **Selection Summary**:
  - Fades in and slides up
  - Delay: 800ms to appear after cards
  - Duration: 600ms with `outQuad` easing

**Code Example**:
```javascript
animate('.header', {
    opacity: [0, 1],
    translateY: [-50, 0],
    duration: 1200,
    ease: 'outExpo'
});

animate('.character-card', {
    opacity: [0, 1],
    translateY: [100, 0],
    scale: [0.8, 1],
    delay: stagger(150, { start: 300 }),
    duration: 800,
    ease: 'outBack'
});
```

### 2. Character Card Interactions (`initCharacterCardAnimations`)

**Purpose**: Provide immediate visual feedback for user interactions.

**Hover Effects**:
- **Card Lift**: 
  - TranslateY: -10px, Scale: 1.02
  - Duration: 300ms with `outQuad` easing

- **Avatar Pulse**:
  - Scale: 1.1 with slight rotation (0→5→-5→0 degrees)
  - Duration: 300ms

- **Glow Effect**:
  - Box shadow: 0→20px rgba(0, 212, 255, 0.3)
  - Duration: 300ms

**Mouse Leave Reset**:
- All properties return to original state
- Same duration and easing for smooth transitions

**Code Example**:
```javascript
card.addEventListener('mouseenter', () => {
    animate(card, {
        translateY: -10,
        scale: 1.02,
        duration: 300,
        ease: 'outQuad'
    });
    
    animate(avatar, {
        scale: 1.1,
        rotate: [0, 5, -5, 0],
        duration: 300,
        ease: 'outQuad'
    });
});
```

### 3. Character Selection System (`handleCharacterSelection`)

**Purpose**: Provide clear visual feedback when a character is selected.

**Selection Process**:
1. **Deselect Other Cards**:
   - Opacity: 1→0.6, Scale: 1→0.95
   - Duration: 600ms with `outElastic(1, .6)`

2. **Highlight Selected Card**:
   - Opacity: 0.6→1, Scale: 0.95→1.05
   - Duration: 600ms

3. **Selection Indicator Animation**:
   - Scale: 0→1.2→1
   - Rotation: 0→180→360 degrees
   - Duration: 600ms with `outElastic` easing

4. **Selection Summary Update**:
   - Fade out current text
   - Update content
   - Fade in with bounce effect (scale 0.8→1.1→1)

**Code Example**:
```javascript
animate(otherCards, {
    opacity: 0.6,
    scale: 0.95,
    duration: 600,
    ease: 'outElastic(1, .6)'
});

animate(selectedCard, {
    opacity: 1,
    scale: 1.05,
    duration: 600,
    ease: 'outElastic(1, .6)'
});
```

### 4. Stats Bar Animations (`animateCharacterStats`)

**Purpose**: Dynamically show character statistics with animated progress bars.

**Animation Sequence**:
1. **Reset All Bars**: Set width to 0%
2. **Animate Bar Filling**:
   - Health: 95%, Attack: 80%, Speed: 60% (example values)
   - Stagger delay: 100ms between bars
   - Start delay: 300ms
   - Duration: 1000ms with `outQuart` easing

3. **Count Up Animation**:
   - Numbers count from 0 to target value
   - Same stagger timing as bars
   - Uses `round: 1` for integer values

**Code Example**:
```javascript
animate(statFills, {
    width: (el, i) => {
        const statValues = ['95%', '80%', '60%'];
        return statValues[i];
    },
    delay: stagger(100, { start: 300 }),
    duration: 1000,
    ease: 'outQuart'
});
```

### 5. Start Game Button Animations (`initStartGameButton`)

**Purpose**: Create an engaging call-to-action with multiple states.

**States**:

**Disabled State**:
- Gray background (#333)
- No interactions
- Lower opacity

**Enabled State**:
- Background animates from #333 to gradient
- Scale: 0.9→1 (bounce effect)
- Duration: 500ms with `outBack` easing

**Hover Effects**:
- TranslateY: -3px
- Scale: 1.05
- Enhanced box shadow
- Duration: 300ms with `outQuad` easing

**Click Animation**:
- Scale sequence: 1→0.9→1.1→1
- Duration: 400ms with `outElastic` easing

**Code Example**:
```javascript
animate(startButton, {
    backgroundColor: ['#333', 'linear-gradient(135deg, #00d4ff, #7b2cbf)'],
    scale: [0.9, 1],
    duration: 500,
    ease: 'outBack'
});
```

### 6. Game Start Transition (`handleStartGame`)

**Purpose**: Smooth transition when starting the game.

**Animation Sequence**:
1. **Button Click Feedback**:
   - Scale: 1→0.9→1.1→1
   - Duration: 400ms

2. **Container Fade Out**:
   - Opacity: 1→0
   - Scale: 1→0.8
   - Duration: 600ms with `inQuad` easing

3. **Game Start Message**:
   - Modal appears with selected character
   - Opacity: 0→1, Scale: 0.5→1
   - Duration: 600ms with `outBack` easing

**Code Example**:
```javascript
animate(container, {
    opacity: [1, 0],
    scale: [1, 0.8],
    duration: 600,
    ease: 'inQuad'
});

animate(message, {
    opacity: [0, 1],
    scale: [0.5, 1],
    duration: 600,
    ease: 'outBack'
});
```

### 7. Ability Tags Animation (`initAbilityTagAnimations`)

**Purpose**: Add subtle animations to character abilities.

**Entry Animation**:
- Staggered fade-in for all ability tags
- Delay: 50ms between tags, starts at 1000ms
- TranslateY: 20→0, Scale: 0.8→1
- Duration: 400ms with `outQuad` easing

**Hover Effects**:
- Scale: 1.1
- Background color change
- Duration: 200ms

**Code Example**:
```javascript
animate(abilityTags, {
    opacity: [0, 1],
    translateY: [20, 0],
    scale: [0.8, 1],
    delay: stagger(50, { start: 1000 }),
    duration: 400,
    ease: 'outQuad'
});
```

### 8. Background Particle Effect (`createBackgroundEffect`)

**Purpose**: Add ambient visual interest to the interface.

**Effect Details**:
- Creates 20 floating particles
- Each particle: 4px × 4px blue dots
- Starts from bottom of screen
- Animates upward with slight horizontal drift
- Fades out as it rises
- Duration: 3000-5000ms with linear easing

**Performance Considerations**:
- Particles are removed after animation completes
- New particles created every 5 seconds
- Only 20 particles active at any time

**Code Example**:
```javascript
animate(particle, {
    translateY: [-startY - 20],
    translateX: [0, Math.random() * 100 - 50],
    opacity: [0.3, 0],
    duration: 3000 + Math.random() * 2000,
    ease: 'linear'
});
```

## ⚙️ Configuration System

### Animation Config Object
```javascript
const config = {
    pageLoad: {
        duration: 1200,
        ease: 'outExpo'
    },
    cardAnimation: {
        duration: 800,
        ease: 'outBack'
    },
    hover: {
        duration: 300,
        ease: 'outQuad'
    },
    selection: {
        duration: 600,
        ease: 'outElastic(1, .6)'
    },
    stats: {
        duration: 1000,
        ease: 'outQuart',
        delay: 200
    }
};
```

## 🎨 Easing Functions Used

- **`outExpo`**: Smooth deceleration for page load
- **`outBack`**: Bounce effect for card entries
- **`outQuad`**: Standard ease-out for hover effects
- **`outElastic(1, .6)`**: Bouncy selection effects
- **`outQuart`**: Smooth stats animation
- **`inQuad`**: Accelerating fade out for transitions

## 📱 Responsive Considerations

### Reduced Motion Support
```javascript
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    Object.keys(config).forEach(key => {
        config[key].duration = Math.min(config[key].duration, 300);
    });
}
```

### Window Resize Handling
- Position-dependent animations are recalculated on resize
- Maintains consistent experience across screen sizes

## 🚀 Performance Optimizations

1. **Staggered Animations**: Use `stagger()` for coordinated multi-element animations
2. **Transform Properties**:优先使用transform属性进行动画（GPU加速）
3. **Reduced Motion**:尊重用户的运动偏好设置
4. **Particle Management**:限制活动粒子的数量并自动清理
5. **Efficient Selectors**:使用高效的CSS选择器

## 🛠️ Utility Functions

### Toggle Animations
```javascript
function toggleAnimations() {
    if (animate.running.length > 0) {
        animate.running.forEach(animation => animation.pause());
    }
}
```

### Custom Easing
```javascript
function createCustomEasing() {
    animate('.element', {
        translateY: [0, -100],
        duration: 1000,
        ease: (t) => t * t * (3.0 - 2.0 * t)
    });
}
```

## 🔧 Customization Guide

### Modifying Animation Timings
1. Update values in the `config` object
2. Changes apply globally to all related animations

### Adding New Characters
1. Add new HTML structure following existing pattern
2. Add corresponding CSS classes
3. Animations automatically apply via class selectors

### Creating New Effects
1. Use `animate()` function with anime.js v4+ syntax
2. Follow existing easing and timing patterns
3. Add to appropriate initialization function

## 📊 Browser Support

- **Chrome/Edge**: Full support
- **Firefox**: Full support
- **Safari**: Full support
- **Mobile Browsers**: Optimized for performance

This animation system provides a smooth, engaging user experience while maintaining excellent performance across all devices and browsers.