import{i as w}from"./img-lazy-a9882a78.js";import{_ as G}from"./index-62cef2e0.js";import{a,c as n,ag as v,v as d,P as f,Q as c,y as e,L as u,u as r,W as i,x as k,F as B,a8 as $,V as t,aw as N,ax as R}from"./main/chunk-vue-32374f64.js";import"./main/chunk-element-plus-b8cc1db0.js";import"./main/chunk-lodash-es-21c98b27.js";import"./main/chunk-vue-router-c3f0a4ff.js";import"./main/chunk-fingerprintjs-cb838e3e.js";import"./main/chunk-sortablejs-be94e56d.js";const o=p=>(N("data-v-49082a39"),p=p(),R(),p),T={class:"css-warp"},z={class:"css-item"},D=o(()=>e("p",{class:"css-title"},"grayscale() 函数",-1)),E={class:"css-grayscale"},H={class:"css-item"},P=o(()=>e("p",{class:"css-title"},"毛玻璃效果",-1)),Q={class:"css-glass"},W=o(()=>e("img",{src:w},null,-1)),j={class:"css-item"},q=o(()=>e("p",{class:"css-title"},"文字间隙",-1)),A={class:"css-letter-spacing"},J={class:"css-item"},K=o(()=>e("p",{class:"css-title"},"背景混合",-1)),O={class:"css-blend-mode--option"},X={class:"css-item"},Y=o(()=>e("p",{class:"css-title"},"文字混合",-1)),Z={class:"css-text-blend-mode"},ee={class:"css-blend-mode--option"},le={__name:"index",setup(p){const m=a(50),M=n(()=>({filter:`grayscale(${m.value}%)`})),_=a(5.2),U=n(()=>({"-webkit-backdrop-filter":` blur(${_.value}px)`,"backdrop-filter":` blur(${_.value}px)`})),b=a(1),I=n(()=>({"letter-spacing":`${b.value}px`})),V=a([{value:"normal",label:"默认",desc:"使用正常的颜色混合模式。"},{value:"multiply",label:"正片叠底",desc:"将两个颜色的值相乘，得到一个更暗的颜色。这通常用于创建阴影效果。"},{value:"screen",label:"滤色",desc:"将两个颜色的值相加，然后减去相乘的值，得到一个更亮的颜色。这通常用于创建高光效果。"},{value:"overlay",label:"叠加",desc:"根据背景颜色的亮度来选择颜色混合模式。如果背景颜色较暗，则使用 multiply 模式；如果背景颜色较亮，则使用 screen 模式。"},{value:"darken",label:"变暗",desc:"将两个颜色的值比较，使用较暗的那个颜色。"},{value:"lighten",label:"变亮",desc:"将两个颜色的值比较，使用较亮的那个颜色。"},{value:"color-dodge",label:"颜色减淡",desc:"将前景色分解为 RGB 分量，并将每个分量分别除以（1 减去背景色的对应分量）。然后将每个分量限制在 0 到 1 之间，并使用限制后的前景色作为混合色。"},{value:"color-burn",label:"颜色加深",desc:"将前景色分解为 RGB 分量，并将每个分量分别除以背景色的对应分量。然后将每个分量限制在 0 到 1 之间，并使用限制后的前景色作为混合色。"},{value:"difference",label:"差值",desc:"将前景色减去背景色的值，并取绝对值。这会导致一个反相的效果。"},{value:"exclusion",label:"排除",desc:"将前景色和背景色的值相加，然后减去相乘的值的两倍。这通常用于创建反相效果。"},{value:"hue",label:"色相",desc:"将前景色的色相（Hue）与背景色的饱和度（Saturation）和亮度（Lightness）混合。这可以用于在不改变亮度和饱和度的情况下改变颜色。"},{value:"saturation",label:"饱和度",desc:"将前景色的饱和度与背景色的色相和亮度混合。这可以用于在不改变颜色的情况下改变饱和度。"},{value:"color",label:"颜色",desc:"将前景色的色相、饱和度和亮度与背景色混合。这可以用于在改变所有颜色属性的情况下改变前景色的颜色。"},{value:"luminosity",label:"亮度",desc:"将前景色的亮度与背景色的色相和饱和度混合。这可以用于在不改变颜色的情况下改变亮度。"}]),y=a("normal"),L=n(()=>({"background-blend-mode":`${y.value}`})),g=a("normal"),C=n(()=>({"mix-blend-mode":`${g.value}`}));return(se,s)=>{const x=v("el-slider"),h=v("el-option"),S=v("el-select"),F=v("c-card");return d(),f(F,null,{default:c(()=>[e("div",T,[e("div",z,[D,e("div",E,[e("img",{src:w,style:u(r(M))},null,4)]),i(x,{modelValue:m.value,"onUpdate:modelValue":s[0]||(s[0]=l=>m.value=l)},null,8,["modelValue"])]),e("div",H,[P,e("div",Q,[W,e("span",{style:u(r(U))},null,4)]),i(x,{modelValue:_.value,"onUpdate:modelValue":s[1]||(s[1]=l=>_.value=l)},null,8,["modelValue"])]),e("div",j,[q,e("div",A,[e("span",{style:u(r(I))},"我是间隙",4)]),i(x,{modelValue:b.value,"onUpdate:modelValue":s[2]||(s[2]=l=>b.value=l)},null,8,["modelValue"])]),e("div",J,[K,e("div",{class:"css-blend-mode",style:u(r(L))},null,4),i(S,{"popper-class":"css-blend-mode-popper",modelValue:y.value,"onUpdate:modelValue":s[3]||(s[3]=l=>y.value=l),placeholder:"请选择"},{default:c(()=>[(d(!0),k(B,null,$(V.value,l=>(d(),f(h,{key:l.value,value:l.value},{default:c(()=>[e("div",O,[e("span",null,"属性："+t(l.value)+"   名称："+t(l.label),1),e("span",null,"描述："+t(l.desc),1)])]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),e("div",X,[Y,e("div",Z,[e("p",{style:u(r(C))},"文字混合",4)]),i(S,{"popper-class":"css-blend-mode-popper",modelValue:g.value,"onUpdate:modelValue":s[4]||(s[4]=l=>g.value=l),placeholder:"请选择"},{default:c(()=>[(d(!0),k(B,null,$(V.value,l=>(d(),f(h,{key:l.value,value:l.value},{default:c(()=>[e("div",ee,[e("span",null,"属性："+t(l.value)+"   名称："+t(l.label),1),e("span",null,"描述："+t(l.desc),1)])]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])])])]),_:1})}}},ie=G(le,[["__scopeId","data-v-49082a39"]]);export{ie as default};
