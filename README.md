# 🎨 Anime.js Learning Projects

Welcome to the anime.js v4+ learning workspace! This repository contains multiple projects designed to teach modern web animation techniques using the anime.js library.

## 📁 Project Structure

```
├── projects/
│   ├── social-links-profile/     # Professional profile animations
│   └── birthday-card/             # Fun celebratory animations
├── design/                       # Shared design assets
└── README.md                     # This file
```

## 🚀 Available Projects

### 1. Social Links Profile 📱
**Location**: `projects/social-links-profile/`

A professional social links profile page enhanced with smooth animations and interactive effects. Perfect for learning business-oriented animation techniques.

**Features**:
- Profile card animations
- Social button hover effects
- Staggered entrance animations
- Timeline-based sequences

**Files**:
- `index.html` - Main profile page
- `style.css` - Professional styling
- `script.js` - anime.js animations
- `assets/` - Profile images and fonts

---

### 2. Game Character Selection 🎮
**Location**: `projects/game-character-selection/`

A character selection interface with engaging hover effects and smooth animations. Perfect for learning interactive animation techniques.

**Features**:
- Character cards with hover effects
- Selection animations with visual feedback
- Dynamic stats bars
- Game start sequence

**Files**:
- `index.html` - Character selection interface
- `index.css` - Gaming-themed styling
- `index.js` - Interactive animations
- `README.md` - Project documentation

---

### 3. Robot Builder Workshop 🤖
**Location**: `projects/robot-builder-workshop/`

A futuristic robot assembly interface where users build custom robots with animated parts and activation sequences.

**Features**:
- Interactive part selection system
- Real-time robot preview
- Dynamic stats calculation
- Robot activation animations

**Files**:
- `index.html` - Robot builder interface
- `index.css` - Tech-themed styling
- `index.js` - Assembly animations
- `README.md` - Project documentation

---

### 4. Birthday Card 🎂
**Location**: `projects/birthday-card/`

An interactive birthday card with progressive animation steps. Great for learning through hands-on experimentation with different animation types.

**Features**:
- 6 progressive animation steps
- Interactive animation selector
- Code viewer for learning
- Step-by-step build tutorial

**Files**:
- `index.html` - Animated card interface
- `index.css` - Festive styling
- `index.js` - Multi-stage animations
- `instructions/` - Build tutorial

---

## 🎯 Learning Objectives

All projects teach anime.js v4+ concepts including:

- **Basic Animations**: Fade, slide, and scale effects
- **Staggered Animations**: Coordinated multi-element animations
- **Interactive Animations**: Hover and click interactions
- **Timeline Animations**: Complex animation sequences
- **Performance Optimization**: Efficient animation techniques

## 🛠️ Getting Started

1. **Choose a project**: Navigate to `projects/` and pick a project folder
2. **Open the HTML file**: Start with `index.html`
3. **Follow the instructions**: Each project includes its own documentation
4. **Experiment**: Modify the animation code to see different effects

## 📚 anime.js v4+ Syntax

These projects use the latest anime.js v4+ syntax:

```javascript
// v4+ uses the animate function with targets as first argument
const { animate, stagger } = anime;

animate('.element', {
  opacity: [0, 1],
  translateY: [50, 0],
  duration: 1000,
  ease: 'outQuad'  // Note: 'easing' becomes 'ease' in v4+
});

// Staggered animations
animate('.multiple-elements', {
  translateX: [50, 0],
  delay: stagger(100),  // Note: anime.stagger() becomes stagger() in v4+
  duration: 800
});
```

## 🆕 Adding New Projects

To add a new project to this workspace:

1. Create a new folder in `projects/your-project-name/`
2. Add your HTML, CSS, and JavaScript files
3. Update this README with your project details
4. Follow the same file organization pattern

## 📝 Git Commit Standards

When contributing to these projects, follow professional commit message conventions:

```
<type>(<scope>): <description>

Examples:
feat(animations): add staggered fade-in for social buttons
fix(timing): adjust animation duration for smoother transitions
docs(readme): update installation instructions for anime.js v4
```

## 🎨 Design Resources

Shared design assets and guidelines are available in the `design/` folder.

---

**Happy Animating!** 🎬

Remember: Start simple, experiment often, and have fun bringing your web pages to life with anime.js!