import{o as n,c as t,f as e,a,x as s}from"./app.5f3fb606.js";const o='{"title":"Electron基本概念","description":"","frontmatter":{"title":"Electron基本概念","tag":["electron","nodejs"],"author":"Artiely","date":"2018-7-4","cover":"https://gitee.com/artiely/Figure-bed/raw/master/images/20200315200924.png","base64":"5587d7"},"headers":[{"level":2,"title":"Electron 主进程和渲染进程","slug":"electron-主进程和渲染进程"},{"level":2,"title":"Electron渲染进程中通过Nodejs读取本地文件","slug":"electron渲染进程中通过nodejs读取本地文件"},{"level":2,"title":"Electron 开启调试模式","slug":"electron-开启调试模式"}],"relativePath":"post/2018/2018-7-4-electron-base.md","lastUpdated":1629110797549}',c={},l=e('<h1 id="electron运行的流程"><a class="header-anchor" href="#electron运行的流程" aria-hidden="true">#</a> Electron运行的流程</h1><p><img src="https://gitee.com/artiely/Figure-bed/raw/master/images/20200306160653.png" alt=""></p><h2 id="electron-主进程和渲染进程"><a class="header-anchor" href="#electron-主进程和渲染进程" aria-hidden="true">#</a> Electron 主进程和渲染进程</h2><p><strong>主进程和渲染器进程</strong>：</p><p>Electron 运行 package.json 的 <strong>main 脚本的进程被称为主进程</strong> 。 在主进程中运行的脚 本通过创建 web 页面来展示用户界面。 一个 Electron 应用总是有且<strong>只有一个主进程</strong>。</p><p>由于 Electron 使用了 <strong>Chromium</strong>（谷歌浏览器）来展示 web 页面，所以 Chromium 的 多进程架构也被使用到。 <strong>每个 Electron 中的 web 页面运行在它自己的渲染进程中</strong>。</p><p>主进程使用 BrowserWindow 实例创建页面。每个 BrowserWindow 实例都在自己的渲 染进程里运行页面。 当一个 BrowserWindow 实例被销毁后，相应的渲染进程也会被终止。</p><p><img src="https://gitee.com/artiely/Figure-bed/raw/master/images/20200306160550.png" alt=""></p><p><strong>进程</strong>：进程（Process）是计算机中的程序关于某数据集合上的一次运行活动，是 系统进行资源分配和调度的基本单位，是操作系统结构的基础。</p><p><strong>线程</strong>：在⼀一个程序里的一个执行路线就叫做线程（thread）。更准确的定义是： 线程是“一个进程内部的控制序列”。</p><p><strong>线程和进程</strong>：一个程序至少有一个进程,一个进程至少有一个线程</p><h2 id="electron渲染进程中通过nodejs读取本地文件"><a class="header-anchor" href="#electron渲染进程中通过nodejs读取本地文件" aria-hidden="true">#</a> Electron渲染进程中通过Nodejs读取本地文件</h2><p>在普通的浏览器中，web 页面通常在一个沙盒环境中运行，不被允许去接触原生的资源。 然而 Electron 的用户在 Node.js 的 API 支持下可以在页面中和操作系统进行一些底层交互。</p><p>Nodejs 在主进程和渲染进程中都可以使用。渲染进程因为安全限制，不能直接操作原 生 GUI。虽然如此，因为集成了 Nodejs，渲染进程也有了操作系统底层 API 的能力，Nodejs 中常用的 Path、fs、Crypto 等模块在 Electron 可以直接使用，方便我们处理链接、路径、 文件 MD5 等，同时 npm 还有成千上万的模块供我们选择。</p>',14),i=a("div",{class:"language-js line-numbers-mode"},[a("pre",null,[a("code",null,[a("span",{class:"token keyword"},"var"),s(" fs "),a("span",{class:"token operator"},"="),s(),a("span",{class:"token function"},"require"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},"'fs'"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),s(" \n"),a("span",{class:"token keyword"},"var"),s(" content "),a("span",{class:"token operator"},"="),s(" document"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"getElementById"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},"'content'"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),s(" \n"),a("span",{class:"token keyword"},"var"),s(" button "),a("span",{class:"token operator"},"="),s(" document"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"getElementById"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},"'button'"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),s(" \nbutton"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"addEventListener"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},"'click'"),a("span",{class:"token punctuation"},","),a("span",{class:"token keyword"},"function"),a("span",{class:"token punctuation"},"("),a("span",{class:"token parameter"},"e"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},"{"),s(" \t\t\t\t\t       \n\tfs"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"readFile"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},"'package.json'"),a("span",{class:"token punctuation"},","),a("span",{class:"token string"},"'utf8'"),a("span",{class:"token punctuation"},","),a("span",{class:"token keyword"},"function"),a("span",{class:"token punctuation"},"("),a("span",{class:"token parameter"},[s("err"),a("span",{class:"token punctuation"},","),s("data")]),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},"{"),s(" \n\t\tcontent"),a("span",{class:"token punctuation"},"."),s("textContent "),a("span",{class:"token operator"},"="),s(" data"),a("span",{class:"token punctuation"},";"),s(" console"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"log"),a("span",{class:"token punctuation"},"("),s("data"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),s(" \n\t"),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),s("\n"),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),s("\n")]),a("div",{class:"m-mdic-copy-wrapper"},[a("div",{class:"u-mdic-copy-notify",id:"j-notify-1629556982918-74697"},"复制成功"),a("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"var fs = require('fs'); \nvar content = document.getElementById('content'); \nvar button = document.getElementById('button'); \nbutton.addEventListener('click',function(e){ \t\t\t\t\t       \n\tfs.readFile('package.json','utf8',function(err,data){ \n\t\tcontent.textContent = data; console.log(data); \n\t});\n});\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629556982918-74697","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),a("div",{class:"line-numbers-wrapper"},[a("span",{class:"line-number"},"1"),a("br"),a("span",{class:"line-number"},"2"),a("br"),a("span",{class:"line-number"},"3"),a("br"),a("span",{class:"line-number"},"4"),a("br"),a("span",{class:"line-number"},"5"),a("br"),a("span",{class:"line-number"},"6"),a("br"),a("span",{class:"line-number"},"7"),a("br"),a("span",{class:"line-number"},"8"),a("br")])],-1),p=a("h2",{id:"electron-开启调试模式"},[a("a",{class:"header-anchor",href:"#electron-开启调试模式","aria-hidden":"true"},"#"),s(" Electron 开启调试模式")],-1),r=a("div",{class:"language-js line-numbers-mode"},[a("pre",null,[a("code",null,[s("mainWindow"),a("span",{class:"token punctuation"},"."),s("webContents"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"openDevTools"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),s("\n")]),a("div",{class:"m-mdic-copy-wrapper"},[a("div",{class:"u-mdic-copy-notify",id:"j-notify-1629556982919-76178"},"复制成功"),a("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"mainWindow.webContents.openDevTools();\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629556982919-76178","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),a("div",{class:"line-numbers-wrapper"},[a("span",{class:"line-number"},"1"),a("br")])],-1);c.render=function(e,a,s,o,c,d){return n(),t("div",null,[l,i,p,r])};export default c;export{o as __pageData};
