const arr1 = [
    {
      id: 0,
      name: 'Multi-Post Stories',
      position: 'Multi-Post Stories',
      description: 'This is the first This is the firtst A daily selection of privately personalized reads no accounts or sign-ups required. Has been the industry standard dummy test number 1',
      img: './assets/images/speaker_01.png',
    },
    {
      id: 1,
      name: 'Multi-Post Stories',
      position: 'Multi-Post Stories',
      description: 'This is the first This is the firtst A daily selection of privately personalized reads no accounts or sign-ups required. Has been the industry standard dummy test number 1',
      img: './assets/images/speaker_01.png',
    },
    {
      id: 2,
      name: 'Multi-Post Stories',
      position: 'Multi-Post Stories',
      description: 'This is the first This is the firtst A daily selection of privately personalized reads no accounts or sign-ups required. Has been the industry standard dummy test number 1',
      img: './assets/images/speaker_01.png',
    },
  ];
  
  document.getElementById('speakers-container').innerHTML = arr1.map((items) => `<div class="speaker-card d-flex flex-row gap-3 my-4 col-md-5">
                  <img class="col-4 img-fluid" src="${items.img}" alt="">
                  <div class="d-flex flex-column text-start col-8 gap-2">
                    <h3 class="h4">${items.name}</h3>
                    <p class="title description m-0">${items.position}</p>
                    <div class="div-bar-spk"></div>
                    <p class="description-2">${items.description}</p>
                  </div>
              </div>`).join('');
  