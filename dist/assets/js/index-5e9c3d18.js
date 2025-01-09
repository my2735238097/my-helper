import{_ as M,A as L,c as A}from"./index-62cef2e0.js";import{s as F}from"./main/chunk-vue-virtual-scroller-2d26fe9b.js";/* empty css                             */import{d as j,c as T,a as b,b as O,ag as g,v as I,x as $,y as s,W as o,Q as n,U as _,V as m,u as k,L as z,J as S,n as U,P as B,T as N}from"./main/chunk-vue-32374f64.js";import{s as V}from"./index-c89d9cdb.js";import"./main/chunk-element-plus-b8cc1db0.js";import"./main/chunk-lodash-es-21c98b27.js";import"./main/chunk-vue-router-c3f0a4ff.js";import"./main/chunk-fingerprintjs-cb838e3e.js";import"./main/chunk-sortablejs-be94e56d.js";const E={class:"scroller-left"},J={class:"scroller-all"},P={class:"scroller-right"},Q={class:"scroller-right-item--left"},W=j({name:"virtual-scroll-checkout"}),q=Object.assign(W,{props:{items:{type:Array,default:()=>[]},keyField:{type:String,default:"id"},itemSize:{type:Number,default:50},height:{type:Number,default:520},checkItems:{type:Array,default:()=>[]}},emits:["update:checkItems"],setup(t,{emit:d}){const a=t,l=T(()=>c.value.length===a.items.length),p=T(()=>l.value?!1:c.value.length>0),i=b({}),c=b(a.checkItems);let y=!0;O(()=>{if(y){c.value=a.checkItems;for(const e of a.items)i.value[e[a.keyField]]=!1;for(const e of a.checkItems)i.value[e[a.keyField]]=!0}});const v=e=>{let C=i.value[e[a.keyField]];i.value[e[a.keyField]]=!C;let w=c.value.findIndex(x=>x[a.keyField]==e[a.keyField]);w===-1?c.value=c.value.concat([e]):(c.value.splice(w,1),c.value=c.value.concat([])),u()},f=()=>{for(const e of a.items)i.value[e[a.keyField]]=!l.value;c.value=l.value?[]:a.items.concat([]),u()},r=e=>{v(e)},u=()=>{y=!1,d("update:checkItems",c.value),U(()=>y=!0)};return(e,C)=>{const w=g("el-checkbox"),x=g("el-icon");return I(),$("div",{class:"virtual-scroll-checkout",style:z({height:`${t.height}px`})},[s("div",E,[s("div",J,[o(w,{"model-value":k(l),indeterminate:k(p),onChange:C[0]||(C[0]=h=>f())},{default:n(()=>[_(" 全选："+m(c.value.length)+"/"+m(t.items.length),1)]),_:1},8,["model-value","indeterminate"])]),o(k(F),{"key-field":t.keyField,items:t.items,"item-size":t.itemSize},{default:n(({item:h})=>[o(w,{class:"scroller-left-item",style:z({height:`${t.itemSize}px`}),"model-value":i.value[h[t.keyField]],onChange:D=>v(h)},{default:n(()=>[e.$slots.default?S(e.$slots,"default",{key:0,item:h},()=>[_(m(h.title),1)],!0):S(e.$slots,"left",{key:1,item:h},()=>[_(m(h.title),1)],!0)]),_:2},1032,["style","model-value","onChange"])]),_:3},8,["key-field","items","item-size"])]),s("div",P,[o(k(F),{"key-field":t.keyField,items:c.value,"item-size":t.itemSize},{default:n(({item:h})=>[s("div",{class:"scroller-right-item",style:z({height:`${t.itemSize}px`})},[s("div",Q,[e.$slots.default?S(e.$slots,"default",{key:0,item:h},()=>[_(m(h.title),1)],!0):S(e.$slots,"right",{key:1,item:h},()=>[_(m(h.title),1)],!0)]),o(x,{class:"scroller-right-item--close",onClick:D=>r(h)},{default:n(()=>[o(k(L))]),_:2},1032,["onClick"])],4)]),_:3},8,["key-field","items","item-size"])])],4)}}}),G=M(q,[["__scopeId","data-v-f8e87539"]]);const H={class:"more-modal"},K={class:"item"},X=["src"],Y={class:"item-content"},Z={class:"more-modal-fooder"},ee={__name:"more-modal",props:{modelValue:{type:[Array],default:()=>[]}},emits:["update:modelValue","on-end","on-close"],setup(t,{emit:d}){const a=t,l=A(),p=b(Array.from(Array(2e4),(f,r)=>({id:r,title:`我是标题${r}`,subTitle:`描述描述描述描述描述描述描述描述描述${r}`,extra:`额外内容${r}`,url:"/my-helper/avatar.jpg"}))),i=b([]),c=()=>{l.closeModal(),d("on-close")},y=()=>{l.closeModal(),d("update:modelValue",i.value),d("on-end",i.value)};return(()=>{i.value=a.modelValue})(),(f,r)=>{const u=g("el-button");return I(),$("div",H,[o(G,{itemSize:56,items:p.value,checkItems:i.value,"onUpdate:checkItems":r[0]||(r[0]=e=>i.value=e)},{default:n(({item:e})=>[s("div",K,[s("img",{src:e.url,alt:""},null,8,X),s("div",Y,[s("p",null,m(e.title),1),s("p",null,m(e.subTitle),1)])])]),_:1},8,["items","checkItems"]),s("div",Z,[o(u,{plain:"",onClick:c},{default:n(()=>[_(" 取 消 ")]),_:1}),o(u,{type:"primary",onClick:y},{default:n(()=>[_(" 确 定 ")]),_:1})])])}}},te=M(ee,[["__scopeId","data-v-59bb187c"]]);const le={class:"scroller-all"},oe=j({name:"virtual-scroll-radio"}),se=Object.assign(oe,{props:{items:{type:Array,default:()=>[]},keyField:{type:String,default:"id"},itemSize:{type:Number,default:50},height:{type:Number,default:520},checkItem:{type:Object,default:()=>({})}},emits:["update:checkItem"],setup(t,{emit:d}){const a=t,l=T(()=>a.checkItem),p=i=>{d("update:checkItem",{...i})};return(i,c)=>{const y=g("el-radio");return I(),$("div",{class:"virtual-scroll-radio",style:z({height:`${t.height}px`})},[s("div",le,"全部："+m(t.items.length),1),o(k(F),{"key-field":t.keyField,items:t.items,"item-size":t.itemSize},{default:n(({item:v})=>[o(y,{class:"scroller-item",modelValue:k(l)[t.keyField],"onUpdate:modelValue":c[0]||(c[0]=f=>k(l)[t.keyField]=f),label:v[t.keyField],style:z({height:`${t.itemSize}px`}),onChange:f=>p(v)},{default:n(()=>[S(i.$slots,"default",{item:v},()=>[_(m(v.title),1)],!0)]),_:2},1032,["modelValue","label","style","onChange"])]),_:3},8,["key-field","items","item-size"])],4)}}}),ae=M(se,[["__scopeId","data-v-98dd95ea"]]);const ne={class:"single-modal"},ie={class:"item"},ce={class:"item-left"},de=["src"],re={class:"item-left-content"},ue={class:"item-extra"},me={class:"single-modal-fooder"},_e={__name:"single-modal",props:{modelValue:{type:[Object],default:()=>({})}},emits:["update:modelValue","on-end","on-close"],setup(t,{emit:d}){const a=t,l=A(),p=b(Array.from(Array(2e4),(f,r)=>({id:r,title:`我是标题${r}`,subTitle:`描述描述描述描述描述描述描述描述描述${r}`,extra:`额外内容${r}`,url:"/my-helper/avatar.jpg"}))),i=b({}),c=()=>{l.closeModal(),d("on-close")},y=()=>{l.closeModal(),d("update:modelValue",i.value),d("on-end",i.value)};return(()=>{i.value=a.modelValue})(),(f,r)=>{const u=g("el-button");return I(),$("div",ne,[o(ae,{itemSize:56,items:p.value,checkItem:i.value,"onUpdate:checkItem":r[0]||(r[0]=e=>i.value=e)},{default:n(({item:e})=>[s("div",ie,[s("div",ce,[s("img",{src:e.url,alt:""},null,8,de),s("div",re,[s("p",null,m(e.title),1),s("p",null,m(e.subTitle),1)])]),s("span",ue,m(e.extra),1)])]),_:1},8,["items","checkItem"]),s("div",me,[o(u,{plain:"",onClick:c},{default:n(()=>[_(" 取 消 ")]),_:1}),o(u,{type:"primary",onClick:y},{default:n(()=>[_(" 确 定 ")]),_:1})])])}}},fe=M(_e,[["__scopeId","data-v-1cd29eb6"]]);const he={class:"virtual-scroll-show"},pe=j({name:"virtual-scroll-show"}),ve=Object.assign(pe,{props:{items:{type:Array,default:()=>[]},keyField:{type:String,default:"id"},itemSize:{type:Number,default:50}},emits:[],setup(t,{emit:d}){return(a,l)=>(I(),$("div",he,[o(k(F),{"key-field":t.keyField,items:t.items,"item-size":t.itemSize},{default:n(({item:p})=>[s("div",{class:"scroller-item",style:z({height:`${t.itemSize}px`})},[S(a.$slots,"default",{item:p},()=>[_(m(p.title),1)],!0)],4)]),_:3},8,["key-field","items","item-size"])]))}}),ye=M(ve,[["__scopeId","data-v-e3a1368a"]]);const ge={class:"show-drawer"},ke={class:"item"},be={class:"item-left"},Ie=["src"],$e={class:"item-left-content"},we={class:"item-extra"},Ce={class:"show-drawer-fooder"},xe={__name:"show-drawer",props:{list:{type:[Array],default:()=>[]}},emits:["on-end","on-close"],setup(t,{emit:d}){const a=t,l=A(),p=T(()=>{var c;return a.list.length?a.list:((c=l.getModal())==null?void 0:c.list)||[]}),i=()=>{l.closeModal(),d("on-close")};return(c,y)=>{const v=g("el-button");return I(),$("div",ge,[o(ye,{itemSize:56,items:k(p)},{default:n(({item:f})=>[s("div",ke,[s("div",be,[s("img",{src:f.url,alt:""},null,8,Ie),s("div",$e,[s("p",null,m(f.title),1),s("p",null,m(f.subTitle),1)])]),s("span",we,m(f.extra),1)])]),_:1},8,["items"]),s("div",Ce,[o(v,{plain:"",onClick:i},{default:n(()=>[_(" 取 消 ")]),_:1})])])}}},Se=M(xe,[["__scopeId","data-v-7debce72"]]),ze={key:0,style:{width:"100%"}},Me={key:0,style:{width:"100%","margin-top":"10px"}},Ue={__name:"index",setup(t){const d=A(),a="/my-helper/account-list/ic-account-avatar4.jpg",l=b({singleInfo:{},moreInfo:[],showDrawerList:[],uploadImg:"",uploadImgs:[],uploadFile:[]});l.value.showDrawerList=Array.from(Array(2e4),(r,u)=>({id:u,title:`我是标题${u}`,subTitle:`描述描述描述描述描述描述描述描述描述${u}`,extra:`额外内容${u}`,url:"/my-helper/avatar.jpg"}));const p=b([{layout:"cols",children:[[{formType:"title",label:"虚拟列表组件"},{slot:"moreInfoRef",formType:"slot",label:"多选择窗："},{slot:"singleInfoRef",formType:"slot",label:"单选择窗："},{slot:"showDrawerRef",formType:"slot",label:"抽屉展示："},{formType:"title",label:"显示组件"},{slot:"showCardRef",formType:"slot",label:"展示卡片："}],[{formType:"title",label:"上传组件",subLabel:""},{formType:"upload-img",prop:"uploadImg",label:"单图上传：",size:"",ratio:"",tips:"支持图片类型、大小、尺寸、比例识别。",desc:!1},{formType:"upload-imgs",prop:"uploadImgs",label:"多图上传：",size:"",ratio:"",tips:"支持图片类型、大小、尺寸、比例识别，可拖拽排序。",desc:!1},{formType:"upload-file",prop:"uploadFile",label:"文件上传：",size:"",desc:!1}]]}]),i=()=>{d.openModal("more-modal")},c=()=>{d.openModal("single-modal")},y=()=>{d.openModal("show-drawer",{list:l.value.showDrawerList})},v=()=>{d.openModal("show-drawer",{list:l.value.moreInfo})},f=b(!0);return setTimeout(()=>{f.value=!1},2e3),(r,u)=>{const e=g("el-button"),C=g("el-space"),w=g("c-form"),x=g("c-dialog"),h=g("c-drawer"),D=g("c-card");return I(),B(D,null,{default:n(()=>[o(w,{"label-width":"120px",width:"100%",model:l.value,rows:p.value,isFooter:!1},{moreInfoRef:n(()=>[o(e,{onClick:i},{default:n(()=>[_("点击选择")]),_:1}),l.value.moreInfo.length?(I(),$("div",ze,[_(" 当前已选择 "+m(l.value.moreInfo.length)+" 个， ",1),s("span",{class:"is-button",onClick:v},"查看更多")])):N("",!0)]),singleInfoRef:n(()=>[o(e,{onClick:c},{default:n(()=>[_("点击选择")]),_:1}),Object.keys(l.value.singleInfo).length?(I(),$("div",Me,[o(V,{width:300,title:l.value.singleInfo.title,"sub-title":l.value.singleInfo.subTitle,extra:l.value.singleInfo.extra,cover:l.value.singleInfo.url},null,8,["title","sub-title","extra","cover"])])):N("",!0)]),showDrawerRef:n(()=>[o(e,{onClick:y},{default:n(()=>[_("点击选择")]),_:1})]),showCardRef:n(()=>[o(C,{wrap:""},{default:n(()=>[o(V,{size:"large",title:"大号号标题","sub-title":"大号副标题",extra:"额外内容",width:260,cover:a}),o(V,{size:"default",title:"默认标题","sub-title":"默认副标题",extra:"额外内容",width:260,cover:a}),o(V,{size:"small",title:"小号标题","sub-title":"小号副标题",extra:"额外内容",width:260,cover:a})]),_:1})]),_:1},8,["model","rows"]),o(x,{title:"虚拟列表多选",width:800,name:"more-modal"},{default:n(()=>[o(te,{modelValue:l.value.moreInfo,"onUpdate:modelValue":u[0]||(u[0]=R=>l.value.moreInfo=R)},null,8,["modelValue"])]),_:1}),o(x,{title:"虚拟列表单选",width:520,name:"single-modal"},{default:n(()=>[o(fe,{modelValue:l.value.singleInfo,"onUpdate:modelValue":u[1]||(u[1]=R=>l.value.singleInfo=R)},null,8,["modelValue"])]),_:1}),o(h,{title:"抽屉标题",width:500,name:"show-drawer"},{default:n(()=>[o(Se,{list:[]})]),_:1})]),_:1})}}};export{Ue as default};
