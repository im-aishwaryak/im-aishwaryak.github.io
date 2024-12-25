const phrases = ["an Innovator. ", "a Developer. ", "a Leader. ", "an Artist. ", "a Mathematician. "];
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

document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("theme-toggle");

  // Load saved theme from localStorage
  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);

  // Update button text
  toggleButton.textContent = savedTheme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode";

  // Toggle theme on button click
  toggleButton.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);

    toggleButton.textContent = newTheme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode";
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const secretCode = "PANEERWITCH";
  let input = "";

  document.addEventListener("keydown", (event) => {
    input += event.key.toUpperCase(); // Capture keypress and make it uppercase
    if (input.length > secretCode.length) {
      input = input.slice(-secretCode.length); // Keep the last n characters
    }

    if (input === secretCode) {
      window.location.href = "C:\\Users\\aishw\\OneDrive\\Documents\\GitHub\\Personal-Website\\secret-room.html"; // Replace with your secret page URL
    }
  });
});


// Start the effect
typeEffect();
