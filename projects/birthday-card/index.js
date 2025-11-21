// Animated Birthday Card with anime.js v4+ animate API
// Perfect for young students learning animations!

let currentAnimations = []; // Store running animations

// Animation Steps for Progressive Learning
const animationSteps = {
    0: {
        name: "No Animation",
        animate: () => {
            // Reset all elements to their initial state
            const { animate } = anime;
            animate('.birthday-message', { opacity: 1, translateY: 0 });
            animate('.balloon', { opacity: 0.9, translateY: 0 });
            animate('.flame', { opacity: 1, scale: 1 });
            animate('.confetti-piece', { opacity: 0.8, translateY: 0, rotate: 0 });
            animate('.gift-box', { opacity: 1, scale: 1 });
        },
        animateCode: `// Reset all elements
const { animate } = anime;

animate('.birthday-message', { 
  opacity: 1, 
  translateY: 0 
});`
    },

    1: {
        name: "Birthday Message Fade-in",
        animate: () => {
            const { animate } = anime;
            
            // Reset first
            animate('.birthday-message', { opacity: 0, translateY: 30 });
            
            // Animate birthday message
            currentAnimations.push(
                animate('.birthday-message', {
                    opacity: [0, 1],
                    translateY: [-30, 0],
                    duration: 1500,
                    ease: 'outQuad'
                })
            );
        },
        animateCode: `// Fade in birthday message
const { animate } = anime;

animate('.birthday-message', {
  opacity: [0, 1],
  translateY: [-30, 0],
  duration: 1500,
  ease: 'outQuad'
});`
    },

    2: {
        name: "Floating Balloons",
        animate: () => {
            const { animate, stagger } = anime;
            
            // Reset balloons
            animate('.balloon', { opacity: 0, translateY: 100 });
            
            // Animate balloons floating up
            currentAnimations.push(
                animate('.balloon', {
                    opacity: [0, 0.9],
                    translateY: [100, -20],
                    delay: stagger(200),
                    duration: 2000,
                    ease: 'outExpo'
                })
            );
        },
        animateCode: `// Float balloons up with stagger
const { animate, stagger } = anime;

animate('.balloon', {
  opacity: [0, 0.9],
  translateY: [100, -20],
  delay: stagger(200),
  duration: 2000,
  ease: 'outExpo'
});`
    },

    3: {
        name: "Flickering Candle Flames",
        animate: () => {
            const { animate, stagger } = anime;
            
            // Create flickering effect for flames
            currentAnimations.push(
                animate('.flame', {
                    scale: [1, 1.2, 0.9, 1.1, 1],
                    opacity: [1, 0.8, 1, 0.9, 1],
                    delay: stagger(100),
                    duration: 1500,
                    ease: 'inOutQuad',
                    loop: true
                })
            );
        },
        animateCode: `// Make candle flames flicker
const { animate, stagger } = anime;

animate('.flame', {
  scale: [1, 1.2, 0.9, 1.1, 1],
  opacity: [1, 0.8, 1, 0.9, 1],
  delay: stagger(100),
  duration: 1500,
  ease: 'inOutQuad',
  loop: true
});`
    },

    4: {
        name: "Falling Confetti",
        animate: () => {
            const { animate, stagger } = anime;
            
            // Reset confetti position
            animate('.confetti-piece', { 
                translateY: -500, 
                rotate: 0,
                opacity: 0 
            });
            
            // Animate confetti falling
            currentAnimations.push(
                animate('.confetti-piece', {
                    translateY: [-500, 600],
                    rotate: [0, 360],
                    opacity: [0, 0.8],
                    delay: stagger(50),
                    duration: 3000,
                    ease: 'inQuad'
                })
            );
        },
        animateCode: `// Make confetti fall and spin
const { animate, stagger } = anime;

animate('.confetti-piece', {
  translateY: [-500, 600],
  rotate: [0, 360],
  opacity: [0, 0.8],
  delay: stagger(50),
  duration: 3000,
  ease: 'inQuad'
});`
    },

    5: {
        name: "Bouncing Gift Box",
        animate: () => {
            const { animate } = anime;
            
            // Animate gift box bouncing
            currentAnimations.push(
                animate('.gift-box', {
                    scale: [0.8, 1.1, 0.95, 1.05, 1],
                    translateY: [0, -20, 0, -10, 0],
                    duration: 2000,
                    ease: 'outElastic'
                })
            );
        },
        animateCode: `// Make gift box bounce
const { animate } = anime;

animate('.gift-box', {
  scale: [0.8, 1.1, 0.95, 1.05, 1],
  translateY: [0, -20, 0, -10, 0],
  duration: 2000,
  ease: 'outElastic'
});`
    },

    6: {
        name: "Complete Birthday Party!",
        animate: () => {
            const { animate, stagger } = anime;
            
            // Reset everything
            animate('.birthday-message', { opacity: 0, translateY: 30 });
            animate('.balloon', { opacity: 0, translateY: 100 });
            animate('.flame', { scale: 1, opacity: 1 });
            animate('.confetti-piece', { translateY: -500, rotate: 0, opacity: 0 });
            animate('.gift-box', { scale: 0.8, translateY: 0 });
            
            // Birthday message
            currentAnimations.push(
                animate('.birthday-message', {
                    opacity: [0, 1],
                    translateY: [-30, 0],
                    duration: 1500,
                    delay: 0,
                    ease: 'outQuad'
                })
            );
            
            // Floating balloons
            currentAnimations.push(
                animate('.balloon', {
                    opacity: [0, 0.9],
                    translateY: [100, -20],
                    delay: stagger(200),
                    duration: 2000,
                    delay: 500,
                    ease: 'outExpo'
                })
            );
            
            // Flickering flames
            currentAnimations.push(
                animate('.flame', {
                    scale: [1, 1.2, 0.9, 1.1, 1],
                    opacity: [1, 0.8, 1, 0.9, 1],
                    delay: stagger(100),
                    duration: 1500,
                    delay: 1000,
                    ease: 'inOutQuad',
                    loop: true
                })
            );
            
            // Falling confetti
            currentAnimations.push(
                animate('.confetti-piece', {
                    translateY: [-500, 600],
                    rotate: [0, 360],
                    opacity: [0, 0.8],
                    delay: stagger(50),
                    duration: 3000,
                    delay: 1500,
                    ease: 'inQuad'
                })
            );
            
            // Bouncing gift box
            currentAnimations.push(
                animate('.gift-box', {
                    scale: [0.8, 1.1, 0.95, 1.05, 1],
                    translateY: [0, -20, 0, -10, 0],
                    duration: 2000,
                    delay: 2000,
                    ease: 'outElastic'
                })
            );
        },
        animateCode: `// Complete birthday party animation!
const { animate, stagger } = anime;

// Birthday message
animate('.birthday-message', {
  opacity: [0, 1],
  translateY: [-30, 0],
  duration: 1500,
  ease: 'outQuad'
});

// Floating balloons
animate('.balloon', {
  opacity: [0, 0.9],
  translateY: [100, -20],
  delay: stagger(200),
  duration: 2000,
  delay: 500,
  ease: 'outExpo'
});

// Flickering flames
animate('.flame', {
  scale: [1, 1.2, 0.9, 1.1, 1],
  opacity: [1, 0.8, 1, 0.9, 1],
  delay: stagger(100),
  duration: 1500,
  delay: 1000,
  ease: 'inOutQuad',
  loop: true
});

// And more...`
    }
};

// Function to run a specific animation step
function runAnimationStep(stepNumber) {
    // Stop any running animations
    currentAnimations.forEach(animation => {
        if (animation && animation.pause) {
            animation.pause();
        }
    });
    currentAnimations = [];
    
    // Get the animation step
    const step = animationSteps[stepNumber];
    if (step) {
        console.log(`🎂 Running Step ${stepNumber}: ${step.name}`);
        step.animate();
        
        // Update the current step display
        document.getElementById('currentStep').textContent = 
            `Step ${stepNumber}: ${step.name}`;
        
        // Update code viewer
        updateCodeViewer(stepNumber);
    }

    // Show/hide build instructions button based on selected step
    const buildInstructionsBtn = document.getElementById('buildInstructionsBtn');
    if (stepNumber === 0) {
        buildInstructionsBtn.style.display = 'block';
    } else {
        buildInstructionsBtn.style.display = 'none';
    }
}

// Function to update code viewer
function updateCodeViewer(stepNumber) {
    const step = animationSteps[stepNumber];
    const codeSnippet = document.getElementById('codeSnippet');
    
    if (step && step.animateCode) {
        codeSnippet.textContent = step.animateCode;
    } else {
        codeSnippet.textContent = 'Select an animation step to see the code';
    }
}

// Function to refresh the current animation
function refreshCurrentAnimation() {
    const stepSelector = document.getElementById('animationStep');
    const currentStep = parseInt(stepSelector.value);
    
    console.log('🔄 Refreshing birthday animation...');
    runAnimationStep(currentStep);
}

// Function to toggle code viewer
function toggleCodeViewer() {
    const codeViewer = document.getElementById('codeViewer');
    codeViewer.classList.toggle('collapsed');
}

// Function to toggle animation selector
function toggleAnimationSelector() {
    const animationSelector = document.getElementById('animationSelector');
    animationSelector.classList.toggle('collapsed');
}

// Function to redirect to build instructions
function goToBuildInstructions() {
    console.log('📝 Redirecting to build instructions...');
    // Redirect to the build instructions page
    window.location.href = '/instructions/birthday-card/01-build-birthday-card.html';
}

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the dropdown element
    const stepSelector = document.getElementById('animationStep');
    
    // Add change event listener
    stepSelector.addEventListener('change', function() {
        const selectedStep = parseInt(this.value);
        runAnimationStep(selectedStep);
    });
    
    // Run the initial animation (step 6 - complete animation)
    runAnimationStep(6);
    
    console.log('🎂 Birthday Card Animation System initialized!');
    console.log('Use the dropdown to explore different animation steps.');
});