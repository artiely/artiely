import{p as t,b as e,u as s,m as a,r,o as l,c as o,d as i,a as n,F as c,q as m,v as p,s as u,e as d,_ as f,t as g}from"./app.5f3fb606.js";const h=d();t("data-v-5414fc5c");const v={style:{"margin-top":"100px"},class:"timeline"},_={class:"time-post"},x={class:"right"};e();const y={setup(t){const{timeline:e}=s();return a((()=>{f((()=>import("./ScrollTrigger.f95eeefc.js")),[]).then((t=>{g.registerPlugin(t.default),document.querySelectorAll(".time-post").forEach((t=>{g.to(t,{scrollTrigger:{trigger:t,start:"bottom 100%+=200px",toggleActions:"restart"},y:0,opacity:1,duration:1,scale:1,ease:"Back.easeOut"})}))}))})),(t,s)=>{const a=r("el-image"),d=r("el-timeline-item"),f=r("el-timeline");return l(),o("div",v,[i(" <Clock /> "),n(f,null,{default:h((()=>[(l(!0),o(c,null,m(u(e),(t=>(l(),o(d,{timestamp:t.date,placement:"top",color:`#${t.posts[0].frontmatter.base64}`},{dot:h((()=>[n("span",{class:"dot",style:{background:`#${t.posts[0].frontmatter.base64}`}},null,4)])),default:h((()=>[n("div",null,[(l(!0),o(c,null,m(t.posts,(t=>(l(),o("div",_,[n(a,{style:{width:"50px",height:"50px","margin-right":"10px"},fit:"cover",src:t.frontmatter.cover},null,8,["src"]),n("div",x,[n("a",{href:t.link},p(t.frontmatter.title),9,["href"]),n("p",null,p(t.frontmatter.summary),1)])])))),256))])])),_:2},1032,["timestamp","color"])))),256))])),_:1})])}},__scopeId:"data-v-5414fc5c"},b='{"title":"","description":"","frontmatter":{"author":"artiely"},"relativePath":"timeline/index.md","lastUpdated":1626942832599}',k={};const j=Object.assign(k,{setup:function(t){return(t,e)=>(l(),o("div",null,[n(y)]))}});export default j;export{b as __pageData};
