const items = [
  { id: 1, title: "Книжки так Кістяний Пил", category: "books", img: "/img/1-b.jpg", desc: "Казка від Тревіса Бродлі" },
  { id: 2, title: "The Division", category: "games", img: "/img/1-g.jpg", desc: "Постапокаліптичний світ у Нью Йорку" },
  { id: 3, title: "Рос-Українська війна", category: "books", img: "/img/2-b.jpg", desc: "Опис подій самого великого конфлікту 21 століття" },
  { id: 4, title: "Dishonored", category: "games", img: "/img/2-g.jpg", desc: "Стімпанк стелс гра" },
  { id: 5, title: "Книжки то любов", category: "books", img: "/img/3-b.jpg", desc: "Як отримати любов до книжок?" },
  { id: 6, title: "Ghost Of Tsusima", category: "games", img: "/img/3-g.jpg", desc: "Станьте самураєм і відвоюйте свої землі!" },
  { id: 7, title: "Чернівці", category: "books", img: "/img/4-b.jpg", desc: "Тур книжка для поїздки" },
  { id: 8, title: "Control", category: "games", img: "/img/5-g.jpg", desc: "Розслідуйте корпорацію і аномалії" },
  { id: 9, title: "Переслідуваний Аделіні", category: "books", img: "/img/5-b.jpg", desc: "якась дічь" },
  { id: 10, title: "Borderlands 3", category: "games", img: "/img/4-g.jpg", desc: "вибухи шаленство" },
  { id: 11, title: "Тінь у ЖАРИВІ", category: "books", img: "/img/6-b.jpg", desc: "жариво" },
  { id: 12, title: "Far Cry 4", category: "games", img: "/img/6-g.jpg", desc: "наркоманія в гімалаях" },
  { id: 13, title: "Вогні Небес", category: "books", img: "/img/7-b.png", desc: "небесні вогнні" },
  { id: 14, title: "The Crew 2", category: "games", img: "/img/7-g.jpg", desc: "гонки" },
  { id: 15, title: "Володар Перстнів", category: "books", img: "/img/8-b.jpg", desc: "моя прелесть" },
  { id: 16, title: "MAX PAYNE", category: "games", img: "/img/8-g.jpg", desc: "Максу боляче" },
  { id: 17, title: "ШПИГУНСЬКЕ УЗБЕРЕЖЖЯ", category: "books", img: "/img/9-b.jpg", desc: "шпигуни" },
  { id: 18, title: "Formula 1 2024", category: "games", img: "/img/9-g.jpg", desc: "макс ферстапен" },
  { id: 19, title: "Коти Вояки", category: "books", img: "/img/10-b.jpg", desc: "фурі коти воюють" },
  { id: 20, title: "Star Citizen", category: "games", img: "/img/10-g.jpg", desc: "Космо сім" },
];


let visibleCount = 2;


function renderCards(filter = "all") {
  const container = document.getElementById("card-container");
  container.innerHTML = "";

  const filteredItems = filter === "all" ? items : items.filter(item => item.category === filter);
  const toShow = filteredItems.slice(0, visibleCount);

  toShow.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${item.img}" alt="${item.title}">
      <h3>${item.title}</h3>
      <div class="desc">${item.desc}</div>
    `;
    card.addEventListener("click", () => {
      card.classList.toggle("expanded");
    });
    container.appendChild(card);
  });

  const loadMoreBtn = document.getElementById("loadMoreBtn");
  loadMoreBtn.style.display = (visibleCount >= filteredItems.length) ? "none" : "inline-block";
}


window.addEventListener("load", () => {
  renderCards(); 


  setTimeout(() => {
    showAdModal();
  }, 2000);
});


document.getElementById("categoryFilter").addEventListener("change", (e) => {
  visibleCount = 2;
  renderCards(e.target.value);
});


document.getElementById("loadMoreBtn").addEventListener("click", () => {
  visibleCount += 2;
  renderCards(document.getElementById("categoryFilter").value);
});



 

window.addEventListener("load", () => {
  const adModal = document.getElementById("adModal");
  const closeAdBtn = document.getElementById("closeAdBtn");
  const timerSpan = document.getElementById("timer");


  function showAdModal() {
    let adCountdown = 5;
    adModal.classList.remove("hidden");
    closeAdBtn.disabled = true;
    timerSpan.textContent = adCountdown;

    const countdownInterval = setInterval(() => {
      adCountdown--;
      timerSpan.textContent = adCountdown;
      if (adCountdown <= 0) {
        clearInterval(countdownInterval);
        closeAdBtn.disabled = false;
        timerSpan.textContent = "";
      }
    }, 1000);
  }

  setTimeout(() => {
    showAdModal();
  }, 2000);

  closeAdBtn.addEventListener("click", () => {
    adModal.classList.add("hidden");
  });
});

const promoBanner = document.getElementById("promo-banner");
const promoTimer = document.getElementById("promo-timer");
const claimOfferBtn = document.getElementById("claimOfferBtn");



let secondsLeft = 10;
promoBanner.classList.remove("hidden");
promoTimer.textContent = secondsLeft;

const promoCountdown = setInterval(() => {
  secondsLeft--;
  promoTimer.textContent = secondsLeft;

  if (secondsLeft <= 0) {
    clearInterval(promoCountdown);
    promoBanner.classList.add("hidden");
  }
}, 1000);


closePromoBtn.addEventListener("click", () => {
  clearInterval(promoCountdown);
  promoBanner.classList.add("hidden");
});