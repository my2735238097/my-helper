import{u as _}from"./index-bf586a57.js";import"./main/chunk-element-plus-b8cc1db0.js";import{d as f}from"./db-8eb27b6e.js";import{d as b,ag as i,v as g,P as h,Q as c,W as e,u,U as w,V as E}from"./main/chunk-vue-32374f64.js";import"./message-box-4866a89d.js";import"./main/chunk-lodash-es-21c98b27.js";import"./main/chunk-dexie-7a5662ba.js";const y=async p=>{let r=(a,l)=>{const{keyword:t="",code:m=""}=l;if(!t)return!0;let n=["code","msg","router"];for(let s of n)if((a[s]||"").indexOf(t)!==-1)return!0;return!1},o=(await f.table("error").toArray()).filter(a=>r(a,p));return{code:0,data:{data:o,page:1,total:o.length}}},k=b({name:"logs.monitor-error"}),N=Object.assign(k,{setup(p){const r={E1001:"系统未知错误",E1002:"vue逻辑错误",E1003:"JavaScript错误",E1004:"静态资源加载错误",E1005:"请求错误",E1006:"Promise错误"},{loading:d,tableData:o}=_({api:y,params:{},options:{},callBack:()=>{}});return(a,l)=>{const t=i("el-table-column"),m=i("c-table"),n=i("c-card");return g(),h(n,null,{default:c(()=>[e(m,{loading:u(d),data:u(o)},{table:c(()=>[e(t,{type:"selection",width:"40"}),e(t,{prop:"id",label:"ID","min-width":"120"}),e(t,{prop:"code",label:"报错类型","min-width":"180"},{default:c(({row:s})=>[w(E(r[s.code]),1)]),_:1}),e(t,{prop:"msg",label:"报错信息","min-width":"360"}),e(t,{prop:"router",label:"报错页面","min-width":"260"}),e(t,{prop:"file",label:"报错文件","min-width":"260"}),e(t,{prop:"createTime",label:"报错时间","min-width":"260"})]),_:1},8,["loading","data"])]),_:1})}}});export{N as default};