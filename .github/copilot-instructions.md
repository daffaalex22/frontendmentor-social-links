# Copilot Instructions

This is a teaching project for learning anime.js v4+, a lightweight JavaScript animation library. The goal is to enhance an existing social links profile page with engaging animations and interactive effects using the new `animate` API.

## Project Overview

The project is a single-page static website that serves as a practical introduction to anime.js. Students will learn how to add smooth animations, transitions, and micro-interactions to a functional social links profile page. The existing HTML and CSS structure provides a foundation for implementing various animation techniques.

## Key Files

- `index.html`: The main HTML structure of the profile card that will be animated.
- `style-guide.md`: Design specifications including colors, typography, and layout dimensions.
- `style.css`: Existing CSS styles that define the base appearance and layout.
- `assets/`: Contains necessary assets including the profile picture and font files.
- `script.js`: JavaScript file where anime.js v4+ animations will be implemented using the `animate` function (create this file if it doesn't exist).

## Learning Objectives

Students will learn to:
1. **Basic Animations**: Fade-in, slide, and scale effects using the `animate` function
2. **Staggered Animations**: Coordinated animations using the `stagger` utility
3. **Interactive Animations**: Hover effects and click interactions with v4+ syntax
4. **Timeline Animations**: Complex animation sequences using anime.timeline
5. **Performance Optimization**: Efficient animation techniques with the new API

## Development Workflow

1. **Setup anime.js v4+**: Add the anime.js v4+ library to the project via CDN
2. **Initial Animations**: Create page load animations using the `animate` function
3. **Button Interactions**: Add hover and click animations using v4+ syntax
4. **Advanced Techniques**: Implement timeline-based animations and physics effects
5. **Refinement**: Fine-tune timing, easing (`ease` instead of `easing`), and performance

## Animation Examples

### Basic Fade-in Animation
```javascript
// Fade in the profile card on page load using v4+ animate function
const { animate } = anime;

animate('.profile-card', {
  opacity: [0, 1],
  translateY: [50, 0],
  duration: 1000,
  ease: 'outQuad'  // Note: 'easing' becomes 'ease' in v4+
});
```

### Staggered Button Animation
```javascript
// Animate social buttons with stagger effect using v4+ syntax
const { animate, stagger } = anime;

animate('.social-link', {
  opacity: [0, 1],
  translateY: [30, 0],
  delay: stagger(100),  // Note: anime.stagger() becomes stagger() in v4+
  duration: 800,
  ease: 'outExpo'       // Note: 'easing' becomes 'ease' in v4+
});
```

### Hover Effect
```javascript
// Scale buttons on hover using v4+ syntax
const { animate } = anime;

document.querySelectorAll('.social-link').forEach(link => {
  link.addEventListener('mouseenter', () => {
    animate(link, {
      scale: 1.05,
      duration: 300,
      ease: 'outQuad'  // Note: 'easing' becomes 'ease' in v4+
    });
  });
});
```

## Teaching Tips

- Start with simple animations and gradually increase complexity
- Demonstrate different easing functions and their effects (using `ease` instead of `easing`)
- Show how to chain animations using timelines
- Emphasize performance considerations and best practices
- Encourage experimentation with different animation parameters
- Highlight the differences between v3 and v4+ syntax (targets as first argument, stagger() function, etc.)

## Git Commit Message Standards

Students should follow professional commit message conventions when saving their work:

### Commit Message Format
```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

### Types
- **feat**: New animation feature or functionality
- **fix**: Bug fix in existing animation
- **docs**: Documentation changes (README, comments)
- **style**: Code formatting, CSS changes without logic impact
- **refactor**: Code refactoring without changing behavior
- **test**: Adding or updating tests
- **chore**: Maintenance tasks, dependency updates

### Examples
```bash
# Good commit messages
feat(animations): add staggered fade-in for social buttons
fix(timing): adjust animation duration for smoother transitions
docs(readme): update installation instructions for anime.js v4
refactor(profile): optimize avatar animation performance
style(css): improve button hover effects

# Avoid these
"fixed stuff"
"updates"
"animation changes"
"wip"
```

### Best Practices
- Use present tense ("add" not "added" or "adds")
- Keep the first line under 50 characters
- Capitalize the subject line
- Don't end the subject line with a period
- Use the imperative mood ("fix bug" not "fixes bug")
- Separate subject from body with blank line
- Wrap the body at 72 characters
- Explain what and why, not how
d