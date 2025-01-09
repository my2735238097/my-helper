import{_ as z,a as U,ag as k,v as l,P as g,Q as i,x as C,F as P,a8 as S,W as f,y as s,U as T,T as V,V as B,aw as A,ax as D}from"./main/chunk-vue-32374f64.js";import{_ as F}from"./index-00d4ac3a.js";import{E as M}from"./main/chunk-element-plus-b8cc1db0.js";import"./main/chunk-vue-router-c3f0a4ff.js";import"./main/chunk-fingerprintjs-cb838e3e.js";import"./main/chunk-sortablejs-be94e56d.js";import"./main/chunk-lodash-es-21c98b27.js";function Q(_=2){let h=_,n=[],a=0;function o(u,v){return new Promise((d,p)=>{n.push({task:u,data:v,resolve:d,reject:p}),x()})}function x(){for(;a<h&&n.length>0;){const{task:u,data:v,resolve:d,reject:p}=n.shift();a++,u(v).then(d,p).finally(()=>{a--,x()})}}function w(u){u&&(h=u)}return z(()=>{n=[],a=0}),{create:o,updateParallel:w}}const y=_=>(A("data-v-0e59a45b"),_=_(),D(),_),W={class:"task-wrap__name"},$=y(()=>s("span",null,"任务名称:",-1)),q={class:"task-wrap__time"},G=y(()=>s("span",null,"执行时间:",-1)),H=y(()=>s("span",null,"ms",-1)),J={class:"handle-wrap"},K={class:"handle-wrap__count"},O=y(()=>s("span",null,"并发量:",-1)),R=y(()=>s("span",null,"个",-1)),X={__name:"index",setup(_){const h=Q(1),n=U({taskName:"",taskTime:2e3,taskCount:2,parallelCount:1}),a=U([]),o=U([]),x=e=>new Promise((r,m)=>{const{taskTime:c}=e;setTimeout(()=>{r(e)},c)}),w=e=>{h.create(r=>{const m=a.value.findIndex(c=>c.id==r.id);return a.value[m].status=10,x(e)},e).then(r=>{const m=a.value.findIndex(c=>c.id==r.id);a.value[m].status=1})},u=()=>{h.updateParallel(n.value.parallelCount)},v=()=>{if(o.value.some(e=>!e.taskTime||!e.taskName)){M.warning("任务数据不完整！");return}for(const e of o.value)a.value.push(e);for(const e of o.value)w(e);o.value=[],p()};let d=0;const p=()=>{d++;let e={id:d,status:0,taskName:`任务${d}`,taskTime:n.value.taskTime};o.value.push(e)};return p(),(e,r)=>{const m=k("el-input"),c=k("el-input-number"),N=k("el-button"),I=k("el-space"),L=k("el-tag"),E=k("c-card");return l(),g(E,{class:"concurrence-task"},{default:i(()=>[(l(!0),C(P,null,S(o.value,(t,j)=>(l(),C("div",{class:"task-wrap",key:t.id},[f(I,{wrap:"",size:12,alignment:"center"},{default:i(()=>[s("div",W,[$,f(m,{modelValue:t.taskName,"onUpdate:modelValue":b=>t.taskName=b,placeholder:"请输入"},null,8,["modelValue","onUpdate:modelValue"])]),s("div",q,[G,f(c,{modelValue:t.taskTime,"onUpdate:modelValue":b=>t.taskTime=b,"controls-position":"right",min:1},null,8,["modelValue","onUpdate:modelValue"]),H]),o.value.length==j+1?(l(),g(N,{key:0,plain:"",onClick:p},{default:i(()=>[T(" 添加 ")]),_:1})):V("",!0)]),_:2},1024)]))),128)),s("div",J,[f(I,{wrap:"",size:12,alignment:"center"},{default:i(()=>[f(N,{type:"primary",onClick:v},{default:i(()=>[T(" 创建任务 ")]),_:1}),s("div",K,[O,f(c,{modelValue:n.value.parallelCount,"onUpdate:modelValue":r[0]||(r[0]=t=>n.value.parallelCount=t),"controls-position":"right",onChange:u},null,8,["modelValue"]),R])]),_:1})]),(l(!0),C(P,null,S(a.value,t=>(l(),C("div",{class:"task-item",key:t},[t.status==0?(l(),g(L,{key:0,type:"info"},{default:i(()=>[T("待执行")]),_:1})):V("",!0),t.status==1?(l(),g(L,{key:1,type:"success"},{default:i(()=>[T("执行完成")]),_:1})):V("",!0),t.status==10?(l(),g(N,{key:2,type:"primary",text:"",loading:!0},{default:i(()=>[T("执行中")]),_:1})):V("",!0),s("span",null,B(t.taskName)+"（"+B(t.taskTime)+"ms）",1)]))),128))]),_:1})}}},oe=F(X,[["__scopeId","data-v-0e59a45b"]]);export{oe as default};
