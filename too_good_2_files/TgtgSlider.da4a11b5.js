import N from"./TgtgPagination.129a2fa6.js";import{a as B}from"./index.6f428c29.js";import{b as C,D as g}from"./Components.07ddcaad.js";import{k as F,r as c,f as r,l as K,m as o,p as _,ad as n,an as M,u as e,F as w,am as P,ae as k,y as z,ak as A,z as V,ar as W}from"./runtime-core.esm-bundler.c03fb5c6.js";import{_ as G}from"./_plugin-vue_export-helper.c27b6911.js";import"./runtime-dom.esm-bundler.89c5e5b8.js";const I=["id"],E=["aria-hidden"],H=["aria-controls","disabled"],X={class:"tgtg-slider__controls__trigger-accessible-txt"},j=["aria-controls","disabled"],q={class:"tgtg-slider__controls__trigger-accessible-txt"},J=F({__name:"TgtgSlider",props:{id:{type:String,default:"tgtg-slider"},staticOnDesktop:{type:Boolean,default:!1},slides:{type:Array,default:()=>[]},pagination:{type:Boolean,default:!1},variant:{type:String,default:C.LIGHT_ON_DARK},visibleSlides:{type:Number,default:1},totalPages:{type:Number,default:0},showTriggersBackground:{type:Boolean,default:!1}},setup(d,{expose:D}){const s=d,p=c(),f=c(),m=c(),S=c(),a=c(0),x=r(()=>{var v,l;const t=Math.floor(((v=S.value)==null?void 0:v.value)||1),i=Math.floor(((l=m.value)==null?void 0:l.value)||1);return Math.floor(i/t)||1}),b=r(()=>s.totalPages||Math.ceil(s.slides.length/x.value)),y=r(()=>a.value<=0),h=r(()=>b.value-1<=a.value),O=r(()=>b.value>1),T=r(()=>s.variant!==C.LIGHT_ON_DARK),u=t=>{p.value&&(t===g.BACK?--a.value:++a.value)},L=t=>{a.value=t},R=r(()=>{var t;return`translateX(-${a.value*(((t=m.value)==null?void 0:t.value)||0)}px)`});return D({resetActiveSlide:()=>{a.value=0}}),K(()=>{S.value=B(f.value&&f.value[0],{height:0,width:0},{box:"border-box"}).width,m.value=B(p.value,{height:0,width:0},{box:"border-box"}).width}),(t,i)=>{const v=N;return o(),_("div",{class:k(["tgtg-slider","tgtg-slider--"+s.visibleSlides+"-visible-slides",{"tgtg-slider--static-on-desktop":s.staticOnDesktop,"tgtg-slider--dark-on-light":e(T)}])},[n("div",{class:k(["tgtg-slider__mask",{"tgtg-slider__mask--one-slide-visible":s.pagination}])},[n("ul",{id:`tgtg-carousel_${d.id}`,"aria-roledescription":"slide",ref_key:"sliderList",ref:p,"aria-live":"polite",class:"tgtg-slider__list tgtg-content-wrapper",style:M({transform:e(R)})},[(o(!0),_(w,null,P(s.slides,(l,$)=>(o(),_("li",{ref_for:!0,ref_key:"sliderSlide",ref:f,"aria-hidden":$!=a.value,key:`tgtgSlider-${$}-${s.id}`,class:"tgtg-slider__slide"},[W(t.$slots,"default",{slide:l},void 0,!0)],8,E))),128))],12,I)],2),e(O)?(o(),_(w,{key:0},[s.pagination?(o(),z(v,{key:0,id:s.id,class:"tgtg-slider__pagination",variant:d.variant,"number-of-pages":e(b),"active-page":a.value,"is-first-slide":e(y),"is-last-slide":e(h),"onClick:back":i[0]||(i[0]=l=>u(e(g).BACK)),"onClick:direct":L,"onClick:forward":i[1]||(i[1]=l=>u(e(g).FORWARD))},null,8,["id","variant","number-of-pages","active-page","is-first-slide","is-last-slide"])):(o(),_("div",{key:1,class:k(["tgtg-slider__controls",{"tgtg-slider__controls--with-background":s.showTriggersBackground}])},[n("button",{role:"button",type:"button","aria-controls":`tgtg-carousel_${d.id}`,disabled:e(y),class:"tgtg-slider__controls__trigger tgtg-slider__controls__trigger--back",onClick:i[2]||(i[2]=l=>u(e(g).BACK))},[n("span",X,A(t.$literal("app_general_accessibility_back_button")),1)],8,H),n("button",{role:"button","aria-controls":`tgtg-carousel_${d.id}`,disabled:e(h),class:"tgtg-slider__controls__trigger tgtg-slider__controls__trigger--forward",onClick:i[3]||(i[3]=l=>u(e(g).FORWARD))},[n("span",q,A(t.$literal("app_general_accessibility_forward_button")),1)],8,j)],2))],64)):V("",!0)],2)}}});const it=G(J,[["__scopeId","data-v-695c8f50"]]);export{it as default};
