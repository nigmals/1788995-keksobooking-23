const TYPES = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const PICTURE_WIDHT = 45;
const PICTURE_HEIGHT = 40;

const createCard = (similarOffer) => {
  const similarAdTemplate = document.querySelector('#card').content.querySelector('.popup');
  const offerElement = similarAdTemplate.cloneNode(true);
  offerElement.querySelector('.popup__avatar').src = similarOffer.author.avatar;
  offerElement.querySelector('.popup__title').textContent = similarOffer.offer.title;
  offerElement.querySelector('.popup__text--address').textContent = similarOffer.offer.address;
  offerElement.querySelector('.popup__text--price').textContent = `${similarOffer.offer.price} ₽/ночь`;
  offerElement.querySelector('.popup__text--capacity').textContent = `${similarOffer.offer.rooms} комнаты для ${similarOffer.offer.guests} гостей`;
  offerElement.querySelector('.popup__text--time').textContent = `Заезд после ${similarOffer.offer.checkin}, выезд до ${similarOffer.offer.checkout}`;
  offerElement.querySelector('.popup__type').textContent = TYPES[similarOffer.offer.type];
  offerElement.querySelector('.popup__description').textContent = similarOffer.offer.description;

  const featuresList = offerElement.querySelector('.popup__features');
  featuresList.innerHTML = '';

  if (similarOffer.offer.features) {
    similarOffer.offer.features.forEach((feature) => {
      const item = document.createElement('li');
      item.classList.add('popup__feature');
      item.classList.add(`popup__feature--${feature}`);
      featuresList.appendChild(item);
    });
  } else {
    featuresList.classList.add('.visually-hidden');
  }

  const photoAd = offerElement.querySelector('.popup__photos');
  photoAd.innerHTML = '';
  if (similarOffer.offer.photos) {
    similarOffer.offer.photos.forEach((photo) => {
      const picture = document.createElement('img');
      picture.classList.add('popup__photo');
      picture.src = photo;
      picture.width = PICTURE_WIDHT;
      picture.height = PICTURE_HEIGHT;
      picture.alt = 'Фото жилья';
      photoAd.appendChild(picture);
    });
  } else {
    photoAd.classList.add('.visually-hidden');
  }
  if (similarOffer.offer.description === '') {
    offerElement.querySelector('.popup__description').classList.add('hidden');
  }
  return offerElement;

};

export { createCard };
