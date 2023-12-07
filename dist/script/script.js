




document.addEventListener('DOMContentLoaded', function() {
  // Création du tableau des données des speakers
//  création tableau des cartes
const speakers = [
  {
    name: 'Chris',
    strongName: 'Coyier',
    location: 'Milwaukee, WI',
    photoUrl: '../dist/assets/images/orators/chris@3x.jpg',
    mainTitle: 'Going Offline',
    mainText: 'You can re-visit my Web site even when you’re not connected to the Internet',
    time: '10h15',
    room: 'R2',
    link: '#'
  },
  {
    name: 'Sara',
    strongName: 'Soueidan',
    location: 'Lebano',
    photoUrl: '../dist/assets/images/orators/sara@3x.jpg',
    mainTitle: 'Going Offline',
    mainText: 'You can re-visit my Web site even when you’re not connected to the Internet',
    time: '10h15',
    room: 'R2',
    link: '#'
  },

  {
    name: 'Eric',
    strongName: 'Meyer',
    location: 'Cleveland, OH',
    photoUrl: '../dist/assets/images/orators/eric@3x.jpg',
    mainTitle: 'Going Offline',
    mainText: 'You can re-visit my Web site even when you’re not connected to the Internet',
    time: '10h15',
    room: 'R2',
    link: '#'
  },
  {
    name: 'Lea',
    strongName: 'Verou',
    location: 'Cambridge, MA',
    photoUrl: '../dist/assets/images/orators/lea@3x.jpg',
    mainTitle: 'Going Offline',
    mainText: 'You can re-visit my Web site even when you’re not connected to the Internet',
    time: '10h15',
    room: 'R2',
    link: '#'
  },
  {
    name: 'Shirley',
    strongName: 'Wu',
    location: 'San Francisco, CA',
    photoUrl: '../dist/assets/images/orators/shirley@3x.jpg',
    mainTitle: 'Going Offline',
    mainText: 'You can re-visit my Web site even when you’re not connected to the Internet',
    time: '10h15',
    room: 'R2',
    link: '#'
  },
  {
    name: 'Luke',
    strongName: 'Wroblewski',
    location: 'San Francisco, CA',
    photoUrl: '../dist/assets/images/orators/luke@3x.jpg',
    mainTitle: 'Going Offline',
    mainText: 'You can re-visit my Web site even when you’re not connected to the Internet',
    time: '10h15',
    room: 'R2',
    link: '#'
  },
  {
    name: 'Nicolas',
    strongName: 'Gallagher',
    location: 'San Francisco, CA',
    photoUrl: '../dist/assets/images/orators/nico@3x.jpg',
    mainTitle: 'Going Offline',
    mainText: 'You can re-visit my Web site even when you’re not connected to the Internet',
    time: '10h15',
    room: 'R2',
    link: '#'
  },
  {
    name: 'Rachel',
    strongName: 'Andrew',
    location: 'Bristol, UK',
    photoUrl: '../dist/assets/images/orators/rachel@3x.jpg',
    mainTitle: 'Going Offline',
    mainText: 'You can re-visit my Web site even when you’re not connected to the Internet',
    time: '10h15',
    room: 'R2',
    link: '#'
  },
  {
    name: 'Stephen',
    strongName: 'Hay',
    location: 'Leeuwarden, NL',
    photoUrl: '../dist/assets/images/orators/stephen@3x.jpg',
    mainTitle: 'Going Offline',
    mainText: 'You can re-visit my Web site even when you’re not connected to the Internet',
    time: '10h15',
    room: 'R2',
    link: '#'
  },
  {
    name: 'Paul',
    strongName: 'Irish',
    location: 'Palo Alto, CA',
    photoUrl: '../dist/assets/images/orators/paul@3x.jpg',
    mainTitle: 'Going Offline',
    mainText: 'You can re-visit my Web site even when you’re not connected to the Internet',
    time: '10h15',
    room: 'R2',
    link: '#'
  },
  {
    name: 'Nicole',
    strongName: 'Sullivan',
    location: 'San Francisco, CA',
    photoUrl: '../dist/assets/images/orators/nicole@3x.jpg',
    mainTitle: 'Going Offline',
    mainText: 'You can re-visit my Web site even when you’re not connected to the Internet',
    time: '10h15',
    room: 'R2',
    link: '#'
  },
  {
    name: 'Brad',
    strongName: 'Frost',
    location: 'Pittsburgh, PA',
    photoUrl: '../dist/assets/images/orators/brad@3x.jpg',
    mainTitle: 'Going Offline',
    mainText: 'You can re-visit my Web site even when you’re not connected to the Internet',
    time: '10h15',
    room: 'R2',
    link: '#'
  },
];

// Fonction pour créer une carte de speaker
function createSpeakerCard(speaker) {
  // Créer l'élément de section et lui ajouter une classe
  const section = document.createElement('section');
  section.classList.add('speaker');

  // Créer et configurer l'en-tête
  const header = document.createElement('header');
  header.classList.add('speaker__header');
  section.appendChild(header);

  const name = document.createElement('h2');
  name.classList.add('speaker__name');
  name.innerHTML = `${speaker.name} <strong>${speaker.strongName}</strong>`;
  header.appendChild(name);

  const location = document.createElement('p');
  location.classList.add('speaker__location');
  location.textContent = speaker.location;
  header.appendChild(location);

  const photoDiv = document.createElement('div');
  photoDiv.classList.add('speaker__photo');
  header.appendChild(photoDiv);

  const photo = document.createElement('img');
  photo.setAttribute('src', speaker.photoUrl);
  photo.setAttribute('alt', speaker.name);
  photoDiv.appendChild(photo);

  // Créer et configurer la partie principale
  const main = document.createElement('div');
  main.classList.add('speaker__main');
  section.appendChild(main);

  const mainTitle = document.createElement('h2');
  mainTitle.classList.add('speaker__main_title');
  mainTitle.textContent = speaker.mainTitle;
  main.appendChild(mainTitle);

  const mainText = document.createElement('p');
  mainText.classList.add('speaker__main_txt');
  mainText.textContent = speaker.mainText;
  main.appendChild(mainText);

  // Créer et configurer le footer
  const footer = document.createElement('footer');
  footer.classList.add('speaker__footer');
  section.appendChild(footer);

  const time = document.createElement('time');
  time.classList.add('speaker__time');
  time.classList.add('icon-schedule');
  time.textContent = speaker.time;
  footer.appendChild(time);

  const room = document.createElement('span');
  room.classList.add('speaker__room');
  room.textContent = speaker.room;
  footer.appendChild(room);

  const link = document.createElement('a');
  link.classList.add('speaker__link');
  link.setAttribute('href', speaker.link);
  link.textContent = 'about';
  footer.appendChild(link);

  return section;
}

// Parcourir le tableau speakers et ajouter chaque carte au DOM
const speakersContainer = document.getElementById('speakersContainer');
speakers.forEach(speaker => {
  speakersContainer.appendChild(createSpeakerCard(speaker));
});

  // Écouteur d'événements pour la gestion des clics sur les cartes
  let all_speakers = document.querySelector(".all_speakers");
  if (all_speakers) {
    all_speakers.addEventListener("click", function(e) {
      let mySection = e.target.closest(".speaker");
      if (!mySection) return;

      if (mySection.classList.contains("card--active")) {
        mySection.classList.remove("card--active");
      } else {
        const currentlyActive = document.querySelector(".card--active");
        if (currentlyActive) {
          currentlyActive.classList.remove("card--active");
        }
        mySection.classList.add("card--active");
      }
    });
  }
});

