function I(u){let f,t,d,p,g,h,v;return y(),{feed:b,reset:y};function y(){f=!0,t="",d=0,p=-1,g=void 0,h=void 0,v=""}function b(o){t=t?t+o:o,f&&F(t)&&(t=t.slice(m.length)),f=!1;const n=t.length;let e=0,a=!1;for(;e<n;){a&&(t[e]===`
`&&++e,a=!1);let s=-1,l=p,i;for(let r=d;s<0&&r<n;++r)i=t[r],i===":"&&l<0?l=r-e:i==="\r"?(a=!0,s=r-e):i===`
`&&(s=r-e);if(s<0){d=n-e,p=l;break}else d=0,p=-1;w(t,e,l,s),e+=s+1}e===n?t="":e>0&&(t=t.slice(e))}function w(o,n,e,a){if(a===0){v.length>0&&(u({type:"event",id:g,event:h||void 0,data:v.slice(0,-1)}),v="",g=void 0),h=void 0;return}const s=e<0,l=o.slice(n,n+(s?a:e));let i=0;s?i=a:o[n+e+1]===" "?i=e+2:i=e+1;const r=n+i,C=a-i,c=o.slice(r,r+C).toString();if(l==="data")v+=c?"".concat(c,`
`):`
`;else if(l==="event")h=c;else if(l==="id"&&!c.includes("\0"))g=c;else if(l==="retry"){const N=parseInt(c,10);Number.isNaN(N)||u({type:"reconnect-interval",value:N})}}}const m=[239,187,191];function F(u){return m.every((f,t)=>u.charCodeAt(t)===f)}export{I as c};
