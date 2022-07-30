const arr1 = [
  {
    id: 0,
    name: 'Speaker-1 Full Name',
    position: 'Speaker-1 Current Position',
    description: 'Text description 1',
    img: './assets/images/Motor-Bike-Expo-adv-1.jpg',
  },
  {
    id: 1,
    name: 'Speaker-2 Full Name',
    position: 'Speaker-2 Current Position',
    description: 'Text description 2',
    img: './assets/images/Motor-Bike-Expo-adv-2.jpg',
  },
  {
    id: 2,
    name: 'Speaker-3 Full Name',
    position: 'Speaker-3 Current Position',
    description: 'Text description 3',
    img: './assets/images/Motor-Bike-Expo-adv-3.jpg',
  },
  {
    id: 3,
    name: 'Speaker-4 Full Name',
    position: 'Speaker-4 Current Position',
    description: 'Text description 4',
    img: './assets/images/Motor-Bike-Expo-adv-4.jpg',
  },
  {
    id: 4,
    name: 'Speaker-5 Full Name',
    position: 'Speaker-5 Current Position',
    description: 'Text description 5',
    img: './assets/images/Motor-Bike-Expo-adv-5.jpg',
  },
  {
    id: 5,
    name: 'Speaker-6 Full Name',
    position: 'Speaker-6 Current Position',
    description: 'Text description 6',
    img: './assets/images/Motor-Bike-Expo-adv-6.jpg',
  },
];

document.getElementById('speakers-container').innerHTML = arr1.map((items) => `<div class="speaker-card d-flex flex-row gap-3 my-4 col-md-5">
                <img class="col-4 img-ratio" src="${items.img}" alt="">
                <div class="d-flex flex-column text-start col-8">
                  <h3 class="h4 pe-5">${items.name}</h3>
                  <p class="title-2 description m-0 d-flex pe-4">${items.position}</p>
                  <div class="div-bar-spk"></div>
                  <p class="description-2 pe-2">${items.description}</p>
                </div>
            </div>`).join('');