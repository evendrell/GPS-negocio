import{T as d,a as c}from"./Components.07ddcaad.js";import{T as p}from"./constants.7c0d7f52.js";import{k as h,f as r,m as t,p as a,y as m,x as u,ae as n,af as f,u as g,F as x,am as T,ak as y}from"./runtime-core.esm-bundler.c03fb5c6.js";import{_ as B}from"./_plugin-vue_export-helper.c27b6911.js";const k=h({__name:"TgtgHeroHeading",props:{rawText:{type:String,default:""},areInBlocks:{type:Boolean,default:!1},size:{type:String,default:d.LARGE},headingLevel:{type:String,default:"1"},isBold:{type:Boolean,default:!1},textAlignment:{type:String,default:c.CENTER}},setup(o){const e=o,i=r(()=>e.rawText.split(p)),l=r(()=>`tgtg-hero-heading--${e.size}`);return(v,C)=>(t(),a("div",{class:n(["tgtg-hero-heading","tgtg-hero-heading--"+o.textAlignment,g(l),{"tgtg-hero-heading--are-in-blocks":e.areInBlocks}])},[(t(),m(f("h"+e.headingLevel),{class:n(["tgtg-hero-heading__heading-content",{"tgtg-hero-heading__heading-content--bold":e.isBold}])},{default:u(()=>[(t(!0),a(x,null,T(g(i),(_,s)=>(t(),a("span",{class:n({"tgtg-hero-heading__plain":!(s%2),"tgtg-hero-heading__highlight":s%2})},y(_),3))),256))]),_:1},8,["class"]))],2))}});const L=B(k,[["__scopeId","data-v-9b7e4896"]]);export{L as default};