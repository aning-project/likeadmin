import{_ as B,d as E,j as V,r as p,k as C,l as z,m as A,n as F,A as w,p as K,E as L,c as U,e as t,q as $,t as v,a as n,w as r,s as k,o as q,v as y,g as D}from"./index.9fc232cc.js";import{E as I}from"./el-checkbox.a0689a45.js";import{E as N,a as R}from"./el-form-item.dd920213.js";import{E as T}from"./el-input.8962c0a5.js";import"./event.776e7e11.js";import"./isEqual.57cff38e.js";import"./index.c40746fe.js";const S=E({setup(){const{store:e,router:s,route:b}=V(),m=p(null),f=p(null),c=p(!1),i=p(!1),d=C(()=>e.getters.config),l=z({account:"",password:""}),u={account:[{required:!0,message:"\u8BF7\u8F93\u5165\u8D26\u53F7",trigger:["blur"]}],password:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801",trigger:["blur"]}]},_=()=>{var o;if(!l.password)return(o=m.value)==null?void 0:o.focus();g()},g=()=>{var o;(o=f.value)==null||o.validate(h=>{!h||(i.value=!0,F.set(w,{remember:c.value,account:l.account}),e.dispatch("user/login",l).then(()=>{const{query:{redirect:a}}=b,x=typeof a=="string"?a:"/";s.replace(x)}).catch(a=>{console.log(a)}).finally(()=>{i.value=!1}))})};return A(()=>{const o=F.get(w);o.remember&&(c.value=o.remember,l.account=o.account)}),{config:d,passwordRefs:m,loginFormRefs:f,loginForm:l,loginLoading:i,rules:u,handleEnter:_,handleLogin:g,remAccount:c}}}),j={class:"login flex flex-col"},M={class:"flex-1 flex flex-center"},O={class:"login-card bg-white flex"},G={class:"login-form flex flex-col"},H={class:"f-s-24 f-w-500 text-center m-b-40"},J={class:"m-b-20"},P=D("\u767B\u5F55"),Q={class:"login-footer"},W={class:"flex flex-center muted xs m-t-20"},X={class:"m-r-10"},Y=["href"];function Z(e,s,b,m,f,c){const i=k("avatar"),d=K,l=T,u=N,_=k("lock"),g=R,o=I,h=L;return q(),U("div",j,[t("div",M,[t("div",O,[t("div",{class:"login-img",style:$({"background-image":`url(${e.config.login_image})`})},null,4),t("div",G,[t("div",H,v(e.config.web_name),1),n(g,{ref:"loginFormRefs",model:e.loginForm,"status-icon":"",rules:e.rules,size:"large"},{default:r(()=>[n(u,{prop:"account"},{default:r(()=>[n(l,{modelValue:e.loginForm.account,"onUpdate:modelValue":s[0]||(s[0]=a=>e.loginForm.account=a),placeholder:"\u8BF7\u8F93\u5165\u8D26\u53F7",onKeyup:y(e.handleEnter,["enter"])},{prepend:r(()=>[n(d,null,{default:r(()=>[n(i)]),_:1})]),_:1},8,["modelValue","onKeyup"])]),_:1}),n(u,{prop:"password"},{default:r(()=>[n(l,{ref:"passwordRefs",modelValue:e.loginForm.password,"onUpdate:modelValue":s[1]||(s[1]=a=>e.loginForm.password=a),"show-password":"",placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801",onKeyup:y(e.handleLogin,["enter"])},{prepend:r(()=>[n(d,null,{default:r(()=>[n(_)]),_:1})]),_:1},8,["modelValue","onKeyup"])]),_:1})]),_:1},8,["model","rules"]),t("div",J,[n(o,{modelValue:e.remAccount,"onUpdate:modelValue":s[2]||(s[2]=a=>e.remAccount=a),label:"\u8BB0\u4F4F\u8D26\u53F7"},null,8,["modelValue"])]),n(h,{type:"primary",loading:e.loginLoading,onClick:e.handleLogin,size:"large"},{default:r(()=>[P]),_:1},8,["loading","onClick"])])])]),t("div",Q,[t("div",W,[t("span",X,v(e.config.copyright_info),1),t("a",{class:"link muted",href:e.config.icp_link,target:"_blank"},v(e.config.icp_number),9,Y)])])])}var re=B(S,[["render",Z],["__scopeId","data-v-d6678c4a"]]);export{re as default};
