const phrases = ["an Innovator. ", "a Developer. ", "a Leader. ", "an Artist. ", "a Mathematician. "];
const songsByArtist = {
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
  "nothing at the moment": ["", "", "", ""]
};

document.addEventListener("DOMContentLoaded", () => {
  const dynamicText = document.querySelector(".dynamic-text");
  const menuButton = document.getElementById('menu-icon');
  const dropdownMenu = document.querySelector('.vertical-nav');

  // Handle menu toggle
  if (menuButton && dropdownMenu) {
    menuButton.addEventListener('click', () => {
      dropdownMenu.classList.toggle('show');
    });
  }

  // Typing effect logic
  if (dynamicText) {
    let currentPhraseIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;

    function typeEffect() {
      const currentPhrase = phrases[currentPhraseIndex];

      if (!isDeleting) {
        dynamicText.textContent = currentPhrase.slice(0, currentCharIndex++);
      } else {
        dynamicText.textContent = currentPhrase.slice(0, currentCharIndex--);
      }

      let delay = isDeleting ? 100 : 200;

      if (!isDeleting && currentCharIndex === currentPhrase.length) {
        isDeleting = true;
        delay = 1000;
      } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        delay = 500;
      }

      setTimeout(typeEffect, delay);
    }

    typeEffect();
  }

  // "Currently Listening" logic
  function currentlyListening() {
    const artists = Object.keys(songsByArtist);
    let randomArtist, randomSong;

    do {
      randomArtist = artists[Math.floor(Math.random() * artists.length)];
      randomSong = songsByArtist[randomArtist][Math.floor(Math.random() * songsByArtist[randomArtist].length)];
    } while (!randomSong);

    const currentlyListeningElement = document.getElementById("currentlyListening");
    if (currentlyListeningElement) {
      currentlyListeningElement.innerHTML = 
        `Currently vibing to <b>${randomSong}</b> by <b>${randomArtist}</b>`;
    }
  }

  currentlyListening();
  setInterval(currentlyListening, 45000); // Update every 45 seconds
});
