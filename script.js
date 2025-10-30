// Interactive Animation Steps with anime.js
// Students can select different animation steps to see progressive development

let currentAnimations = []; // Store running animations
let currentCodeMode = 'anime'; // Track current code mode: 'anime' or 'animate'

// Contextual documentation for each animation step
const stepDocumentation = {
    0: {
        title: "Getting Started",
        url: "https://animejs.com/documentation",
        topics: ["Installation", "Basic Setup", "First Animation"]
    },
    1: {
        title: "Targets & Properties",
        url: "https://animejs.com/v3/documentation/#cssSelector",
        topics: ["CSS Selectors", "Opacity", "Translate", "Duration"]
    },
    2: {
        title: "Stagger Animations",
        url: "https://animejs.com/v3/documentation/#staggeringBasics",
        topics: ["anime.stagger()", "Delay", "Multiple Elements", "Timing"]
    },
    3: {
        title: "Elastic & Spring Effects",
        url: "https://animejs.com/v3/documentation/#elasticEasing",
        topics: ["Spring Physics", "Easing Functions", "Scale", "Bounce Effects"]
    },
    4: {
        title: "Transform Animations",
        url: "https://animejs.com/v3/documentation/#CSStransforms",
        topics: ["Rotate", "Transform Properties", "Delay Timing", "Opacity"]
    },
    5: {
        title: "Color & Timeline",
        url: "https://animejs.com/v3/documentation/#colors",
        topics: ["Color Animation", "Timeline", "Complex Sequences", "Linear Easing"]
    }
};

// Function to switch between anime() and animate() code modes
function switchCodeMode(mode) {
    currentCodeMode = mode;

    // Update button states
    const animeToggle = document.getElementById('animeToggle');
    const animateToggle = document.getElementById('animateToggle');

    if (mode === 'anime') {
        animeToggle.classList.add('active');
        animateToggle.classList.remove('active');
    } else {
        animateToggle.classList.add('active');
        animeToggle.classList.remove('active');
    }

    // Update code display if a step is selected
    const currentStep = parseInt(document.getElementById('animationStep').value);
    updateCodeViewer(currentStep);
}

// Animation step definitions
const animationSteps = {
    0: {
        name: "No Animation",
        description: "Static profile card without any animations",
        animeCode: `<span class="code-comment">// No animation - elements are already in their final state</span>
<span class="code-comment">// Focus on understanding the structure before adding animations</span>`,
        animateCode: `<span class="code-comment">// No animation - elements are already in their final state</span>
<span class="code-comment">// Focus on understanding the structure before adding animations</span>`,
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
        animeCode: `<span class="code-comment">// Animate profile card entrance</span>
<span class="code-function">anime</span>({
  <span class="code-property">targets</span>: <span class="code-target">'.profile-card'</span>,
  <span class="code-property">opacity</span>: [<span class="code-value">0, 1</span>],
  <span class="code-property">translateY</span>: [<span class="code-value">50, 0</span>],
  <span class="code-property">duration</span>: <span class="code-value">1000</span>,
  <span class="code-property">easing</span>: <span class="code-value">'easeOutQuad'</span>
});`,
        animateCode: `<span class="code-comment">// Extract animate and stagger functions from anime object (v4)</span>
<span class="code-keyword">const</span> { <span class="code-function">animate</span>, <span class="code-function">stagger</span> } = <span class="code-variable">anime</span>;

<span class="code-comment">// Animate profile card entrance using v4 animate() function</span>
<span class="code-comment">// Note: In v4, targets becomes first argument, easing becomes ease</span>
<span class="code-function">animate</span>(<span class="code-target">'.profile-card'</span>, {
  <span class="code-property">opacity</span>: [<span class="code-value">0, 1</span>],
  <span class="code-property">translateY</span>: [<span class="code-value">50, 0</span>],
  <span class="code-property">duration</span>: <span class="code-value">1000</span>,
  <span class="code-property">ease</span>: <span class="code-value">'outQuad'</span>
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
        animeCode: `<span class="code-comment">// Animate social links with stagger effect</span>
<span class="code-function">anime</span>({
  <span class="code-property">targets</span>: <span class="code-target">'.link-btn'</span>,
  <span class="code-property">opacity</span>: [<span class="code-value">0, 1</span>],
  <span class="code-property">translateY</span>: [<span class="code-value">30, 0</span>],
  <span class="code-property">delay</span>: <span class="code-function">anime.stagger</span>(<span class="code-value">100</span>),
  <span class="code-property">duration</span>: <span class="code-value">800</span>,
  <span class="code-property">easing</span>: <span class="code-value">'easeOutExpo'</span>
});`,
        animateCode: `<span class="code-comment">// Extract animate and stagger functions from anime object (v4)</span>
<span class="code-keyword">const</span> { <span class="code-function">animate</span>, <span class="code-function">stagger</span> } = <span class="code-variable">anime</span>;

<span class="code-comment">// Animate social links with stagger effect using v4 syntax</span>
<span class="code-comment">// Note: In v4, we use stagger() function directly, easing becomes ease</span>
<span class="code-function">animate</span>(<span class="code-target">'.link-btn'</span>, {
  <span class="code-property">opacity</span>: [<span class="code-value">0, 1</span>],
  <span class="code-property">translateY</span>: [<span class="code-value">30, 0</span>],
  <span class="code-property">delay</span>: <span class="code-function">stagger</span>(<span class="code-value">100</span>),
  <span class="code-property">duration</span>: <span class="code-value">800</span>,
  <span class="code-property">ease</span>: <span class="code-value">'outExpo'</span>
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
        animeCode: `<span class="code-comment">// Animate avatar with elastic bouncy effect</span>
<span class="code-function">anime</span>({
  <span class="code-property">targets</span>: <span class="code-target">'.avatar'</span>,
  <span class="code-property">scale</span>: [<span class="code-value">0, 1</span>],
  <span class="code-property">opacity</span>: [<span class="code-value">0, 1</span>],
  <span class="code-property">duration</span>: <span class="code-value">1200</span>,
  <span class="code-property">easing</span>: <span class="code-value">'easeOutElastic'</span>
});`,
        animateCode: `<span class="code-comment">// Extract animate and stagger functions from anime object (v4)</span>
<span class="code-keyword">const</span> { <span class="code-function">animate</span>, <span class="code-function">stagger</span> } = <span class="code-variable">anime</span>;

<span class="code-comment">// Animate avatar with elastic bouncy effect using v4 syntax</span>
<span class="code-comment">// Note: In v4, 'easeOutElastic' becomes 'outElastic'</span>
<span class="code-function">animate</span>(<span class="code-target">'.avatar'</span>, {
  <span class="code-property">scale</span>: [<span class="code-value">0, 1</span>],
  <span class="code-property">opacity</span>: [<span class="code-value">0, 1</span>],
  <span class="code-property">duration</span>: <span class="code-value">1200</span>,
  <span class="code-property">ease</span>: <span class="code-value">'outElastic'</span>
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
        animeCode: `<span class="code-comment">// Animate name with rotation and delay</span>
<span class="code-function">anime</span>({
  <span class="code-property">targets</span>: <span class="code-target">'.name'</span>,
  <span class="code-property">rotate</span>: [<span class="code-value">-5, 0</span>],
  <span class="code-property">opacity</span>: [<span class="code-value">0, 1</span>],
  <span class="code-property">duration</span>: <span class="code-value">1000</span>,
  <span class="code-property">delay</span>: <span class="code-value">500</span>,
  <span class="code-property">easing</span>: <span class="code-value">'easeOutQuad'</span>
});`,
        animateCode: `<span class="code-comment">// Extract animate and stagger functions from anime object (v4)</span>
<span class="code-keyword">const</span> { <span class="code-function">animate</span>, <span class="code-function">stagger</span> } = <span class="code-variable">anime</span>;

<span class="code-comment">// Animate name with rotation and delay using v4 syntax</span>
<span class="code-comment">// Note: In v4, 'easeOutQuad' becomes 'outQuad'</span>
<span class="code-function">animate</span>(<span class="code-target">'.name'</span>, {
  <span class="code-property">rotate</span>: [<span class="code-value">-5, 0</span>],
  <span class="code-property">opacity</span>: [<span class="code-value">0, 1</span>],
  <span class="code-property">duration</span>: <span class="code-value">1000</span>,
  <span class="code-property">delay</span>: <span class="code-value">500</span>,
  <span class="code-property">ease</span>: <span class="code-value">'outQuad'</span>
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
        animeCode: `<span class="code-comment">// Animate bio with color transition</span>
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
        animateCode: `<span class="code-comment">// Extract animate and stagger functions from anime object (v4)</span>
<span class="code-keyword">const</span> { <span class="code-function">animate</span>, <span class="code-function">stagger</span> } = <span class="code-variable">anime</span>;

<span class="code-comment">// Animate bio with color transition using v4 syntax</span>
<span class="code-comment">// Note: In v4, 'value' property becomes 'to' in object syntax</span>
<span class="code-function">animate</span>(<span class="code-target">'.bio'</span>, {
  <span class="code-property">color</span>: [
    {<span class="code-property">to</span>: <span class="code-value">'#666666'</span>},
    {<span class="code-property">to</span>: <span class="code-value">'#FFFFFF'</span>}
  ],
  <span class="code-property">opacity</span>: [<span class="code-value">0, 1</span>],
  <span class="code-property">duration</span>: <span class="code-value">1500</span>,
  <span class="code-property">delay</span>: <span class="code-value">800</span>,
  <span class="code-property">ease</span>: <span class="code-value">'linear'</span>
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

// Function to update documentation links
function updateDocumentation(stepNumber) {
    const docLink = document.getElementById('docLink');
    const docHint = document.getElementById('docHint');
    const docTopics = document.getElementById('docTopics');

    const docs = stepDocumentation[stepNumber];

    if (docs) {
        // Update main documentation link
        docLink.href = docs.url;
        docLink.innerHTML = `📚 ${docs.title}`;

        // Update hint
        docHint.textContent = `Focus on: ${docs.topics.join(', ')}`;

        // Create topic links
        docTopics.innerHTML = docs.topics.map(topic =>
            `<span class="doc-topic">${topic}</span>`
        ).join('');
    }
}

// Function to update code viewer
function updateCodeViewer(stepNumber) {
    const step = animationSteps[stepNumber];
    const codeSnippet = document.getElementById('codeSnippet');
    
    if (step) {
        let codeToDisplay = '';

        if (currentCodeMode === 'anime' && step.animeCode) {
            codeToDisplay = step.animeCode;
        } else if (currentCodeMode === 'animate' && step.animateCode) {
            codeToDisplay = step.animateCode;
        } else if (step.code) {
            // Fallback to original code if specific mode not available
            codeToDisplay = step.code;
        } else {
            codeToDisplay = 'Select an animation step to see the code';
        }

        codeSnippet.innerHTML = codeToDisplay;
    } else {
        codeSnippet.innerHTML = 'Select an animation step to see the code';
    }
}

// Function to toggle code viewer
function toggleCodeViewer() {
    const codeViewer = document.getElementById('codeViewer');
    codeViewer.classList.toggle('collapsed');
}

function toggleAnimationSelector() {
    const animationSelector = document.getElementById('animationSelector');
    animationSelector.classList.toggle('collapsed');
}

// Function to refresh the current animation
function refreshCurrentAnimation() {
    const stepSelector = document.getElementById('animationStep');
    const currentStep = parseInt(stepSelector.value);

    console.log('🔄 Refreshing animation...');
    runAnimationStep(currentStep);
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
        console.log('💡 Tip: Try exploring the anime.js documentation first before looking at the solution!');
        step.animate();
        
        // Update the current step display
        document.getElementById('currentStep').textContent = 
            `Step ${stepNumber}: ${step.name}`;
        
        // Update code viewer and documentation
        updateCodeViewer(stepNumber);
        updateDocumentation(stepNumber);
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
    console.log('📚 Each step has contextual documentation links to help you learn!');
});