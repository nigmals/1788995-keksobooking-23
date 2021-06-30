const MIN_NAME_LENGTH = 30;
const MAX_NAME_LENGTH = 100;
const offerForm = document.querySelector('.ad-form');
const adFormElement = offerForm.querySelectorAll('.ad-form__element');
const mapFiltersForm = document.querySelector('.map__filters');
const mapFiltersFormElements = mapFiltersForm.querySelectorAll('.map__filter');
const mapFiltersFormFeatures = mapFiltersForm.querySelector('.map__features');
const offerTitle = offerForm.querySelector('#title');
const offerPrice = offerForm.querySelector('#price');
const adCapacitySelect = offerForm.querySelector('#capacity');
const adCapacitySelectOption = adCapacitySelect.querySelectorAll('option');
const adRoomNumberSelect = offerForm.querySelector('#room_number');
const adTypeSelect = offerForm.querySelector('#type');

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
  adFormElement.forEach((item) => item.setAttribute('disabled', 'disabled'));
  mapFiltersForm.classList.add('ad-form--disabled');
  mapFiltersFormElements.forEach((item) => item.setAttribute('disabled', 'disabled'));
  mapFiltersFormFeatures.setAttribute('disabled', 'disabled');
};

const activateForm = () => {
  offerForm.classList.remove('ad-form--disabled');
  adFormElement.forEach((item) => item.removeAttribute('disabled', null));
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
  const valueInput = offerPrice.value;
  const minPrice = offerPrice.getAttribute('min');
  const maxPrice = offerPrice.getAttribute('max');

  if (valueInput < minPrice) {
    offerPrice.setCustomValidity(`Минимальная цена ${minPrice}`);
  } else if (valueInput > maxPrice) {
    offerPrice.setCustomValidity(`Максимальная цена ${maxPrice}`);
  } else {
    offerPrice.setCustomValidity('');
  }
  offerPrice.reportValidity();
});

const onRoomChange = (evt) => {
  adCapacitySelectOption.forEach((option) => {
    option.disabled = true;
  });

  roomsValue[evt.value].forEach((seatsAmount) => {
    adCapacitySelectOption.forEach((option) => {
      if (Number(option.value) === seatsAmount) {
        option.disabled = false;
        option.selected = true;
      }
    });
  });
};

onRoomChange(adRoomNumberSelect);

adRoomNumberSelect.addEventListener('change', (evt) =>{
  onRoomChange(evt.target);
});

adTypeSelect.addEventListener('change', (evt) => {
  offerPrice.setAttribute('placeholder', typePrice[evt.target.value]);
  offerPrice.setAttribute('min', typePrice[evt.target.value]);
});

export { diactivateForm, activateForm };

