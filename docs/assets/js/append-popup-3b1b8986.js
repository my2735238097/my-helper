import{c as i,x as f}from"./index-00d4ac3a.js";import{d as u,a,ag as d,v as _,P as b}from"./main/chunk-vue-32374f64.js";import"./main/chunk-element-plus-b8cc1db0.js";import"./main/chunk-lodash-es-21c98b27.js";import"./main/chunk-vue-router-c3f0a4ff.js";import"./main/chunk-fingerprintjs-cb838e3e.js";import"./main/chunk-sortablejs-be94e56d.js";const g=u({name:"append-popup"}),C=Object.assign(g,{emits:["refresh"],setup(v,{emit:w}){const r=i(),s=a({name:"",select:""}),m=a([{formType:"input",prop:"name",label:"名称:"},{formType:"select",prop:"select",label:"班级:",optionList:[{label:"班级1",value:1},{label:"班级2",value:2}]}]);r.getModal();const n=a(null),p=async(l,e,o)=>{e.loading=!0;let t=await f({...l}).catch(c=>c);t!=null&&t.code&&(o(),e.loading=!1)};return(l,e)=>{const o=d("c-form");return _(),b(o,{ref_key:"formRef",ref:n,"label-width":"100px",isDialog:"",model:s.value,rows:m.value,onSubmit:p},null,8,["model","rows"])}}});export{C as default};
