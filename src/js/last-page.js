import { page, per_page, totalPages } from "../main";
import { checkIsLastPage } from "./notification";
import { refs } from "./refs";

export function checkLastPage() {
  
  const maxPage = Math.ceil(totalPages / per_page);
  
  const isLastPage = maxPage <= page;
  
  if (isLastPage) {
    refs.btnLoadMore.classList.add('hidden');
    checkIsLastPage()
  } else {
    refs.btnLoadMore.classList.remove('hidden');
  }
}