// Robot Builder Workshop - Anime.js v4+ Animations
// Import anime.js v4+ from CDN
// <script src="https://cdn.jsdelivr.net/npm/animejs/dist/bundles/anime.umd.min.js"></script>

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Import anime.js v4+ functions
    const { animate, stagger, utils } = anime;

    // Animation Configuration
    const config = {
        pageLoad: {
            duration: 1200,
            ease: 'outExpo'
        },
        partAnimation: {
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
        assembly: {
            duration: 1000,
            ease: 'outQuart'
        },
        activation: {
            duration: 1500,
            ease: 'outElastic(1, .8)'
        }
    };

    // Robot parts data with stats
    const partsData = {
        head: {
            'basic-head': { power: 20, speed: 10, defense: 5, emoji: '🤖' },
            'advanced-head': { power: 35, speed: 25, defense: 10, emoji: '👾' },
            'battle-head': { power: 45, speed: 15, defense: 15, emoji: '🎯' }
        },
        body: {
            'light-body': { power: 15, speed: 20, defense: 20, emoji: '🛡️' },
            'standard-body': { power: 25, speed: 15, defense: 35, emoji: '⚙️' },
            'heavy-body': { power: 30, speed: 10, defense: 50, emoji: '🔧' }
        },
        arms: {
            'basic-arms': { power: 20, speed: 15, defense: 10, emoji: '🦾' },
            'laser-arms': { power: 40, speed: 30, defense: 5, emoji: '⚡' },
            'shield-arms': { power: 15, speed: 10, defense: 40, emoji: '🛡️' }
        },
        legs: {
            'standard-legs': { power: 10, speed: 20, defense: 15, emoji: '🦿' },
            'speed-legs': { power: 5, speed: 45, defense: 10, emoji: '🚀' },
            'tank-legs': { power: 15, speed: 10, defense: 45, emoji: '🏗️' }
        }
    };

    // Selected robot parts
    let selectedParts = {
        head: null,
        body: null,
        arms: null,
        legs: null
    };

    // ==========================================
    // 1. PAGE LOAD ANIMATIONS
    // ==========================================
    
    function initPageLoadAnimations() {
        // Animate header
        animate('.header', {
            opacity: [0, 1],
            translateY: [-50, 0],
            duration: config.pageLoad.duration,
            ease: config.pageLoad.ease
        });

        // Animate robot preview area
        animate('.robot-preview', {
            opacity: [0, 1],
            translateX: [-100, 0],
            delay: 300,
            duration: config.pageLoad.duration,
            ease: config.pageLoad.ease
        });

        // Animate parts selection categories with stagger
        animate('.part-category', {
            opacity: [0, 1],
            translateY: [100, 0],
            delay: stagger(200, { start: 500 }),
            duration: config.partAnimation.duration,
            ease: config.partAnimation.ease
        });

        // Animate part cards with stagger
        animate('.part-card', {
            opacity: [0, 1],
            scale: [0.8, 1],
            delay: stagger(100, { start: 800 }),
            duration: config.partAnimation.duration,
            ease: config.partAnimation.ease
        });

        // Animate action button
        animate('.action-section', {
            opacity: [0, 1],
            translateY: [50, 0],
            delay: 1200,
            duration: 600,
            ease: 'outQuad'
        });
    }

    // ==========================================
    // 2. PART CARD INTERACTIONS
    // ==========================================
    
    function initPartCardAnimations() {
        const partCards = document.querySelectorAll('.part-card');
        
        partCards.forEach(card => {
            // Hover animations
            card.addEventListener('mouseenter', () => {
                // Card lift effect
                animate(card, {
                    translateY: -5,
                    scale: 1.02,
                    duration: config.hover.duration,
                    ease: config.hover.ease
                });

                // Part preview rotation
                const preview = card.querySelector('.part-preview');
                animate(preview, {
                    rotate: [0, 5, -5, 0],
                    duration: config.hover.duration,
                    ease: config.hover.ease
                });

                // Glow effect
                animate(preview, {
                    boxShadow: [
                        '0 0 0 rgba(0, 255, 136, 0)',
                        '0 0 20px rgba(0, 255, 136, 0.3)'
                    ],
                    duration: config.hover.duration,
                    ease: config.hover.ease
                });
            });

            card.addEventListener('mouseleave', () => {
                // Reset card position
                animate(card, {
                    translateY: 0,
                    scale: 1,
                    duration: config.hover.duration,
                    ease: config.hover.ease
                });

                // Reset preview
                const preview = card.querySelector('.part-preview');
                animate(preview, {
                    rotate: 0,
                    boxShadow: '0 0 0 rgba(0, 255, 136, 0)',
                    duration: config.hover.duration,
                    ease: config.hover.ease
                });
            });

            // Click/Selection animation
            card.addEventListener('click', () => {
                handlePartSelection(card);
            });
        });
    }

    // ==========================================
    // 3. PART SELECTION LOGIC & ANIMATIONS
    // ==========================================
    
    function handlePartSelection(selectedCard) {
        const category = selectedCard.dataset.category;
        const partName = selectedCard.dataset.part;
        
        // Remove selection from other cards in same category
        const categoryCards = document.querySelectorAll(`.part-card[data-category="${category}"]`);
        categoryCards.forEach(card => {
            card.classList.remove('selected');
        });

        // Add selected class to clicked card
        selectedCard.classList.add('selected');
        
        // Animate deselection of other cards
        const otherCards = document.querySelectorAll(`.part-card[data-category="${category}"]:not([data-part="${partName}"])`);
        animate(otherCards, {
            opacity: 0.6,
            scale: 0.95,
            duration: config.selection.duration,
            ease: config.selection.ease
        });

        // Animate selection of clicked card
        animate(selectedCard, {
            opacity: 1,
            scale: 1.05,
            duration: config.selection.duration,
            ease: config.selection.ease
        });

        // Update selected parts
        selectedParts[category] = partName;
        
        // Update robot preview
        updateRobotPart(category, partName);
        
        // Update robot stats
        updateRobotStats();
        
        // Check if robot is complete
        checkRobotCompletion();
    }

    function updateRobotPart(category, partName) {
        const robotPart = document.querySelector(`.robot-${category}`);
        const partData = partsData[category][partName];
        
        if (robotPart && partData) {
            // Animate part replacement
            animate(robotPart, {
                scale: [1, 0, 1],
                opacity: [1, 0.5, 1],
                duration: config.assembly.duration,
                ease: config.assembly.ease,
                complete: () => {
                    // Update emoji
                    const partIcon = robotPart.querySelector('.part-icon');
                    if (partIcon) {
                        partIcon.textContent = partData.emoji;
                    }
                    
                    // Add glow effect to updated part
                    animate(robotPart, {
                        boxShadow: [
                            '0 0 0 rgba(0, 255, 136, 0)',
                            '0 0 30px rgba(0, 255, 136, 0.6)',
                            '0 0 0 rgba(0, 255, 136, 0)'
                        ],
                        duration: 1000,
                        ease: 'outQuad'
                    });
                }
            });
        }
    }

    function updateRobotStats() {
        let totalPower = 0;
        let totalSpeed = 0;
        let totalDefense = 0;
        
        // Calculate total stats
        Object.keys(selectedParts).forEach(category => {
            const partName = selectedParts[category];
            if (partName && partsData[category][partName]) {
                const partData = partsData[category][partName];
                totalPower += partData.power;
                totalSpeed += partData.speed;
                totalDefense += partData.defense;
            }
        });
        
        // Animate stat bars
        animateStatBar('.power', totalPower);
        animateStatBar('.speed', totalSpeed);
        animateStatBar('.defense', totalDefense);
    }

    function animateStatBar(statClass, value) {
        const statFill = `.stat-fill${statClass}`;
        const statValue = `.stat-value`;
        
        if (statFill && statValue) {
            // Animate stat bar fill
            animate(statFill, {
                width: [0, Math.min(value, 100) + '%'],
                duration: 800,
                ease: 'outQuart'
            });
            
            // Animate stat value counting up
            animate(statValue, {
                innerHTML: [0, value],
                modifier: utils.round(1),
                duration: 800,
                ease: 'outQuart'
            });
        }
    }

    function checkRobotCompletion() {
        const isComplete = Object.values(selectedParts).every(part => part !== null);
        const activateBtn = document.querySelector('.activate-robot-btn');
        const namePlaceholder = document.querySelector('.name-placeholder');
        
        if (isComplete) {
            // Enable activate button
            activateBtn.disabled = false;
            
            // Animate button enable
            animate(activateBtn, {
                backgroundColor: ['#333', 'linear-gradient(135deg, #00ff88, #00aaff)'],
                scale: [0.9, 1],
                duration: 500,
                ease: 'outBack'
            });
            
            // Update robot name with animation
            animate('.name-placeholder', {
                opacity: [1, 0],
                onComplete: () => {
                    namePlaceholder.textContent = 'Ready!';
                    namePlaceholder.style.color = '#00ff88';
                    animate('.name-placeholder', {
                        opacity: [0, 1],
                        scale: [0.8, 1.1, 1],
                        duration: 600,
                        ease: 'outElastic(1, .6)'
                    });
                }
            });
        } else {
            // Disable activate button
            activateBtn.disabled = true;
            namePlaceholder.textContent = 'Incomplete';
            namePlaceholder.style.color = '#ff00aa';
        }
    }

    // ==========================================
    // 4. ACTIVATE ROBOT BUTTON ANIMATIONS
    // ==========================================
    
    function initActivateButtonAnimations() {
        const activateBtn = document.querySelector('.activate-robot-btn');
        
        activateBtn.addEventListener('mouseenter', () => {
            if (!activateBtn.disabled) {
                animate(activateBtn, {
                    translateY: -3,
                    scale: 1.05,
                    boxShadow: '0 15px 35px rgba(0, 255, 136, 0.4)',
                    duration: 300,
                    ease: 'outQuad'
                });
            }
        });

        activateBtn.addEventListener('mouseleave', () => {
            if (!activateBtn.disabled) {
                animate(activateBtn, {
                    translateY: 0,
                    scale: 1,
                    boxShadow: '0 5px 15px rgba(0, 255, 136, 0.2)',
                    duration: 300,
                    ease: 'outQuad'
                });
            }
        });

        activateBtn.addEventListener('click', () => {
            if (!activateBtn.disabled) {
                activateRobot();
            }
        });
    }

    function activateRobot() {
        const activateBtn = document.querySelector('.activate-robot-btn');
        const robotDisplay = document.querySelector('.robot-display');
        const namePlaceholder = document.querySelector('.name-placeholder');
        
        // Button click animation
        animate(activateBtn, {
            scale: [1, 0.9, 1.1, 1],
            duration: 400,
            ease: 'outElastic(1, .6)'
        });
        
        // Generate random robot name
        const robotNames = ['MegaBot', 'TechWarrior', 'CyberNinja', 'PowerMech', 'SteelGuardian', 'QuantumUnit'];
        const randomName = robotNames[Math.floor(Math.random() * robotNames.length)];
        
        // Update robot name with animation
        animate(namePlaceholder, {
            opacity: [1, 0],
            complete: () => {
                namePlaceholder.textContent = randomName;
                animate(namePlaceholder, {
                    opacity: [0, 1],
                    scale: [0.8, 1.2, 1],
                    duration: 800,
                    ease: 'outElastic(1, .8)'
                });
            }
        });
        
        // Robot activation sequence
        const robotParts = document.querySelectorAll('.robot-part');
        
        // Animate each part with stagger
        animate(robotParts, {
            scale: [1, 1.2, 1],
            rotate: [0, 5, -5, 0],
            delay: stagger(200),
            duration: config.activation.duration,
            ease: config.activation.ease
        });
        
        // Add glow effect to entire robot
        animate(robotDisplay, {
            boxShadow: [
                '0 0 0 rgba(0, 255, 136, 0)',
                '0 0 50px rgba(0, 255, 136, 0.8)',
                '0 0 0 rgba(0, 255, 136, 0)'
            ],
            duration: 2000,
            ease: 'inOutQuad'
        });
        
        // Floating animation for activated robot
        animate(robotDisplay, {
            translateY: [0, -10, 0],
            duration: 3000,
            ease: 'inOutSine',
            loop: true
        });
        
        // Show activation message
        showActivationMessage(randomName);
    }

    function showActivationMessage(robotName) {
        const message = document.createElement('div');
        message.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, #1a1a2e, #2a2a3e);
            padding: 3rem;
            border-radius: 20px;
            border: 2px solid #00ff88;
            color: white;
            text-align: center;
            z-index: 1000;
            font-family: 'Orbitron', monospace;
            box-shadow: 0 20px 40px rgba(0, 255, 136, 0.3);
        `;
        
        message.innerHTML = `
            <h2 style="margin: 0 0 1rem 0; color: #00ff88; font-size: 2rem;">Robot Activated!</h2>
            <p style="margin: 0; font-size: 1.2rem;">Robot Name: <span style="color: #00aaff; font-weight: bold;">${robotName}</span></p>
            <p style="margin: 1rem 0 0 0; color: #b0b0b0;">Your robot is ready for action!</p>
        `;
        
        document.body.appendChild(message);
        
        // Animate message appearance
        animate(message, {
            opacity: [0, 1],
            scale: [0.5, 1],
            duration: 600,
            ease: 'outBack',
            complete: () => {
                // Auto-remove message after 3 seconds
                setTimeout(() => {
                    animate(message, {
                        opacity: [1, 0],
                        scale: [1, 0.5],
                        duration: 400,
                        ease: 'inBack',
                        complete: () => {
                            message.remove();
                        }
                    });
                }, 3000);
            }
        });
    }

    // ==========================================
    // 5. BACKGROUND TECH EFFECT (Optional)
    // ==========================================
    
    function createBackgroundTechEffect() {
        const container = document.querySelector('.container');
        
        // Create floating tech particles
        for (let i = 0; i < 15; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: 3px;
                height: 3px;
                background: #00ff88;
                border-radius: 50%;
                opacity: 0.2;
                pointer-events: none;
                z-index: -1;
            `;
            
            const startX = Math.random() * window.innerWidth;
            const startY = window.innerHeight + 10;
            
            particle.style.left = startX + 'px';
            particle.style.top = startY + 'px';
            
            container.appendChild(particle);
            
            // Animate particle floating up
            animate(particle, {
                translateY: [-startY - 20],
                translateX: [0, Math.random() * 80 - 40],
                opacity: [0.2, 0],
                duration: 4000 + Math.random() * 2000,
                delay: Math.random() * 2000,
                ease: 'linear',
                complete: () => {
                    particle.remove();
                }
            });
        }
    }

    // ==========================================
    // INITIALIZATION
    // ==========================================
    
    function init() {
        // Initialize page load animations
        initPageLoadAnimations();
        
        // Initialize all animation systems
        initPartCardAnimations();
        initActivateButtonAnimations();
        
        // Start background effect
        setTimeout(createBackgroundTechEffect, 1000);
        
        // Periodically create new background particles
        setInterval(createBackgroundTechEffect, 6000);
    }

    // Start the animation system
    init();

    // ==========================================
    // PERFORMANCE OPTIMIZATION
    // ==========================================
    
    // Reduce animations for users who prefer reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        // Override animation config for reduced motion
        Object.keys(config).forEach(key => {
            config[key].duration = Math.min(config[key].duration, 300);
        });
    }

    // Handle window resize for responsive animations
    window.addEventListener('resize', () => {
        // Recalculate any position-dependent animations
        // This is a placeholder for responsive animation adjustments
    });
});

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

// Function to create custom easing
function createCustomEasing() {
    const { animate } = anime;
    
    // Example of custom easing function
    animate('.element', {
        translateY: [0, -100],
        duration: 1000,
        ease: (t) => t * t * (3.0 - 2.0 * t) // Smooth step easing
    });
}

// Function to pause/resume all animations
function toggleAnimations() {
    const { animate } = anime;
    
    if (animate.running.length > 0) {
        animate.running.forEach(animation => animation.pause());
    } else {
        // Resume paused animations
        animate.running.forEach(animation => animation.play());
    }
}

// Export functions for external use if needed
window.RobotBuilderAnimations = {
    toggleAnimations,
    createCustomEasing
};