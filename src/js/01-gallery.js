import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';

const gallery = document.querySelector('.gallery');

const markup = galleryItems.map(({ preview, original, description }) => {
  return `<li class="gallery-item">
  <a class="gallery-link" href="${original}">
    <img
      class="gallery-image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
});

gallery.insertAdjacentHTML('beforeend', markup.join(''));

 var lightbox = new SimpleLightbox('.gallery a', {
   captionsData: 'alt',
   captionDelay: 250,
   captionPosition: 'bottom',
 });