import{S as u,i as a}from"./assets/vendor-46aac873.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const n={form:document.querySelector(".search-images"),input:document.querySelector(".query-images"),galleryList:document.querySelector(".gallery"),loadElem:document.querySelector(".loader")};function m(l){const{largeImageURL:r,webformatURL:o,tags:s,likes:e,views:t,comments:i,downloads:c}=l;return`
   <li class="gallery-item">
      <a class="gallery-link" href="${r}">
        <img class="gallery-image" src="${o}" alt="${s}" />
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
          <p>${i}</p>
        </li>
        <li class="gallery-info">
          <h3>Downloads:</h3>
          <p>${c}</p>
        </li>
      </ul>
    </li>`}function f(l){const r=l.hits.map(o=>m(o)).join(`
`);n.galleryList.insertAdjacentHTML("beforeend",r),g.refresh()}function d(l){const r="https://pixabay.com",o="/api/",s=new URLSearchParams({key:"42112521-3ff4dfc201bab0977369cd2bc",q:l,image_type:"photo",orientation:"horizontal",safesearch:"true"}),e=`${r}${o}?${s}`;return fetch(e).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}let g=new u(".gallery-link",{captionsData:"alt",captionDelay:500});n.form.addEventListener("submit",h);function h(l){l.preventDefault(),n.galleryList.innerHTML="";const r=l.target.elements.query.value.trim();if(r===""){a.show({message:"Please enter a search query name!",messageColor:"white",backgroundColor:"red",position:"topRight"});return}n.loadElem.classList.remove("hidden"),d(r).then(o=>{o.hits.length===0?a.show({message:"Sorry, there are no images matching your search query. Please, try again!",messageColor:"white",backgroundColor:"red",position:"topRight"}):f(o)}).catch(o=>{console.log(o)}).finally(()=>{n.loadElem.classList.add("hidden")}),l.target.reset()}
//# sourceMappingURL=commonHelpers.js.map
