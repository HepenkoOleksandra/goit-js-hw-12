import { refs } from "./refs";

export function showLoader() {
  refs.loadElem.classList.remove('hidden');
  refs.btnLoadMore.classList.add('hidden');
}

export function hideLoader() {
  refs.loadElem.classList.add('hidden');
  refs.btnLoadMore.classList.remove('hidden');
}