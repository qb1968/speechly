!function(){"use strict";function t(){}const e=t=>t;function n(t,e){for(const n in e)t[n]=e[n];return t}function o(t){return t()}function i(){return Object.create(null)}function r(t){t.forEach(o)}function s(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e}function l(e,n,o){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}(n,o))}const a="undefined"!=typeof window;let u=a?()=>window.performance.now():()=>Date.now(),d=a?t=>requestAnimationFrame(t):t;const f=new Set;function h(t){f.forEach((e=>{e.c(t)||(f.delete(e),e.f())})),0!==f.size&&d(h)}function g(t){let e;return 0===f.size&&d(h),{promise:new Promise((n=>{f.add(e={c:t,f:n})})),abort(){f.delete(e)}}}let p=!1;const m=new Set;function y(t,e){p&&m.delete(e),e.parentNode!==t&&t.appendChild(e)}function b(t,e,n){p&&m.delete(e),(e.parentNode!==t||n&&e.nextSibling!==n)&&t.insertBefore(e,n||null)}function w(t){p?m.add(t):t.parentNode&&t.parentNode.removeChild(t)}function v(t){return document.createElement(t)}function $(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function x(t){return document.createTextNode(t)}function C(){return x(" ")}function k(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function E(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function S(t,e,n){e in t?t[e]="boolean"==typeof t[e]&&""===n||n:E(t,e,n)}function _(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function T(t,e,n,o){t.style.setProperty(e,n,o?"important":"")}function N(t,e,n){t.classList[n?"add":"remove"](e)}function P(t){const e={};for(const n of t)e[n.name]=n.value;return e}const R=new Set;let M,A=0;function z(t,e,n,o,i,r,s,c=0){const l=16.666/o;let a="{\n";for(let t=0;t<=1;t+=l){const o=e+(n-e)*r(t);a+=100*t+`%{${s(o,1-o)}}\n`}const u=a+`100% {${s(n,1-n)}}\n}`,d=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${c}`,f=t.ownerDocument;R.add(f);const h=f.__svelte_stylesheet||(f.__svelte_stylesheet=f.head.appendChild(v("style")).sheet),g=f.__svelte_rules||(f.__svelte_rules={});g[d]||(g[d]=!0,h.insertRule(`@keyframes ${d} ${u}`,h.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${d} ${o}ms linear ${i}ms 1 both`,A+=1,d}function D(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),i=n.length-o.length;i&&(t.style.animation=o.join(", "),A-=i,A||d((()=>{A||(R.forEach((t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}})),R.clear())})))}function B(t){M=t}function F(){if(!M)throw new Error("Function called outside component initialization");return M}function I(t){F().$$.on_mount.push(t)}const L=[],j=[],O=[],H=[],V=Promise.resolve();let U=!1;function q(t){O.push(t)}let W=!1;const G=new Set;function J(){if(!W){W=!0;do{for(let t=0;t<L.length;t+=1){const e=L[t];B(e),K(e.$$)}for(B(null),L.length=0;j.length;)j.pop()();for(let t=0;t<O.length;t+=1){const e=O[t];G.has(e)||(G.add(e),e())}O.length=0}while(L.length);for(;H.length;)H.pop()();U=!1,W=!1,G.clear()}}function K(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(q)}}let Q;function X(){return Q||(Q=Promise.resolve(),Q.then((()=>{Q=null}))),Q}function Y(t,e,n){t.dispatchEvent(function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(`${e?"intro":"outro"}${n}`))}const Z=new Set;let tt;function et(t,e){t&&t.i&&(Z.delete(t),t.i(e))}function nt(t,e,n,o){if(t&&t.o){if(Z.has(t))return;Z.add(t),tt.c.push((()=>{Z.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}const ot={duration:0};function it(n,o,i){let r,c,l=o(n,i),a=!1,d=0;function f(){r&&D(n,r)}function h(){const{delay:o=0,duration:i=300,easing:s=e,tick:h=t,css:p}=l||ot;p&&(r=z(n,0,1,i,o,s,p,d++)),h(0,1);const m=u()+o,y=m+i;c&&c.abort(),a=!0,q((()=>Y(n,!0,"start"))),c=g((t=>{if(a){if(t>=y)return h(1,0),Y(n,!0,"end"),f(),a=!1;if(t>=m){const e=s((t-m)/i);h(e,1-e)}}return a}))}let p=!1;return{start(){p||(D(n),s(l)?(l=l(),X().then(h)):h())},invalidate(){p=!1},end(){a&&(f(),a=!1)}}}const rt="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function st(t,e){-1===t.$$.dirty[0]&&(L.push(t),U||(U=!0,V.then(J)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ct(e,n,c,l,a,u,d=[-1]){const f=M;B(e);const h=e.$$={fragment:null,ctx:null,props:u,update:t,not_equal:a,bound:i(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:n.context||[]),callbacks:i(),dirty:d,skip_bound:!1};let g=!1;if(h.ctx=c?c(e,n.props||{},((t,n,...o)=>{const i=o.length?o[0]:n;return h.ctx&&a(h.ctx[t],h.ctx[t]=i)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](i),g&&st(e,t)),n})):[],h.update(),g=!0,r(h.before_update),h.fragment=!!l&&l(h.ctx),n.target){if(n.hydrate){p=!0;const t=function(t){return Array.from(t.childNodes)}(n.target);h.fragment&&h.fragment.l(t),t.forEach(w)}else h.fragment&&h.fragment.c();n.intro&&et(e.$$.fragment),function(t,e,n,i){const{fragment:c,on_mount:l,on_destroy:a,after_update:u}=t.$$;c&&c.m(e,n),i||q((()=>{const e=l.map(o).filter(s);a?a.push(...e):r(e),t.$$.on_mount=[]})),u.forEach(q)}(e,n.target,n.anchor,n.customElement),function(){p=!1;for(const t of m)t.parentNode.removeChild(t);m.clear()}(),J()}B(f)}let lt;function at(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}function ut(t){return t*t*t}function dt(t){const e=t-1;return e*e*e+1}"function"==typeof HTMLElement&&(lt=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(o).filter(s);for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}disconnectedCallback(){r(this.$$.on_disconnect)}$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});const ft=[];function ht(t){return"[object Date]"===Object.prototype.toString.call(t)}function gt(t,e){if(t===e||t!=t)return()=>t;const n=typeof t;if(n!==typeof e||Array.isArray(t)!==Array.isArray(e))throw new Error("Cannot interpolate values of different type");if(Array.isArray(t)){const n=e.map(((e,n)=>gt(t[n],e)));return t=>n.map((e=>e(t)))}if("object"===n){if(!t||!e)throw new Error("Object cannot be null");if(ht(t)&&ht(e)){t=t.getTime();const n=(e=e.getTime())-t;return e=>new Date(t+e*n)}const n=Object.keys(e),o={};return n.forEach((n=>{o[n]=gt(t[n],e[n])})),t=>{const e={};return n.forEach((n=>{e[n]=o[n](t)})),e}}if("number"===n){const n=e-t;return e=>t+e*n}throw new Error(`Cannot interpolate ${n} values`)}function pt(o,i={}){const r=function(e,n=t){let o;const i=[];function r(t){if(r=t,((n=e)!=n?r==r:n!==r||n&&"object"==typeof n||"function"==typeof n)&&(e=t,o)){const t=!ft.length;for(let t=0;t<i.length;t+=1){const n=i[t];n[1](),ft.push(n,e)}if(t){for(let t=0;t<ft.length;t+=2)ft[t][0](ft[t+1]);ft.length=0}}var n,r}return{set:r,update:function(t){r(t(e))},subscribe:function(s,c=t){const l=[s,c];return i.push(l),1===i.length&&(o=n(r)||t),s(e),()=>{const t=i.indexOf(l);-1!==t&&i.splice(t,1),0===i.length&&(o(),o=null)}}}}(o);let s,c=o;function l(t,l){if(null==o)return r.set(o=t),Promise.resolve();c=t;let a=s,d=!1,{delay:f=0,duration:h=400,easing:p=e,interpolate:m=gt}=n(n({},i),l);if(0===h)return a&&(a.abort(),a=null),r.set(o=c),Promise.resolve();const y=u()+f;let b;return s=g((e=>{if(e<y)return!0;d||(b=m(o,t),"function"==typeof h&&(h=h(o,t)),d=!0),a&&(a.abort(),a=null);const n=e-y;return n>h?(r.set(o=t),!1):(r.set(o=b(p(n/h))),!0)})),s.promise}return{set:l,update:(t,e)=>l(t(c,o),e),subscribe:r.subscribe}}var mt,yt,bt,wt,vt,$t=(function(t,e){var n;Object.defineProperty(e,"__esModule",{value:!0}),(n=e.ClientState||(e.ClientState={}))[n.Failed=0]="Failed",n[n.NoBrowserSupport=1]="NoBrowserSupport",n[n.NoAudioConsent=2]="NoAudioConsent",n[n.Disconnected=3]="Disconnected",n[n.Disconnecting=4]="Disconnecting",n[n.Connecting=5]="Connecting",n[n.Connected=6]="Connected",n[n.Starting=7]="Starting",n[n.Stopping=8]="Stopping",n[n.Recording=9]="Recording"}(mt={exports:{}},mt.exports),mt.exports);function xt(t){return function(e,n){if(!e.hasOwnProperty("ownerDocument")){Object.defineProperty(e,"ownerDocument",{get:function(){return e.parentElement}});let t=e;for(;t.parentElement;)t=t.parentElement;e.parentElement.head=t}return t(e,n)}}function Ct(t,{delay:e=0,speed:n,duration:o,easing:i=at}={}){const r=t.getTotalLength();return void 0===o?o=void 0===n?800:r/n:"function"==typeof o&&(o=o(r)),{delay:e,duration:o,easing:i,css:(t,e)=>`stroke-dasharray: ${t*r} ${e*r}`}}!function(t){t.Failed="Failed",t.NoBrowserSupport="NoBrowserSupport",t.NoAudioConsent="NoAudioConsent",t.Idle="Idle",t.Connecting="Connecting",t.Ready="Ready",t.Recording="Recording",t.Loading="Loading"}(yt||(yt={})),function(t){t.Poweron="poweron",t.Mic="mic",t.Error="error",t.Denied="denied"}(bt||(bt={})),function(t){t.Hold="hold",t.Click="click",t.Noninteractive="noninteractive"}(wt||(wt={})),function(t){t.None="none",t.Connecting="connecting",t.Busy="busy"}(vt||(vt={})),$t.ClientState.Disconnected,bt.Poweron,wt.Click,vt.None,$t.ClientState.Disconnecting,bt.Poweron,wt.Noninteractive,vt.Connecting,$t.ClientState.Connecting,bt.Poweron,wt.Noninteractive,vt.Connecting,$t.ClientState.Connected,bt.Mic,wt.Hold,vt.None,$t.ClientState.Starting,bt.Mic,wt.Hold,vt.Connecting,$t.ClientState.Recording,bt.Mic,wt.Hold,vt.None,$t.ClientState.Stopping,bt.Mic,wt.Noninteractive,vt.Busy,$t.ClientState.Failed,bt.Error,wt.Click,vt.None,$t.ClientState.NoBrowserSupport,bt.Error,wt.Click,vt.None,$t.ClientState.NoAudioConsent,bt.Denied,wt.Click,vt.None,yt.Idle,bt.Poweron,wt.Click,vt.None,yt.Connecting,bt.Poweron,wt.Noninteractive,vt.Connecting,yt.Ready,bt.Mic,wt.Hold,vt.None,yt.Recording,bt.Mic,wt.Hold,vt.None,yt.Loading,bt.Mic,wt.Noninteractive,vt.Busy,yt.Failed,bt.Error,wt.Click,vt.None,yt.NoBrowserSupport,bt.Error,wt.Click,vt.None,yt.NoAudioConsent,bt.Denied,wt.Click,vt.None;const kt=[0,1];function Et(t,e,n,o){if(e<n)return t[0];if(e>o)return t[t.length-1];let i=(o-n)/(t.length-1);if(i<=0)return t[0];let r=(e-n)/i,s=Math.floor(r),c=Math.ceil(r),l=r-s;return(1-l)*t[s]+l*t[c]}function St(e){let n;return{c(){n=v("canvas"),this.c=t,T(n,"color",e[0])},m(t,o){b(t,n,o),e[2](n)},p(t,[e]){1&e&&T(n,"color",t[0])},i:t,o:t,d(t){t&&w(n),e[2](null)}}}function _t(t,e,n){let o,{color:i="#60e0ff"}=e,r=0,s=0,c=[0,0];const l=F(),a=(t,e,n,o,i,r)=>{o<2*r&&(r=o/2),i<2*r&&(r=i/2),t.beginPath(),t.moveTo(e+r,n),t.arcTo(e+o,n,e+o,n+i,r),t.arcTo(e+o,n+i,e,n+i,r),t.arcTo(e,n+i,e,n,r),t.arcTo(e,n,e+o,n,r),t.closePath()};return I((()=>{let t;const e=2*(c.length-1)+1,i=3*e+1*(e-1),u=(t,e)=>{r=Date.now()>s?t:Math.max(r,t),s=Date.now()+e},d=()=>{if(t=requestAnimationFrame(d),!o)return;const e=o.getContext("2d");if(!e)return;let l=(t=>{var e=t.backingStorePixelRatio||t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1;return(window.devicePixelRatio||1)/e})(e),u=Number.parseInt(getComputedStyle(o).getPropertyValue("width").slice(0,-2)),f=Number.parseInt(getComputedStyle(o).getPropertyValue("height").slice(0,-2));n(1,o.width=u*l,o),n(1,o.height=f*l,o),Date.now()<s?c[0]=.15*r+.85*c[0]:c[0]=.0625+.75*c[0];let h=1;for(;h<c.length;)c[h]=.25*c[h-1]+.5*c[h]+.0625,h++;e.clearRect(0,0,o.width,o.height);const g=3/i*o.width*.5,p=4/i*o.width;for(e.fillStyle=o.style.color||"#000000",h=0;h<c.length;h++){const t=c[h]*o.height;t*o.height>2*g?a(e,.5*o.width-g+h*p,.5*(o.height-t),2*g,t,g):(e.beginPath(),e.arc(.5*o.width+h*p,.5*o.height,t*o.height*.5,0,2*Math.PI)),e.fill(),h>0&&(t*o.height>2*g?a(e,.5*o.width-g-h*p,.5*(o.height-t),2*g,t,g):(e.beginPath(),e.arc(.5*o.width-h*p,.5*o.height,t*o.height*.5,0,2*Math.PI)),e.fill())}};d(),u(1,350);const f=t=>u(.5*Math.random()+.5,75*Math.random()+75);return l.addEventListener("updateVU",f),()=>{cancelAnimationFrame(t),l.removeEventListener("updateVU",f)}})),t.$$set=t=>{"color"in t&&n(0,i=t.color)},[i,o,function(t){j[t?"unshift":"push"]((()=>{o=t,n(1,o)}))}]}customElements.define("vu-meter",class extends lt{constructor(t){super(),this.shadowRoot.innerHTML="<style>canvas{display:block;width:1.35rem;height:1.5rem;margin:0;padding:0 0.8rem 0 0rem}</style>",ct(this,{target:this.shadowRoot,props:P(this.attributes),customElement:!0},_t,St,c,{color:0}),t&&(t.target&&b(t.target,this,t.anchor),t.props&&(this.$set(t.props),J()))}static get observedAttributes(){return["color"]}get color(){return this.$$.ctx[0]}set color(t){this.$set({color:t}),J()}});const{window:Tt}=rt;function Nt(t,e,n){const o=t.slice();return o[28]=e[n],o[30]=n,o}function Pt(n){let o,i,c,l,a,d,f,h,p,m,$,x,k,_=n[10]&&Rt(n),T=n[6],N=[];for(let t=0;t<T.length;t+=1)N[t]=At(Nt(n,T,t));let P=n[9]&&zt(n);return{c(){o=v("div"),i=v("div"),c=v("div"),l=C(),a=v("div"),d=v("vu-meter"),f=C(),_&&_.c(),p=C();for(let t=0;t<N.length;t+=1)N[t].c();m=C(),P&&P.c(),E(c,"class","TransscriptItemBgDiv"),S(d,"color",n[4]),E(a,"class","TransscriptItemContent"),E(i,"class","TranscriptItem"),E(o,"class","BigTranscript")},m(t,e){b(t,o,e),y(o,i),y(i,c),y(i,l),y(i,a),y(a,d),n[18](d),y(a,f),_&&_.m(a,null),y(o,p);for(let t=0;t<N.length;t+=1)N[t].m(o,null);y(o,m),P&&P.m(o,null),k=!0},p(t,e){if((!k||16&e)&&S(d,"color",t[4]),t[10]?_?1024&e&&et(_,1):(_=Rt(t),_.c(),et(_,1),_.m(a,null)):_&&(_.d(1),_=null),33344&e){let n;for(T=t[6],n=0;n<T.length;n+=1){const i=Nt(t,T,n);N[n]?(N[n].p(i,e),et(N[n],1)):(N[n]=At(i),N[n].c(),et(N[n],1),N[n].m(o,m))}for(;n<N.length;n+=1)N[n].d(1);N.length=T.length}t[9]?P?(P.p(t,e),512&e&&et(P,1)):(P=zt(t),P.c(),et(P,1),P.m(o,null)):P&&(P.d(1),P=null)},i(t){if(!k){et(_),h||q((()=>{h=it(i,n[13],{duration:200}),h.start()}));for(let t=0;t<T.length;t+=1)et(N[t]);et(P),q((()=>{x&&x.end(1),$||($=it(o,n[12],{})),$.start()})),k=!0}},o(i){$&&$.invalidate(),x=function(n,o,i){let c,l=o(n,i),a=!0;const d=tt;function f(){const{delay:o=0,duration:i=300,easing:s=e,tick:f=t,css:h}=l||ot;h&&(c=z(n,1,0,i,o,s,h));const p=u()+o,m=p+i;q((()=>Y(n,!1,"start"))),g((t=>{if(a){if(t>=m)return f(0,1),Y(n,!1,"end"),--d.r||r(d.c),!1;if(t>=p){const e=s((t-p)/i);f(1-e,e)}}return a}))}return d.r+=1,s(l)?X().then((()=>{l=l(),f()})):f(),{end(t){t&&l.tick&&l.tick(1,0),a&&(c&&D(n,c),a=!1)}}}(o,n[12],{}),k=!1},d(t){t&&w(o),n[18](null),_&&_.d(),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(N,t),P&&P.d(),t&&x&&x.end()}}}function Rt(e){let n,o;return{c(){n=v("div"),n.textContent="Listening...",E(n,"class","listening")},m(t,e){b(t,n,e)},i(t){o||q((()=>{o=it(n,e[13],{duration:400}),o.start()}))},o:t,d(t){t&&w(n)}}}function Mt(t){let e,n;return{c(){e=v("span"),E(e,"style",n=t[30]<t[6].length-1?"width:0.25em;":t[9]?"width:1.2em;":"")},m(t,n){b(t,e,n)},p(t,o){576&o&&n!==(n=t[30]<t[6].length-1?"width:0.25em;":t[9]?"width:1.2em;":"")&&E(e,"style",n)},d(t){t&&w(e)}}}function At(e){let n,o,i,r,s,c,l,a,u,d=e[28].word+"",f=e[30]<e[6].length&&Mt(e);return{c(){n=v("div"),o=v("div"),r=C(),s=v("div"),c=x(d),l=C(),f&&f.c(),E(o,"class","TransscriptItemBgDiv"),E(s,"class","TransscriptItemContent"),E(n,"class",u="TranscriptItem "+e[15](e[28])),N(n,"Entity",null!==e[28].entityType),N(n,"Final",e[28].isFinal)},m(t,e){b(t,n,e),y(n,o),y(n,r),y(n,s),y(s,c),y(s,l),f&&f.m(s,null)},p(t,e){64&e&&d!==(d=t[28].word+"")&&_(c,d),t[30]<t[6].length?f?f.p(t,e):(f=Mt(t),f.c(),f.m(s,null)):f&&(f.d(1),f=null),64&e&&u!==(u="TranscriptItem "+t[15](t[28]))&&E(n,"class",u),64&e&&N(n,"Entity",null!==t[28].entityType),64&e&&N(n,"Final",t[28].isFinal)},i(t){i||q((()=>{i=it(o,e[13],{}),i.start()})),a||q((()=>{a=it(s,e[13],{}),a.start()}))},o:t,d(t){t&&w(n),f&&f.d()}}}function zt(e){let n,o,i,r,s,c,l,a;return{c(){n=v("div"),o=v("div"),i=C(),r=v("div"),s=$("svg"),c=$("path"),E(o,"class","TransscriptItemBgDiv"),T(o,"background-color",e[4]),E(c,"stroke","currentColor"),E(c,"stroke-width","3"),E(c,"d","M7.191 11.444l4.059 6.107 7.376-12.949"),E(c,"fill","none"),E(c,"fill-rule","evenodd"),T(s,"width","2rem"),T(s,"height","2rem"),T(s,"position","absolute"),T(s,"transform","translate(-0.5rem, -0.5rem)"),T(s,"stroke","#eee"),E(s,"viewBox","0 0 24 24"),E(s,"xmlns","http://www.w3.org/2000/svg"),T(r,"width","1.0rem"),T(r,"height","1rem"),T(r,"position","relative"),E(n,"class","TranscriptItem")},m(t,e){b(t,n,e),y(n,o),y(n,i),y(n,r),y(r,s),y(s,c)},p(t,e){16&e&&T(o,"background-color",t[4])},i(t){l||q((()=>{l=it(c,e[11],{duration:500}),l.start()})),a||q((()=>{a=it(n,e[13],{duration:200,maxWidth:3}),a.start()}))},o:t,d(t){t&&w(n)}}}function Dt(e){let n,o,i,s,c,l,a=e[7]&&Pt(e);return{c(){n=v("main"),a&&a.c(),o=C(),i=v("link"),this.c=t,T(n,"--voffset",e[1]),T(n,"--hoffset",e[2]),T(n,"--fontsize",e[3]),T(n,"--highlight-color",e[4]),T(n,"--text-bg-color",e[5]),N(n,"placementTop","top"===e[0]),E(i,"href","https://fonts.googleapis.com/css2?family=Saira+Condensed:wght@700&display=swap"),E(i,"rel","stylesheet")},m(t,r){b(t,n,r),a&&a.m(n,null),b(t,o,r),y(document.head,i),s=!0,c||(l=k(Tt,"message",e[14]),c=!0)},p(t,[e]){t[7]?a?(a.p(t,e),128&e&&et(a,1)):(a=Pt(t),a.c(),et(a,1),a.m(n,null)):a&&(tt={r:0,c:[],p:tt},nt(a,1,1,(()=>{a=null})),tt.r||r(tt.c),tt=tt.p),(!s||2&e)&&T(n,"--voffset",t[1]),(!s||4&e)&&T(n,"--hoffset",t[2]),(!s||8&e)&&T(n,"--fontsize",t[3]),(!s||16&e)&&T(n,"--highlight-color",t[4]),(!s||32&e)&&T(n,"--text-bg-color",t[5]),1&e&&N(n,"placementTop","top"===t[0])},i(t){s||(et(a),s=!0)},o(t){nt(a),s=!1},d(t){t&&w(n),a&&a.d(),t&&w(o),w(i),c=!1,l()}}}function Bt(t,e,n){let o,i,{placement:r}=e,{voffset:s="3rem"}=e,{hoffset:c="2rem"}=e,{fontsize:l="1.5rem"}=e,{highlightcolor:a="#15e8b5"}=e,{textbgcolor:u="#202020"}=e,d=[],f=!1,h=null,g=null,p=$t.ClientState.Disconnected,m=!1,y=!1,b=!1;const w=F(),v=(t,e)=>{w.dispatchEvent(new CustomEvent(t,{detail:e,composed:!0}))},$=xt(Ct),x=xt(((t,{delay:e=0,duration:n=400})=>({delay:e,duration:n,easing:at,css:t=>`\n        opacity: ${Et(kt,t,0,1)};\n        max-height: ${10*Et(kt,t,0,.6)}rem;\n      `}))),C=xt(((t,{delay:e=0,duration:n=350,maxWidth:o=10})=>({delay:e,duration:n,css:t=>`\n        max-width: ${Et(kt,t,0,1)*o}rem;\n      `}))),k=t=>{if(void 0===t)return;i&&f&&i.dispatchEvent(new CustomEvent("updateVU",{detail:{level:1,seekTimeMs:1e3}})),t.isFinal?S(d.length>0?2e3:0):d.length>0&&(m||n(17,m=!0),S(2e3));const e=`${t.contextId}/${t.id}`;null!==g?g!==e&&(n(9,b=!1),g=e):g=e,n(6,d=[]),t.words.forEach((t=>{n(6,d[t.index]={word:t.value,serialNumber:t.index,entityType:null,isFinal:t.isFinal,hide:!1},d)})),t.entities.forEach((t=>{n(6,d[t.startPosition].word=t.value,d),n(6,d[t.startPosition].entityType=t.type,d),n(6,d[t.startPosition].isFinal=t.isFinal,d),n(6,d[t.startPosition].hide=!1,d);for(let e=t.startPosition+1;e<t.endPosition;e++)d[e]&&n(6,d[e].hide=!0,d)})),n(6,d=d.filter((t=>!t.hide)))};w.onSegmentUpdate=k;const E=t=>{v("debug","big-transcript.ping 1")},S=(t=0)=>{_(),h=window.setTimeout((()=>{h=null,m&&n(17,m=!1)}),t)},_=()=>{null!==h&&(window.clearTimeout(h),h=null)};return I((()=>{const t=t=>k(t.detail);return w.addEventListener("speechsegment",t),w.addEventListener("ping",E),()=>{cancelAnimationFrame(null),w.removeEventListener("speechsegment",t),w.removeEventListener("ping",E)}})),t.$$set=t=>{"placement"in t&&n(0,r=t.placement),"voffset"in t&&n(1,s=t.voffset),"hoffset"in t&&n(2,c=t.hoffset),"fontsize"in t&&n(3,l=t.fontsize),"highlightcolor"in t&&n(4,a=t.highlightcolor),"textbgcolor"in t&&n(5,u=t.textbgcolor)},t.$$.update=()=>{if(64&t.$$.dirty&&n(10,o=0===d.length),196736&t.$$.dirty){const t=p===$t.ClientState.Recording||m;t!==y&&v("visibilitychanged",t),n(7,y=t)}},[r,s,c,l,a,u,d,y,i,b,o,$,x,C,t=>{switch(t.data.type){case"speechsegment":k(t.data.segment);break;case"holdstart":f=!0;break;case"holdend":f=!1;break;case"speechhandled":t.data.success&&n(9,b=!0);break;case"speechstate":n(16,p=t.data.state),p===$t.ClientState.Recording&&(n(9,b=!1),n(6,d=[]),g=null)}},t=>t.entityType||"",p,m,function(t){j[t?"unshift":"push"]((()=>{i=t,n(8,i)}))}]}function Ft(e){let n,o,i,s,c,l,a,u,d;return{c(){n=v("main"),o=v("div"),i=v("div"),s=v("big-transcript"),c=C(),l=v("div"),a=x(e[1]),this.c=t,S(s,"textbgcolor",e[2]),E(l,"class","hint"),T(l,"opacity",e[5].opacity),E(i,"class","pad"),E(o,"class","drawer"),T(o,"background-color",e[2]),T(o,"opacity",e[3].opacity),T(o,"transform","translate(0px, "+e[4].y+"rem)"),E(n,"class","placementTop"),T(n,"--height",e[0])},m(t,r){b(t,n,r),y(n,o),y(o,i),y(i,s),y(i,c),y(i,l),y(l,a),u||(d=[k(window,"message",e[10]),k(s,"visibilitychanged",e[9])],u=!0)},p(t,[e]){4&e&&S(s,"textbgcolor",t[2]),2&e&&_(a,t[1]),32&e&&T(l,"opacity",t[5].opacity),4&e&&T(o,"background-color",t[2]),8&e&&T(o,"opacity",t[3].opacity),16&e&&T(o,"transform","translate(0px, "+t[4].y+"rem)"),1&e&&T(n,"--height",t[0])},i:t,o:t,d(t){t&&w(n),u=!1,r(d)}}}function It(t,n,o){let i,r,s,{height:c="8rem"}=n,{hint:a='Try: "Show me blue jeans"'}=n,{textbgcolor:u="#202020"}=n,d=pt({y:-1},{duration:200});l(t,d,(t=>o(4,r=t)));let f=pt({opacity:0},{duration:200,easing:e});l(t,f,(t=>o(3,i=t)));let h=pt({opacity:0},{duration:200,delay:200,easing:e});l(t,h,(t=>o(5,s=t)));return t.$$set=t=>{"height"in t&&o(0,c=t.height),"hint"in t&&o(1,a=t.hint),"textbgcolor"in t&&o(2,u=t.textbgcolor)},[c,a,u,i,r,s,d,f,h,t=>{!1===t.detail?(d.set({y:-1},{easing:ut}),f.set({opacity:0}),h.set({opacity:0})):(d.set({y:0},{easing:dt}),f.set({opacity:1}),h.set({opacity:1}))},t=>{switch(t.data.type){case"speechsegment":h.set({opacity:0})}}]}customElements.define("big-transcript",class extends lt{constructor(t){super(),this.shadowRoot.innerHTML="<style>.BigTranscript{position:relative;user-select:none;font-family:'Saira Condensed', sans-serif;text-transform:uppercase;color:#fff;font-size:var(--fontsize);line-height:135%;display:flex;flex-direction:row;justify-content:start;flex-wrap:wrap}.TranscriptItem{position:relative;display:flex;flex-direction:row;align-items:center}.Entity{color:var(--highlight-color)}.TransscriptItemContent{z-index:1;display:flex;flex-wrap:nowrap;flex-direction:row;align-items:center;overflow:hidden}.TransscriptItemBgDiv{position:absolute;box-sizing:content-box;width:100%;height:100%;top:-0.2rem;left:-0.8rem;margin:0;padding:0.2rem 0.8rem;background-color:var(--text-bg-color);z-index:-1}.placementTop{position:fixed;top:0;left:0;right:0;bottom:0;margin:var(--voffset) var(--hoffset) 0 var(--hoffset);z-index:50;pointer-events:none}.listening{animation:flow 1s linear infinite;background:linear-gradient(-60deg, #fff8, #fffc, #fff8, #fffc, #fff8);background-size:200%;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;-webkit-box-decoration-break:clone}@keyframes flow{0%{background-position:100% 50%}100%{background-position:0% 50%}}</style>",ct(this,{target:this.shadowRoot,props:P(this.attributes),customElement:!0},Bt,Dt,c,{placement:0,voffset:1,hoffset:2,fontsize:3,highlightcolor:4,textbgcolor:5}),t&&(t.target&&b(t.target,this,t.anchor),t.props&&(this.$set(t.props),J()))}static get observedAttributes(){return["placement","voffset","hoffset","fontsize","highlightcolor","textbgcolor"]}get placement(){return this.$$.ctx[0]}set placement(t){this.$set({placement:t}),J()}get voffset(){return this.$$.ctx[1]}set voffset(t){this.$set({voffset:t}),J()}get hoffset(){return this.$$.ctx[2]}set hoffset(t){this.$set({hoffset:t}),J()}get fontsize(){return this.$$.ctx[3]}set fontsize(t){this.$set({fontsize:t}),J()}get highlightcolor(){return this.$$.ctx[4]}set highlightcolor(t){this.$set({highlightcolor:t}),J()}get textbgcolor(){return this.$$.ctx[5]}set textbgcolor(t){this.$set({textbgcolor:t}),J()}});customElements.define("transcript-drawer",class extends lt{constructor(t){super(),this.shadowRoot.innerHTML="<style>.placementTop{position:fixed;top:0;left:0;right:0;bottom:0;z-index:60;pointer-events:none}.drawer{width:100%;min-height:var(--height);display:flex;flex-direction:column;justify-content:flex-end;box-shadow:0 0 0.35rem #0004}.pad{position:relative;padding:2rem 2rem 0.65rem 1.5rem}.hint{font-family:'Saira Condensed', sans-serif;text-transform:uppercase;color:#fff7;font-size:0.9rem;line-height:135%;margin-top:0.15rem}</style>",ct(this,{target:this.shadowRoot,props:P(this.attributes),customElement:!0},It,Ft,c,{height:0,hint:1,textbgcolor:2}),t&&(t.target&&b(t.target,this,t.anchor),t.props&&(this.$set(t.props),J()))}static get observedAttributes(){return["height","hint","textbgcolor"]}get height(){return this.$$.ctx[0]}set height(t){this.$set({height:t}),J()}get hint(){return this.$$.ctx[1]}set hint(t){this.$set({hint:t}),J()}get textbgcolor(){return this.$$.ctx[2]}set textbgcolor(t){this.$set({textbgcolor:t}),J()}})}();
//# sourceMappingURL=transcript-drawer.js.map
