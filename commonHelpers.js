import{a as u,S as m,i as n}from"./assets/vendor-5401a4b0.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const i={form:document.querySelector(".search-images"),input:document.querySelector(".query-images"),galleryList:document.querySelector(".gallery"),loadElem:document.querySelector(".loader")};function d(s){const{largeImageURL:r,webformatURL:o,tags:a,likes:e,views:t,comments:l,downloads:c}=s;return`
   <li class="gallery-item">
      <a class="gallery-link" href="${r}">
        <img class="gallery-image" src="${o}" alt="${a}" />
      </a>
      <ul class="gallery-body">
        <li class="gallery-info">
          <h3>Likes:</h3>
          <p>${e}</p>
        </li>
        <li class="gallery-info">
          <h3>Views:</h3>
          <p>${t}</p>
        </li>
        <li class="gallery-info">
          <h3>Comments:</h3>
          <p>${l}</p>
        </li>
        <li class="gallery-info">
          <h3>Downloads:</h3>
          <p>${c}</p>
        </li>
      </ul>
    </li>`}function g(s){const r=s.hits.map(o=>d(o)).join(`
`);i.galleryList.insertAdjacentHTML("beforeend",r),y.refresh()}async function f(s){const a="https://pixabay.com/api/";return(await u.get(a,{params:{key:"42112521-3ff4dfc201bab0977369cd2bc",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"}})).data}let y=new m(".gallery-link",{captionsData:"alt",captionDelay:500});i.form.addEventListener("submit",p);async function p(s){s.preventDefault();const r=s.target.elements.query.value.trim();if(r===""){n.show({message:"Please enter a search query name!",messageColor:"white",backgroundColor:"red",position:"topRight"});return}i.galleryList.innerHTML="",i.loadElem.classList.remove("hidden");try{const o=await f(r);o.hits.length===0?n.show({message:"Sorry, there are no images matching your search query. Please, try again!",messageColor:"white",backgroundColor:"red",position:"topRight"}):g(o)}catch(o){console.log(o)}i.loadElem.classList.add("hidden"),s.target.reset()}
//# sourceMappingURL=commonHelpers.js.map
