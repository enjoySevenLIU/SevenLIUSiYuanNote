import{c as O}from"./chunk.vendor_asn1-js.js";import{r as q}from"./chunk.vendor_for-each.js";import{r as $}from"./chunk.vendor_available-typed-arrays.js";import{a as j,r as w}from"./chunk.vendor_call-bind.js";import{r as x}from"./chunk.vendor_gopd.js";import{r as B}from"./chunk.vendor_has-tostringtag.js";var y,m;function D(){if(m)return y;m=1;var n=q(),d=$(),v=j(),l=w(),o=x(),g=l("Object.prototype.toString"),p=B()(),h=typeof globalThis>"u"?O:globalThis,u=d(),c=l("String.prototype.slice"),s=Object.getPrototypeOf,T=l("Array.prototype.indexOf",!0)||function(e,r){for(var a=0;a<e.length;a+=1)if(e[a]===r)return a;return-1},f={__proto__:null};p&&o&&s?n(u,function(t){var e=new h[t];if(Symbol.toStringTag in e){var r=s(e),a=o(r,Symbol.toStringTag);if(!a){var i=s(r);a=o(i,Symbol.toStringTag)}f["$"+t]=v(a.get)}}):n(u,function(t){var e=new h[t],r=e.slice||e.set;r&&(f["$"+t]=v(r))});var S=function(e){var r=!1;return n(f,function(a,i){if(!r)try{"$"+a(e)===i&&(r=c(i,1))}catch{}}),r},b=function(e){var r=!1;return n(f,function(a,i){if(!r)try{a(e),r=c(i,1)}catch{}}),r};return y=function(e){if(!e||typeof e!="object")return!1;if(!p){var r=c(g(e),8,-1);return T(u,r)>-1?r:r!=="Object"?!1:b(e)}return o?S(e):null},y}export{D as r};