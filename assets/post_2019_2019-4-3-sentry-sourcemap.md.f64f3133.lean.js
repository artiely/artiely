import{o as e,c as n,t,a,x as c}from"./app.746f22cf.js";const s='{"title":"记sentry配置sourcemap后的优化","description":"","frontmatter":{"title":"记sentry配置sourcemap后的优化","tag":["vue","sentry","sourcemap","webpack"],"author":"Artiely","date":"2019-4-3","cover":"https://gitee.com/artiely/Figure-bed/raw/master/images/20200315155224.png","base64":"c2175b"},"headers":[{"level":2,"title":"需求！","slug":"需求"},{"level":2,"title":"说明","slug":"说明"},{"level":2,"title":"思路一 node","slug":"思路一-node"},{"level":2,"title":"思路二 webpack插件","slug":"思路二-webpack插件"},{"level":2,"title":"最终方案","slug":"最终方案"}],"relativePath":"post/2019/2019-4-3-sentry-sourcemap.md","lastUpdated":1629110827678}',o={},r=t('',7),p=a("div",{class:"language-js line-numbers-mode"},[a("pre",null,[a("code",null,[c("module"),a("span",{class:"token punctuation"},"."),c("exports "),a("span",{class:"token operator"},"="),c(),a("span",{class:"token punctuation"},"{"),c("\n"),a("span",{class:"token comment"},"// ..."),c("\n  productionSourceMap"),a("span",{class:"token operator"},":"),c(),a("span",{class:"token boolean"},"true"),a("span",{class:"token punctuation"},","),c("\n"),a("span",{class:"token comment"},"// ..."),c("\n"),a("span",{class:"token punctuation"},"}"),c("\n")]),a("div",{class:"m-mdic-copy-wrapper"},[a("div",{class:"u-mdic-copy-notify",id:"j-notify-1629557996376-73491"},"复制成功"),a("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"module.exports = {\n// ...\n  productionSourceMap: true,\n// ...\n}\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629557996376-73491","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),a("div",{class:"line-numbers-wrapper"},[a("span",{class:"line-number"},"1"),a("br"),a("span",{class:"line-number"},"2"),a("br"),a("span",{class:"line-number"},"3"),a("br"),a("span",{class:"line-number"},"4"),a("br"),a("span",{class:"line-number"},"5"),a("br")])],-1),i=t('',10),l=a("div",{class:"language-js line-numbers-mode"},[a("pre",null,[a("code",null,[c("        "),a("span",{class:"token keyword"},"new"),c(),a("span",{class:"token class-name"},"ZipPlugin"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},"{"),c("\n          path"),a("span",{class:"token operator"},":"),c(" path"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"join"),a("span",{class:"token punctuation"},"("),c("__dirname"),a("span",{class:"token punctuation"},","),c(),a("span",{class:"token string"},"'dist'"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},","),c("\n          filename"),a("span",{class:"token operator"},":"),c(),a("span",{class:"token string"},"'dist.zip'"),a("span",{class:"token punctuation"},","),c("\n          exclude"),a("span",{class:"token operator"},":"),c(),a("span",{class:"token punctuation"},"["),a("span",{class:"token regex"},[a("span",{class:"token regex-delimiter"},"/"),a("span",{class:"token regex-source language-regex"},"\\.map$"),a("span",{class:"token regex-delimiter"},"/")]),a("span",{class:"token punctuation"},"]"),c("\n        "),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},","),c("\n")]),a("div",{class:"m-mdic-copy-wrapper"},[a("div",{class:"u-mdic-copy-notify",id:"j-notify-1629557996376-78166"},"复制成功"),a("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"        new ZipPlugin({\n          path: path.join(__dirname, 'dist'),\n          filename: 'dist.zip',\n          exclude: [/\\.map$/]\n        }),\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629557996376-78166","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),a("div",{class:"line-numbers-wrapper"},[a("span",{class:"line-number"},"1"),a("br"),a("span",{class:"line-number"},"2"),a("br"),a("span",{class:"line-number"},"3"),a("br"),a("span",{class:"line-number"},"4"),a("br"),a("span",{class:"line-number"},"5"),a("br")])],-1),d=a("p",null,[c("更多说明 "),a("a",{href:"https://www.npmjs.com/package/zip-webpack-plugin",target:"_blank",rel:"noopener noreferrer"},"请点击我")],-1),u=a("p",null,[c("这是我的"),a("code",null,"@sentry/webpack-plugin"),c("配置")],-1),m=a("p",null,[a("img",{src:"https://gitee.com/artiely/Figure-bed/raw/master/images/20200321133404.png",alt:""})],-1);o.render=function(t,a,c,s,o,b){return e(),n("div",null,[r,p,i,l,d,u,m])};export default o;export{s as __pageData};
