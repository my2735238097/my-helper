import{_ as S}from"./index-62cef2e0.js";import{j as I,ag as M,v as T,P as k,Q as R,y as h,u as P,aw as q,ax as A}from"./main/chunk-vue-32374f64.js";import"./main/chunk-element-plus-b8cc1db0.js";import"./main/chunk-lodash-es-21c98b27.js";import"./main/chunk-vue-router-c3f0a4ff.js";import"./main/chunk-fingerprintjs-cb838e3e.js";import"./main/chunk-sortablejs-be94e56d.js";const b=d=>(q("data-v-74059653"),d=d(),A(),d),j={class:"canvas-handle"},E=["value"],F=b(()=>h("canvas",{id:"canvas"},null,-1)),N={__name:"index",setup(d){let o,i,l="#ff0000",r,s=devicePixelRatio*1||1,a=[];const _=e=>{l=e.target.value},X=()=>{const{width:e,height:n}=r;i.width=e*s,i.height=n*s,i.style.width=e+"px",i.style.height=n+"px"};class Y{constructor(n,t,c){this.color=n,this.startX=t,this.startY=c,this.endX=t,this.endY=c}get minX(){return Math.min(this.startX,this.endX)}get minY(){return Math.min(this.startY,this.endY)}get maxX(){return Math.max(this.startX,this.endX)}get maxY(){return Math.max(this.startY,this.endY)}draw(){o.beginPath(),o.moveTo(this.minX*s,this.minY*s),o.lineTo(this.maxX*s,this.minY*s),o.lineTo(this.maxX*s,this.maxY*s),o.lineTo(this.minX*s,this.maxY*s),o.lineTo(this.minX*s,this.minY*s),o.fillStyle=this.color,o.fill(),o.strokeStyle="#fff",o.lineCap="square",o.lineWidth=3*s,o.stroke()}}const m=()=>{requestAnimationFrame(m),o.clearRect(0,0,i.width,i.height);for(const e of a)e.draw()},w=(e,n)=>{for(let t=a.length-1;t>=0;t--)if(e>=a[t].minX&&e<=a[t].maxX&&n>=a[t].minY&&n<=a[t].maxY)return a[t]},x=()=>{i.onmousedown=e=>{const n=new Y(l,e.offsetX,e.offsetY),t=w(e.offsetX,e.offsetY);if(t){const{startX:c,startY:g,endX:v,endY:C}=t,y=e.offsetX,B=e.offsetY;window.onmousemove=u=>{const p=u.clientX-r.left-y,f=u.clientY-r.top-B;t.startX=c+p,t.startY=g+f,t.endX=v+p,t.endY=C+f}}else a.push(n),window.onmousemove=c=>{n.endX=c.clientX-r.left,n.endY=c.clientY-r.top};window.onmouseup=()=>{window.onmousemove=null,window.onmouseup=null}}};return I(()=>{i=document.getElementById("canvas"),o=i.getContext("2d"),r=i.getBoundingClientRect(),X(),m(),x()}),(e,n)=>{const t=M("c-card");return T(),k(t,{isAffix:""},{default:R(()=>[h("div",j,[h("input",{type:"color",value:P(l),onChange:_},null,40,E)]),F]),_:1})}}},J=S(N,[["__scopeId","data-v-74059653"]]);export{J as default};
