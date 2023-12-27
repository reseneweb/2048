parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"6KIz":[function(require,module,exports) {
"use strict";var l,e=document.querySelector(".page"),r=document.querySelector(".start"),s=document.querySelector(".game-score"),c=Array(16).fill(null),t=!0,a=0,o=!1;function i(){var l,s,t=Math.floor(9*Math.random()),a=Math.floor(9*Math.random());do{l=Math.floor(16*Math.random()),s=Math.floor(16*Math.random())}while(l===s);0!==t?(e.querySelectorAll(".field-cell")[l].classList.add("field-cell--2"),c[l]=2):(e.querySelectorAll(".field-cell")[l].classList.add("field-cell--4"),c[l]=4),0!==a?(e.querySelectorAll(".field-cell")[s].classList.add("field-cell--2"),c[s]=2):(e.querySelectorAll(".field-cell")[s].classList.add("field-cell--4"),c[s]=4),r.classList.remove("start"),r.classList.add("restart"),r.textContent="Restart",e.querySelector(".message-start").classList.add("hidden")}function d(){for(var l,r=[],s=0;s<c.length;s++)c[s]&&r.push(s);var t=Math.floor(9*Math.random());do{l=Math.floor(16*Math.random())}while(r.includes(l));0!==t?(e.querySelectorAll(".field-cell")[l].classList.add("field-cell--2"),c[l]=2):(e.querySelectorAll(".field-cell")[l].classList.add("field-cell--4"),c[l]=4)}function n(){c=Array(16).fill(null),t=!0,a=0,s.textContent="0",e.querySelector(".message-win").classList.add("hidden"),e.querySelector(".message-lose").classList.add("hidden"),o=!1,e.querySelectorAll(".field-cell").forEach(function(l){e.querySelectorAll(".field-cell").forEach(function(e,r){l.classList.remove("field-cell--".concat(Math.pow(2,r+1)))})})}function u(){c.includes(2048)&&e.querySelector(".message-win").classList.remove("hidden")}function f(){var l=!1;if(!c.includes(null)){for(var r=0;r<c.length;r++)null!==c[r]&&(c[r-4]===c[r]||c[r+4]===c[r]||c[r-1]===c[r]&&0!==r&&4!==r&&8!==r&&12!==r||c[r+1]===c[r]&&3!==r&&7!==r&&11!==r&&15!==r)&&(l=!0);!1===l&&(e.querySelector(".message-lose").classList.remove("hidden"),o=!0)}}function v(){if(!o){t=!1;var r=[];switch(!0){case"ArrowUp"===l||"ArrowDown"===l:for(var i=0;i<c.length;i++)null!==c[i]&&r.push(i);"ArrowDown"===l&&r.reverse();break;case"ArrowLeft"===l||"ArrowRight"===l:for(var n=0;n<c.length;n+=4)null!==c[n]&&r.push(n);for(var v=1;v<c.length;v+=4)null!==c[v]&&r.push(v);for(var y=2;y<c.length;y+=4)null!==c[y]&&r.push(y);for(var A=3;A<c.length;A+=4)null!==c[A]&&r.push(A);"ArrowRight"===l&&r.reverse()}for(var L=0;L<r.length;L++){var h=r[L],q=void 0,S=void 0,m=void 0;switch(!0){case"ArrowUp"===l:q=r[L]-4,S=r[L]-8,m=r[L]-12;break;case"ArrowDown"===l:q=r[L]+4,S=r[L]+8,m=r[L]+12;break;case"ArrowLeft"===l:q=r[L]-1,0!==h&&4!==h&&8!==h&&12!==h||(q=void 0),S=r[L]-2,0!==h&&1!==h&&4!==h&&5!==h&&8!==h&&9!==h&&12!==h&&13!==h||(S=void 0),m=r[L]-3,0!==h&&1!==h&&2!==h&&4!==h&&5!==h&&6!==h&&8!==h&&9!==h&&10!==h&&12!==h&&13!==h&&14!==h||(m=void 0);break;case"ArrowRight"===l:q=r[L]+1,3!==h&&7!==h&&11!==h&&15!==h||(q=void 0),S=r[L]+2,2!==h&&3!==h&&6!==h&&7!==h&&10!==h&&11!==h&&14!==h&&15!==h||(S=void 0),m=r[L]+3,1!==h&&2!==h&&3!==h&&5!==h&&6!==h&&7!==h&&9!==h&&10!==h&&11!==h&&13!==h&&14!==h&&15!==h||(m=void 0)}var w=null!==c[q]&&c[q]===c[h],g=null!==c[S]&&c[S]===c[h],M=null!==c[m]&&c[m]===c[h],k="field-cell--".concat(c[h]),p="field-cell--".concat(2*c[h]);switch(!0){case w:e.querySelectorAll(".field-cell")[q].classList.remove(k),e.querySelectorAll(".field-cell")[q].classList.add(p),e.querySelectorAll(".field-cell")[h].classList.remove(k),c[q]*=2,c[h]=null,t=!0,a+=c[q],s.textContent=a,null===c[S]&&(e.querySelectorAll(".field-cell")[S].classList.add(p),e.querySelectorAll(".field-cell")[q].classList.remove(p),c[S]=c[q],c[q]=null,t=!0),null===c[m]&&(e.querySelectorAll(".field-cell")[m].classList.add(p),e.querySelectorAll(".field-cell")[S].classList.remove(p),c[m]=c[S],c[S]=null,t=!0);break;case g&&null===c[q]:e.querySelectorAll(".field-cell")[S].classList.remove(k),e.querySelectorAll(".field-cell")[S].classList.add(p),e.querySelectorAll(".field-cell")[h].classList.remove(k),c[S]*=2,c[h]=null,t=!0,a+=c[S],s.textContent=a,null===c[m]&&(e.querySelectorAll(".field-cell")[m].classList.add(p),e.querySelectorAll(".field-cell")[S].classList.remove(p),c[m]=c[S],c[S]=null,t=!0);break;case M&&null===c[q]&&null===c[S]:e.querySelectorAll(".field-cell")[m].classList.remove(k),e.querySelectorAll(".field-cell")[m].classList.add(p),e.querySelectorAll(".field-cell")[h].classList.remove(k),c[m]*=2,c[h]=null,t=!0,a+=c[m],s.textContent=a;break;default:switch(!0){case null===c[q]:e.querySelectorAll(".field-cell")[q].classList.add(k),e.querySelectorAll(".field-cell")[h].classList.remove(k),c[q]=c[h],c[h]=null,t=!0,null===c[S]&&(e.querySelectorAll(".field-cell")[S].classList.add(k),e.querySelectorAll(".field-cell")[q].classList.remove(k),c[S]=c[q],c[q]=null,t=!0),null===c[m]&&(e.querySelectorAll(".field-cell")[m].classList.add(k),e.querySelectorAll(".field-cell")[S].classList.remove(k),c[m]=c[S],c[S]=null,t=!0);break;case null===c[S]:e.querySelectorAll(".field-cell")[S].classList.add(k),e.querySelectorAll(".field-cell")[h].classList.remove(k),c[S]=c[q],c[h]=null,t=!0,null===c[m]&&(e.querySelectorAll(".field-cell")[m].classList.add(k),e.querySelectorAll(".field-cell")[S].classList.remove(k),c[m]=c[S],c[S]=null,t=!0);break;case null===c[m]:e.querySelectorAll(".field-cell")[m].classList.add(k),e.querySelectorAll(".field-cell")[h].classList.remove(k),c[m]=c[q],c[h]=null,t=!0}}}u(),t&&d(),f()}}r.addEventListener("click",function(){r.classList.contains("start")?i():(n(),i())}),document.addEventListener("keydown",function(e){t=!0,l=e.key,v()});
},{}]},{},["6KIz"], null)
//# sourceMappingURL=main.7f8a7aba.js.map