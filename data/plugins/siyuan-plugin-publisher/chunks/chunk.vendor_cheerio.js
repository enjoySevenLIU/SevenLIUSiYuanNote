import{t as ct,i as wt,u as U,n as ut,p as ft,g as Ot,a as St,r as lt}from"./chunk.vendor_domutils.js";import{c as Y,D as at,i as a,a as $,h as b,T as $t}from"./chunk.vendor_domhandler.js";import{s as Mt,i as ht,f as dt,a as Tt}from"./chunk.vendor_cheerio-select.js";import{B as H}from"./chunk.vendor_vite-plugin-node-polyfills.js";import{s as Lt,p as Et,a as Pt}from"./chunk.vendor_parse5.js";import{a as pt}from"./chunk.vendor_parse5-htmlparser2-tree-adapter.js";import{r as Ut}from"./chunk.vendor_dom-serializer.js";import{p as Dt}from"./chunk.vendor_htmlparser2.js";const q={xml:!1,decodeEntities:!0},V={_useHtmlParser2:!0,xmlMode:!0};function I(t){return t!=null&&t.xml?typeof t.xml=="boolean"?V:{...V,...t.xml}:t??void 0}function gt(t,n,e){return t?t(n??t._root.children,null,void 0,e).toString():""}function Nt(t,n){return typeof t=="object"&&t!=null&&!("length"in t)&&!("type"in t)}function Ct(t,n){const e=Nt(t)?(n=t,void 0):t,r={...q,...this===null||this===void 0?void 0:this._options,...I(n??{})};return gt(this,e,r)}function zt(t){const n={...this._options,xmlMode:!0};return gt(this,t,n)}function O(t){const n=t||(this?this.root():[]);let e="";for(let r=0;r<n.length;r++)e+=ct(n[r]);return e}function It(t,n,e=typeof n=="boolean"?n:!1){if(!t||typeof t!="string")return null;typeof n=="boolean"&&(e=n);const r=this.load(t,q,!1);return e||r("script").remove(),r.root()[0].children.slice()}function Rt(){return this(this._root)}function yt(t,n){if(n===t)return!1;let e=n;for(;e&&e!==e.parent;)if(e=e.parent,e===t)return!0;return!1}function Bt(t,n){if(!tt(t)||!tt(n))return;let e=t.length;const r=+n.length;for(let i=0;i<r;i++)t[e++]=n[i];return t.length=e,t}function tt(t){if(Array.isArray(t))return!0;if(typeof t!="object"||!Object.prototype.hasOwnProperty.call(t,"length")||typeof t.length!="number"||t.length<0)return!1;for(let n=0;n<t.length;n++)if(!(n in t))return!1;return!0}const qt=Object.freeze(Object.defineProperty({__proto__:null,contains:yt,html:Ct,merge:Bt,parseHTML:It,root:Rt,text:O,xml:zt},Symbol.toStringTag,{value:"Module"}));function y(t){return t.cheerio!=null}function Ft(t){return t.replace(/[_.-](\w|$)/g,(n,e)=>e.toUpperCase())}function Zt(t){return t.replace(/[A-Z]/g,"-$&").toLowerCase()}function h(t,n){const e=t.length;for(let r=0;r<e;r++)n(t[r],r);return t}function R(t){const n="length"in t?Array.prototype.map.call(t,r=>Y(r,!0)):[Y(t,!0)],e=new at(n);return n.forEach(r=>{r.parent=e}),n}var A;(function(t){t[t.LowerA=97]="LowerA",t[t.LowerZ=122]="LowerZ",t[t.UpperA=65]="UpperA",t[t.UpperZ=90]="UpperZ",t[t.Exclamation=33]="Exclamation"})(A||(A={}));function B(t){const n=t.indexOf("<");if(n<0||n>t.length-3)return!1;const e=t.charCodeAt(n+1);return(e>=A.LowerA&&e<=A.LowerZ||e>=A.UpperA&&e<=A.UpperZ||e===A.Exclamation)&&t.includes(">",n+2)}const k=Object.prototype.hasOwnProperty,S=/\s+/,C="data-",nt={null:null,true:!0,false:!1},F=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,Wt=/^{[^]*}$|^\[[^]*]$/;function E(t,n,e){var r;if(!(!t||!a(t))){if((r=t.attribs)!==null&&r!==void 0||(t.attribs={}),!n)return t.attribs;if(k.call(t.attribs,n))return!e&&F.test(n)?n:t.attribs[n];if(t.name==="option"&&n==="value")return O(t.children);if(t.name==="input"&&(t.attribs.type==="radio"||t.attribs.type==="checkbox")&&n==="value")return"on"}}function j(t,n,e){e===null?bt(t,n):t.attribs[n]=`${e}`}function Jt(t,n){if(typeof t=="object"||n!==void 0){if(typeof n=="function"){if(typeof t!="string")throw new Error("Bad combination of arguments.");return h(this,(e,r)=>{a(e)&&j(e,t,n.call(e,r,e.attribs[t]))})}return h(this,e=>{a(e)&&(typeof t=="object"?Object.keys(t).forEach(r=>{const i=t[r];j(e,r,i)}):j(e,t,n))})}return arguments.length>1?this:E(this[0],t,this.options.xmlMode)}function et(t,n,e){return n in t?t[n]:!e&&F.test(n)?E(t,n,!1)!==void 0:E(t,n,e)}function z(t,n,e,r){n in t?t[n]=e:j(t,n,!r&&F.test(n)?e?"":null:`${e}`)}function Gt(t,n){var e;if(typeof t=="string"&&n===void 0){const r=this[0];if(!r||!a(r))return;switch(t){case"style":{const i=this.css(),s=Object.keys(i);return s.forEach((o,c)=>{i[c]=o}),i.length=s.length,i}case"tagName":case"nodeName":return r.name.toUpperCase();case"href":case"src":{const i=(e=r.attribs)===null||e===void 0?void 0:e[t];return typeof URL<"u"&&(t==="href"&&(r.tagName==="a"||r.name==="link")||t==="src"&&(r.tagName==="img"||r.tagName==="iframe"||r.tagName==="audio"||r.tagName==="video"||r.tagName==="source"))&&i!==void 0&&this.options.baseURI?new URL(i,this.options.baseURI).href:i}case"innerText":return wt(r);case"textContent":return ct(r);case"outerHTML":return this.clone().wrap("<container />").parent().html();case"innerHTML":return this.html();default:return et(r,t,this.options.xmlMode)}}if(typeof t=="object"||n!==void 0){if(typeof n=="function"){if(typeof t=="object")throw new Error("Bad combination of arguments.");return h(this,(r,i)=>{a(r)&&z(r,t,n.call(r,i,et(r,t,this.options.xmlMode)),this.options.xmlMode)})}return h(this,r=>{a(r)&&(typeof t=="object"?Object.keys(t).forEach(i=>{const s=t[i];z(r,i,s,this.options.xmlMode)}):z(r,t,n,this.options.xmlMode))})}}function rt(t,n,e){var r;const i=t;(r=i.data)!==null&&r!==void 0||(i.data={}),typeof n=="object"?Object.assign(i.data,n):typeof n=="string"&&e!==void 0&&(i.data[n]=e)}function it(t,n){let e,r,i;n==null?(e=Object.keys(t.attribs).filter(s=>s.startsWith(C)),r=e.map(s=>Ft(s.slice(C.length)))):(e=[C+Zt(n)],r=[n]);for(let s=0;s<e.length;++s){const o=e[s],c=r[s];if(k.call(t.attribs,o)&&!k.call(t.data,c)){if(i=t.attribs[o],k.call(nt,i))i=nt[i];else if(i===String(Number(i)))i=Number(i);else if(Wt.test(i))try{i=JSON.parse(i)}catch{}t.data[c]=i}}return n==null?t.data:i}function Kt(t,n){var e;const r=this[0];if(!r||!a(r))return;const i=r;return(e=i.data)!==null&&e!==void 0||(i.data={}),t?typeof t=="object"||n!==void 0?(h(this,s=>{a(s)&&(typeof t=="object"?rt(s,t):rt(s,t,n))}),this):k.call(i.data,t)?i.data[t]:it(i,t):it(i)}function Qt(t){const n=arguments.length===0,e=this[0];if(!e||!a(e))return n?void 0:this;switch(e.name){case"textarea":return this.text(t);case"select":{const r=this.find("option:selected");if(!n){if(this.attr("multiple")==null&&typeof t=="object")return this;this.find("option").removeAttr("selected");const i=typeof t!="object"?[t]:t;for(let s=0;s<i.length;s++)this.find(`option[value="${i[s]}"]`).attr("selected","");return this}return this.attr("multiple")?r.toArray().map(i=>O(i.children)):r.attr("value")}case"input":case"option":return n?this.attr("value"):this.attr("value",t)}}function bt(t,n){!t.attribs||!k.call(t.attribs,n)||delete t.attribs[n]}function P(t){return t?t.trim().split(S):[]}function Xt(t){const n=P(t);for(let e=0;e<n.length;e++)h(this,r=>{a(r)&&bt(r,n[e])});return this}function Yt(t){return this.toArray().some(n=>{const e=a(n)&&n.attribs.class;let r=-1;if(e&&t.length)for(;(r=e.indexOf(t,r+1))>-1;){const i=r+t.length;if((r===0||S.test(e[r-1]))&&(i===e.length||S.test(e[i])))return!0}return!1})}function _t(t){if(typeof t=="function")return h(this,(r,i)=>{if(a(r)){const s=r.attribs.class||"";_t.call([r],t.call(r,i,s))}});if(!t||typeof t!="string")return this;const n=t.split(S),e=this.length;for(let r=0;r<e;r++){const i=this[r];if(!a(i))continue;const s=E(i,"class",!1);if(!s)j(i,"class",n.join(" ").trim());else{let o=` ${s} `;for(let c=0;c<n.length;c++){const u=`${n[c]} `;o.includes(` ${u}`)||(o+=u)}j(i,"class",o.trim())}}return this}function mt(t){if(typeof t=="function")return h(this,(i,s)=>{a(i)&&mt.call([i],t.call(i,s,i.attribs.class||""))});const n=P(t),e=n.length,r=arguments.length===0;return h(this,i=>{if(a(i))if(r)i.attribs.class="";else{const s=P(i.attribs.class);let o=!1;for(let c=0;c<e;c++){const u=s.indexOf(n[c]);u>=0&&(s.splice(u,1),o=!0,c--)}o&&(i.attribs.class=s.join(" "))}})}function xt(t,n){if(typeof t=="function")return h(this,(o,c)=>{a(o)&&xt.call([o],t.call(o,c,o.attribs.class||"",n),n)});if(!t||typeof t!="string")return this;const e=t.split(S),r=e.length,i=typeof n=="boolean"?n?1:-1:0,s=this.length;for(let o=0;o<s;o++){const c=this[o];if(!a(c))continue;const u=P(c.attribs.class);for(let d=0;d<r;d++){const f=u.indexOf(e[d]);i>=0&&f<0?u.push(e[d]):i<=0&&f>=0&&u.splice(f,1)}c.attribs.class=u.join(" ")}return this}const Ht=Object.freeze(Object.defineProperty({__proto__:null,addClass:_t,attr:Jt,data:Kt,hasClass:Yt,prop:Gt,removeAttr:Xt,removeClass:mt,toggleClass:xt,val:Qt},Symbol.toStringTag,{value:"Module"})),Vt=/^\s*[~+]/;function tn(t){var n;if(!t)return this._make([]);const e=this.toArray();if(typeof t!="string"){const s=y(t)?t.toArray():[t];return this._make(s.filter(o=>e.some(c=>yt(c,o))))}const r=Vt.test(t)?e:this.children().toArray(),i={context:e,root:(n=this._root)===null||n===void 0?void 0:n[0],xmlMode:this.options.xmlMode,lowerCaseTags:this.options.lowerCaseTags,lowerCaseAttributeNames:this.options.lowerCaseAttributeNames,pseudos:this.options.pseudos,quirksMode:this.options.quirksMode};return this._make(Mt(t,r,i))}function Z(t){return function(n,...e){return function(r){var i;let s=t(n,this);return r&&(s=G(s,r,this.options.xmlMode,(i=this._root)===null||i===void 0?void 0:i[0])),this._make(this.length>1&&s.length>1?e.reduce((o,c)=>c(o),s):s)}}}const M=Z((t,n)=>{const e=[];for(let r=0;r<n.length;r++){const i=t(n[r]);e.push(i)}return new Array().concat(...e)}),W=Z((t,n)=>{const e=[];for(let r=0;r<n.length;r++){const i=t(n[r]);i!==null&&e.push(i)}return e});function J(t,...n){let e=null;const r=Z((i,s)=>{const o=[];return h(s,c=>{for(let u;(u=i(c))&&!(e!=null&&e(u,o.length));c=u)o.push(u)}),o})(t,...n);return function(i,s){e=typeof i=="string"?c=>ht(c,i,this.options):i?T(i):null;const o=r.call(this,s);return e=null,o}}function w(t){return Array.from(new Set(t))}const nn=W(({parent:t})=>t&&!$(t)?t:null,w),en=M(t=>{const n=[];for(;t.parent&&!$(t.parent);)n.push(t.parent),t=t.parent;return n},U,t=>t.reverse()),rn=J(({parent:t})=>t&&!$(t)?t:null,U,t=>t.reverse());function sn(t){var n;const e=[];if(!t)return this._make(e);const r={xmlMode:this.options.xmlMode,root:(n=this._root)===null||n===void 0?void 0:n[0]},i=typeof t=="string"?s=>ht(s,t,r):T(t);return h(this,s=>{for(;s&&a(s);){if(i(s,0)){e.includes(s)||e.push(s);break}s=s.parent}}),this._make(e)}const on=W(t=>ut(t)),cn=M(t=>{const n=[];for(;t.next;)t=t.next,a(t)&&n.push(t);return n},w),un=J(t=>ut(t),w),fn=W(t=>ft(t)),ln=M(t=>{const n=[];for(;t.prev;)t=t.prev,a(t)&&n.push(t);return n},w),an=J(t=>ft(t),w),hn=M(t=>Ot(t).filter(n=>a(n)&&n!==t),U),dn=M(t=>St(t).filter(a),w);function pn(){const t=this.toArray().reduce((n,e)=>b(e)?n.concat(e.children):n,[]);return this._make(t)}function gn(t){let n=0;const e=this.length;for(;n<e&&t.call(this[n],n,this[n])!==!1;)++n;return this}function yn(t){let n=[];for(let e=0;e<this.length;e++){const r=this[e],i=t.call(r,e,r);i!=null&&(n=n.concat(i))}return this._make(n)}function T(t){return typeof t=="function"?(n,e)=>t.call(n,e,n):y(t)?n=>Array.prototype.includes.call(t,n):function(n){return t===n}}function bn(t){var n;return this._make(G(this.toArray(),t,this.options.xmlMode,(n=this._root)===null||n===void 0?void 0:n[0]))}function G(t,n,e,r){return typeof n=="string"?dt(n,t,{xmlMode:e,root:r}):t.filter(T(n))}function _n(t){const n=this.toArray();return typeof t=="string"?Tt(n.filter(a),t,this.options):t?n.some(T(t)):!1}function mn(t){let n=this.toArray();if(typeof t=="string"){const e=new Set(dt(t,n,this.options));n=n.filter(r=>!e.has(r))}else{const e=T(t);n=n.filter((r,i)=>!e(r,i))}return this._make(n)}function xn(t){return this.filter(typeof t=="string"?`:has(${t})`:(n,e)=>this._make(e).find(t).length>0)}function An(){return this.length>1?this._make(this[0]):this}function vn(){return this.length>0?this._make(this[this.length-1]):this}function kn(t){var n;return t=+t,t===0&&this.length<=1?this:(t<0&&(t=this.length+t),this._make((n=this[t])!==null&&n!==void 0?n:[]))}function jn(t){return t==null?this.toArray():this[t<0?this.length+t:t]}function wn(){return Array.prototype.slice.call(this)}function On(t){let n,e;return t==null?(n=this.parent().children(),e=this[0]):typeof t=="string"?(n=this._make(t),e=this[0]):(n=this,e=y(t)?t[0]:t),Array.prototype.indexOf.call(n,e)}function Sn(t,n){return this._make(Array.prototype.slice.call(this,t,n))}function $n(){var t;return(t=this.prevObject)!==null&&t!==void 0?t:this._make([])}function Mn(t,n){const e=this._make(t,n),r=U([...this.get(),...e.get()]);return this._make(r)}function Tn(t){return this.prevObject?this.add(t?this.prevObject.filter(t):this.prevObject):this}const Ln=Object.freeze(Object.defineProperty({__proto__:null,add:Mn,addBack:Tn,children:dn,closest:sn,contents:pn,each:gn,end:$n,eq:kn,filter:bn,filterArray:G,find:tn,first:An,get:jn,has:xn,index:On,is:_n,last:vn,map:yn,next:on,nextAll:cn,nextUntil:un,not:mn,parent:nn,parents:en,parentsUntil:rn,prev:fn,prevAll:ln,prevUntil:an,siblings:hn,slice:Sn,toArray:wn},Symbol.toStringTag,{value:"Module"}));function En(t){return function(e,r,i,s){if(typeof H<"u"&&H.isBuffer(e)&&(e=e.toString()),typeof e=="string")return t(e,r,i,s);const o=e;if(!Array.isArray(o)&&$(o))return o;const c=new at([]);return v(o,c),c}}function v(t,n){const e=Array.isArray(t)?t:[t];n?n.children=e:n=null;for(let r=0;r<e.length;r++){const i=e[r];i.parent&&i.parent.children!==e&&lt(i),n?(i.prev=e[r-1]||null,i.next=e[r+1]||null):i.prev=i.next=null,i.parent=n}return n}function Pn(t,n){return t==null?[]:y(t)?n?R(t.get()):t.get():Array.isArray(t)?t.reduce((e,r)=>e.concat(this._makeDomArray(r,n)),[]):typeof t=="string"?this._parse(t,this.options,!1,null).children:n?R([t]):[t]}function At(t){return function(...n){const e=this.length-1;return h(this,(r,i)=>{if(!b(r))return;const s=typeof n[0]=="function"?n[0].call(r,i,this._render(r.children)):n,o=this._makeDomArray(s,i<e);t(o,r.children,r)})}}function m(t,n,e,r,i){var s,o;const c=[n,e,...r],u=n===0?null:t[n-1],d=n+e>=t.length?null:t[n+e];for(let f=0;f<r.length;++f){const l=r[f],p=l.parent;if(p){const g=p.children.indexOf(l);g>-1&&(p.children.splice(g,1),i===p&&n>g&&c[0]--)}l.parent=i,l.prev&&(l.prev.next=(s=l.next)!==null&&s!==void 0?s:null),l.next&&(l.next.prev=(o=l.prev)!==null&&o!==void 0?o:null),l.prev=f===0?u:r[f-1],l.next=f===r.length-1?d:r[f+1]}return u&&(u.next=r[0]),d&&(d.prev=r[r.length-1]),t.splice(...c)}function Un(t){return(y(t)?t:this._make(t)).append(this),this}function Dn(t){return(y(t)?t:this._make(t)).prepend(this),this}const Nn=At((t,n,e)=>{m(n,n.length,0,t,e)}),Cn=At((t,n,e)=>{m(n,0,0,t,e)});function vt(t){return function(n){const e=this.length-1,r=this.parents().last();for(let i=0;i<this.length;i++){const s=this[i],o=typeof n=="function"?n.call(s,i,s):typeof n=="string"&&!B(n)?r.find(n).clone():n,[c]=this._makeDomArray(o,i<e);if(!c||!b(c))continue;let u=c,d=0;for(;d<u.children.length;){const f=u.children[d];a(f)?(u=f,d=0):d++}t(s,u,[c])}return this}}const zn=vt((t,n,e)=>{const{parent:r}=t;if(!r)return;const i=r.children,s=i.indexOf(t);v([t],n),m(i,s,0,e,r)}),In=vt((t,n,e)=>{b(t)&&(v(t.children,n),v(e,t))});function Rn(t){return this.parent(t).not("body").each((n,e)=>{this._make(e).replaceWith(e.children)}),this}function Bn(t){const n=this[0];if(n){const e=this._make(typeof t=="function"?t.call(n,0,n):t).insertBefore(n);let r;for(let s=0;s<e.length;s++)e[s].type==="tag"&&(r=e[s]);let i=0;for(;r&&i<r.children.length;){const s=r.children[i];s.type==="tag"?(r=s,i=0):i++}r&&this._make(r).append(this)}return this}function qn(...t){const n=this.length-1;return h(this,(e,r)=>{const{parent:i}=e;if(!b(e)||!i)return;const s=i.children,o=s.indexOf(e);if(o<0)return;const c=typeof t[0]=="function"?t[0].call(e,r,this._render(e.children)):t,u=this._makeDomArray(c,r<n);m(s,o+1,0,u,i)})}function Fn(t){typeof t=="string"&&(t=this._make(t)),this.remove();const n=[];return this._makeDomArray(t).forEach(e=>{const r=this.clone().toArray(),{parent:i}=e;if(!i)return;const s=i.children,o=s.indexOf(e);o<0||(m(s,o+1,0,r,i),n.push(...r))}),this._make(n)}function Zn(...t){const n=this.length-1;return h(this,(e,r)=>{const{parent:i}=e;if(!b(e)||!i)return;const s=i.children,o=s.indexOf(e);if(o<0)return;const c=typeof t[0]=="function"?t[0].call(e,r,this._render(e.children)):t,u=this._makeDomArray(c,r<n);m(s,o,0,u,i)})}function Wn(t){const n=this._make(t);this.remove();const e=[];return h(n,r=>{const i=this.clone().toArray(),{parent:s}=r;if(!s)return;const o=s.children,c=o.indexOf(r);c<0||(m(o,c,0,i,s),e.push(...i))}),this._make(e)}function Jn(t){const n=t?this.filter(t):this;return h(n,e=>{lt(e),e.prev=e.next=e.parent=null}),this}function Gn(t){return h(this,(n,e)=>{const{parent:r}=n;if(!r)return;const i=r.children,s=typeof t=="function"?t.call(n,e,n):t,o=this._makeDomArray(s);v(o,null);const c=i.indexOf(n);m(i,c,1,o,r),o.includes(n)||(n.parent=n.prev=n.next=null)})}function Kn(){return h(this,t=>{b(t)&&(t.children.forEach(n=>{n.next=n.prev=n.parent=null}),t.children.length=0)})}function Qn(t){if(t===void 0){const n=this[0];return!n||!b(n)?null:this._render(n.children)}return h(this,n=>{if(!b(n))return;n.children.forEach(r=>{r.next=r.prev=r.parent=null});const e=y(t)?t.toArray():this._parse(`${t}`,this.options,!1,n).children;v(e,n)})}function Xn(){return this._render(this)}function Yn(t){return t===void 0?O(this):typeof t=="function"?h(this,(n,e)=>this._make(n).text(t.call(n,e,O([n])))):h(this,n=>{if(!b(n))return;n.children.forEach(r=>{r.next=r.prev=r.parent=null});const e=new $t(`${t}`);v(e,n)})}function Hn(){return this._make(R(this.get()))}const Vn=Object.freeze(Object.defineProperty({__proto__:null,_makeDomArray:Pn,after:qn,append:Nn,appendTo:Un,before:Zn,clone:Hn,empty:Kn,html:Qn,insertAfter:Fn,insertBefore:Wn,prepend:Cn,prependTo:Dn,remove:Jn,replaceWith:Gn,text:Yn,toString:Xn,unwrap:Rn,wrap:zn,wrapAll:Bn,wrapInner:In},Symbol.toStringTag,{value:"Module"}));function te(t,n){if(t!=null&&n!=null||typeof t=="object"&&!Array.isArray(t))return h(this,(e,r)=>{a(e)&&kt(e,t,n,r)});if(this.length!==0)return jt(this[0],t)}function kt(t,n,e,r){if(typeof n=="string"){const i=jt(t),s=typeof e=="function"?e.call(t,r,i[n]):e;s===""?delete i[n]:s!=null&&(i[n]=s),t.attribs.style=ne(i)}else typeof n=="object"&&Object.keys(n).forEach((i,s)=>{kt(t,i,n[i],s)})}function jt(t,n){if(!t||!a(t))return;const e=ee(t.attribs.style);if(typeof n=="string")return e[n];if(Array.isArray(n)){const r={};return n.forEach(i=>{e[i]!=null&&(r[i]=e[i])}),r}return e}function ne(t){return Object.keys(t).reduce((n,e)=>`${n}${n?" ":""}${e}: ${t[e]};`,"")}function ee(t){if(t=(t||"").trim(),!t)return{};const n={};let e;for(const r of t.split(";")){const i=r.indexOf(":");if(i<1||i===r.length-1){const s=r.trimEnd();s.length>0&&e!==void 0&&(n[e]+=`;${s}`)}else e=r.slice(0,i).trim(),n[e]=r.slice(i+1).trim()}return n}const re=Object.freeze(Object.defineProperty({__proto__:null,css:te},Symbol.toStringTag,{value:"Module"})),st="input,select,textarea,keygen",ie=/%20/g,ot=/\r?\n/g;function se(){return this.serializeArray().map(e=>`${encodeURIComponent(e.name)}=${encodeURIComponent(e.value)}`).join("&").replace(ie,"+")}function oe(){return this.map((t,n)=>{const e=this._make(n);return a(n)&&n.name==="form"?e.find(st).toArray():e.filter(st).toArray()}).filter('[name!=""]:enabled:not(:submit, :button, :image, :reset, :file):matches([checked], :not(:checkbox, :radio))').map((t,n)=>{var e;const r=this._make(n),i=r.attr("name"),s=(e=r.val())!==null&&e!==void 0?e:"";return Array.isArray(s)?s.map(o=>({name:i,value:o.replace(ot,`\r
`)})):{name:i,value:s.replace(ot,`\r
`)}}).toArray()}const ce=Object.freeze(Object.defineProperty({__proto__:null,serialize:se,serializeArray:oe},Symbol.toStringTag,{value:"Module"}));class L{constructor(n,e,r){if(this.length=0,this.options=r,this._root=e,n){for(let i=0;i<n.length;i++)this[i]=n[i];this.length=n.length}}}L.prototype.cheerio="[cheerio object]";L.prototype.splice=Array.prototype.splice;L.prototype[Symbol.iterator]=Array.prototype[Symbol.iterator];Object.assign(L.prototype,Ht,Ln,Vn,re,ce);function ue(t,n){return function e(r,i,s=!0){if(r==null)throw new Error("cheerio.load() expects a string");const o={...q,...I(i)},c=t(r,o,s,null);class u extends L{_make(l,p){const x=d(l,p);return x.prevObject=this,x}_parse(l,p,x,g){return t(l,p,x,g)}_render(l){return n(l,this.options)}}function d(f,l,p=c,x){if(f&&y(f))return f;const g={...o,...I(x)},D=typeof p=="string"?[t(p,g,!1,null)]:"length"in p?p:[p],_=y(D)?D:new u(D,null,g);if(_._root=_,!f)return new u(void 0,_,g);const K=typeof f=="string"&&B(f)?t(f,g,!1,null).children:fe(f)?[f]:Array.isArray(f)?f:void 0,Q=new u(K,_,g);if(K)return Q;if(typeof f!="string")throw new Error("Unexpected type of selector");let N=f;const X=l?typeof l=="string"?B(l)?new u([t(l,g,!1,null)],_,g):(N=`${l} ${N}`,_):y(l)?l:new u(Array.isArray(l)?l:[l],_,g):_;return X?X.find(N):Q}return Object.assign(d,qt,{load:e,_root:c,_options:o,fn:u.prototype,prototype:u.prototype}),d}}function fe(t){return!!t.name||t.type==="root"||t.type==="text"||t.type==="comment"}function le(t,n,e,r){const i={scriptingEnabled:typeof n.scriptingEnabled=="boolean"?n.scriptingEnabled:!0,treeAdapter:pt,sourceCodeLocationInfo:n.sourceCodeLocationInfo};return e?Et(t,i):Pt(r,t,i)}const ae={treeAdapter:pt};function he(t){const n="length"in t?t:[t];for(let r=0;r<n.length;r+=1){const i=n[r];$(i)&&Array.prototype.splice.call(n,r,1,...i.children)}let e="";for(let r=0;r<n.length;r+=1){const i=n[r];e+=Lt(i,ae)}return e}const de=En((t,n,e,r)=>n.xmlMode||n._useHtmlParser2?Dt(t,n):le(t,n,e,r)),pe=ue(de,(t,n)=>n.xmlMode||n._useHtmlParser2?Ut(t,n):he(t));pe([]);export{pe as l};