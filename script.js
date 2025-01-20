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

// Get the menu button and dropdown menu
const menuButton = document.getElementById('menu-icon');
const dropdownMenu = document.querySelector('.vertical-nav');

// Add a click event listener to the menu button
menuButton.addEventListener('click', function() {
    // Toggle the 'show' class on the dropdown menu
    dropdownMenu.classList.toggle('show');
});

function secretPhrase() {
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
}

let songsByArtist = {
  "yung kai": ["blue"],
  "IVE": ["REBEL HEART"],
  "Will Not Fear": ["Bouquet (feat. YOUHA, punchnello)"],
  "TOMORROW X TOGETHER": ["Deja Vu", "Heaven", "Over The Moon", "ひとつの誓い (We'll Never Change)", "0X1=LOVESONG (I Know I Love You) feat. Seori", "Forty One Winks"],
  "ROSÉ": ["gameboy", "toxic till the end", "two years", "3am", "number one girl"],
  "Chappell Roan": ["Good Luck, Babe!"],
  "KISS OF LIFE": ["TTG", "Sugarcoat (NATTY Solo)", "Sticky", "Chemistry", "My 808", "Igloo", "R.E.M", "Nothing"],
  "Ariana Grande": ["Just Look Up (From Don't Look Up)", "34+35"],
  "aespa": ["Dopamine - GISELLE Solo", "Bored! - NINGNING Solo", "Thirsty", "Flowers", "Lucid Dream"],
  "HYBS": ["Dancing with my phone"],
  "Bruno Mars & ROSÉ": ["APT."],
  "HUH YUNJIN": ["love you twice"],
  "VIVIZ": ["Shhh!", "Full Moon", "Hypnotize"],
  "Jay Park": ["Mayday (Feat. Ty Dolla $ign)", "Taxi Blurr (Feat. NATTY from Kiss of Life)"],
  "wave to earth": ["bad"],
  "LE SSERAFIM": ["Swan Song"],
  "LeeHi": ["Bye", "H.S.K.T. (feat. Wonstein)"],
  "YOUHA": ["Flight", "Last Dance", "Satellite"],
  "keshi": ["Like That", "beside you", "Soft Spot", "UNDERSTAND"],
  "nothing at the moment" : ["", "", "", ""]
};

function currentlyListening() {
  // Pick a random artist
  const artists = Object.keys(songsByArtist);
  const randomArtist = artists[Math.floor(Math.random() * artists.length)];
  
  // Pick a random song by the artist
  const randomSong = songsByArtist[randomArtist][Math.floor(Math.random() * songsByArtist[randomArtist].length)];
  
  // Update the text content of the "currentlyListening" element
  document.getElementById("currentlyListening").innerHTML = `Currently vibing to <b>${randomSong}</b> by <b>${randomArtist}</b>`;
}

// Ensure the script runs after the DOM loads
document.addEventListener("DOMContentLoaded", () => {
  currentlyListening(); // Initial call
  setInterval(currentlyListening, 45000);
});


typeEffect();
secretPhrase();
