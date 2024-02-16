import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

export function checkQuery() {
    iziToast.show({
      message: 'Please enter a search query name!',
      messageColor: 'white',
      backgroundColor: 'red',
      position: 'topRight',
    });
}

export function checkDataHitsLength() {
    iziToast.show({
      message: 'Please enter a search query name!',
      messageColor: 'white',
      backgroundColor: 'red',
      position: 'topRight',
    });
} 

export function checkIsLastPage() {
    iziToast.show({
        message: `We're sorry, but you've reached the end of search results.`,
        messageColor: 'white',
        backgroundColor: 'red',
        position: 'topRight',
      });
}