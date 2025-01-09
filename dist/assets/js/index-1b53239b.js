import{a as c,c as z,j as L,ag as f,v as s,P as D,Q as p,W as E,y as b,K as j,V as C,x as d,T as V,a3 as O,U as w,u as v,F as Q,a8 as q}from"./main/chunk-vue-32374f64.js";import{_ as H,a as J,u as X,M as Y,N as S,O as Z}from"./index-62cef2e0.js";import{b as $}from"./main/chunk-vue-router-c3f0a4ff.js";const ee={class:"auth-node"},ae={key:0,class:"auth-node__keep-alive"},te={key:0,class:"keep-alive-include"},le={key:1,class:"is-info-text f-14"},ne={__name:"index",setup(oe){const A=J(),h=X(),P=$(),n=c({authData:[],menuExpandData:[],keepAliveIncludeMax:10,isTableBorder:0,isTableStripe:0,isMenuExpand:0,isTabs:1,isBreadcrumb:1,transitionSlide:"default"}),M=c([{formType:"title",label:"权限/菜单设置"},{formType:"slot",slot:"auth",prop:"authData",label:"权限设置："},{formType:"title",label:"页面状态设置"},{formType:"switch",prop:"isTableBorder",label:"表格边框：",activeValue:1,inactiveValue:0,activeText:"是",inactiveText:"否",inlinePrompt:!0,onChange:()=>o()},{formType:"switch",prop:"isTableStripe",label:"表格斑马纹：",activeValue:1,inactiveValue:0,activeText:"是",inactiveText:"否",inlinePrompt:!0,onChange:()=>o()},{formType:"switch",prop:"isMenuExpand",label:"菜单折叠：",activeValue:1,inactiveValue:0,activeText:"是",inactiveText:"否",inlinePrompt:!0,onChange:()=>o()},{formType:"switch",prop:"isTabs",label:"标签页：",activeValue:1,inactiveValue:0,activeText:"是",inactiveText:"否",inlinePrompt:!0,onChange:()=>o()},{formType:"switch",prop:"isBreadcrumb",label:"面包屑：",activeValue:1,inactiveValue:0,activeText:"是",inactiveText:"否",inlinePrompt:!0,onChange:()=>o()},{formType:"radio-group",prop:"transitionSlide",label:"切换效果：",optionList:[{value:"default",label:"默认"},{value:"left",label:"从左切入"},{value:"right",label:"从右切入"}],onChange:()=>o()},{formType:"title",label:"页面/组件缓存设置"},{formType:"input-number",prop:"keepAliveIncludeMax",labelWidth:"140px",label:"最大缓存数量：",onChange:()=>o()},{formType:"slot",slot:"keepAliveInclude",labelWidth:"140px",label:"当前已缓存："}]),g=z(()=>h.keepAliveInclude.filter(e=>e.keepAlive)),u=c([]),y=c(null),_=c(!1),B={label:e=>{var a;return((a=e==null?void 0:e.meta)==null?void 0:a.title)||"-"}},k=()=>{let e=[],a=[],t=l=>{for(let i of l)e.push(i.path),i.children&&(a.push(i.path),t(i.children))};return t(u.value),{allPaths:e,allExpandPaths:a}},T=()=>{let e=[],a=t=>{for(let l of t)l.meta.autoExpand&&e.push(l.path),l.children&&a(l.children)};return a(u.value),e=e.concat(P.meta.currentCrumb.map(t=>t.path)),e},I=()=>{const e=a=>a.map(t=>(t.children&&(t.children=e(t.children)),t.meta.autoExpand=v(n).menuExpandData.includes(t.path),t));u.value=e(S)},R=()=>{n.value.menuExpandData=T(),x(),o()},F=e=>{let a=e.children||[];return a.length&&a.some(t=>t.meta.menu!==!1)},K=async()=>{_.value=!0;let e=await Z().catch(l=>l);_.value=!1;for(let l in n.value)h[l]&&(n.value[l]=h[l]||0);for(let l in e.data)e.data[l]&&(n.value[l]=e.data[l]||0);const{authData:a,menuExpandData:t}=n.value;(a.length==0||a.includes("all"))&&(n.value.authData=k().allPaths),t.length==0&&(n.value.menuExpandData=T()),t.includes("all")&&(n.value.menuExpandData=k().allExpandPaths),I(),v(y).setCheckedKeys(n.value.authData)},x=()=>{for(let e in n.value)Y(e,n.value[e]).catch(a=>a)},N=async(e,a)=>{n.value.authData=a.checkedKeys||[],x(),A.setMenuRouter()},o=async()=>{x(),await h.setGlobalState()},G=async()=>{u.value=S,await K()};return L(()=>{G()}),(e,a)=>{const t=f("el-checkbox"),l=f("el-tree"),i=f("el-tag"),U=f("c-form");return s(),D(U,{"label-width":"120px",isFooter:!1,model:n.value,rows:M.value,loading:_.value},{auth:p(()=>[E(l,{ref_key:"treeRef",ref:y,class:"auth","node-key":"path","show-checkbox":"","default-expand-all":"","check-on-click-node":"","expand-on-click-node":!1,data:u.value,props:B,onCheck:N},{default:p(({node:m,data:r})=>[b("span",ee,[b("span",null,[b("span",{class:j([r.meta.menu==!1&&"auth-grey"])},C(m.label),3),r.meta.keepAlive?(s(),d("span",ae,"缓存")):V("",!0)]),F(r)?(s(),d("span",{key:0,onClick:a[0]||(a[0]=O(()=>{},["stop"]))},[E(t,{size:"small",modelValue:r.meta.autoExpand,"onUpdate:modelValue":W=>r.meta.autoExpand=W,onChange:R},{default:p(()=>[w(" 展开 ")]),_:2},1032,["modelValue","onUpdate:modelValue"])])):V("",!0)])]),_:1},8,["data"])]),keepAliveInclude:p(()=>[v(g).length?(s(),d("div",te,[(s(!0),d(Q,null,q(v(g),m=>(s(),D(i,{class:"keep-alive-include__tag",type:"info",effect:"plain",key:m.fullPath},{default:p(()=>[w(C(m.label),1)]),_:2},1024))),128))])):(s(),d("span",le,"暂无缓存页面"))]),_:1},8,["model","rows","loading"])}}},re=H(ne,[["__scopeId","data-v-063d56b7"]]);export{re as A};