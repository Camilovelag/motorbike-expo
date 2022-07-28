const arr1 = [
    {
      id: 0,
      popuptitle: 'Multi-Post Stories',
      popupdescription: 'This is the first This is the firtst A daily selection of privately personalized reads no accounts or sign-ups required. Has been the industry standard dummy test number 1',
      popuptec: ['CSS', 'Html', 'Bootstrap', 'Ruby'],
      popupimg: './images/card_works_background-alt-2.png',
      btnlive: 'https://www.github.com',
      btnsource: 'https://www.github.com',
      btnName: 'btn1',
      btnimg1: './pictures/TimeAndIcons/github.png',
      btnimg2: './pictures/TimeAndIcons/github.png',
    },
    {
      id: 1,
      popuptitle: 'Multi-Post Stories',
      popupdescription: 'This is the second A daily for this is a test and is test number 2',
      popuptec: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
      popupimg: './images/card_works_background-alt-3.png',
      btnlive: 'https://www.github.com',
      btnsource: 'https://www.github.com',
      btnName: 'btn3',
      btnimg1: './pictures/TimeAndIcons/github.png',
      btnimg2: './pictures/TimeAndIcons/github.png',
    },
    {
      id: 2,
      popuptitle: 'Multi-Post Stories',
      popupdescription: 'This is the third A daily for this is a test and is test number 3',
      popuptec: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
      popupimg: './images/card_works_background-alt-4.png',
      btnlive: 'https://www.github.com',
      btnsource: 'https://www.github.com',
      btnName: 'btn4',
      btnimg1: './pictures/TimeAndIcons/github.png',
      btnimg2: './pictures/TimeAndIcons/github.png',
    },
  ];
  
  const lang1 = arr1[0].popuptec[0];
  const lang2 = arr1[0].popuptec[1];
  const lang3 = arr1[0].popuptec[2];
  
  document.getElementById('speakers').innerHTML = arr1.map((items) => `<div class="card-works" style="background-image: url('${items.popupimg}');">  
                <h2 class="card-works-title" id="card-works-title">${items.popuptitle}</h2>
                <p class="card-works-description" id="card-works-description">${items.popupdescription}</p>
                  <a href="#popup" class="card-works-button project-2" id="project-${items.id}">See Project</a>
              </div>`).join('');
  