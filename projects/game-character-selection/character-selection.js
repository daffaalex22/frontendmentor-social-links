// Game Character Selection - Anime.js v4+ Animations
// Import anime.js v4+ from CDN
// <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/4.0.0/anime.min.js"></script>

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Import anime.js v4+ functions
    const { animate, stagger, timeline } = anime;

    // Animation Configuration
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

        // Animate character cards with stagger
        animate('.character-card', {
            opacity: [0, 1],
            translateY: [100, 0],
            scale: [0.8, 1],
            delay: stagger(150, { start: 300 }),
            duration: config.cardAnimation.duration,
            ease: config.cardAnimation.ease
        });

        // Animate selection summary
        animate('.selection-summary', {
            opacity: [0, 1],
            translateY: [50, 0],
            delay: 800,
            duration: 600,
            ease: 'outQuad'
        });
    }

    // ==========================================
    // 2. CHARACTER CARD INTERACTIONS
    // ==========================================
    
    function initCharacterCardAnimations() {
        const characterCards = document.querySelectorAll('.character-card');
        
        characterCards.forEach(card => {
            const avatar = card.querySelector('.character-avatar');
            const indicator = card.querySelector('.selection-indicator');
            
            // Hover animations
            card.addEventListener('mouseenter', () => {
                // Card lift effect
                animate(card, {
                    translateY: -10,
                    scale: 1.02,
                    duration: config.hover.duration,
                    ease: config.hover.ease
                });

                // Avatar pulse effect
                animate(avatar, {
                    scale: 1.1,
                    rotate: [0, 5, -5, 0],
                    duration: config.hover.duration,
                    ease: config.hover.ease
                });

                // Glow effect on avatar
                animate(avatar, {
                    boxShadow: [
                        '0 0 0 rgba(0, 212, 255, 0)',
                        '0 0 20px rgba(0, 212, 255, 0.3)'
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

                // Reset avatar
                animate(avatar, {
                    scale: 1,
                    rotate: 0,
                    boxShadow: '0 0 0 rgba(0, 212, 255, 0)',
                    duration: config.hover.duration,
                    ease: config.hover.ease
                });
            });

            // Click/Selection animation
            card.addEventListener('click', () => {
                handleCharacterSelection(card);
            });
        });
    }

    // ==========================================
    // 3. CHARACTER SELECTION LOGIC & ANIMATIONS
    // ==========================================
    
    let selectedCharacter = null;

    function handleCharacterSelection(selectedCard) {
        const characterName = selectedCard.dataset.character;
        const characterNameElement = selectedCard.querySelector('.character-name');
        
        // Remove selection from other cards
        const otherCards = document.querySelectorAll('.character-card:not([data-character="' + characterName + '"])');
        
        // Animate deselection of other cards
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

        // Animate selection indicator
        const indicator = selectedCard.querySelector('.selection-indicator');
        animate(indicator, {
            scale: [0, 1.2, 1],
            rotate: [0, 180, 360],
            duration: config.selection.duration,
            ease: config.selection.ease
        });

        // Update selection state
        selectedCharacter = characterName;
        
        // Update selection summary with animation
        updateSelectionSummary(characterNameElement.textContent);
        
        // Enable start game button
        enableStartGameButton();
        
        // Animate stats bars for selected character
        animateCharacterStats(selectedCard);
    }

    function updateSelectionSummary(characterName) {
        const placeholder = document.querySelector('.character-placeholder');
        const summarySection = document.querySelector('.selected-character');
        
        // Fade out current text
        animate(placeholder, {
            opacity: [1, 0],
            translateX: [0, -20],
            duration: 300,
            ease: 'outQuad',
            complete: () => {
                placeholder.textContent = characterName;
                
                // Fade in new text with bounce
                animate(placeholder, {
                    opacity: [0, 1],
                    translateX: [-20, 0],
                    scale: [0.8, 1.1, 1],
                    duration: 600,
                    ease: 'outElastic(1, .6)'
                });
            }
        });
    }

    function enableStartGameButton() {
        const startButton = document.querySelector('.start-game-btn');
        const btnText = startButton.querySelector('.btn-text');
        const btnIcon = startButton.querySelector('.btn-icon');
        
        // Enable button
        startButton.disabled = false;
        
        // Animate button enable
        animate(startButton, {
            backgroundColor: ['#333', 'linear-gradient(135deg, #00d4ff, #7b2cbf)'],
            scale: [0.9, 1],
            duration: 500,
            ease: 'outBack'
        });

        // Animate button text and icon
        animate([btnText, btnIcon], {
            opacity: [0.5, 1],
            translateY: [-5, 0],
            duration: 400,
            delay: 200,
            ease: 'outQuad'
        });
    }

    // ==========================================
    // 4. STATS BAR ANIMATIONS
    // ==========================================
    
    function animateCharacterStats(card) {
        const statFills = card.querySelectorAll('.stat-fill');
        
        // Reset all stat bars first
        statFills.forEach(fill => {
            fill.style.width = '0%';
        });

        // Animate stat bars with stagger
        animate(statFills, {
            width: (el, i) => {
                const statValues = ['95%', '80%', '60%']; // Example values
                return statValues[i];
            },
            delay: stagger(100, { start: 300 }),
            duration: config.stats.duration,
            ease: config.stats.ease
        });

        // Animate stat values counting up
        const statValues = card.querySelectorAll('.stat-value');
        animate(statValues, {
            innerHTML: (el, i) => {
                const values = [95, 80, 60];
                return [0, values[i]];
            },
            round: 1,
            delay: stagger(100, { start: 300 }),
            duration: config.stats.duration,
            ease: config.stats.ease
        });
    }

    // ==========================================
    // 5. START GAME BUTTON ANIMATIONS
    // ==========================================
    
    function initStartGameButton() {
        const startButton = document.querySelector('.start-game-btn');
        
        startButton.addEventListener('mouseenter', () => {
            if (!startButton.disabled) {
                animate(startButton, {
                    translateY: -3,
                    scale: 1.05,
                    boxShadow: '0 15px 35px rgba(0, 212, 255, 0.4)',
                    duration: 300,
                    ease: 'outQuad'
                });
            }
        });

        startButton.addEventListener('mouseleave', () => {
            if (!startButton.disabled) {
                animate(startButton, {
                    translateY: 0,
                    scale: 1,
                    boxShadow: '0 5px 15px rgba(0, 212, 255, 0.2)',
                    duration: 300,
                    ease: 'outQuad'
                });
            }
        });

        startButton.addEventListener('click', () => {
            if (!startButton.disabled && selectedCharacter) {
                handleStartGame();
            }
        });
    }

    function handleStartGame() {
        const startButton = document.querySelector('.start-game-btn');
        const container = document.querySelector('.container');
        
        // Button click animation
        animate(startButton, {
            scale: [1, 0.9, 1.1, 1],
            duration: 400,
            ease: 'outElastic(1, .6)'
        });

        // Container transition effect
        animate(container, {
            opacity: [1, 0],
            scale: [1, 0.8],
            duration: 600,
            ease: 'inQuad',
            complete: () => {
                // Show game start message
                showGameStartMessage();
            }
        });
    }

    function showGameStartMessage() {
        const message = document.createElement('div');
        message.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, #1a1a2e, #2a2a3e);
            padding: 3rem;
            border-radius: 20px;
            border: 2px solid #00d4ff;
            color: white;
            text-align: center;
            z-index: 1000;
            font-family: 'Orbitron', monospace;
            box-shadow: 0 20px 40px rgba(0, 212, 255, 0.3);
        `;
        
        message.innerHTML = `
            <h2 style="margin: 0 0 1rem 0; color: #00d4ff; font-size: 2rem;">Game Starting!</h2>
            <p style="margin: 0; font-size: 1.2rem;">Selected Character: <span style="color: #00d4ff; font-weight: bold;">${selectedCharacter}</span></p>
            <p style="margin: 1rem 0 0 0; color: #b0b0b0;">Get ready for your adventure...</p>
        `;
        
        document.body.appendChild(message);
        
        // Animate message appearance
        animate(message, {
            opacity: [0, 1],
            scale: [0.5, 1],
            duration: 600,
            ease: 'outBack'
        });
    }

    // ==========================================
    // 6. ABILITY TAGS ANIMATIONS
    // ==========================================
    
    function initAbilityTagAnimations() {
        const abilityTags = document.querySelectorAll('.ability');
        
        // Stagger animation for ability tags
        animate(abilityTags, {
            opacity: [0, 1],
            translateY: [20, 0],
            scale: [0.8, 1],
            delay: stagger(50, { start: 1000 }),
            duration: 400,
            ease: 'outQuad'
        });

        // Hover effect for ability tags
        abilityTags.forEach(tag => {
            tag.addEventListener('mouseenter', () => {
                animate(tag, {
                    scale: 1.1,
                    backgroundColor: '#3d566e',
                    duration: 200,
                    ease: 'outQuad'
                });
            });

            tag.addEventListener('mouseleave', () => {
                animate(tag, {
                    scale: 1,
                    backgroundColor: 'linear-gradient(135deg, #2c3e50, #34495e)',
                    duration: 200,
                    ease: 'outQuad'
                });
            });
        });
    }

    // ==========================================
    // 7. BACKGROUND PARTICLE EFFECT (Optional)
    // ==========================================
    
    function createBackgroundEffect() {
        const container = document.querySelector('.container');
        
        // Create floating particles
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: 4px;
                height: 4px;
                background: #00d4ff;
                border-radius: 50%;
                opacity: 0.3;
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
                translateX: [0, Math.random() * 100 - 50],
                opacity: [0.3, 0],
                duration: 3000 + Math.random() * 2000,
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
        // Initialize all animation systems
        initPageLoadAnimations();
        initCharacterCardAnimations();
        initStartGameButton();
        initAbilityTagAnimations();
        
        // Start background effect
        setTimeout(createBackgroundEffect, 1000);
        
        // Periodically create new background particles
        setInterval(createBackgroundEffect, 5000);
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
window.GameCharacterAnimations = {
    toggleAnimations,
    createCustomEasing
};