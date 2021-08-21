import{o as n,c as s,f as a,a as t,x as e}from"./app.5f3fb606.js";const o='{"title":"Electron 模块介绍","description":"","frontmatter":{"title":"Electron 模块介绍","tag":["electron","nodejs"],"author":"Artiely","date":"2018-7-5","cover":"https://gitee.com/artiely/Figure-bed/raw/master/images/20200315201226.png","base64":"01bcf3"},"headers":[{"level":2,"title":"Electron 渲染进程中通过 remote 模块调用主进程中的 BrowserWindow 打开新窗口。","slug":"electron-渲染进程中通过-remote-模块调用主进程中的-browserwindow-打开新窗口"}],"relativePath":"post/2018/2018-7-5-electron-model.md","lastUpdated":1629110797690}',c={},p=a('<h1 id="electron-主进程和渲染进程中的模块"><a class="header-anchor" href="#electron-主进程和渲染进程中的模块" aria-hidden="true">#</a> Electron 主进程和渲染进程中的模块</h1><p><img src="https://gitee.com/artiely/Figure-bed/raw/master/images/20200306162451.png" alt=""></p><h2 id="electron-渲染进程中通过-remote-模块调用主进程中的-browserwindow-打开新窗口"><a class="header-anchor" href="#electron-渲染进程中通过-remote-模块调用主进程中的-browserwindow-打开新窗口" aria-hidden="true">#</a> Electron 渲染进程中通过 remote 模块调用主进程中的 BrowserWindow 打开新窗口。</h2><p>主进程代码：</p>',4),l=t("div",{class:"language-js line-numbers-mode"},[t("pre",null,[t("code",null,[t("span",{class:"token keyword"},"const"),e(" electron "),t("span",{class:"token operator"},"="),e(),t("span",{class:"token function"},"require"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'electron'"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),e(" \n"),t("span",{class:"token comment"},"// 控制应用生命周期的模块 "),e("\n"),t("span",{class:"token keyword"},"const"),e(),t("span",{class:"token punctuation"},"{"),e("app"),t("span",{class:"token punctuation"},"}"),e(),t("span",{class:"token operator"},"="),e(" electron"),t("span",{class:"token punctuation"},";"),e(" \n"),t("span",{class:"token comment"},"// 创建本地浏览器窗口的模块 "),e("\n"),t("span",{class:"token keyword"},"const"),e(),t("span",{class:"token punctuation"},"{"),e("BrowserWindow"),t("span",{class:"token punctuation"},"}"),e(),t("span",{class:"token operator"},"="),e(" electron"),t("span",{class:"token punctuation"},";"),e(" \n"),t("span",{class:"token comment"},"// 指向窗口对象的一个全局引用，如果没有这个引用，那么当该 javascript 对象被垃圾回收 的"),e("\n"),t("span",{class:"token comment"},"// 时候该窗口将会自动关闭 "),e("\n"),t("span",{class:"token keyword"},"let"),e(" win"),t("span",{class:"token punctuation"},";"),e(" \n"),t("span",{class:"token keyword"},"function"),e(),t("span",{class:"token function"},"createWindow"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),e(" \n  "),t("span",{class:"token comment"},"// 创建一个新的浏览器窗口 "),e("\n  win "),t("span",{class:"token operator"},"="),e(),t("span",{class:"token keyword"},"new"),e(),t("span",{class:"token class-name"},"BrowserWindow"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),e("width"),t("span",{class:"token operator"},":"),e(),t("span",{class:"token number"},"1104"),t("span",{class:"token punctuation"},","),e(" height"),t("span",{class:"token operator"},":"),e(),t("span",{class:"token number"},"620"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),e("\n  "),t("span",{class:"token comment"},"//570+50 "),e("\n  "),t("span",{class:"token comment"},"// 并且装载应用的 index.html 页面 "),e("\n  win"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"loadURL"),t("span",{class:"token punctuation"},"("),t("span",{class:"token template-string"},[t("span",{class:"token template-punctuation string"},"`"),t("span",{class:"token string"},"file://"),t("span",{class:"token interpolation"},[t("span",{class:"token interpolation-punctuation punctuation"},"${"),e("__dirname"),t("span",{class:"token interpolation-punctuation punctuation"},"}")]),t("span",{class:"token string"},"/html/index.html"),t("span",{class:"token template-punctuation string"},"`")]),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),e(" \n  "),t("span",{class:"token comment"},"// 打开开发工具页面 "),e("\n  "),t("span",{class:"token comment"},"// win.webContents.openDevTools(); "),e("\n  "),t("span",{class:"token comment"},"// 当窗口关闭时调用的方法 "),e("\n  win"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"on"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'closed'"),t("span",{class:"token punctuation"},","),e(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token operator"},"=>"),e(),t("span",{class:"token punctuation"},"{"),e(" \n    "),t("span",{class:"token comment"},"// 解除窗口对象的引用，通常而言如果应用支持多个窗口的话，你会在一个数组里 "),e("\n    "),t("span",{class:"token comment"},"// 存放窗口对象，在窗口关闭的时候应当删除相应的元素。 "),e("\n    win "),t("span",{class:"token operator"},"="),e(),t("span",{class:"token keyword"},"null"),t("span",{class:"token punctuation"},";"),e(" \n  "),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),e(" \n"),t("span",{class:"token punctuation"},"}"),e("\n "),t("span",{class:"token comment"},"// 当 Electron 完成初始化并且已经创建了浏览器窗口，则该方法将会被调用。 "),e("\n "),t("span",{class:"token comment"},"// 有些 API 只能在该事件发生后才能被使用。"),e("\n  app"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"on"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'ready'"),t("span",{class:"token punctuation"},","),e(" createWindow"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),e(" \n "),t("span",{class:"token comment"},"// 当所有的窗口被关闭后退出应用 "),e("\n  app"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"on"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'window-all-closed'"),t("span",{class:"token punctuation"},","),e(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token operator"},"=>"),e(),t("span",{class:"token punctuation"},"{"),e(" \n   "),t("span",{class:"token comment"},"// 对于 OS X 系统，应用和相应的菜单栏会一直激活直到用户通过 Cmd + Q 显式退出 "),e("\n   "),t("span",{class:"token keyword"},"if"),e(),t("span",{class:"token punctuation"},"("),e("process"),t("span",{class:"token punctuation"},"."),e("platform "),t("span",{class:"token operator"},"!=="),e(),t("span",{class:"token string"},"'darwin'"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),e(" app"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"quit"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),e(),t("span",{class:"token punctuation"},"}"),e(" \n  "),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),e(" \n  app"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"on"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'activate'"),t("span",{class:"token punctuation"},","),e(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token operator"},"=>"),e(),t("span",{class:"token punctuation"},"{"),e(" \n     "),t("span",{class:"token comment"},"// 对于 OS X 系统，当 dock 图标被点击后会重新创建一个 app 窗口，并且不会有其他窗口打开 "),e("\n    "),t("span",{class:"token keyword"},"if"),e(),t("span",{class:"token punctuation"},"("),e("win "),t("span",{class:"token operator"},"==="),e(),t("span",{class:"token keyword"},"null"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),e(),t("span",{class:"token function"},"createWindow"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),e(),t("span",{class:"token punctuation"},"}"),e(" \n  "),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),e(" \n     "),t("span",{class:"token comment"},"// 在这个文件后面你可以直接包含你应用特定的由主进程运行的代码。 "),e("\n     "),t("span",{class:"token comment"},"// 也可以把这些代码放在另一个文件中然后在这里导入。"),e("\n")]),t("div",{class:"m-mdic-copy-wrapper"},[t("div",{class:"u-mdic-copy-notify",id:"j-notify-1629556985212-36711"},"复制成功"),t("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"const electron = require('electron'); \n// 控制应用生命周期的模块 \nconst {app} = electron; \n// 创建本地浏览器窗口的模块 \nconst {BrowserWindow} = electron; \n// 指向窗口对象的一个全局引用，如果没有这个引用，那么当该 javascript 对象被垃圾回收 的\n// 时候该窗口将会自动关闭 \nlet win; \nfunction createWindow() { \n  // 创建一个新的浏览器窗口 \n  win = new BrowserWindow({width: 1104, height: 620});\n  //570+50 \n  // 并且装载应用的 index.html 页面 \n  win.loadURL(`file://${__dirname}/html/index.html`); \n  // 打开开发工具页面 \n  // win.webContents.openDevTools(); \n  // 当窗口关闭时调用的方法 \n  win.on('closed', () => { \n    // 解除窗口对象的引用，通常而言如果应用支持多个窗口的话，你会在一个数组里 \n    // 存放窗口对象，在窗口关闭的时候应当删除相应的元素。 \n    win = null; \n  }); \n}\n // 当 Electron 完成初始化并且已经创建了浏览器窗口，则该方法将会被调用。 \n // 有些 API 只能在该事件发生后才能被使用。\n  app.on('ready', createWindow); \n // 当所有的窗口被关闭后退出应用 \n  app.on('window-all-closed', () => { \n   // 对于 OS X 系统，应用和相应的菜单栏会一直激活直到用户通过 Cmd + Q 显式退出 \n   if (process.platform !== 'darwin') { app.quit(); } \n  }); \n  app.on('activate', () => { \n     // 对于 OS X 系统，当 dock 图标被点击后会重新创建一个 app 窗口，并且不会有其他窗口打开 \n    if (win === null) { createWindow(); } \n  }); \n     // 在这个文件后面你可以直接包含你应用特定的由主进程运行的代码。 \n     // 也可以把这些代码放在另一个文件中然后在这里导入。\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629556985212-36711","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),t("div",{class:"line-numbers-wrapper"},[t("span",{class:"line-number"},"1"),t("br"),t("span",{class:"line-number"},"2"),t("br"),t("span",{class:"line-number"},"3"),t("br"),t("span",{class:"line-number"},"4"),t("br"),t("span",{class:"line-number"},"5"),t("br"),t("span",{class:"line-number"},"6"),t("br"),t("span",{class:"line-number"},"7"),t("br"),t("span",{class:"line-number"},"8"),t("br"),t("span",{class:"line-number"},"9"),t("br"),t("span",{class:"line-number"},"10"),t("br"),t("span",{class:"line-number"},"11"),t("br"),t("span",{class:"line-number"},"12"),t("br"),t("span",{class:"line-number"},"13"),t("br"),t("span",{class:"line-number"},"14"),t("br"),t("span",{class:"line-number"},"15"),t("br"),t("span",{class:"line-number"},"16"),t("br"),t("span",{class:"line-number"},"17"),t("br"),t("span",{class:"line-number"},"18"),t("br"),t("span",{class:"line-number"},"19"),t("br"),t("span",{class:"line-number"},"20"),t("br"),t("span",{class:"line-number"},"21"),t("br"),t("span",{class:"line-number"},"22"),t("br"),t("span",{class:"line-number"},"23"),t("br"),t("span",{class:"line-number"},"24"),t("br"),t("span",{class:"line-number"},"25"),t("br"),t("span",{class:"line-number"},"26"),t("br"),t("span",{class:"line-number"},"27"),t("br"),t("span",{class:"line-number"},"28"),t("br"),t("span",{class:"line-number"},"29"),t("br"),t("span",{class:"line-number"},"30"),t("br"),t("span",{class:"line-number"},"31"),t("br"),t("span",{class:"line-number"},"32"),t("br"),t("span",{class:"line-number"},"33"),t("br"),t("span",{class:"line-number"},"34"),t("br"),t("span",{class:"line-number"},"35"),t("br"),t("span",{class:"line-number"},"36"),t("br"),t("span",{class:"line-number"},"37"),t("br")])],-1),i=t("p",null,"渲染进程代码：",-1),u=t("div",{class:"language-js line-numbers-mode"},[t("pre",null,[t("code",null,[t("span",{class:"token keyword"},"const"),e(" btn "),t("span",{class:"token operator"},"="),e(" document"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"querySelector"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'#btn'"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),e(" \n"),t("span",{class:"token keyword"},"const"),e(" path "),t("span",{class:"token operator"},"="),e(),t("span",{class:"token function"},"require"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'path'"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),e(" \n"),t("span",{class:"token keyword"},"const"),e(" BrowerWindow "),t("span",{class:"token operator"},"="),e(),t("span",{class:"token function"},"require"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'electron'"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},"."),e("remote"),t("span",{class:"token punctuation"},"."),e("BrowserWindow"),t("span",{class:"token punctuation"},";"),e(" \nbtn"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function-variable function"},"onclick"),e(),t("span",{class:"token operator"},"="),e(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token operator"},"=>"),e(),t("span",{class:"token punctuation"},"{"),e(" \n  win "),t("span",{class:"token operator"},"="),e(),t("span",{class:"token keyword"},"new"),e(),t("span",{class:"token class-name"},"BrowerWindow"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),e(" \n    width"),t("span",{class:"token operator"},":"),e(),t("span",{class:"token number"},"300"),t("span",{class:"token punctuation"},","),e(" \n    height"),t("span",{class:"token operator"},":"),e(),t("span",{class:"token number"},"200"),t("span",{class:"token punctuation"},","),e(" \n    frame"),t("span",{class:"token operator"},":"),e(),t("span",{class:"token boolean"},"false"),t("span",{class:"token punctuation"},","),e(" \n    transparent"),t("span",{class:"token operator"},":"),e(),t("span",{class:"token boolean"},"true"),e(" \n  "),t("span",{class:"token comment"},"// fullscreen:true "),e("\n  "),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),e("\n  win"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"loadURL"),t("span",{class:"token punctuation"},"("),e("path"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"join"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'file:'"),t("span",{class:"token punctuation"},","),e("__dirname"),t("span",{class:"token punctuation"},","),t("span",{class:"token string"},"'news.html'"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),e(" \n  win"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"on"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'close'"),t("span",{class:"token punctuation"},","),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),t("span",{class:"token operator"},"=>"),t("span",{class:"token punctuation"},"{"),e("win "),t("span",{class:"token operator"},"="),e(),t("span",{class:"token keyword"},"null"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),e(" \n"),t("span",{class:"token punctuation"},"}"),e("\n")]),t("div",{class:"m-mdic-copy-wrapper"},[t("div",{class:"u-mdic-copy-notify",id:"j-notify-1629556985212-6800"},"复制成功"),t("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"const btn = document.querySelector('#btn'); \nconst path = require('path'); \nconst BrowerWindow = require('electron').remote.BrowserWindow; \nbtn.onclick = () => { \n  win = new BrowerWindow({ \n    width: 300, \n    height: 200, \n    frame: false, \n    transparent: true \n  // fullscreen:true \n  })\n  win.loadURL(path.join('file:',__dirname,'news.html')); \n  win.on('close',()=>{win = null}); \n}\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629556985212-6800","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),t("div",{class:"line-numbers-wrapper"},[t("span",{class:"line-number"},"1"),t("br"),t("span",{class:"line-number"},"2"),t("br"),t("span",{class:"line-number"},"3"),t("br"),t("span",{class:"line-number"},"4"),t("br"),t("span",{class:"line-number"},"5"),t("br"),t("span",{class:"line-number"},"6"),t("br"),t("span",{class:"line-number"},"7"),t("br"),t("span",{class:"line-number"},"8"),t("br"),t("span",{class:"line-number"},"9"),t("br"),t("span",{class:"line-number"},"10"),t("br"),t("span",{class:"line-number"},"11"),t("br"),t("span",{class:"line-number"},"12"),t("br"),t("span",{class:"line-number"},"13"),t("br"),t("span",{class:"line-number"},"14"),t("br")])],-1),r=t("p",null,[t("strong",null,"更多详情")],-1),k=t("p",null,[t("a",{href:"https://www.w3cschool.cn/electronmanual/electronmanual-electronapp.html",target:"_blank",rel:"noopener noreferrer"},"https://www.w3cschool.cn/electronmanual/electronmanual-electronapp.html")],-1);c.render=function(a,t,e,o,c,m){return n(),s("div",null,[p,l,i,u,r,k])};export default c;export{o as __pageData};
