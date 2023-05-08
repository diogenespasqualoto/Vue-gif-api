(function(){"use strict";var e={5405:function(e,n,t){var r=t(9242),i=t(3396);function o(e,n,t,r,o,u){const a=(0,i.up)("search-input"),c=(0,i.up)("gif-list");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(a,{onGifsFetched:u.onGifsFetched},null,8,["onGifsFetched"]),(0,i.Wm)(c,{gifs:o.gifs},null,8,["gifs"])],64)}function u(e,n,t,o,u,a){return(0,i.wy)(((0,i.wg)(),(0,i.iD)("input",{class:"search-input",placeholder:"Procure por Gif's","onUpdate:modelValue":n[0]||(n[0]=e=>u.search=e),onInput:n[1]||(n[1]=(...e)=>a.onSearch&&a.onSearch(...e))},null,544)),[[r.nr,u.search]])}var a={name:"SearchInput",data(){return{search:"",timeout:null}},methods:{onSearch(){clearTimeout(this.timeout),this.timeout=setTimeout((()=>{this.makeSearch()}),500)},makeSearch(){fetch(`https://api.giphy.com/v1/gifs/search?api_key=FwPRz2RSIRV5R3gRNV52L3SQqm9AnsnD&q=${this.search}&limit=999`).then((e=>e.json())).then((e=>{this.$emit("gifs-fetched",e)}))}}},c=t(89);const s=(0,c.Z)(a,[["render",u],["__scopeId","data-v-976655f6"]]);var f=s;const l={id:"gifList"};function p(e,n,t,r,o,u){const a=(0,i.up)("gif");return(0,i.wg)(),(0,i.iD)("div",l,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.gifs,(e=>((0,i.wg)(),(0,i.j4)(a,{gif:e,key:e.id},null,8,["gif"])))),128))])}var h=t(7139);const d=["value"];function g(e,n,t,r,o,u){return(0,i.wg)(),(0,i.iD)("div",{class:"gif",style:(0,h.j5)(`background-image: url('${t.gif.images.fixed_width.url}')`)},[(0,i._)("input",{ref:"url",readonly:"",type:"text",style:{flex:"1"},value:t.gif.images.original.url},null,8,d),(0,i._)("button",{onClick:n[0]||(n[0]=e=>u.copy())},"Copy")],4)}var v={name:"SearchedGif",props:["gif"],data(){return{url:""}},methods:{copy(){this.$refs.url.select(),this.$refs.url.setSelectionRange(0,99999),document.execCommand("copy"),this.$refs.url.value="Copied!!!"}}};const m=(0,c.Z)(v,[["render",g],["__scopeId","data-v-7907ea14"]]);var y=m,w={name:"GifList",components:{Gif:y},props:["gifs"]};const b=(0,c.Z)(w,[["render",p],["__scopeId","data-v-687c163f"]]);var _=b,k={name:"App",components:{GifList:_,SearchInput:f},data(){return{gifs:[]}},methods:{onGifsFetched(e){console.log(e),this.gifs=e.data}}};const O=(0,c.Z)(k,[["render",o]]);var S=O;(0,r.ri)(S).mount("#app")}},n={};function t(r){var i=n[r];if(void 0!==i)return i.exports;var o=n[r]={exports:{}};return e[r].call(o.exports,o,o.exports,t),o.exports}t.m=e,function(){var e=[];t.O=function(n,r,i,o){if(!r){var u=1/0;for(f=0;f<e.length;f++){r=e[f][0],i=e[f][1],o=e[f][2];for(var a=!0,c=0;c<r.length;c++)(!1&o||u>=o)&&Object.keys(t.O).every((function(e){return t.O[e](r[c])}))?r.splice(c--,1):(a=!1,o<u&&(u=o));if(a){e.splice(f--,1);var s=i();void 0!==s&&(n=s)}}return n}o=o||0;for(var f=e.length;f>0&&e[f-1][2]>o;f--)e[f]=e[f-1];e[f]=[r,i,o]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,r){var i,o,u=r[0],a=r[1],c=r[2],s=0;if(u.some((function(n){return 0!==e[n]}))){for(i in a)t.o(a,i)&&(t.m[i]=a[i]);if(c)var f=c(t)}for(n&&n(r);s<u.length;s++)o=u[s],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return t.O(f)},r=self["webpackChunkgif_api"]=self["webpackChunkgif_api"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(5405)}));r=t.O(r)})();
//# sourceMappingURL=app.aa2a261c.js.map