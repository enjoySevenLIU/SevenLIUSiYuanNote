import{r as p}from"./chunk.vendor_crypto-browserify.js";var o={exports:{}},i;function u(){if(i)return o.exports;i=1;var a;o.exports=function(r){return a||(a=new t(null)),a.generate(r)};function t(n){this.rand=n}if(o.exports.Rand=t,t.prototype.generate=function(r){return this._rand(r)},t.prototype._rand=function(r){if(this.rand.getBytes)return this.rand.getBytes(r);for(var e=new Uint8Array(r),s=0;s<e.length;s++)e[s]=this.rand.getByte();return e},typeof self=="object")self.crypto&&self.crypto.getRandomValues?t.prototype._rand=function(r){var e=new Uint8Array(r);return self.crypto.getRandomValues(e),e}:self.msCrypto&&self.msCrypto.getRandomValues?t.prototype._rand=function(r){var e=new Uint8Array(r);return self.msCrypto.getRandomValues(e),e}:typeof window=="object"&&(t.prototype._rand=function(){throw new Error("Not implemented yet")});else try{var f=p();if(typeof f.randomBytes!="function")throw new Error("Not supported");t.prototype._rand=function(r){return f.randomBytes(r)}}catch{}return o.exports}export{u as r};