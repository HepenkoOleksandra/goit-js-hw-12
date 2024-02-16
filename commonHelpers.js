import{a as y,S as L,i as d}from"./assets/vendor-5401a4b0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const a={form:document.querySelector(".search-images"),input:document.querySelector(".query-images"),galleryList:document.querySelector(".gallery"),loadElem:document.querySelector(".loader"),btnLoadMore:document.querySelector(".js-btn-load")};function b(o){const{largeImageURL:e,webformatURL:r,tags:l,likes:t,views:s,comments:n,downloads:p}=o;return`
   <li class="gallery-item">
      <a class="gallery-link" href="${e}">
        <img class="gallery-image" src="${r}" alt="${l}" />
      </a>
      <ul class="gallery-body">
        <li class="gallery-info">
          <h3>Likes:</h3>
          <p>${t}</p>
        </li>
        <li class="gallery-info">
          <h3>Views:</h3>
          <p>${s}</p>
        </li>
        <li class="gallery-info">
          <h3>Comments:</h3>
          <p>${n}</p>
        </li>
        <li class="gallery-info">
          <h3>Downloads:</h3>
          <p>${p}</p>
        </li>
      </ul>
    </li>`}function u(o){const e=o.hits.map(r=>b(r)).join(`
`);a.galleryList.insertAdjacentHTML("beforeend",e),w.refresh()}async function g(){const r="https://pixabay.com/api/";return(await y.get(r,{params:{key:"42112521-3ff4dfc201bab0977369cd2bc",q:i,image_type:"photo",orientation:"horizontal",safesearch:"true",page:c,per_page:m}})).data}let w=new L(".gallery-link",{captionsData:"alt",captionDelay:500}),c=1;const m=15;let i="",h=0;a.form.addEventListener("submit",q);async function q(o){o.preventDefault();const e=o.target.elements.query.value.trim();if(c=1,i=e,i===""){d.show({message:"Please enter a search query name!",messageColor:"white",backgroundColor:"red",position:"topRight"});return}a.galleryList.innerHTML="",a.loadElem.classList.remove("hidden");try{const r=await g();h=r.totalHits,r.hits.length===0?d.show({message:"Sorry, there are no images matching your search query. Please, try again!",messageColor:"white",backgroundColor:"red",position:"topRight"}):(u(r),f())}catch(r){console.log(r)}a.loadElem.classList.add("hidden"),a.btnLoadMore.classList.remove("hidden"),o.target.reset()}a.btnLoadMore.addEventListener("click",v);async function v(o){o.preventDefault(),c+=1,a.btnLoadMore.classList.add("hidden");try{const e=await g(i);console.log(e.hits),u(e),a.btnLoadMore.classList.remove("hidden"),f()}catch(e){console.log(e)}}function f(){const o=Math.ceil(h/m);console.log(o);const e=o<=c;console.log(e),e?(a.btnLoadMore.classList.add("hidden"),d.show({message:"We're sorry, but you've reached the end of search results.",messageColor:"white",backgroundColor:"red",position:"topRight"})):a.btnLoadMore.classList.remove("hidden")}
//# sourceMappingURL=commonHelpers.js.map
