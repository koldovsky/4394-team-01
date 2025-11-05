const offers = [
    {
      id: 1,
      tag: "Save $50",
      name: "Starry Nights Package",
      offersBtn: "Request",
      listAdvantages: [
        { 
          img: 'img/habitations/special-offers-img.svg',
          text: "Complimentary stargazing tour;" 
        },
        { 
          img: 'img/habitations/special-offers-img.svg',
          text: "Upgraded tent amenities;" 
        },
        { 
          img: 'img/habitations/special-offers-img.svg', 
          text: "Campfire exclusive access;"
        },
        { 
          img: 'img/habitations/special-offers-img.svg', 
          text: "Free souvenir Camp mug." 
        }
      ]
    },
    {
      id: 2,
      tag: "Free activities",
      name: "Nature Explorer Deal",
      offersBtn: "Request",        
      listAdvantages: [
        { 
          img: 'img/habitations/special-offers-img.svg',
          text: "2 complimentary activities;" 
        },
        { 
          img: 'img/habitations/special-offers-img.svg',
          text: "Morning yoga lessons;" 
        },
        { 
          img: 'img/habitations/special-offers-img.svg', 
          text: "Breakfast included;"
        },
        { 
          img: 'img/habitations/special-offers-img.svg', 
          text: "Free souvenir Camp mug." 
        }
      ]
    },
    {
      id: 3,
      tag: "Enjoy 15% off",
      name: "Weekday Serenity",
      offersBtn: "Request",
      listAdvantages: [
        { 
          img: 'img/habitations/special-offers-img.svg',
          text: "Valid Friday to Sunday only;" 
        },
        { 
          img: 'img/habitations/special-offers-img.svg',
          text: "Tent Upgrade;" 
        },
        { 
          img: 'img/habitations/special-offers-img.svg', 
          text: "Campfire access;"
        },
        { 
          img: 'img/habitations/special-offers-img.svg', 
          text: "Breakfast included." 
        }
      ]
    }
]

function renderOffers(offers) {
  const offersHtml = [];

  for (const offer of offers) {
    const advantages = Array.isArray(offer.listAdvantages) ? offer.listAdvantages : [];

    const advantagesHtml = advantages.map(adv => `
      <li class="special-offers__item-advantage">
        <img src="${adv.img}" alt="Offer image" class="special-offers__image" />
        <p>${adv.text}</p>
      </li>
    `).join('');

    const offerHtml = `
      <li class="special-offers__item">
        <div class="special-offers__item-area">
          <p class="special-offers__tag">${offer.tag}</p>
          <h3 class="special-offers__name">${offer.name}</h3>
          <ul class="special-offers__list-advantages">
            ${advantagesHtml}
          </ul>
          <button class="special-offers__btn">${offer.offersBtn}</button>
        </div>
      </li>
    `;

    offersHtml.push(offerHtml);
  }

  const offersList = document.querySelector('.special-offers__list');
  if (offersList) {
    offersList.innerHTML = offersHtml.join('');
  } else {
    console.warn('Елемент .special-offers__list не знайдено у DOM');
  }
}

renderOffers(offers);
