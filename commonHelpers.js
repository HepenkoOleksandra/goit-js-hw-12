import{a as b,i as d,S as w}from"./assets/vendor-483db976.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();const s={form:document.querySelector(".search-images"),input:document.querySelector(".query-images"),galleryList:document.querySelector(".gallery"),loadElem:document.querySelector(".loader"),btnLoadMore:document.querySelector(".js-btn-load")};function P(o){const{largeImageURL:e,webformatURL:a,tags:n,likes:t,views:r,comments:l,downloads:L}=o;return`
   <li class="gallery-item">
      <a class="gallery-link" href="${e}">
        <img class="gallery-image" src="${a}" alt="${n}" />
      </a>
      <ul class="gallery-body">
        <li class="gallery-info">
          <h3>Likes:</h3>
          <p>${t}</p>
        </li>
        <li class="gallery-info">
          <h3>Views:</h3>
          <p>${r}</p>
        </li>
        <li class="gallery-info">
          <h3>Comments:</h3>
          <p>${l}</p>
        </li>
        <li class="gallery-info">
          <h3>Downloads:</h3>
          <p>${L}</p>
        </li>
      </ul>
    </li>`}function u(o){const e=o.hits.map(a=>P(a)).join(`
`);s.galleryList.insertAdjacentHTML("beforeend",e),M.refresh()}async function g(){const a="https://pixabay.com/api/";return(await b.get(a,{params:{key:"42112521-3ff4dfc201bab0977369cd2bc",q:i,image_type:"photo",orientation:"horizontal",safesearch:"true",page:c,per_page:p}})).data}function q(){const e=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}function m(){s.loadElem.classList.remove("hidden"),s.btnLoadMore.classList.add("hidden")}function h(){s.loadElem.classList.add("hidden"),s.btnLoadMore.classList.remove("hidden")}function v(){d.show({message:"Please enter a search query name!",messageColor:"white",backgroundColor:"red",position:"topRight"})}function S(){d.show({message:"Please enter a search query name!",messageColor:"white",backgroundColor:"red",position:"topRight"})}function E(){d.show({message:"We're sorry, but you've reached the end of search results.",messageColor:"white",backgroundColor:"red",position:"topRight"})}function f(){Math.ceil(y/p)<=c?(s.btnLoadMore.classList.add("hidden"),E()):s.btnLoadMore.classList.remove("hidden")}let M=new w(".gallery-link",{captionsData:"alt",captionDelay:500}),c=1;const p=15;let i="",y=0;s.form.addEventListener("submit",k);s.btnLoadMore.addEventListener("click",C);async function k(o){if(o.preventDefault(),c=1,i=o.target.elements.query.value.trim(),i===""){v();return}s.galleryList.innerHTML="",m();try{const e=await g();if(y=e.totalHits,e.hits.length===0){S(),s.loadElem.classList.add("hidden"),o.target.reset();return}else u(e),f()}catch(e){console.log(e)}h(),o.target.reset()}async function C(o){o.preventDefault(),c+=1,m();try{const e=await g(i);u(e),h(),f()}catch(e){console.log(e.message)}q()}
//# sourceMappingURL=commonHelpers.js.map
