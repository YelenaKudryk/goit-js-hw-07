import { galleryItems } from './gallery-items.js';

const refs = {
  containerGalleryItemsMarkup: document.querySelector('.gallery'),
  };

const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);
refs.containerGalleryItemsMarkup.insertAdjacentHTML('beforeend', galleryItemsMarkup);

function createGalleryItemsMarkup (gallery) { 
  return gallery
    .map(({ preview, original, description }) => {
      return `<li class="gallery__el">
   <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</li>`;
    })
    .join('');
};

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: "alt",
  captionDelay: 250,
  captionPosition: 'bottom',
  scrollZoom: false,
});

