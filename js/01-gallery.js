import { galleryItems } from './gallery-items.js';

const refs = {
  containerGalleryItemsMarkup: document.querySelector('.gallery'),
  };

const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);
refs.containerGalleryItemsMarkup.insertAdjacentHTML('beforeend', galleryItemsMarkup);

function createGalleryItemsMarkup (gallery) { 
  return gallery
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join('');
};

const createModalWindow = (imageAdress) => {
  
  window.instance = basicLightbox.create(`<img src="${imageAdress}" width="800" height="600">`,
  
    {
      onShow: () => { window.addEventListener('keydown', closeModalWindowBtn); },
      onClose: () => {window.removeEventListener('keydown', closeModalWindowBtn);},
    }
    )
  return instance;
};

refs.containerGalleryItemsMarkup.addEventListener('click', openModalWindowClick);

function openModalWindowClick (event) {
  event.preventDefault();

 if (!event.target.classList.contains('gallery__image')) { return
  };

  const originalImgLink = event.target.dataset.source;
  createModalWindow(originalImgLink).show();
};

function closeModalWindowBtn(event) { 
  if (event.code === "Escape" && instance.visible()) {
  instance.close();
}
};


