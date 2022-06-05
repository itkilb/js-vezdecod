(()=>{"use strict";var t={4473:(t,e,o)=>{var n=o(8935),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},a=[],s=o(1001),i={},l=(0,s.Z)(i,r,a,!1,null,null,null);const c=l.exports;var u=o(8209),d=o.n(u);o(6909);n["default"].use(d());const p={},h=new(d())(p);var v=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("Header",[o("HeaderButtons")],1),o("Content",{attrs:{header:!0,footer:!1,scroll:!0,scrollbar:!0}},[o("v-card",{staticClass:"m-4",attrs:{elevation:"2",outlined:"",shaped:""}},[o("div",{staticClass:"p-5"},[o("span",[t._v("Ваш Баланс:")]),o("p",[t._v("1423")])])])],1),o("Footer",{staticStyle:{bottom:"13px"}})],1)},m=[],f=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"fixed w-screen top-0 left-0 border-b z-10 bg-gray-50",class:t.$slots.default?"h-[var(--header-sait]":"h-[var(--sait)]"},[t.$slots.default?o("div",{staticClass:"mt-sait w-screen h-[var(--header-height)]"},[t._t("default")],2):t._e()])},b=[];const g={name:"Header"},y=g;var _=(0,s.Z)(y,f,b,!1,null,null,null);const C=_.exports;var w=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-row",{staticClass:"d-flex align-center justify-space-end p-1",staticStyle:{}},[o("v-col",[o("div",{staticClass:"text-right"},[o("v-btn",{attrs:{elevation:"2",icon:""},on:{click:t.onClick}},[o("v-icon",[t._v("mdi-close")])],1)],1)])],1)},x=[],O=o(2907),k=o.n(O);const S={name:"HeaderButtons",methods:{onClick(){k().miniapp.pop(!0,"")}}},V=S;var Z=(0,s.Z)(V,w,x,!1,null,null,null);const j=Z.exports;var B=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"w-screen",class:[t.header?"mt-[var(--header-sait)]":"",t.calc_height,t.scroll?"overflow-y-auto":"overflow-hidden",t.scrollbar?"scrollbar":""],attrs:{hidden:t.hidden},on:{scroll:t.onscroll}},[t._t("default")],2)},E=[];const H={name:"Content",props:{header:{type:Boolean,default:!0},footer:{type:Boolean,default:!1},scroll:{type:Boolean,default:!0},scrollbar:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},data(){return{timer:null}},computed:{calc_height(){return this.header?this.footer?"h-[calc(100vh-var(--header-sait)-var(--footer-saib))]":"h-[calc(100vh-var(--header-sait))]":this.footer?"h-[calc(100vh-var(--footer-saib))]":"h-screen"}},methods:{onscroll(t){t.target.scrollTop>10&&document.documentElement.style.setProperty("--scrollbar-opacity","block"),clearTimeout(this.timer),this.timer=setTimeout((()=>{document.documentElement.style.setProperty("--scrollbar-opacity","none")}),2e3)}}},$=H;var I=(0,s.Z)($,B,E,!1,null,null,null);const T=I.exports;var P=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"fixed w-screen bottom-0 left-0 border-t z-10 bg-gray-50 h-[var(--footer-saib)]"},[o("div",{staticClass:"w-screen h-[var(--footer-height)]"},[o("v-bottom-navigation",{attrs:{color:"teal",grow:""}},[o("v-btn",{on:{click:function(e){return t.$router.push({name:"Home"})}}},[o("span",[t._v("Главная")]),o("v-icon",[t._v("mdi-home")])],1),o("v-btn",{on:{click:function(e){return t.$router.push({name:"Shop"})}}},[o("span",[t._v("Магазин")]),o("v-icon",[t._v("mdi-cart-outline")])],1)],1)],1)])},q=[];const K={name:"Footer",mounted(){document.documentElement.style.setProperty("--footer-height","var(--basic-header-height)")}},M=K;var z=(0,s.Z)(M,P,q,!1,null,null,null);const A=z.exports,F={name:"App",components:{Footer:A,Content:T,Header:C,HeaderButtons:j},data(){return{}},methods:{}},L=F;var N=(0,s.Z)(L,v,m,!1,null,null,null);const D=N.exports;var J=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("Header",[o("HeaderButtons")],1),o("Content",{attrs:{header:!0,footer:!1,scroll:!0,scrollbar:!0}},[o("v-row",{staticStyle:{"max-width":"100%","margin-bottom":"50px"}},t._l(t.products,(function(e){return o("v-col",{key:e.id,staticClass:"m-3"},[o("v-card",[o("v-img",{attrs:{contain:"",src:e.img}}),o("v-card-title",[t._v(" "+t._s(e.title)+" ")]),o("v-card-subtitle",[t._v(" "+t._s(e.title)+" ")]),o("v-card-actions",{staticClass:"flex"},[o("v-btn",{attrs:{color:"orange lighten-2",text:""},on:{click:function(o){return t.buyItem(e.id)}}},[t._v(" Купить ")])],1)],1)],1)})),1),o("Modal",{attrs:{isVisible:t.dialog},on:{onClose:function(e){t.dialog=!1}}},[o("qrcode-vue",{attrs:{value:t.qrCodeContent}})],1)],1),o("Footer",{staticStyle:{bottom:"13px"}})],1)},Q=[];const U=JSON.parse('[{"id":1,"title":"Худи розовый с фиолетовым","description":"Тёплый уютный худи в фирменных цветах VK. На груди — объёмный лого VK. Крой — оверсайз, размеры — унисекс.","img":"https://sun4-10.userapi.com/impg/3wVf7NZLP7AIgiNZqPG9tOE0KnhFHUQDnsGIDA/BbRHOeFfhkY.jpg?size=1040x0&quality=95&sign=b61a69f74a424f709ecb40997ef74eae"},{"id":2,"title":"Дорожная косметичка с надписью vk.com","description":"Можно брать с собой в путешествие и складывать всё самое необходимое. А также использовать дома или на работе — для хранения чего угодно (говорят, идеально помещаются всевозможные провода).","img":"https://sun4-15.userapi.com/impg/LUjyKiAb9a8aSuAO51icLTO8_zJznaic8mZsWA/9kSiuB2JSSk.jpg?size=1040x0&quality=95&sign=cecaee9bd093b91d088ba62d00b3a81b"},{"id":3,"title":"Свитшот «VK на века»","description":"Тёплый, уютный и мягкий свитшот в фирменных цветах VK. Материал: футер с начёсом. На груди объёмная вышивка «VK на века», на спине — вышитый лого VK team. Крой — оверсайз, размеры — унисекс.","img":"https://sun4-17.userapi.com/impg/aC97KtLqUpyB9DqcNwMIxP2qOwVtswEVMgj-8g/ec6b_MZ0QoA.jpg?size=1040x0&quality=95&sign=6d7d00ddd152c85e99561b6cdbe01901"}]');var G=o(1147),R=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"h-screen w-screen z-20 absolute inset-0 bg-black/25",class:t.isVisible?"block ":t.isOpen?"block":"hidden",on:{click:t.onClose}},[o("div",{staticClass:"w-full bg-white absolute bottom-0 rounded-t-3xl transition-height duration-300",class:t.isOpen?"h-2/3 ease-out":"h-0 ease-out",on:{click:function(t){t.stopPropagation()}}},[o("div",{staticClass:"p-6"},[t._t("default")],2)])])},W=[];const Y={name:"Modal",props:{isVisible:{type:Boolean,default:!1}},data(){return{timeout:350,isOpen:!1}},watch:{isVisible(t){t&&this.onOpen()}},mounted(){this.onOpen()},methods:{onClose(){this.isOpen=!1,setTimeout((()=>{this.$emit("onClose")}),this.timeout)},onOpen(){setTimeout((()=>{this.isOpen=this.isVisible}),this.timeout)}}},X=Y;var tt=(0,s.Z)(X,R,W,!1,null,null,null);const et=tt.exports,ot={name:"App",components:{Modal:et,QrcodeVue:G.Z,Footer:A,Content:T,Header:C,HeaderButtons:j},data(){return{dialog:!1,products:U,notItemId:0,userId:0}},methods:{buyItem(t){this.notItemId=t,this.dialog=!0}},computed:{qrCodeContent:function(){return this.userId+"/"+this.notItemId}}},nt=ot;var rt=(0,s.Z)(nt,J,Q,!1,null,null,null);const at=rt.exports;var st=o(2809);n["default"].config.productionTip=!1,n["default"].use(st.Z);const it=[{path:"",component:D,name:"Home"},{path:"shop",component:at,name:"Shop"}],lt=new st.Z({routes:it,mode:"history"});new n["default"]({router:lt,vuetify:h,render:t=>t(c)}).$mount("#app")}},e={};function o(n){var r=e[n];if(void 0!==r)return r.exports;var a=e[n]={exports:{}};return t[n].call(a.exports,a,a.exports,o),a.exports}o.m=t,(()=>{var t=[];o.O=(e,n,r,a)=>{if(!n){var s=1/0;for(u=0;u<t.length;u++){for(var[n,r,a]=t[u],i=!0,l=0;l<n.length;l++)(!1&a||s>=a)&&Object.keys(o.O).every((t=>o.O[t](n[l])))?n.splice(l--,1):(i=!1,a<s&&(s=a));if(i){t.splice(u--,1);var c=r();void 0!==c&&(e=c)}}return e}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[n,r,a]}})(),(()=>{o.n=t=>{var e=t&&t.__esModule?()=>t["default"]:()=>t;return o.d(e,{a:e}),e}})(),(()=>{o.d=(t,e)=>{for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}})(),(()=>{o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()})(),(()=>{o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e)})(),(()=>{o.r=t=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}})(),(()=>{var t={143:0};o.O.j=e=>0===t[e];var e=(e,n)=>{var r,a,[s,i,l]=n,c=0;if(s.some((e=>0!==t[e]))){for(r in i)o.o(i,r)&&(o.m[r]=i[r]);if(l)var u=l(o)}for(e&&e(n);c<s.length;c++)a=s[c],o.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return o.O(u)},n=globalThis["webpackChunkvue_miniapp_template"]=globalThis["webpackChunkvue_miniapp_template"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})();var n=o.O(void 0,[998],(()=>o(4473)));n=o.O(n)})();