import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { renderGallery } from "./js/render-function";
import { refs } from "./js/refs";
import { getGallery } from "./js/pixabay-api";

export let lightBox = new SimpleLightbox('.gallery-link', {
  captionsData: "alt",
  captionDelay: 500
});

refs.form.addEventListener('submit', onFormSubmit);

async function onFormSubmit(e) {
  e.preventDefault();

  const query = e.target.elements.query.value.trim();
  
  if (query === '') {
    iziToast.show({
      message: 'Please enter a search query name!',
      messageColor: 'white',
      backgroundColor: 'red',
      position: 'topRight',
    });      
    return;
  }
  refs.galleryList.innerHTML = '';
  refs.loadElem.classList.remove('hidden');

  try {
  const data = await getGallery(query);
    if (data.hits.length === 0) {
      iziToast.show({
        message: 'Sorry, there are no images matching your search query. Please, try again!',
        messageColor: 'white',
        backgroundColor: 'red',
        position: 'topRight',
      });
    } else {
      renderGallery(data);
    }
  } catch (error) {
    console.log(error);
  }
    
  refs.loadElem.classList.add('hidden');
  
  e.target.reset();
}