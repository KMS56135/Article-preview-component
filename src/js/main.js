import { popupTemplate } from '../components/popup.js';

const popup = popupTemplate();
const popupHolder = document.querySelector('[data-popup-holder]')
const cardAuthor = document.querySelector('.card__author');
const shareButton = document.querySelector('#share-button');

const cardFooter = document.querySelector('.card__footer');

shareButton.addEventListener('click', () => {
  if (window.innerWidth <= 375) {
    cardAuthor.style.display = 'none';
    cardFooter.style.backgroundColor = 'hsl(217, 19%, 35%)';
  }
  popupHolder.append(popup);
});




