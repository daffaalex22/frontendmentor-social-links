// Interactive Animation Steps with anime.js
// Students can select different animation steps to see progressive development

let currentAnimations = []; // Store running animations

// Animation step definitions
const animationSteps = {
    0: {
        name: "No Animation",
        description: "Static profile card without any animations",
        code: `<span class="code-comment">// No animation - just set final state</span>
<span class="code-function">anime.set</span>(<span class="code-target">'.profile-card'</span>, { <span class="code-property">opacity</span>: <span class="code-value">1</span>, <span class="code-property">translateY</span>: <span class="code-value">0</span> });
<span class="code-function">anime.set</span>(<span class="code-target">'.link-btn'</span>, { <span class="code-property">opacity</span>: <span class="code-value">1</span>, <span class="code-property">translateY</span>: <span class="code-value">0</span> });
<span class="code-function">anime.set</span>(<span class="code-target">'.avatar'</span>, { <span class="code-property">scale</span>: <span class="code-value">1</span>, <span class="code-property">opacity</span>: <span class="code-value">1</span> });
<span class="code-function">anime.set</span>(<span class="code-target">'.name'</span>, { <span class="code-property">rotate</span>: <span class="code-value">0</span>, <span class="code-property">opacity</span>: <span class="code-value">1</span> });
<span class="code-function">anime.set</span>(<span class="code-target">'.bio'</span>, { <span class="code-property">color</span>: <span class="code-value">'#FFFFFF'</span>, <span class="code-property">opacity</span>: <span class="code-value">1</span> });`,
        animate: function() {
            // Reset all elements to their final state
            anime.set('.profile-card', { opacity: 1, translateY: 0 });
            anime.set('.link-btn', { opacity: 1, translateY: 0 });
            anime.set('.avatar', { scale: 1, opacity: 1 });
            anime.set('.name', { rotate: 0, opacity: 1 });
            anime.set('.bio', { color: '#FFFFFF', opacity: 1 });
        }
    },
    1: {
        name: "Basic Fade-in",
        description: "Profile card fades in and slides up",
        code: `<span class="code-comment">// Reset elements to starting state</span>
<span class="code-function">anime.set</span>(<span class="code-target">'.profile-card'</span>, { <span class="code-property">opacity</span>: <span class="code-value">0</span>, <span class="code-property">translateY</span>: <span class="code-value">50</span> });

<span class="code-comment">// Animate profile card entrance</span>
<span class="code-function">anime</span>({
  <span class="code-property">targets</span>: <span class="code-target">'.profile-card'</span>,
  <span class="code-property">opacity</span>: [<span class="code-value">0, 1</span>],
  <span class="code-property">translateY</span>: [<span class="code-value">50, 0</span>],
  <span class="code-property">duration</span>: <span class="code-value">1000</span>,
  <span class="code-property">easing</span>: <span class="code-value">'easeOutQuad'</span>
});`,
        animate: function() {
            // Reset first
            anime.set('.profile-card', { opacity: 0, translateY: 50 });
            anime.set('.link-btn', { opacity: 1, translateY: 0 });
            anime.set('.avatar', { scale: 1, opacity: 1 });
            anime.set('.name', { rotate: 0, opacity: 1 });
            anime.set('.bio', { color: '#FFFFFF', opacity: 1 });
            
            // Animate profile card
            currentAnimations.push(
                anime({
                    targets: '.profile-card',
                    opacity: [0, 1],
                    translateY: [50, 0],
                    duration: 1000,
                    easing: 'easeOutQuad'
                })
            );
        }
    },
    2: {
        name: "Staggered Social Links",
        description: "Social buttons cascade in with staggered timing",
        code: `<span class="code-comment">// Reset social links to starting state</span>
<span class="code-function">anime.set</span>(<span class="code-target">'.link-btn'</span>, { <span class="code-property">opacity</span>: <span class="code-value">0</span>, <span class="code-property">translateY</span>: <span class="code-value">30</span> });

<span class="code-comment">// Animate social links with stagger effect</span>
<span class="code-function">anime</span>({
  <span class="code-property">targets</span>: <span class="code-target">'.link-btn'</span>,
  <span class="code-property">opacity</span>: [<span class="code-value">0, 1</span>],
  <span class="code-property">translateY</span>: [<span class="code-value">30, 0</span>],
  <span class="code-property">delay</span>: <span class="code-function">anime.stagger</span>(<span class="code-value">100</span>),
  <span class="code-property">duration</span>: <span class="code-value">800</span>,
  <span class="code-property">easing</span>: <span class="code-value">'easeOutExpo'</span>
});`,
        animate: function() {
            // Reset first
            anime.set('.profile-card', { opacity: 0, translateY: 50 });
            anime.set('.link-btn', { opacity: 0, translateY: 30 });
            anime.set('.avatar', { scale: 1, opacity: 1 });
            anime.set('.name', { rotate: 0, opacity: 1 });
            anime.set('.bio', { color: '#FFFFFF', opacity: 1 });
            
            // Animate profile card
            currentAnimations.push(
                anime({
                    targets: '.profile-card',
                    opacity: [0, 1],
                    translateY: [50, 0],
                    duration: 1000,
                    easing: 'easeOutQuad'
                })
            );
            
            // Animate social links with stagger
            currentAnimations.push(
                anime({
                    targets: '.link-btn',
                    opacity: [0, 1],
                    translateY: [30, 0],
                    delay: anime.stagger(100),
                    duration: 800,
                    easing: 'easeOutExpo'
                })
            );
        }
    },
    3: {
        name: "Elastic Avatar Scale",
        description: "Profile picture grows with bouncy elastic effect",
        code: `<span class="code-comment">// Reset avatar to starting state</span>
<span class="code-function">anime.set</span>(<span class="code-target">'.avatar'</span>, { <span class="code-property">scale</span>: <span class="code-value">0</span>, <span class="code-property">opacity</span>: <span class="code-value">0</span> });

<span class="code-comment">// Animate avatar with elastic bouncy effect</span>
<span class="code-function">anime</span>({
  <span class="code-property">targets</span>: <span class="code-target">'.avatar'</span>,
  <span class="code-property">scale</span>: [<span class="code-value">0, 1</span>],
  <span class="code-property">opacity</span>: [<span class="code-value">0, 1</span>],
  <span class="code-property">duration</span>: <span class="code-value">1200</span>,
  <span class="code-property">easing</span>: <span class="code-value">'easeOutElastic'</span>
});`,
        animate: function() {
            // Reset first
            anime.set('.profile-card', { opacity: 0, translateY: 50 });
            anime.set('.link-btn', { opacity: 0, translateY: 30 });
            anime.set('.avatar', { scale: 0, opacity: 0 });
            anime.set('.name', { rotate: 0, opacity: 1 });
            anime.set('.bio', { color: '#FFFFFF', opacity: 1 });
            
            // Animate profile card
            currentAnimations.push(
                anime({
                    targets: '.profile-card',
                    opacity: [0, 1],
                    translateY: [50, 0],
                    duration: 1000,
                    easing: 'easeOutQuad'
                })
            );
            
            // Animate social links with stagger
            currentAnimations.push(
                anime({
                    targets: '.link-btn',
                    opacity: [0, 1],
                    translateY: [30, 0],
                    delay: anime.stagger(100),
                    duration: 800,
                    easing: 'easeOutExpo'
                })
            );
            
            // Animate avatar with elastic scale
            currentAnimations.push(
                anime({
                    targets: '.avatar',
                    scale: [0, 1],
                    opacity: [0, 1],
                    duration: 1200,
                    easing: 'easeOutElastic'
                })
            );
        }
    },
    4: {
        name: "Name Rotation",
        description: "Name rotates into place with fade-in effect",
        code: `<span class="code-comment">// Reset name to starting state</span>
<span class="code-function">anime.set</span>(<span class="code-target">'.name'</span>, { <span class="code-property">rotate</span>: <span class="code-value">-5</span>, <span class="code-property">opacity</span>: <span class="code-value">0</span> });

<span class="code-comment">// Animate name with rotation and delay</span>
<span class="code-function">anime</span>({
  <span class="code-property">targets</span>: <span class="code-target">'.name'</span>,
  <span class="code-property">rotate</span>: [<span class="code-value">-5, 0</span>],
  <span class="code-property">opacity</span>: [<span class="code-value">0, 1</span>],
  <span class="code-property">duration</span>: <span class="code-value">1000</span>,
  <span class="code-property">delay</span>: <span class="code-value">500</span>,
  <span class="code-property">easing</span>: <span class="code-value">'easeOutQuad'</span>
});`,
        animate: function() {
            // Reset first
            anime.set('.profile-card', { opacity: 0, translateY: 50 });
            anime.set('.link-btn', { opacity: 0, translateY: 30 });
            anime.set('.avatar', { scale: 0, opacity: 0 });
            anime.set('.name', { rotate: -5, opacity: 0 });
            anime.set('.bio', { color: '#FFFFFF', opacity: 1 });
            
            // Animate profile card
            currentAnimations.push(
                anime({
                    targets: '.profile-card',
                    opacity: [0, 1],
                    translateY: [50, 0],
                    duration: 1000,
                    easing: 'easeOutQuad'
                })
            );
            
            // Animate social links with stagger
            currentAnimations.push(
                anime({
                    targets: '.link-btn',
                    opacity: [0, 1],
                    translateY: [30, 0],
                    delay: anime.stagger(100),
                    duration: 800,
                    easing: 'easeOutExpo'
                })
            );
            
            // Animate avatar with elastic scale
            currentAnimations.push(
                anime({
                    targets: '.avatar',
                    scale: [0, 1],
                    opacity: [0, 1],
                    duration: 1200,
                    easing: 'easeOutElastic'
                })
            );
            
            // Animate name with rotation
            currentAnimations.push(
                anime({
                    targets: '.name',
                    rotate: [-5, 0],
                    opacity: [0, 1],
                    duration: 1000,
                    delay: 500,
                    easing: 'easeOutQuad'
                })
            );
        }
    },
    5: {
        name: "Complete Animation",
        description: "All animations combined with color transition",
        code: `<span class="code-comment">// Reset all elements to starting state</span>
<span class="code-function">anime.set</span>(<span class="code-target">'.bio'</span>, { <span class="code-property">color</span>: <span class="code-value">'#666666'</span>, <span class="code-property">opacity</span>: <span class="code-value">0</span> });

<span class="code-comment">// Animate bio with color transition</span>
<span class="code-function">anime</span>({
  <span class="code-property">targets</span>: <span class="code-target">'.bio'</span>,
  <span class="code-property">color</span>: [
    {<span class="code-property">value</span>: <span class="code-value">'#666666'</span>},
    {<span class="code-property">value</span>: <span class="code-value">'#FFFFFF'</span>}
  ],
  <span class="code-property">opacity</span>: [<span class="code-value">0, 1</span>],
  <span class="code-property">duration</span>: <span class="code-value">1500</span>,
  <span class="code-property">delay</span>: <span class="code-value">800</span>,
  <span class="code-property">easing</span>: <span class="code-value">'linear'</span>
});

<span class="code-comment">// Plus all previous animations...</span>`,
        animate: function() {
            // Reset first
            anime.set('.profile-card', { opacity: 0, translateY: 50 });
            anime.set('.link-btn', { opacity: 0, translateY: 30 });
            anime.set('.avatar', { scale: 0, opacity: 0 });
            anime.set('.name', { rotate: -5, opacity: 0 });
            anime.set('.bio', { color: '#666666', opacity: 0 });
            
            // Animate profile card
            currentAnimations.push(
                anime({
                    targets: '.profile-card',
                    opacity: [0, 1],
                    translateY: [50, 0],
                    duration: 1000,
                    easing: 'easeOutQuad'
                })
            );
            
            // Animate social links with stagger
            currentAnimations.push(
                anime({
                    targets: '.link-btn',
                    opacity: [0, 1],
                    translateY: [30, 0],
                    delay: anime.stagger(100),
                    duration: 800,
                    easing: 'easeOutExpo'
                })
            );
            
            // Animate avatar with elastic scale
            currentAnimations.push(
                anime({
                    targets: '.avatar',
                    scale: [0, 1],
                    opacity: [0, 1],
                    duration: 1200,
                    easing: 'easeOutElastic'
                })
            );
            
            // Animate name with rotation
            currentAnimations.push(
                anime({
                    targets: '.name',
                    rotate: [-5, 0],
                    opacity: [0, 1],
                    duration: 1000,
                    delay: 500,
                    easing: 'easeOutQuad'
                })
            );
            
            // Animate bio with color transition
            currentAnimations.push(
                anime({
                    targets: '.bio',
                    color: [
                        {value: '#666666'},
                        {value: '#FFFFFF'}
                    ],
                    opacity: [0, 1],
                    duration: 1500,
                    delay: 800,
                    easing: 'linear'
                })
            );
        }
    }
};

// Function to update code viewer
function updateCodeViewer(stepNumber) {
    const step = animationSteps[stepNumber];
    const codeSnippet = document.getElementById('codeSnippet');
    
    if (step && step.code) {
        codeSnippet.innerHTML = step.code;
    } else {
        codeSnippet.innerHTML = 'Select an animation step to see the code';
    }
}

// Function to toggle code viewer
function toggleCodeViewer() {
    const codeViewer = document.getElementById('codeViewer');
    codeViewer.classList.toggle('collapsed');
}

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
        console.log(`Running Step ${stepNumber}: ${step.name}`);
        step.animate();
        
        // Update the current step display
        document.getElementById('currentStep').textContent = 
            `Step ${stepNumber}: ${step.name}`;
        
        // Update code viewer
        updateCodeViewer(stepNumber);
    }
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
    
    // Run the initial animation (step 5 - complete animation)
    runAnimationStep(5);
    
    console.log('Interactive animation system initialized!');
    console.log('Use the dropdown in the top-right corner to explore different animation steps.');
});