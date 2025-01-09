import{v as R}from"./index-56d55fe4.js";import{_ as M}from"./index-00d4ac3a.js";import{a as S}from"./index-ad24bafc.js";import{d as P,j as y,R as B,u as v,v as I,x as D}from"./main/chunk-vue-32374f64.js";const E={id:"starsCanvasID",class:"canvas"},O=P({name:"stars-bg"}),k=Object.assign(O,{setup(A){let c=devicePixelRatio,n={},i={},u="",p="",_=217,m=[],f=1300,o={},r={},e="",l={};function h(t,a){if(arguments.length<2&&(a=t,t=0),t>a){var s=a;a=t,t=s}return Math.floor(Math.random()*(a-t+1))+t}function C(t,a){let s=Math.max(t,a);return Math.round(Math.sqrt(s*s+s*s))/2}class w{constructor(){this.orbitRadius=h(C(u,p)),this.radius=h(60,this.orbitRadius)/20,this.orbitX=u/2,this.orbitY=p/2,this.timePassed=h(0,f),this.speed=h(this.orbitRadius)/15e5,this.alpha=h(2,10)/10}draw(){let a=Math.sin(this.timePassed)*this.orbitRadius+this.orbitX,s=Math.cos(this.timePassed)*this.orbitRadius+this.orbitY,d=h(10);d===1&&this.alpha>0?this.alpha-=.05:d===2&&this.alpha<1&&(this.alpha+=.05),i.globalAlpha=this.alpha,i.drawImage(o,a-this.radius/2,s-this.radius/2,this.radius,this.radius),this.timePassed+=this.speed}}function g(){i.globalCompositeOperation="source-over",i.globalAlpha=.9,i.fillStyle="hsla("+_+", 64%, 6%, 2)",i.fillRect(0,0,u,p),i.globalCompositeOperation="lighter";for(var t=1;t<m.length;t++)m[t].draw();window.requestAnimationFrame(g)}const b=()=>{n=document.getElementById("starsCanvasID"),i=n.getContext("2d");const{width:t,height:a}=n.getBoundingClientRect();u=n.width=t*c,p=n.height=a*c,o=document.createElement("canvas"),r=o.getContext("2d"),o.width=100*c,o.height=100*c,e=o.width/2,l=r.createRadialGradient(e,e,0,e,e,e),l.addColorStop(.025,"#CCC"),l.addColorStop(.1,"hsl("+_+", 61%, 33%)"),l.addColorStop(.25,"hsl("+_+", 64%, 6%)"),l.addColorStop(1,"transparent"),r.fillStyle=l,r.beginPath(),r.arc(e,e,e,0,Math.PI*2),r.fill(),m=[];for(var s=0;s<f;s++){const d=new w;m.push(d)}g()},x=S(t=>{t!=null&&t.width&&(t!=null&&t.height)&&b()},200);return y(()=>{b()}),(t,a)=>B((I(),D("canvas",E,null,512)),[[v(R),v(x)]])}}),X=M(k,[["__scopeId","data-v-546dbaa6"]]);export{X as s};
