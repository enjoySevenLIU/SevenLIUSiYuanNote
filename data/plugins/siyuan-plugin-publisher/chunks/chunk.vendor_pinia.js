import{i as Y}from"./chunk.vendor_vue-demi.js";import{a_ as F,A as V,a$ as B,z as Z,t as $,a3 as A,B as O,b0 as H,ax as G,b1 as T,b2 as tt,C as et,a7 as st,a4 as nt,q as ot}from"./chunk.vendor.js";let q;const E=t=>q=t,z=Symbol();function k(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var w;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(w||(w={}));function bt(){const t=F(!0),o=t.run(()=>V({}));let s=[],e=[];const r=B({install(u){E(r),r._a=u,u.provide(z,r),u.config.globalProperties.$pinia=r,e.forEach(f=>s.push(f)),e=[]},use(u){return!this._a&&!Y?e.push(u):s.push(u),this},_p:s,_a:null,_e:t,_s:new Map,state:o});return r}const D=()=>{};function W(t,o,s,e=D){t.push(o);const r=()=>{const u=t.indexOf(o);u>-1&&(t.splice(u,1),e())};return!s&&tt()&&et(r),r}function P(t,...o){t.slice().forEach(s=>{s(...o)})}const ct=t=>t();function R(t,o){t instanceof Map&&o instanceof Map&&o.forEach((s,e)=>t.set(e,s)),t instanceof Set&&o instanceof Set&&o.forEach(t.add,t);for(const s in o){if(!o.hasOwnProperty(s))continue;const e=o[s],r=t[s];k(r)&&k(e)&&t.hasOwnProperty(s)&&!O(e)&&!H(e)?t[s]=R(r,e):t[s]=e}return t}const rt=Symbol();function ut(t){return!k(t)||!t.hasOwnProperty(rt)}const{assign:v}=Object;function at(t){return!!(O(t)&&t.effect)}function ft(t,o,s,e){const{state:r,actions:u,getters:f}=o,a=s.state.value[t];let p;function b(){a||(s.state.value[t]=r?r():{});const y=nt(s.state.value[t]);return v(y,u,Object.keys(f||{}).reduce((d,m)=>(d[m]=B(ot(()=>{E(s);const _=s._s.get(t);return f[m].call(_,_)})),d),{}))}return p=J(t,b,o,s,e,!0),p}function J(t,o,s={},e,r,u){let f;const a=v({actions:{}},s),p={deep:!0};let b,y,d=[],m=[],_;const j=e.state.value[t];!u&&!j&&(e.state.value[t]={}),V({});let I;function L(c){let n;b=y=!1,typeof c=="function"?(c(e.state.value[t]),n={type:w.patchFunction,storeId:t,events:_}):(R(e.state.value[t],c),n={type:w.patchObject,payload:c,storeId:t,events:_});const h=I=Symbol();st().then(()=>{I===h&&(b=!0)}),y=!0,P(d,n,e.state.value[t])}const N=u?function(){const{state:n}=s,h=n?n():{};this.$patch(S=>{v(S,h)})}:D;function K(){f.stop(),d=[],m=[],e._s.delete(t)}function M(c,n){return function(){E(e);const h=Array.from(arguments),S=[],C=[];function U(i){S.push(i)}function X(i){C.push(i)}P(m,{args:h,name:c,store:l,after:U,onError:X});let g;try{g=n.apply(this&&this.$id===t?this:l,h)}catch(i){throw P(C,i),i}return g instanceof Promise?g.then(i=>(P(S,i),i)).catch(i=>(P(C,i),Promise.reject(i))):(P(S,g),g)}}const Q={_p:e,$id:t,$onAction:W.bind(null,m),$patch:L,$reset:N,$subscribe(c,n={}){const h=W(d,c,n.detached,()=>S()),S=f.run(()=>$(()=>e.state.value[t],C=>{(n.flush==="sync"?y:b)&&c({storeId:t,type:w.direct,events:_},C)},v({},p,n)));return h},$dispose:K},l=A(Q);e._s.set(t,l);const x=(e._a&&e._a.runWithContext||ct)(()=>e._e.run(()=>(f=F()).run(o)));for(const c in x){const n=x[c];if(O(n)&&!at(n)||H(n))u||(j&&ut(n)&&(O(n)?n.value=j[c]:R(n,j[c])),e.state.value[t][c]=n);else if(typeof n=="function"){const h=M(c,n);x[c]=h,a.actions[c]=n}}return v(l,x),v(G(l),x),Object.defineProperty(l,"$state",{get:()=>e.state.value[t],set:c=>{L(n=>{v(n,c)})}}),e._p.forEach(c=>{v(l,f.run(()=>c({store:l,app:e._a,pinia:e,options:a})))}),j&&u&&s.hydrate&&s.hydrate(l.$state,j),b=!0,y=!0,l}function vt(t,o,s){let e,r;const u=typeof o=="function";e=t,r=u?s:o;function f(a,p){const b=T();return a=a||(b?Z(z,null):null),a&&E(a),a=q,a._s.has(e)||(u?J(e,o,r,a):ft(e,r,a)),a._s.get(e)}return f.$id=e,f}export{bt as c,vt as d};