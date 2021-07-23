const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png', 'bmp'];
const PhotoSize = {
  height: '250',
  width: '250',
};

const avatarChooser = document.querySelector('.ad-form-header__input');
const avatarPreview = document.querySelector('.ad-form-header__preview img');
const offerChooser = document.querySelector('.ad-form__input');
const offerContainer = document.querySelector('.ad-form__photo');

const offerPreview = () => {
  if (offerContainer.firstChild) {
    offerContainer.firstChild.remove();
  }
  const photo = document.createElement('img');
  photo.height = PhotoSize.height;
  photo.width = PhotoSize.width;
  offerContainer.appendChild(photo);
  return photo;
};

const onPreviewChange = (chooser, preview) => {
  const file = chooser.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((type) => fileName.endsWith(type));

  if (matches) {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      preview.src = reader.result;
    });

    reader.readAsDataURL(file);
  }
};

const resetOfferPreview = () => {
  avatarPreview.src = 'img/muffin-grey.svg';
  if (offerContainer.firstChild) {
    offerContainer.firstChild.remove();
  }
};

avatarChooser.addEventListener('change', onPreviewChange.bind(null, avatarChooser, avatarPreview));

offerChooser.addEventListener('change', () => {
  onPreviewChange(offerChooser, offerPreview());
});

export { resetOfferPreview };
