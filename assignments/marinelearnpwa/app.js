// Register the service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .then(function() {
      console.log('Service Worker registered!');
    })
    .catch(function(error) {
      console.log('Service Worker failed:', error);
    });
}

// Load the JSON data
fetch('data.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    populateMenu(data.marineLife);
  });

// Fill the dropdown menu with animal names
function populateMenu(animals) {
  const menu = document.getElementById('animalSelect');

  animals.forEach(function(animal, index) {
    const option = document.createElement('option');
    option.value = index;
    option.textContent = animal.title;
    menu.appendChild(option);
  });

  // When user picks an animal, show its content
  menu.addEventListener('change', function() {
    if (menu.value !== '') {
      showAnimal(animals[menu.value]);
    }
  });
}

// Display the selected animal's content
function showAnimal(animal) {
  const card = document.getElementById('card');

  card.innerHTML = `
    <img src="${animal.image}" alt="${animal.title}">
    <h2>${animal.title}</h2>
    <p>${animal.description}</p>
    <button onclick="playAudio('${animal.audio}')">🔊 Play Audio</button>
  `;

  card.style.display = 'block';
}

// Play the audio for the selected animal
function playAudio(audioSrc) {
  const audio = new Audio(audioSrc);
  audio.play();
}
