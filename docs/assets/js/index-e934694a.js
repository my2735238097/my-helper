import{_ as V,a4 as y}from"./index-00d4ac3a.js";import{a as s,ag as u,v as x,P as h,Q as f,y as n,W as _,U as k,V as w,T}from"./main/chunk-vue-32374f64.js";import"./main/chunk-element-plus-b8cc1db0.js";import"./main/chunk-lodash-es-21c98b27.js";import"./main/chunk-vue-router-c3f0a4ff.js";import"./main/chunk-fingerprintjs-cb838e3e.js";import"./main/chunk-sortablejs-be94e56d.js";const M={class:"flex text-label"},N={class:"left-menu"},C={class:"left-menu-search"},b={class:"right-content"},B={class:"right-content-num"},L=["innerHTML"],U={__name:"index",setup(E){const e=s(""),l=s(""),p=s(""),i=s(""),m=s(!1),g=()=>{if(!e.value)return;m.value=!0;let v=`<span class='is-primary-text'>${e.value}</span>`,a=y(l.value).replace(new RegExp(e.value,"g"),v),c=e.value.length,r=l.value.length,o=0,t=0;for(;e.value&&t!=-1&&t<r;)t=l.value.indexOf(e.value,o==0?t:t+c),o++;p.value=o-1,i.value=a,m.value=!1};return(v,a)=>{const c=u("c-input"),r=u("el-button"),o=u("c-empty"),t=u("c-card");return x(),h(t,{isAffix:""},{default:f(()=>[n("div",M,[n("div",N,[n("div",C,[_(c,{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=d=>e.value=d),width:"100%",class:"left-menu-input",placeholder:"查找关键字"},null,8,["modelValue"]),_(r,{type:"primary",onClick:g},{default:f(()=>[k("标注")]),_:1})]),_(c,{modelValue:l.value,"onUpdate:modelValue":a[1]||(a[1]=d=>l.value=d),class:"left-menu-textarea",type:"textarea",width:"100%","show-word-limit":""},null,8,["modelValue"])]),n("div",b,[n("div",B,"存在"+w(p.value||0)+"个标注数据",1),n("pre",{class:"right-content-text",innerHTML:i.value},null,8,L),i.value?T("",!0):(x(),h(o,{key:0}))])])]),_:1})}}},R=V(U,[["__scopeId","data-v-ec54c35c"]]);export{R as default};
