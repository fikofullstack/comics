import "/src/sass/style.scss";
const characters = [
  
    {
    id: 1,
    name: "Abyss",
    image: "src/img/catalog/abyss.jpg",
    description:
      "Nils Styger, известный как Abyss — мутант из Геноши с портально-измерительными способностями (втягивает предметы в «пустоту» внутри тела). Связан с Азазелем и Найткраулером, участвовал в событиях арки The Draco.",
    comics: [
      "Cable (1993) #40",
      "Uncanny X-Men (1981) #405",
      "Uncanny X-Men (1981) #429",
      "Uncanny X-Men (1981) #431",
      "Uncanny X-Men (1981) #434"
    ]
  },
  {
    id: 2,
    name: "Loki",
    image: "src/img/catalog/loki.jpg", // обязательно с расширением
    description: "In Norse mythology, Loki is a god or jötunn (or both). Loki is the son of Fárbauti and Laufey, and the brother of Helblindi and Býleistr. By the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and the world serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or Narfi and with the stallion Svaðilfari as the father, Loki gave birth—in the form of a mare—to the eight-legged horse Sleipnir. In addition, Loki is referred to as the father of Váli in the Prose Edda.",
    comics: [
      "Avengers: The Initiative (2007) #19",
      "Dark Reign: Young Avengers (2009) #1",
      "Amazing Spider-Man (1999) #503",
      "Amazing Spider-Man (1999) #504",
      "AMAZING SPIDER-MAN VOL. 7: BOOK OF EZEKIEL TPB (Trade Paperback) #1",
      "Amazing-Spider-Man: Worldwide Vol. 8 (Trade Paperback) #1",
      "Asgardians Of The Galaxy Vol. 2: War Of The Realms (Trade Paperback) #1",
      "Vengeance (2011) #4",
      "Avengers (1963) #1",
      "Avengers (1996) #1"
    ]
  },
  {
    id: 3,
    name: "Adam Warlock",
    image: "src/img/catalog/adam_black.jpg",
    description:
      "Космический защитник, созданный как «Him» и переродившийся в Adam Warlock. Носитель Soul Gem, ключевая фигура саг о Бесконечности и Стражах Галактики.",
    comics: [
      "Fantastic Four (1961) #66–67",
      "Marvel Premiere (1972) #1–2",
      "Warlock (1972) #9–15",
      "Infinity Gauntlet (1991) #1",
      "Warlock and the Infinity Watch (1992) #1",
      "Guardians of the Galaxy (2008) #25"
    ]
  },
  {
    id: 4,
    name: "Boom Boom",
    image: "src/img/catalog/boob.jpg",
    description:
      "Tabitha Smith, также Boomer/Time Bomb, создаёт взрывающиеся энергетические «пузырьки». Была в X‑Factor, New Mutants и X‑Force; позже — участница Nextwave.",
    comics: [
      "Secret Wars II (1985) #5",
      "X-Factor (1986) #11",
      "The New Mutants (1983) #76",
      "X-Force (1991) #1",
      "Nextwave: Agents of H.A.T.E. (2006) #1"
    ]
  },
  {
    id: 5,
    name: "Calypso",
    image: "src/img/catalog/cally.jpg",
    description:
      "Калипсо Эзили — колдунья‑вуду и противница Человека‑Паука, часто манипулирует Ящером и связана с Кравеном-охотником.",
    comics: [
      "The Amazing Spider-Man (1963) #209",
      "The Spectacular Spider-Man (1976) #70–73",
      "Spider-Man (1990) #1–5 (Torment)",
      "The Amazing Spider-Man (1963) #390"
    ]
  },
  {
    id: 6,
    name: "Colleen Wing",
    image: "src/img/catalog/collen.jpg",
    description:
      "Мастер меча и боевых искусств, союзница Дэнни Рэнда. Половина дуэта Daughters of the Dragon, участница Heroes for Hire.",
    comics: [
      "Marvel Premiere (1972) #19",
      "Iron Fist (1975) #1",
      "Heroes for Hire (1997) #1",
      "Daughters of the Dragon (2006) #1",
      "The Immortal Iron Fist (2006) #1"
    ]
  },
  {
    id: 7,
    name: "Daimon Hellstrom",
    image: "src/img/catalog/demon.jpg",
    description:
      "Daimon Hellstrom — «Сын Сатаны»: мистик‑экзорцист, владеющий адским огнём. Балансирует между героизмом и тёмным наследием.",
    comics: [
      "Marvel Spotlight (1971) #12",
      "Marvel Spotlight (1971) #13–24",
      "Defenders (1972) #120",
      "Hellstorm: Prince of Lies (1993) #1",
      "Ghost Rider (1990) #31"
    ]
  },
  {
    id: 8,
    name: "Damage Control",
    image: "src/img/catalog/damage.jpg",
    description:
      "Частная компания Marvel, занимающаяся уборкой и восстановлением городов после супергеройских битв; часто попадает в абсурдные ситуации.",
    comics: [
      "Damage Control (1989) #1",
      "Damage Control (1989) #2",
      "World War Hulk: Aftersmash — Damage Control (2008) #1",
      "Civil War II: Damage Control (2016) #1"
    ]
  },
  {
    id: 9,
    name: "HULK",
    image: "src/img/catalog/hulk.jpg",
    description:
      "Брюс Бэннер превращается в Халка — сверхсильного зелёного гиганта. От трагедии эксперимента с гамма‑бомбой до саг «Планета Халк» и «Мировая война Халка».",
    comics: [
      "The Incredible Hulk (1962) #1",
      "The Avengers (1963) #1",
      "The Incredible Hulk (2006) #92 (Planet Hulk)",
      "World War Hulk (2007) #1",
      "Immortal Hulk (2018) #1"
    ]
  }


];

const listContainer = document.querySelector('.catalog__list');
const infoContainer = document.querySelector('.catalog__info');

// Функция отрисовки карточек
function renderCards() {
  characters.forEach(character => {
    const card = document.createElement('div');
    card.className = 'catalog__card';
    card.innerHTML = `
      <img src="${character.image}" alt="${character.name}">
      <h3>${character.name}</h3>
    `;
    card.addEventListener('click', () => {
      renderInfo(character);
    });
    listContainer.appendChild(card);
  });
}

// Функция отображения информации о персонаже
function renderInfo(character) {
  infoContainer.innerHTML = `
    
   <div class="character">
   <div class="character__container">
   <div class="character__about">
    <img src="${character.image}" alt="${character.name}">
    
    <div class="character__btn-group">
      <h2 class="character__header">${character.name}</h2>  
      <button type="button" class="btn character__btn rondom__btn-red">Homepage</button>
      <button type="button" class="btn rondom__btn-silver">Wiki</button>
    </div>
   </div>
    <p class="character__text">${character.description}</p>
    <h4 class="character__comics">Comics:</h4>
      <ul class="character__list">
      ${character.comics.length > 0
      ? character.comics.map(comic => `<li class="character__list-item">${comic}</li>`).join("")
      : `<li class="character__comics-non">No comics found</li>`
    }
      </ul>
    </div>
   </div>
  `;
}


// Запускаем рендер карточек
renderCards();