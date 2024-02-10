import{S as m,i as f}from"./assets/vendor-46aac873.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function l(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=l(e);fetch(e.href,o)}})();const s={form:document.querySelector(".search-images"),input:document.querySelector(".query-images"),galleryList:document.querySelector(".gallery"),loadElem:document.querySelector(".loader")};console.log(s.form);s.form.addEventListener("submit",d);let g=new m(".gallery-link",{captionsData:"alt",captionDelay:500});function d(t){t.preventDefault();const r=t.target.elements.query.value.trim();if(r===""){alert("Please enter a category name");return}s.loadElem.classList.remove("hidden"),p(r).then(l=>{l.hits.length===0?f.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#e3f2ff",position:"topRight"}):h(l)}).catch(l=>{console.log(l)}).finally(()=>{}),t.target.reset()}function p(t){const r="https://pixabay.com",l="/api/",n=new URLSearchParams({key:"42112521-3ff4dfc201bab0977369cd2bc",q:`${t}`,image_type:"photo",orientation:"horizontal",safesearch:"true"}),e=`${r}${l}?${n}`;return fetch(e).then(o=>o.json())}function y(t){const{largeImageURL:r,webformatURL:l,tags:n,likes:e,views:o,comments:a,downloads:u}=t;return`
   <li class="gallery-item">
        <a class="gallery-link" href="${r}">
            <img class="gallery-image" src="${l}" alt="${n}" />
        </a>
        <ul class="gallery-body">
            <li class="gallery-info">
            <h2>Likes:</h2>
            <p>${e}</p>
             </li>
            <li class="gallery-info">
            <h2>Views:</h2>
            <p>${o}</p>
             </li>
            <li class="gallery-info">
            <h2>Comments:</h2>
            <p>${a}</p>
             </li>
            <li class="gallery-info">
            <h2>Downloads:</h2>
            <p>${u}</p>
             </li>
        </ul>
    </li>`}function h(t){const r=t.hits.map(l=>y(l)).join(`
`);s.galleryList.insertAdjacentHTML("beforeend",r),g.refresh()}let c=[];function L(t){return c.includes(t)}function i(t){L(t)?console.log("Ця картинка вже була додана!"):(c.push(t),console.log("Картинка була успішно додана!"))}i("http://example.com/image1.jpg");i("http://example.com/image2.jpg");i("http://example.com/image1.jpg");
//# sourceMappingURL=commonHelpers.js.map
