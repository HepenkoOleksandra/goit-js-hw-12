import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { renderGallery } from "./js/render-function";
import { refs } from "./js/refs";
import { getGallery } from "./js/pixabay-api";
import { scroll } from "./js/scroll";
import { hideLoader, showLoader } from "./js/show-hide-loader";
import { checkDataHitsLength, checkQuery } from "./js/notification";
import { checkLastPage } from "./js/last-page";

export let lightBox = new SimpleLightbox('.gallery-link', {
  captionsData: "alt",
  captionDelay: 500
});

export let page = 1;
export const per_page = 15;
export let query = '';
export let totalPages = 0;

refs.form.addEventListener('submit', onFormSubmit);
refs.btnLoadMore.addEventListener('click', onBtnLoadMoreClick);

async function onFormSubmit(e) {
  e.preventDefault();

  page = 1;
  query = e.target.elements.query.value.trim();
    
  if (query === '') {
    checkQuery()      
    return;
  }

  refs.galleryList.innerHTML = '';
  
  showLoader()
  
  try {
    const data = await getGallery();
    totalPages = data.totalHits;
   
    if (data.hits.length === 0) {
      checkDataHitsLength()
      refs.loadElem.classList.add('hidden');
      e.target.reset();
      return
    } else {
      renderGallery(data);
      checkLastPage()
    }

  } catch (error) {
    console.log(error);
  }
  
  hideLoader()
  
  e.target.reset();
}

async function onBtnLoadMoreClick(e) {
  e.preventDefault();
  page += 1;
  
  showLoader()

  try {
    const data = await getGallery(query);
    
    renderGallery(data);
   
    hideLoader()
    
    checkLastPage()
    
  } catch (error) {
    console.log(error.message);
  }
    
  scroll()
}

 
