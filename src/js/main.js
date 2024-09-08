import { popupTemplate } from '../components/popup.js';

const popup = popupTemplate();
const popupHolder = document.querySelector('[data-popup-holder]')
const cardAuthor = document.querySelector('.card__author');
const shareButton = document.querySelector('#share-button');

const cardFooter = document.querySelector('.card__footer');

shareButton.addEventListener('click', (e) => {
  if (window.innerWidth <= 375) {
    cardAuthor.style.display = 'none';
    cardFooter.style.backgroundColor = 'hsl(217, 19%, 35%)';
  }
  popupHolder.innerHTML = ''
  popupHolder.append(popup);

});

document.addEventListener('click', (e) => {
  if (!shareButton.contains(e.target)) {
    popupHolder.innerHTML = ''
    cardFooter.style.backgroundColor = 'white';
    cardAuthor.style.display = 'flex';
  }
});




