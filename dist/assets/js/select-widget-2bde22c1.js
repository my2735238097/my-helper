import{_ as f}from"./index-62cef2e0.js";import{c as g,a as y,ag as c,v as p,P as u,Q as i,x as _,F as x,a8 as T,U as h,V as k,u as v,G as V}from"./main/chunk-vue-32374f64.js";import"./main/chunk-element-plus-b8cc1db0.js";import"./main/chunk-lodash-es-21c98b27.js";import"./main/chunk-vue-router-c3f0a4ff.js";import"./main/chunk-fingerprintjs-cb838e3e.js";import"./main/chunk-sortablejs-be94e56d.js";const L={__name:"select-widget",props:{modelValue:{type:Array,default:()=>[]},layout:{type:String,default:""}},emits:["update:modelValue"],setup(m,{emit:d}){const b=m,o=g({get(){return b.modelValue.map(e=>e.formType)},set(e){let l=e.map(a=>r.value[a]);d("update:modelValue",l)}}),r=y({title:{formType:"title",label:"标题"},text:{formType:"text",prop:"text",label:"文本:"},input:{formType:"input",prop:"input",label:"输入框:"},"input-number":{formType:"input-number",prop:"input-number",label:"数字输入框:"},button:{formType:"button",prop:"button",label:"按钮:"},switch:{formType:"switch",prop:"switch",label:"开关:",activeLabel:1,inactiveLabel:0},select:{formType:"select",prop:"select",label:"下拉选择器:",optionList:[{label:"select 1",value:1},{label:"select 2",value:2}]},checkbox:{formType:"checkbox",prop:"checkbox",label:"多选框:",trueLabel:1,falseLabel:0},cascader:{formType:"cascader",prop:"cascader",label:"级联选择器:"},"checkbox-group":{formType:"checkbox-group",prop:"checkbox-group",label:"多选框组:",optionList:[{label:"checkbox 1",value:1},{label:"checkbox 2",value:2}]},"radio-group":{formType:"radio-group",prop:"radio-group",label:"单选框组:",optionList:[{label:"radio 1",value:1},{label:"radio 2",value:2}]},date:{formType:"date",prop:"date",label:"日期:"},time:{formType:"time",prop:"time",label:"时间:"},slider:{formType:"slider",prop:"slider",label:"滑块:"},slot:{formType:"slot",slot:"slot",prop:"slot",label:"插槽:"},"upload-img":{formType:"upload-img",prop:"upload-img",label:"单图上传:"},"upload-imgs":{formType:"upload-imgs",prop:"upload-imgs",label:"多图上传:"},"upload-file":{formType:"upload-file",prop:"upload-file",label:"文件上传:"}});return(e,l)=>{const a=c("el-checkbox"),n=c("el-checkbox-group");return p(),u(n,{modelValue:v(o),"onUpdate:modelValue":l[0]||(l[0]=t=>V(o)?o.value=t:null)},{default:i(()=>[(p(!0),_(x,null,T(r.value,(t,s)=>(p(),u(a,{class:"select-item",key:s,label:s,border:""},{default:i(()=>[h(k(t.label),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])}}},U=f(L,[["__scopeId","data-v-fcf0ab5a"]]);export{U as default};