export function scroll() {
  const elemImg = document.querySelector('.gallery-item');
  const heightScroll = elemImg.getBoundingClientRect().height;
  
  window.scrollBy({
    top: heightScroll * 2,
    behavior: "smooth"
  });
}