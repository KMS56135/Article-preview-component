import createElement from "../../lib/create-element.js";

export function popupTemplate() {
  return createElement (`
  <div class='popup'>
    <div class='popup__content'>
      <p class='popup__title'>Share</p>
      <div class="popup__icons">
        <img width='20' height='20' src="./images/icon-facebook.svg" alt="Facebook">
        <img width='20' height='20' src="./images/icon-twitter.svg" alt="Twitter">
        <img width='20' height='20' src="./images/icon-pinterest.svg" alt="Pinterest">
      </div>
    </div>
 </div>`);

}
