import{T as A}from"./table-group-61c12588.js";import{_ as E,c as O,y as G}from"./index-00d4ac3a.js";import F from"./render-list-20709b8b.js";import{E as H}from"./main/chunk-element-plus-b8cc1db0.js";import{d as I,a as n,j as P,ag as p,v as c,P as u,Q as f,y as m,W as h,T as y,V as U,x as S,F as Q,a8 as W}from"./main/chunk-vue-32374f64.js";import"./main/chunk-vue-router-c3f0a4ff.js";import"./main/chunk-fingerprintjs-cb838e3e.js";import"./main/chunk-sortablejs-be94e56d.js";import"./main/chunk-lodash-es-21c98b27.js";import"./main/chunk-vuedraggable-67b28d1d.js";const q={class:"table-group"},z={class:"dir-tree-box",id:"dirTreeBox"},J={class:"table-group__content"},K={class:"name is-title"},X={key:0,class:"list"},Y=I({name:"feature.directory-picker"}),Z=Object.assign(Y,{setup($){const v=O(),k=["jpg","png","jpeg"],w=["doc","docx"],b={2:{label:"图片",accept:k},3:{label:"word",accept:w}},x=n(600);n("");const _=n(!1),a=n({children:[],name:"",kind:""}),g=n({children:[],name:"",kind:""}),s=n({fileType:[],isFlat:0}),C=n([{formType:"select",prop:"fileType",label:"文件类型:",optionList:Object.entries(b).map(([e,t])=>({label:t.label,value:e}))},{formType:"switch",prop:"isFlat",label:"是否扁平化:",inactiveValue:0,activeValue:1}]),D=e=>{if(e.kind==="directory")return 1;if(e.kind==="file"){let t=e.name.split(".").pop(),i=e.name.split(".").pop();return k.includes(t)?2:w.includes(i)?3:-1}else return 0};let T=1;async function B(e){if(e.id=T,T++,e.type=D(e),e.kind==="file")return e.type===2&&(e.imageUrl=G(await e.getFile())),e;e.children=[];const t=e.entries();for await(const i of t)e.children.push(await B(i[1]));return e}const j=()=>{v.openModal("file-type-popup",{})},L=e=>{let t=[];for(const o of s.value.fileType)t=t.concat(b[o].accept);t=[...new Set(t)];let i=[];const r=o=>{if(s.value.isFlat&&o.kind==="file"&&i.push(o),o.kind==="directory"){o.children=o.children.filter(l=>{let V=l.name.split(".").pop();return l.kind==="directory"||t.length==0?!0:l.kind==="file"&&t.includes(V)});for(let l of o.children)l=r(l)}return o};let d=r(e);return s.value.isFlat&&(d.children=[{id:-1,name:"全部",kind:"directory",type:1,children:i}]),d},M=async()=>{const{protocol:e,hostname:t}=window.location;if(e==="http:"&&t!=="localhost"){H.error("http需要使用localhost访问");return}const i=await window.showDirectoryPicker();_.value=!0,v.closeModal("file-type-popup");const r=await B(i);g.value=L(r),_.value=!1},N=e=>{a.value=e},R=()=>{const e=document.getElementById("dirTreeBox"),{height:t}=e.getBoundingClientRect();x.value=t};return P(()=>{R()}),(e,t)=>{const i=p("el-tree-v2"),r=p("c-form"),d=p("c-dialog"),o=p("c-card");return c(),u(o,{isNone:"",isAffix:"",class:"wrap-page directory-picker"},{default:f(()=>[m("div",q,[h(A,{createBtnText:"读取文件",loading:_.value,onOnCreate:j},{header:f(()=>[]),default:f(()=>[m("div",z,[g.value.children.length?(c(),u(i,{key:0,ref:"treeRef",class:"dir-tree","node-key":"path","default-expand-all":"","check-on-click-node":"",height:x.value,"expand-on-click-node":!1,data:g.value.children,props:{value:"id",label:"name",children:"children"},onNodeClick:N},null,8,["height","data"])):y("",!0)])]),_:1},8,["loading"]),m("div",J,[m("div",K,U(a.value.name),1),a.value.type==1?(c(),S("div",X,[(c(!0),S(Q,null,W(a.value.children,l=>(c(),u(F,{key:l.name,item:l},null,8,["item"]))),128))])):y("",!0),a.value.type>1?(c(),u(F,{item:a.value,key:a.value.name},null,8,["item"])):y("",!0)])]),h(d,{title:"选择类型",width:600,name:"file-type-popup"},{default:f(()=>[h(r,{ref:"formRef","label-width":"100px",isDialog:"",model:s.value,rows:C.value,onSubmit:M},null,8,["model","rows"])]),_:1})]),_:1})}}}),de=E(Z,[["__scopeId","data-v-913d14b2"]]);export{de as default};
