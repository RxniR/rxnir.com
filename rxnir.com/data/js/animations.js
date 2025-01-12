const ANIMATIONS_DISABLED_CLASS = 'animations-disabled';

function addAnimations() {
    const elements = document.querySelectorAll('[data-animation]');
    elements.forEach((el) => {
        const animationType = el.dataset.animation;
        const animationDuration = el.dataset.duration || '1s';
        const animationDelay = el.dataset.delay || '0s';

        el.style.animationName = animationType;
        el.style.animationDuration = animationDuration;
        el.style.animationDelay = animationDelay;
        el.style.animationFillMode = 'forwards';
    });
}

function enableAnimations() {
    document.body.classList.remove(ANIMATIONS_DISABLED_CLASS);
    localStorage.setItem('animationsEnabled', 'true');
    addAnimations();
}

function disableAnimations() {
    document.body.classList.add(ANIMATIONS_DISABLED_CLASS);
    localStorage.setItem('animationsEnabled', 'false');
    removeAnimations();
}

function removeAnimations() {
    const elements = document.querySelectorAll('[data-animation]');
    elements.forEach((el) => {
        el.style.animationName = '';
        el.style.animationDuration = '';
        el.style.animationDelay = '';
    });
}

function toggleAnimations() {
    if (document.body.classList.contains(ANIMATIONS_DISABLED_CLASS)) {
        enableAnimations();
    } else {
        disableAnimations();
    }
}

function applySavedAnimationPreference() {
    const animationsEnabled = localStorage.getItem('animationsEnabled') === 'true';
    if (animationsEnabled) {
        enableAnimations();
    } else {
        disableAnimations();
    }
}

function attachAnimationToggleButton(buttonId) {
    const button = document.getElementById(buttonId);
    if (button) {
        button.addEventListener('click', toggleAnimations);
        button.textContent = document.body.classList.contains(ANIMATIONS_DISABLED_CLASS)
            ? 'Enable Animations'
            : 'Disable Animations';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    applySavedAnimationPreference();
    addAnimations();
});
