import{S as g,i as m}from"./assets/vendor-46aac873.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const l={form:document.querySelector(".get-category"),input:document.querySelector(".query-category"),galleryList:document.querySelector(".gallery")};l.form.addEventListener("submit",d);let f=new g(".gallery-link",{captionsData:"alt",captionDelay:500});function d(t){t.preventDefault();const r=t.target.elements.query.value.trim();if(y(r),r===""){alert("Please enter a category name");return}p(r).then(n=>{n.hits.length===0?m.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"green",backgroundColor:"#e3f2ff",position:"topRight"}):L(n)}),t.target.reset()}function y(t){const r=sessionStorage.getItem("category");return r&&r===t?!0:(l.galleryList.innerHTML="",sessionStorage.setItem("category",t),!1)}function p(t){const r="https://pixabay.com",n="/api/",s=new URLSearchParams({key:"42112521-3ff4dfc201bab0977369cd2bc",q:`${t}`,image_type:"photo",orientation:"horizontal",safesearch:"true"}),e=`${r}${n}?${s}`;return fetch(e).then(o=>o.json())}function h(t){const{largeImageURL:r,webformatURL:n,tags:s,likes:e,views:o,comments:a,downloads:u}=t;return`
   <li class="gallery-item">
        <a class="gallery-link" href="${r}">
            <img class="gallery-image" src="${n}" alt="${s}" />
        </a>
        <div class="gallery-body">
            <p class="gallery-info">Likes: ${e}</p>
            <p class="gallery-info">Views: ${o}</p>
            <p class="gallery-info">Comments: ${a}</p>
            <p class="gallery-info">Downloads: ${u}</p>
        </div>
    </li>`}function L(t){const r=t.hits.map(n=>h(n)).join(`
`);l.galleryList.insertAdjacentHTML("beforeend",r),f.refresh()}let c=[];function b(t){return c.includes(t)}function i(t){b(t)?console.log("Ця картинка вже була додана!"):(c.push(t),console.log("Картинка була успішно додана!"))}i("http://example.com/image1.jpg");i("http://example.com/image2.jpg");i("http://example.com/image1.jpg");
//# sourceMappingURL=commonHelpers.js.map
