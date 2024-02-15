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

export let page = 1;
export const per_page = 15;
export let query = '';
let totalPages = 0;

refs.form.addEventListener('submit', onFormSubmit);

async function onFormSubmit(e) {
  e.preventDefault();

  const querySub = e.target.elements.query.value.trim();
  page = 1;
  query = querySub;


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
    const data = await getGallery();
    totalPages = data.total;
   

    if (data.hits.length === 0) {
      iziToast.show({
        message: 'Sorry, there are no images matching your search query. Please, try again!',
        messageColor: 'white',
        backgroundColor: 'red',
        position: 'topRight',
      });
    } else {
      renderGallery(data);
     checkLastPage()
    }
  } catch (error) {
    console.log(error);
  }
    
  refs.loadElem.classList.add('hidden');
   refs.btnLoadMore.classList.remove('hidden');
  e.target.reset();
}


refs.btnLoadMore.addEventListener('click', onBtnLoadMoreClick);

async function onBtnLoadMoreClick(e) {
  e.preventDefault();
  page += 1;
 refs.btnLoadMore.classList.add('hidden');
  try {
  const data = await getGallery(query);
    console.log(data.hits);
    renderGallery(data);
   
    refs.btnLoadMore.classList.remove('hidden');
     checkLastPage()
    
  } catch (error) {
    console.log(error);
  }
    
  // refs.loadElem.classList.add('hidden');
  
 }

 
function checkLastPage() {
  
  const maxPage = Math.ceil(totalPages / per_page);
  console.log(maxPage);
  const isLastPage = maxPage <= page;
  console.log(isLastPage);
  if (isLastPage) {
    refs.btnLoadMore.classList.add('hidden');
  } else {
    refs.btnLoadMore.classList.remove('hidden');
  }
}
