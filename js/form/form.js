import { sendData } from './api.js';
import { resetDataMap } from '../map/map.js';
import { showPopupSendSuccess, showPopupSendError } from './popup.js';

const MIN_NAME_LENGTH = 30;
const MAX_NAME_LENGTH = 100;
const MAX_PRICE_LENGTH = 1000000;
const offerForm = document.querySelector('.ad-form');
const adFormElements = offerForm.querySelectorAll('.ad-form__element');
const mapFiltersForm = document.querySelector('.map__filters');
const mapFiltersFormElements = mapFiltersForm.querySelectorAll('.map__filter');
const mapFiltersFormFeatures = mapFiltersForm.querySelector('.map__features');
const offerTitle = offerForm.querySelector('#title');
const offerPrice = offerForm.querySelector('#price');
const adCapacitySelect = offerForm.querySelector('#capacity');
const adCapacitySelectOptions = adCapacitySelect.querySelectorAll('option');
const adRoomNumberSelect = offerForm.querySelector('#room_number');
const adTypeSelect = offerForm.querySelector('#type');
const adTimeInSelect = offerForm.querySelector('#timein');
const adTimeOutSelect = offerForm.querySelector('#timeout');
const resetButton = document.querySelector('.ad-form__reset');

const roomsValue = {
  1: [1],
  2: [1, 2],
  3: [1, 2, 3],
  100: [0],

};

const typePrice = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

const diactivateForm = () => {
  offerForm.classList.add('ad-form--disabled');
  adFormElements.forEach((item) => item.setAttribute('disabled', 'disabled'));
  mapFiltersForm.classList.add('ad-form--disabled');
  mapFiltersFormElements.forEach((item) => item.setAttribute('disabled', 'disabled'));
  mapFiltersFormFeatures.setAttribute('disabled', 'disabled');
};

const activateForm = () => {
  offerForm.classList.remove('ad-form--disabled');
  adFormElements.forEach((item) => item.removeAttribute('disabled', null));
  mapFiltersForm.classList.remove('ad-form--disabled');
  mapFiltersFormElements.forEach((item) => item.removeAttribute('disabled', null));
  mapFiltersFormFeatures.removeAttribute('disabled', null);
};

offerTitle.addEventListener('input', () => {
  const valueLength = offerTitle.value.length;

  if (valueLength < MIN_NAME_LENGTH) {
    offerTitle.setCustomValidity(`Ещё ${MIN_NAME_LENGTH - valueLength} симв.`);
  } else if (valueLength > MAX_NAME_LENGTH) {
    offerTitle.setCustomValidity(`Удалите лишние ${valueLength - MAX_NAME_LENGTH} симв.`);
  } else {
    offerTitle.setCustomValidity('');
  }

  offerTitle.reportValidity();
});

offerPrice.addEventListener('input', () => {
  const valueInput = typePrice[adTypeSelect.value];
  const priceValue = +offerPrice.value;

  if (priceValue < valueInput) {
    offerPrice.setCustomValidity(`Минимальная цена ${valueInput}`);
  } else if (priceValue > MAX_PRICE_LENGTH) {
    offerPrice.setCustomValidity(`Максимальная цена ${MAX_PRICE_LENGTH}`);
  } else {
    offerPrice.setCustomValidity('');
  }
  offerPrice.reportValidity();
});

const getRoomChange = (evt) => {
  adCapacitySelectOptions.forEach((option) => {
    option.disabled = true;
  });

  roomsValue[evt.value].forEach((seatsAmount) => {
    adCapacitySelectOptions.forEach((option) => {
      if (Number(option.value) === seatsAmount) {
        option.disabled = false;
        option.selected = true;
      }
    });
  });
};

getRoomChange(adRoomNumberSelect);

adTimeInSelect.addEventListener('change', () => {
  adTimeOutSelect.value = adTimeInSelect.value;
});

adTimeOutSelect.addEventListener('change', () => {
  adTimeInSelect.value = adTimeOutSelect.value;
});

adRoomNumberSelect.addEventListener('change', (evt) =>{
  getRoomChange(evt.target);
});

adTypeSelect.addEventListener('change', (evt) => {
  offerPrice.setAttribute('placeholder', typePrice[evt.target.value]);
  offerPrice.setAttribute('min', typePrice[evt.target.value]);
});

const clearForm = () => {
  mapFiltersForm.reset();
  offerForm .reset();
  resetDataMap();
};
resetButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  clearForm();
});

offerForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const formData = new FormData(evt.target);

  sendData(showPopupSendSuccess, showPopupSendError, formData);
});

export { diactivateForm, activateForm, clearForm, mapFiltersForm };
