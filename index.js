import{S as y,i as h}from"./assets/vendor-BrddEoy-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const g="46357182-3c43e84fa66dd73471bacc559";async function b(t,o=1,n=12){const i=`https://pixabay.com/api/?key=${g}&q=${encodeURIComponent(t)}&image_type=photo&orientation=horizontal&safesearch=true&page=${o}&per_page=${n}`;try{const e=await fetch(i);if(!e.ok)throw new Error("Failed to fetch images");return await e.json()}catch(e){throw console.error(e),e}}let s;function w(t){const o=document.querySelector(".gallery"),n=t.map(({webformatURL:i,largeImageURL:e,tags:r,likes:a,views:f,comments:m,downloads:p})=>`
        <div class="photo-card">
          <a href="${e}">
            <img src="${i}" alt="${r}" loading="lazy" />
          </a>
          <div class="info">
            <p><b>Likes:</b> ${a}</p>
            <p><b>Views:</b> ${f}</p>
            <p><b>Comments:</b> ${m}</p>
            <p><b>Downloads:</b> ${p}</p>
          </div>
        </div>
      `).join("");o.innerHTML=n,s?s.refresh():s=new y(".gallery a")}function c(t){h.error({title:"Error",message:t,position:"topRight"})}function L(){const t=document.querySelector(".gallery");t.innerHTML=""}function v(){document.querySelector(".loader").classList.add("visible")}function l(){document.querySelector(".loader").classList.remove("visible")}const S=document.querySelector("#search-form"),$=document.querySelector('input[name="searchQuery"]');let u=1,d="";S.addEventListener("submit",async t=>{t.preventDefault();const o=$.value.trim();if(!o){c("Please enter a search term");return}d=o,u=1,L(),v();try{const n=await b(d,u);if(l(),n.hits.length===0){c("Sorry, there are no images matching your search query. Please try again!");return}w(n.hits)}catch{l(),c("Something went wrong. Please try again later.")}});
//# sourceMappingURL=index.js.map
