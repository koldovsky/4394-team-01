const offers = [
    {
        id: 1,
        tag: "Save $50",
        name: "Starry Nights Package",
        offersBtn: "Request"
    },
    {
        id: 2,
        tag: "Free activities",
        name: "Nature Explorer Deal",
        offersBtn: "Request"
    },
    {
        id: 3,
        tag: "Enjoy 15% off",
        name: "Weekday Serenity",
        offersBtn: "Request"
    }
]

function renderOffers(offers) {
    const offersHtml = [];
    for(const offer of offers) {
        const offerHtml = `
        <li class="special-offers__item">
        <div class="special-offers__item-area">
          <p class="special-offers__tag">${offer.tag}</p>
          <h3 class="special-offers__name">${offer.name}</h3>
          <ul class="special-offers__list-advantages">
            <li class="special-offers__item-advantage">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 100 100"
                  enable-background="new 0 0 100 100"
                  xml:space="preserve"
                  height="100%"
                >
                  <polygon
                    points="15.088,20.088 6.609,34.626 33.074,49.988 6.609,65.24 15.088,79.87 41.484,64.688 41.484,95.204 58.446,95.204   58.446,64.688 84.912,79.867 93.391,65.237 66.926,49.986 93.391,34.623 84.912,20.086 58.516,35.268 58.516,4.754 41.484,4.754   41.484,35.27 "
                    fill="currentColor"
                  ></polygon>
                </svg>
              </span>
              <p>Complimentary stargazing tour;</p>
            </li>
            <li class="special-offers__item-advantage">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 100 100"
                  enable-background="new 0 0 100 100"
                  xml:space="preserve"
                  height="100%"
                >
                  <polygon
                    points="15.088,20.088 6.609,34.626 33.074,49.988 6.609,65.24 15.088,79.87 41.484,64.688 41.484,95.204 58.446,95.204   58.446,64.688 84.912,79.867 93.391,65.237 66.926,49.986 93.391,34.623 84.912,20.086 58.516,35.268 58.516,4.754 41.484,4.754   41.484,35.27 "
                    fill="currentColor"
                  ></polygon>
                </svg>
              </span>
              <p>Upgraded tent amenities;</p>
            </li>
            <li class="special-offers__item-advantage">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 100 100"
                  enable-background="new 0 0 100 100"
                  xml:space="preserve"
                  height="100%"
                >
                  <polygon
                    points="15.088,20.088 6.609,34.626 33.074,49.988 6.609,65.24 15.088,79.87 41.484,64.688 41.484,95.204 58.446,95.204   58.446,64.688 84.912,79.867 93.391,65.237 66.926,49.986 93.391,34.623 84.912,20.086 58.516,35.268 58.516,4.754 41.484,4.754   41.484,35.27 "
                    fill="currentColor"
                  ></polygon>
                </svg>
              </span>
              <p>Campfire exclusive access;</p>
            </li>
            <li class="special-offers__item-advantage">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 100 100"
                  enable-background="new 0 0 100 100"
                  xml:space="preserve"
                  height="100%"
                >
                  <polygon
                    points="15.088,20.088 6.609,34.626 33.074,49.988 6.609,65.24 15.088,79.87 41.484,64.688 41.484,95.204 58.446,95.204   58.446,64.688 84.912,79.867 93.391,65.237 66.926,49.986 93.391,34.623 84.912,20.086 58.516,35.268 58.516,4.754 41.484,4.754   41.484,35.27 "
                    fill="currentColor"
                  ></polygon>
                </svg>
              </span>
              <p>Free souvenir Camp mug.</p>
            </li>
          </ul>
          <a href="#" class="special-offers__btn">${offer.offersBtn}</a>
        </div>
      </li>
        `;
        offersHtml.push(offerHtml);
    };
    const offersList = document.querySelector('.special-offers__list');
    offersList.innerHTML = offersHtml.join('');
};

document.addEventListener("DOMContentLoaded", function () {
    renderOffers(offers);
});