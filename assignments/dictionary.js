// The speech engine - given any text, speaks it out loud
function speak(textToSay) {
  const message = new SpeechSynthesisUtterance(textToSay);
  message.pitch = 1.2;
  message.rate  = 1.0;
  window.speechSynthesis.speak(message);
}

// Runs when user picks a word from the dropdown
// Finds the sentence stored in that option and puts it in the textarea
function syncWord() {
  const menu    = document.getElementById("wordSelect");
  const display = document.getElementById("sentenceDisplay");

  if (menu.selectedIndex > 0) {
    const selectedOption = menu.options[menu.selectedIndex];
    display.value = selectedOption.dataset.sentence;
  } else {
    display.value = "";
  }
}

// Speaks the currently selected word
function speakWord() {
  const menu = document.getElementById("wordSelect");

  if (menu.selectedIndex > 0) {
    speak(menu.value);
  } else {
    alert("Please select a word first.");
  }
}

// Speaks the sentence shown in the textarea
function speakSentence() {
  const display = document.getElementById("sentenceDisplay");

  if (display.value.trim() !== "") {
    speak(display.value);
  } else {
    alert("Please select a word first.");
  }
}
