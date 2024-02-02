import{i as c}from"./assets/vendor-32231325.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const i={form:document.querySelector(".get-category"),input:document.querySelector(".query-category"),galleryList:document.querySelector(".gallery")};i.form.addEventListener("submit",u);function u(o){i.galleryList.innerHTML="",o.preventDefault();const t=o.target.elements.query.value.trim();if(t===""){alert("Please enter a category name");return}f(t).then(n=>{n.hits.length===0?c.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"green",backgroundColor:"#e3f2ff",position:"topRight"}):g(n)}),o.target.reset()}function f(o){const t="https://pixabay.com",n="/api/",s=new URLSearchParams({key:"42112521-3ff4dfc201bab0977369cd2bc",q:`${o}`,image_type:"photo",orientation:"horizontal",safesearch:"true"}),e=`${t}${n}?${s}`;return fetch(e).then(r=>r.json())}function m(o){const{largeImageURL:t,webformatURL:n,tags:s,likes:e,views:r,comments:l,downloads:a}=o;return`
   <li class="gallery-item">
        <a class="gallery-link" href="${t}">
            <img class="gallery-image" src="${n}" alt="${s}" />
        </a>
        <div class="gallery-body">
            <p class="gallery-info">Likes: ${e}</p>
            <p class="gallery-info">Views: ${r}</p>
            <p class="gallery-info">Comments: ${l}</p>
            <p class="gallery-info">Downloads: ${a}</p>
        </div>
    </li>`}function g(o){const t=o.hits.map(n=>m(n)).join(`
`);i.galleryList.insertAdjacentHTML("beforeend",t)}
//# sourceMappingURL=commonHelpers.js.map
