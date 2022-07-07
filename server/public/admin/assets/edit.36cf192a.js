import{d as C,r as f,j as U,k as x,Z as L,l as T,m as q,E as N,c as R,a as t,w as r,Q as S,f as I,V as $,o as _,h as u,e as F,g as j}from"./index.9fc232cc.js";import{v as H}from"./el-loading.923739bb.js";import{E as M}from"./el-switch.5e74f521.js";import{E as P}from"./el-input.8962c0a5.js";import{E as Q,a as Z}from"./el-form-item.dd920213.js";import{E as z}from"./el-cascader-panel.db817133.js";import"./el-tag.28197ba6.js";import"./el-checkbox.a0689a45.js";import"./el-radio.e55ebb62.js";import{E as G}from"./el-card.aa4c0f18.js";import{E as J}from"./el-page-header.9f40f21c.js";import{F as K}from"./index.f3c8a419.js";import{a as O,c as W,d as X,e as Y}from"./organization.7bca874b.js";import"./validator.a233eb8e.js";import"./event.776e7e11.js";import"./index.c40746fe.js";import"./isEqual.57cff38e.js";import"./arrays.6dddb988.js";import"./scroll.f8551db9.js";import"./_baseFlatten.5bb1cc92.js";import"./index.5f327d86.js";const ee=F("div",{class:"form-tips"},"\u9ED8\u8BA4\u4E3A0\uFF0C \u6570\u503C\u8D8A\u5927\u8D8A\u6392\u524D",-1),ue=j("\u4FDD\u5B58"),Ae=C({__name:"edit",setup(le){const c=f(null),{router:D,route:b}=U(),n=x(()=>{var a;return(a=b.query)==null?void 0:a.id}),p=f(!1),E=f([]),{formData:e,rules:B}=L(T({formData:{pid:"",name:"",leader:"",mobile:"",sort:0,status:0},rules:{pid:[{required:!0,message:"\u8BF7\u9009\u62E9\u4E0A\u7EA7\u90E8\u95E8",trigger:["change"]}],name:[{required:!0,message:"\u8BF7\u8F93\u5165\u90E8\u95E8\u540D\u79F0",trigger:["blur"]}]}})),V=()=>{O().then(a=>{E.value=v(a)})},v=a=>a.map(s=>{const i=s.children||[];return i.length&&v(i),s.id==n.value||s.status==0?s.disabled=!0:s.disabled=!1,s}),g=()=>{!n.value||(p.value=!0,W({id:n.value}).then(a=>{e.value=a}).finally(()=>{p.value=!1}))},A=()=>{var a;(a=c.value)==null||a.validate(l=>{if(!l)return;Array.isArray(e.value.pid)&&(e.value.pid=e.value.pid[e.value.pid.length-1]),(n.value?X({...e.value,id:n.value}):Y(e.value)).then(()=>{setTimeout(()=>D.go(-1),500)})})};return q(()=>{g(),V()}),(a,l)=>{const s=J,i=G,h=z,d=Q,m=P,w=M,y=N,k=H;return _(),R($,null,[t(i,{shadow:"never"},{default:r(()=>[t(s,{content:u(n)?"\u7F16\u8F91\u90E8\u95E8":"\u65B0\u589E\u90E8\u95E8",onBack:l[0]||(l[0]=o=>a.$router.back())},null,8,["content"])]),_:1}),S((_(),I(i,{shadow:"never",class:"m-t-15"},{default:r(()=>[t(u(Z),{ref_key:"formRefs",ref:c,rules:u(B),class:"ls-form",model:u(e),"label-width":"150px"},{default:r(()=>[t(d,{label:"\u4E0A\u7EA7\u90E8\u95E8",prop:"pid"},{default:r(()=>[t(h,{modelValue:u(e).pid,"onUpdate:modelValue":l[1]||(l[1]=o=>u(e).pid=o),options:E.value,props:{value:"id",label:"name",checkStrictly:!0},clearable:"",disabled:u(e).pid===0&&u(n)},null,8,["modelValue","options","disabled"])]),_:1}),t(d,{label:"\u90E8\u95E8\u540D\u79F0",prop:"name"},{default:r(()=>[t(m,{modelValue:u(e).name,"onUpdate:modelValue":l[2]||(l[2]=o=>u(e).name=o),placeholder:"\u8BF7\u8F93\u5165\u90E8\u95E8\u540D\u79F0"},null,8,["modelValue"])]),_:1}),t(d,{label:"\u8D1F\u8D23\u4EBA",prop:"leader"},{default:r(()=>[t(m,{modelValue:u(e).leader,"onUpdate:modelValue":l[3]||(l[3]=o=>u(e).leader=o),placeholder:"\u8BF7\u8F93\u5165\u8D1F\u8D23\u4EBA\u59D3\u540D"},null,8,["modelValue"])]),_:1}),t(d,{label:"\u8054\u7CFB\u7535\u8BDD",prop:"mobile"},{default:r(()=>[t(m,{modelValue:u(e).mobile,"onUpdate:modelValue":l[4]||(l[4]=o=>u(e).mobile=o),placeholder:"\u8BF7\u8F93\u5165\u8054\u7CFB\u7535\u8BDD",type:"tel"},null,8,["modelValue"])]),_:1}),t(d,{label:"\u6392\u5E8F",prop:"sort"},{default:r(()=>[F("div",null,[t(m,{style:{width:"280px"},modelValue:u(e).sort,"onUpdate:modelValue":l[5]||(l[5]=o=>u(e).sort=o),placeholder:"\u8BF7\u8F93\u5165\u6392\u5E8F",type:"number"},null,8,["modelValue"]),ee])]),_:1}),t(d,{label:"\u90E8\u95E8\u72B6\u6001"},{default:r(()=>[t(w,{modelValue:u(e).status,"onUpdate:modelValue":l[6]||(l[6]=o=>u(e).status=o),"active-value":1,"inactive-value":0},null,8,["modelValue"])]),_:1})]),_:1},8,["rules","model"])]),_:1})),[[k,p.value]]),t(K,null,{default:r(()=>[t(y,{type:"primary",onClick:A},{default:r(()=>[ue]),_:1})]),_:1})],64)}}});export{Ae as default};
