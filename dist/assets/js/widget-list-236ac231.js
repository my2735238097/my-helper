import{d as U,c as $,v as t,P as b,Q as I,x as s,a8 as h,u as i,F as y,G as E,i as F,ag as C,K as u,a3 as c,y as f,V as g,W as n,T as L}from"./main/chunk-vue-32374f64.js";import{n as N}from"./vue-draggable-plus-647d122b.js";import{_ as T,c as j,a2 as D,J as W}from"./index-62cef2e0.js";import{M as z}from"./message-box-4866a89d.js";import{E as A}from"./main/chunk-element-plus-b8cc1db0.js";import"./main/chunk-vue-router-c3f0a4ff.js";import"./main/chunk-fingerprintjs-cb838e3e.js";import"./main/chunk-sortablejs-be94e56d.js";import"./main/chunk-lodash-es-21c98b27.js";const G=["onClick"],J=["onClick"],K=["onClick"],O={class:"form-tag"},P={key:2,class:"handle-divider"},Q=U({name:"widget-list"}),q=Object.assign(Q,{props:{formRows:{type:Array,default:()=>[]},widgetId:{type:[String],default:""}},emits:["update:formRows","update:widgetId","on-switch"],setup(a,{emit:k}){const R=a,V=j(),x=F("on-switch-form-item"),l=$({get(){return R.formRows},set(o){k("update:formRows",o)}}),p=o=>{x(o.widgetId,o)},M=o=>{V.openModal("add-widget-popup",{type:"add",widgetId:o.widgetId,data:o})},S=(o,r)=>{z({title:"确认删除该组件项",beforeClose:(m,_,e)=>{const w=l.value;w.splice(r,1),k("update:formRows",w),A.success("删除成功"),e()}})};return(o,r)=>{const m=C("widget-list",!0),_=C("el-icon");return t(),b(i(N),{modelValue:i(l),"onUpdate:modelValue":r[0]||(r[0]=e=>E(l)?l.value=e:null),animation:"300"},{default:I(()=>[(t(!0),s(y,null,h(i(l),(e,w)=>(t(),s("div",{key:e.widgetId},[e.layout?(t(),s(y,{key:0},[e.layout=="cols"?(t(),s("fieldset",{key:0,class:u(["widget-cols",e.widgetId==a.widgetId&&"is-form-active"]),onClick:c(d=>p(e),["stop"])},[f("legend",null,g(e.layout),1),(t(!0),s(y,null,h(e.children,(d,v)=>(t(),s("div",{class:"widget-cols__item",key:d},[n(m,{formRows:e.children[v],"onUpdate:formRows":B=>e.children[v]=B,widgetId:a.widgetId},null,8,["formRows","onUpdate:formRows","widgetId"])]))),128))],10,G)):(t(),s("fieldset",{key:1,class:u(["widget-items",e.widgetId==a.widgetId&&"is-form-active"]),onClick:c(d=>p(e),["stop"])},[f("legend",null,g(e.layout),1),n(m,{formRows:e.children,"onUpdate:formRows":d=>e.children=d,widgetId:a.widgetId},null,8,["formRows","onUpdate:formRows","widgetId"])],10,J))],64)):(t(),s("div",{key:1,class:u(["form-item",e.widgetId==a.widgetId&&"is-form-active"]),onClick:c(d=>p(e),["stop"])},[f("span",{class:u([e.formType=="title"&&"is-title"])},g(e.label),3),f("span",O,g(e.formType),1)],10,K)),e.widgetId==a.widgetId?(t(),s("div",P,[n(_,{class:"is-icon",onClick:c(d=>M(e),["stop"])},{default:I(()=>[n(i(D))]),_:2},1032,["onClick"]),n(_,{class:"is-icon",onClick:c(d=>S(e,w),["stop"])},{default:I(()=>[n(i(W))]),_:2},1032,["onClick"])])):L("",!0)]))),128))]),_:1},8,["modelValue"])}}}),ae=T(q,[["__scopeId","data-v-e3920140"]]);export{ae as default};
