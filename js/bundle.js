!function(){"use strict";function e(e,t){const n=document.querySelector(e);n.classList.add("show"),n.classList.remove("hide"),document.body.style.overflow="hidden";let o=function(){let e=document.createElement("div");e.style.height="50px",e.style.width="50px",e.style.overflowY="scroll",e.style.visibility="hidden",document.body.append(e);let t=e.offsetWidth-e.clientWidth;return e.remove(),t}();document.body.style.marginRight=`${o}px`,t&&clearInterval(t)}function t(e){const t=document.querySelector(e);t.classList.remove("show"),t.classList.add("hide"),document.body.style.overflow="",document.body.style.marginRight="0px"}document.addEventListener("DOMContentLoaded",(()=>{const n=setTimeout((()=>e(".modal",n)),5e4);(function(){const e=document.querySelector(".calculating__result span");let t,n,o,s,r;function a(e,t){document.querySelectorAll(e).forEach((e=>{e.classList.remove(t),e.getAttribute("data-ratio")===localStorage.getItem("ratio")&&e.classList.add(t),e.getAttribute("id")===localStorage.getItem("sex")&&e.classList.add(t)}))}function c(){e.textContent=t&&n&&o&&s&&r?"female"===t?Math.round((447.6+9.2*s+3.1*o-4.3*r)*n):Math.round((88.36+13.4*s+4.8*o-5.7*r)*n):"___"}function i(e,o){const s=document.querySelectorAll(e);s.forEach((e=>{e.addEventListener("click",(()=>{e.getAttribute("data-ratio")?(n=+e.getAttribute("data-ratio"),localStorage.setItem("ratio",+e.getAttribute("data-ratio"))):(t=e.getAttribute("id"),localStorage.setItem("sex",e.getAttribute("id"))),s.forEach((e=>{e.classList.remove(o)})),e.classList.add(o),c()}))}))}function l(e){const t=document.querySelector(e);t.addEventListener("input",(()=>{switch(t.value.match(/\D/g)?t.style.border="1px solid red":t.style.border="none",t.getAttribute("id")){case"height":o=+t.value;break;case"weight":s=+t.value;break;case"age":r=+t.value}c()}))}localStorage.getItem("sex")?t=localStorage.getItem("sex"):(t="female",localStorage.setItem("sex","female")),localStorage.getItem("ratio")?n=+localStorage.getItem("ratio"):(n=1.375,localStorage.setItem("ratio","1.375")),a("#gender div","calculating__choose-item_active"),a(".calculating__choose_big div","calculating__choose-item_active"),c(),i("#gender div","calculating__choose-item_active"),i(".calculating__choose_big div","calculating__choose-item_active"),l("#height"),l("#weight"),l("#age")})(),function(){class e{constructor(e,t,n,o,s,r){this.src=e,this.alt=t,this.title=n,this.descr=o,this.price=s,this.transfer=27,this.changeToUAH(),this.parent=document.querySelector(r);for(var a=arguments.length,c=new Array(a>6?a-6:0),i=6;i<a;i++)c[i-6]=arguments[i];this.classes=c}changeToUAH(){this.price=this.price*this.transfer}render(){const e=document.createElement("div");0===this.classes.length?e.classList.add("menu__item"):this.classes.forEach((t=>e.classList.add(t))),e.innerHTML=`\n                <img src="${this.src}" alt="${this.alt}">\n                <h3 class="menu__item-subtitle">${this.title}</h3>\n                <div class="menu__item-descr">${this.descr}</div>\n                <div class="menu__item-divider"></div>\n                <div class="menu__item-price">\n                   <div class="menu__item-cost">Цена:</div>\n                   <div class="menu__item-total"><span>${this.price}</span> грн/день</div>\n                </div>\n            `,this.parent.append(e)}}(async e=>{const t=await fetch(e);if(!t.ok)throw new Error(`Could not fetch ${e}, status: ${t.status}`);return await t.json()})("http://localhost:3000/menu").then((t=>{t.forEach((t=>{let{img:n,altimg:o,title:s,descr:r,price:a}=t;new e(n,o,s,r,a,".menu .container").render()}))}))}(),function(n,o,s){function r(n){const r=document.querySelector(".modal__dialog");r.classList.add("hide"),e(o,s);const a=document.createElement("div");a.classList.add("modal__dialog"),a.innerHTML=`\n            <div class="modal__content">\n                <div data-close class="modal__close">&times;</div>\n                <div class="modal__title">${n}</div>   \n            </div>\n        `,document.querySelector(".modal").append(a),setTimeout((()=>{a.remove(),r.classList.remove("hide"),r.classList.add("show"),t(o)}),4e3)}document.querySelectorAll(n).forEach((e=>{var t;(t=e).addEventListener("submit",(e=>{e.preventDefault();const n=document.createElement("img");n.src="img/form/spinner.svg",n.style.cssText="\n            display: block;\n            margin: 0 auto;\n           ",t.insertAdjacentElement("afterend",n);const o=new FormData(t);(async(e,t)=>{const n=await fetch("http://localhost:3000/requests",{method:"POST",headers:{"Content-type":"application/json"},body:t});return await n.json()})(0,JSON.stringify(Object.fromEntries(o.entries()))).then((e=>{console.log(e),r("Thanks. We will contact you soon)))")})).catch((()=>{r("Something went wrong...")})).finally((()=>{t.reset(),n.remove()}))}))}))}("form",".modal",n),function(n,o,s){const r=document.querySelectorAll(n),a=document.querySelector(o);r.forEach((t=>{t.addEventListener("click",(()=>e(o,s)))})),a.addEventListener("click",(e=>{e.target!==a&&""!==e.target.getAttribute("data-close")||t(o)})),document.addEventListener("keydown",(e=>{"Escape"===e.code&&a.classList.contains("show")&&t(o)})),window.addEventListener("scroll",(function t(){window.pageYOffset+document.documentElement.clientHeight>=document.documentElement.scrollHeight&&(e(o,s),window.removeEventListener("scroll",t))}))}("[data-modal]",".modal",n),function(e){let{container:t,slide:n,nextArrow:o,prevArrow:s,totalCounter:r,currentCounter:a,wrapper:c,field:i}=e;const l=document.querySelector(o),d=document.querySelector(s),u=document.querySelectorAll(n),m=document.querySelector(r),h=document.querySelector(a),f=document.querySelector(c),g=document.querySelector(i),y=window.getComputedStyle(f).width,v=document.querySelector(t);let _=1,p=0;u.length<10?(m.textContent=`0${u.length}`,h.textContent=`0${_}`):(m.textContent=`${u.length}`,h.textContent=`${_}`),g.style.width=100*u.length+"%",g.style.display="flex",g.style.transition="0.5s all",f.style.overflow="hidden",u.forEach((e=>{e.style.width=y})),v.style.position="relative";const w=document.createElement("ol"),L=[];w.classList.add("carousel-indicators"),v.append(w);for(let e=0;e<u.length;e++){const t=document.createElement("li");t.setAttribute("data-slide-to",e+1),t.classList.add("dot"),0===e&&(t.style.opacity=1),w.append(t),L.push(t)}function S(e){return+e.replace(/\D/g,"")}l.addEventListener("click",(()=>{p===S(y)*(u.length-1)?p=0:p+=S(y),g.style.transform=`translateX(-${p}px)`,_===u.length?_=1:_++,u.length<10?h.textContent=`0${_}`:h.textContent=`${_}`,L.forEach((e=>{e.style.opacity=".5"})),L[_-1].style.opacity="1"})),d.addEventListener("click",(()=>{0===p?p=S(y)*(u.length-1):p-=S(y),g.style.transform=`translateX(-${p}px)`,1===_?_=u.length:_--,u.length<10?h.textContent=`0${_}`:h.textContent=`${_}`,L.forEach((e=>{e.style.opacity=".5"})),L[_-1].style.opacity="1"})),L.forEach((e=>{e.addEventListener("click",(e=>{const t=+e.target.getAttribute("data-slide-to");_=t,p=S(y)*(t-1),g.style.transform=`translateX(-${p}px)`,u.length<10?h.textContent=`0${_}`:h.textContent=`${_}`,L.forEach((e=>{e.style.opacity=".5"})),L[_-1].style.opacity="1"}))}))}({container:".offer__slider",slide:".offer__slide",nextArrow:".offer__slider-next",prevArrow:".offer__slider-prev",totalCounter:"#total",currentCounter:"#current",wrapper:".offer__slider-wrapper",field:".offer__slider-inner"}),function(e,t,n,o){const s=document.querySelectorAll(e),r=document.querySelectorAll(t),a=document.querySelector(n);function c(){r.forEach((e=>{e.classList.remove("show","fade"),e.classList.add("hide")})),s.forEach((e=>{e.classList.remove(o)}))}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;r[e].classList.remove("hide"),r[e].classList.add("show","fade"),s[e].classList.add(o)}c(),i(),a.addEventListener("click",(t=>{const n=t.target;n&&n.classList.contains(e.slice(1))&&s.forEach(((e,t)=>{n===e&&(c(),i(t))}))}))}(".tabheader__item",".tabcontent",".tabheader__items","tabheader__item_active"),function(e,t){function n(e){return e>=0&&e<10?`0${e}`:e}!function(e,o){const s=document.querySelector(e),r=s.querySelector("#days"),a=s.querySelector("#hours"),c=s.querySelector("#minutes"),i=s.querySelector("#seconds"),l=setInterval(d,1e3);function d(){const e=function(e){const n=Date.parse(t)-Date.parse(new Date);return{total:n,days:Math.floor(n/864e5),hours:Math.floor(n/36e5%24),minutes:Math.floor(n/1e3/60%60),seconds:Math.floor(n/1e3%60)}}();r.innerHTML=n(e.days),a.innerHTML=n(e.hours),c.innerHTML=n(e.minutes),i.innerHTML=n(e.seconds),e.total<=0&&clearInterval(l)}d()}(e)}(".timer","2022-06-22")}))}();
//# sourceMappingURL=bundle.js.map