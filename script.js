const phrases = ["an Artist. ", "an Innovator. ", "a Creator. ", "a Leader. "];
const dynamicText = document.querySelector(".dynamic-text");
let currentPhraseIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentPhrase = phrases[currentPhraseIndex];
  
  if (!isDeleting) {
    // Typing
    dynamicText.textContent = currentPhrase.slice(0, currentCharIndex++);
  } else {
    // Deleting
    dynamicText.textContent = currentPhrase.slice(0, currentCharIndex--);
  }

  // Determine delay
  let delay = isDeleting ? 100 : 200;

  if (!isDeleting && currentCharIndex === currentPhrase.length) {
    // Pause before deleting
    isDeleting = true;
    delay = 1000;
  } else if (isDeleting && currentCharIndex === 1) {
    // Move to next phrase
    isDeleting = false;
    currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
    delay = 500;
  }

  setTimeout(typeEffect, delay);
}

// Start the effect
typeEffect();
