import{cQ as k,_ as x,d as w,l as g,m as y,s as p,o as c,c as l,e as t,a as n,w as a,t as o,V as E,bQ as B,i as _,bN as D,bM as C}from"./index.9fc232cc.js";import{E as A,a as $}from"./el-table-column.4e17d565.js";import"./el-checkbox.a0689a45.js";import"./el-tag.28197ba6.js";import{E as O}from"./el-image-viewer.a0a76ed8.js";import{E as S}from"./el-card.aa4c0f18.js";import"./event.776e7e11.js";import"./index.c40746fe.js";import"./scroll.f8551db9.js";function I(){return k.get("/workbench/index")}const N=w({setup(){const e=g({version:{version:"",website:""},today:{},menu:[],visitor:[],article:[],visitorOption:{xAxis:{type:"category",data:[0]},yAxis:{type:"value"},legend:{data:["\u8BBF\u95EE\u91CF"]},itemStyle:{color:"red"},tooltip:{trigger:"axis"},series:[{name:"\u8BBF\u95EE\u91CF",data:[0],type:"line"}]}}),h=()=>{I().then(i=>{console.log("res",i),e.version=i.version,e.today=i.today,e.menu=i.menu,e.visitor=i.visitor,e.article=i.article,e.visitorOption.xAxis.data=[],e.visitorOption.series[0].data=[],i.visitor.date.reverse().forEach(u=>{e.visitorOption.xAxis.data.push(u)}),i.visitor.list[0].data.forEach(u=>{e.visitorOption.series[0].data.push(u)})}).catch(i=>{console.log("err",i)})};return y(()=>{h()}),{workbenchData:e,getWorkbench:h}}}),d=e=>(D("data-v-1d481657"),e=e(),C(),e),V={class:"workbench"},z={class:"flex workbench-header"},T=d(()=>t("span",{class:"card-title"},"\u8D26\u53F7\u4FE1\u606F",-1)),M={class:"m-b-20"},Q=d(()=>t("span",{class:"card-title"},"\u4ECA\u65E5\u6570\u636E",-1)),W={class:"muted xs m-l-15"},q={class:"flex"},L={class:"flex-1"},P=d(()=>t("div",{class:"lighter m-b-10"},"\u8BBF\u95EE\u91CF",-1)),U={class:"f-s-32 m-b-10"},Y={class:"lighter"},j={class:"flex-1"},G=d(()=>t("div",{class:"lighter m-b-10"},"\u9500\u552E\u989D",-1)),H={class:"f-s-32 m-b-10"},J={class:"lighter"},K={class:"flex-1"},R=d(()=>t("div",{class:"lighter m-b-10"},"\u65B0\u589E\u7528\u6237",-1)),X={class:"f-s-32 m-b-10"},Z={class:"lighter"},tt={class:"m-t-15 function"},et=d(()=>t("span",{class:"card-title"},"\u5E38\u7528\u529F\u80FD",-1)),st={class:"nav-lists"},ot={class:"flex flex-center"},at={class:"m-t-8 normal text-center"},nt={class:"flex m-t-15 ranking"},it=d(()=>t("span",{class:"card-title"},"\u8BBF\u95EE\u91CF\u8D8B\u52BF\u56FE",-1)),dt={class:"ranking-centent"},ct=d(()=>t("div",null,[t("span",{class:"card-title"},"\u6587\u7AE0\u9605\u8BFB\u91CF\u6392\u540D")],-1)),lt={class:"ranking-centent"},rt={key:0,class:"icon",style:{background:"#f86056",color:"#fff"}},ut={key:1,class:"icon",style:{background:"#fc8d2e",color:"#fff"}},_t={key:2,class:"icon",style:{background:"#fcbc2e",color:"#fff"}},ht={key:3,class:"icon"};function vt(e,h,i,u,pt,ft){const r=S,f=O,m=p("router-link"),b=p("v-chart"),v=A,F=$;return c(),l("div",V,[t("div",z,[n(r,{class:"flex-1",shadow:"never"},{header:a(()=>[T]),default:a(()=>[t("div",null,[t("div",M,"\u7248\u672C\u53F7\uFF1A"+o(e.workbenchData.version.version),1),t("div",null,"\u5B98\u7F51\u540D\u79F0\uFF1A"+o(e.workbenchData.version.name),1)])]),_:1}),n(r,{class:"flex-3 m-l-15",shadow:"never"},{header:a(()=>[t("div",null,[Q,t("span",W,"\u66F4\u65B0\u65F6\u95F4\uFF1A"+o(e.workbenchData.today.time),1)])]),default:a(()=>[t("div",q,[t("div",L,[P,t("div",U,o(e.workbenchData.today.today_visitor),1),t("div",Y,"\u603B\u8BBF\u95EE\u91CF\uFF1A"+o(e.workbenchData.today.total_visitor),1)]),t("div",j,[G,t("div",H,o(e.workbenchData.today.today_sales),1),t("div",J,"\u603B\u9500\u552E\u989D\uFF1A"+o(e.workbenchData.today.total_sales),1)]),t("div",K,[R,t("div",X,o(e.workbenchData.today.today_new_user),1),t("div",Z," \u603B\u8BBF\u7528\u6237\uFF1A"+o(e.workbenchData.today.total_new_user),1)])])]),_:1})]),t("div",tt,[n(r,{class:"flex-1",shadow:"never"},{header:a(()=>[et]),default:a(()=>[t("div",st,[(c(!0),l(E,null,B(e.workbenchData.menu,s=>(c(),l("div",{key:s,class:"nav-item flex-col m-t-10"},[n(m,{to:s.url},{default:a(()=>[t("view",ot,[n(f,{style:{width:"48px",height:"48px"},src:s==null?void 0:s.image},null,8,["src"])]),t("div",at,o(s.name),1)]),_:2},1032,["to"])]))),128))])]),_:1})]),t("div",nt,[n(r,{class:"flex-1",shadow:"never"},{header:a(()=>[it]),default:a(()=>[t("div",dt,[n(b,{class:"chart",option:e.workbenchData.visitorOption},null,8,["option"])])]),_:1}),n(r,{class:"flex-1 m-l-15",shadow:"never"},{header:a(()=>[ct]),default:a(()=>[t("div",lt,[n(F,{data:e.workbenchData.article,size:"medium"},{default:a(()=>[n(v,{label:"\u6392\u540D","min-width":"70",type:"index"},{default:a(s=>[s.$index==0?(c(),l("div",rt,o(s.$index+1),1)):_("",!0),s.$index==1?(c(),l("div",ut,o(s.$index+1),1)):_("",!0),s.$index==2?(c(),l("div",_t,o(s.$index+1),1)):_("",!0),s.$index>2?(c(),l("div",ht,o(s.$index+1),1)):_("",!0)]),_:1}),n(v,{prop:"name",label:"\u6587\u7AE0\u540D\u79F0"}),n(v,{prop:"read",label:"\u9605\u8BFB\u91CF"})]),_:1},8,["data"])])]),_:1})])])}var Bt=x(N,[["render",vt],["__scopeId","data-v-1d481657"]]);export{Bt as default};
