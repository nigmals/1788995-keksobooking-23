import { similarAd } from '../data/data.js';

const mapCanvas = document.querySelector('#map-canvas');
const similarOfferTemplate = document.querySelector('#card').content.querySelector('.popup');
const similarOfferFragment = document.createDocumentFragment();

similarAd.forEach(({author, offer}) => {
  const similarOffer = similarOfferTemplate.cloneNode(true);
  const popupFeautures = similarOffer.querySelector('.popup__features');
  const features = offer.features.map((feature) => `popup__feature--${feature}`);
  const popupPhotos = similarOffer.querySelector('.popup__photos');
  const popupTitle = similarOffer.querySelector('.popup__title');
  const popupAddress = similarOffer.querySelector('.popup__text--address');
  const popupPrice = similarOffer.querySelector('.popup__text--price');
  const popupType = similarOffer.querySelector('.popup__type');
  const popupCapacity = similarOffer.querySelector('.popup__text--capacity');
  const popupTime = similarOffer.querySelector('.popup__text--time');
  const popupDescription = similarOffer.querySelector('.popup__description');
  const popupAvatar = similarOffer.querySelector('.popup__avatar');

  const checkingDataAvailability = () => {
    if (offer.title.length ===0 ) {popupTitle.classList.add('hidden');}
    if (offer.address.length === 0) {popupAddress.classList.add('hidden');}
    if (offer.price.length === 0) {popupPrice.classList.add('hidden');}
    if (offer.rooms.length === 0 || offer.guests.length === 0) {popupCapacity.classList.add('hidden');}
    if (offer.checkin.length === 0 || offer.checkout.length ===0 ) {popupTime.classList.add('hidden');}
    if (offer.description.length === 0) {popupDescription.classList.add('hidden');}
    if (author.avatar.length === 0) {popupAvatar.classList.add('hidden');}
    if (features.length === 0) {popupFeautures.classList.add('hidden');}
    if (offer.photos.length === 0) {popupPhotos.classList.add('hidden');}
  };

  const getTypeTranslate = (type) => {
    switch(type) {
      case 'palace' : return 'Дворец';
      case 'flat' : return 'Квартира';
      case 'house' : return 'Дом';
      case  'bungalow' : return 'Бунгало';
      case  'hotel' : return 'Отель';
    }
  };

  popupTitle.textContent = offer.title;
  popupAddress.textContent = offer.address;
  popupPrice.textContent = offer.price;
  popupType.textContent = getTypeTranslate(offer.type);
  popupCapacity.textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  popupTime.textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  popupDescription.textContent = offer.description;
  popupAvatar.src = author.avatar;

  features.forEach(() => {
    popupFeautures.querySelectorAll('.popup__feature').
      forEach((item) => {
        const elementClass = item.classList[1];
        if (!features.includes(elementClass)) {
          item.remove();
        }
      });
  });

  offer.photos.forEach ((item) => {
    const popupPhoto = popupPhotos.querySelector('.popup__photo').cloneNode(true);
    popupPhoto.src = item;
    popupPhotos.appendChild(popupPhoto);
  });
  popupPhotos.firstElementChild.remove();

  checkingDataAvailability();
  similarOfferFragment.appendChild(similarOffer);
} );

mapCanvas.appendChild(similarOfferFragment.firstChild);

