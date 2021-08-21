import{o as n,c as e,t,a,x as s}from"./app.746f22cf.js";const c='{"title":"Electron 自动更新","description":"","frontmatter":{"title":"Electron 自动更新","tag":["electron","vue"],"date":"2020-3-18","cover":"https://gitee.com/artiely/Figure-bed/raw/master/images/20200318202229.png","author":"Artiely","base64":"127a53"},"headers":[{"level":2,"title":"从0实现一个electron自动更新的最小demo","slug":"从0实现一个electron自动更新的最小demo"},{"level":2,"title":"初始化一个vue项目","slug":"初始化一个vue项目"},{"level":2,"title":"项目结构","slug":"项目结构"},{"level":3,"title":"修改app.vue","slug":"修改appvue"},{"level":3,"title":"安装依赖并修改background.js","slug":"安装依赖并修改backgroundjs"},{"level":2,"title":"通过github实现包的发布","slug":"通过github实现包的发布"},{"level":3,"title":"GitHub的个人访问令牌","slug":"github的个人访问令牌"},{"level":2,"title":"配置vue.config.js","slug":"配置vueconfigjs"},{"level":3,"title":"build参数讲解","slug":"build参数讲解"},{"level":3,"title":"发布版本到github","slug":"发布版本到github"},{"level":3,"title":"发布打包时很慢的解决办法","slug":"发布打包时很慢的解决办法"},{"level":3,"title":"发布","slug":"发布"},{"level":2,"title":"下载","slug":"下载"},{"level":3,"title":"修改版本号再次发布","slug":"修改版本号再次发布"},{"level":2,"title":"后续","slug":"后续"}],"relativePath":"post/2020/2020-3-18-electron-updater.md","lastUpdated":1629110849337}',o={},i=t('',4),l=a("div",{class:"language-sh line-numbers-mode"},[a("pre",null,[a("code",null,"# 初始化项目，前面的vue脚手架环境安装忽略\nvue create electron-updater-demo\n# 中间的流程略\ncd electron-updater-demo\nnpm i\n# 安装 electron-builder 插件\n\nvue add electron-builder\n\n# 如果你不是使用的vue 可以直接`npm i electron-builder`安装 \n\n# 运行\nnpm run electron:serve\n"),a("div",{class:"m-mdic-copy-wrapper"},[a("div",{class:"u-mdic-copy-notify",id:"j-notify-1629558012362-75506"},"复制成功"),a("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"# 初始化项目，前面的vue脚手架环境安装忽略\nvue create electron-updater-demo\n# 中间的流程略\ncd electron-updater-demo\nnpm i\n# 安装 electron-builder 插件\n\nvue add electron-builder\n\n# 如果你不是使用的vue 可以直接`npm i electron-builder`安装 \n\n# 运行\nnpm run electron:serve\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629558012362-75506","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),a("div",{class:"line-numbers-wrapper"},[a("span",{class:"line-number"},"1"),a("br"),a("span",{class:"line-number"},"2"),a("br"),a("span",{class:"line-number"},"3"),a("br"),a("span",{class:"line-number"},"4"),a("br"),a("span",{class:"line-number"},"5"),a("br"),a("span",{class:"line-number"},"6"),a("br"),a("span",{class:"line-number"},"7"),a("br"),a("span",{class:"line-number"},"8"),a("br"),a("span",{class:"line-number"},"9"),a("br"),a("span",{class:"line-number"},"10"),a("br"),a("span",{class:"line-number"},"11"),a("br"),a("span",{class:"line-number"},"12"),a("br"),a("span",{class:"line-number"},"13"),a("br")])],-1),d=a("h2",{id:"项目结构"},[a("a",{class:"header-anchor",href:"#项目结构","aria-hidden":"true"},"#"),s(" 项目结构")],-1),r=a("div",{class:"language-sh line-numbers-mode"},[a("pre",null,[a("code",null,"├──public\n│ ├──favicon.ico\n│ └──index.html\n├──src\n│ ├──assets\n│ │ └──logo.png\n│ ├──components\n│ │ └──HelloWorld.vue\n│ ├──App.vue\n│ ├──background.js\n│ └──main.js\n├──.browserslistrc\n├──.gitignore\n├──babel.config.js\n├──package-lock.json\n├──package.json\n├──README.md\n└──vue.config.js\n"),a("div",{class:"m-mdic-copy-wrapper"},[a("div",{class:"u-mdic-copy-notify",id:"j-notify-1629558012363-93519"},"复制成功"),a("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"├──public\n│ ├──favicon.ico\n│ └──index.html\n├──src\n│ ├──assets\n│ │ └──logo.png\n│ ├──components\n│ │ └──HelloWorld.vue\n│ ├──App.vue\n│ ├──background.js\n│ └──main.js\n├──.browserslistrc\n├──.gitignore\n├──babel.config.js\n├──package-lock.json\n├──package.json\n├──README.md\n└──vue.config.js\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629558012363-93519","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),a("div",{class:"line-numbers-wrapper"},[a("span",{class:"line-number"},"1"),a("br"),a("span",{class:"line-number"},"2"),a("br"),a("span",{class:"line-number"},"3"),a("br"),a("span",{class:"line-number"},"4"),a("br"),a("span",{class:"line-number"},"5"),a("br"),a("span",{class:"line-number"},"6"),a("br"),a("span",{class:"line-number"},"7"),a("br"),a("span",{class:"line-number"},"8"),a("br"),a("span",{class:"line-number"},"9"),a("br"),a("span",{class:"line-number"},"10"),a("br"),a("span",{class:"line-number"},"11"),a("br"),a("span",{class:"line-number"},"12"),a("br"),a("span",{class:"line-number"},"13"),a("br"),a("span",{class:"line-number"},"14"),a("br"),a("span",{class:"line-number"},"15"),a("br"),a("span",{class:"line-number"},"16"),a("br"),a("span",{class:"line-number"},"17"),a("br"),a("span",{class:"line-number"},"18"),a("br")])],-1),p=a("blockquote",null,[a("p",null,[s("输出结构的工具推荐 "),a("code",null,"npm i treeplus"),s(),a("a",{href:"https://github.com/artiely/treeplus",target:"_blank",rel:"noopener noreferrer"},"使用方法")])],-1),u=a("h3",{id:"修改appvue"},[a("a",{class:"header-anchor",href:"#修改appvue","aria-hidden":"true"},"#"),s(" 修改"),a("code",null,"app.vue")],-1),m=a("p",null,"这里的目的是清晰的暂时当前版本号。",-1),b=a("div",{class:"language-vue line-numbers-mode"},[a("div",{class:"highlight-lines"},[a("br"),a("br"),a("br"),a("div",{class:"highlighted"}," "),a("br"),a("br"),a("br"),a("br"),a("div",{class:"highlighted"}," "),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{class:"highlighted"}," "),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",null,[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),s("template")]),a("span",{class:"token punctuation"},">")]),s("\n  "),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),s("div")]),s(),a("span",{class:"token attr-name"},"id"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("app"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),s("\n   这是一个版本更新测试：Artiely\n   "),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),s("p")]),a("span",{class:"token punctuation"},">")]),s("当前版本：{{version}}"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),s("p")]),a("span",{class:"token punctuation"},">")]),s("\n  "),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),s("div")]),a("span",{class:"token punctuation"},">")]),s("\n"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),s("template")]),a("span",{class:"token punctuation"},">")]),s("\n\n"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),s("script")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token script"},[a("span",{class:"token language-javascript"},[s("\n"),a("span",{class:"token keyword"},"const"),s(),a("span",{class:"token punctuation"},"{"),s("version"),a("span",{class:"token punctuation"},"}"),s(),a("span",{class:"token operator"},"="),s(),a("span",{class:"token function"},"require"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},"'../package.json'"),a("span",{class:"token punctuation"},")"),s("\nconsole"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"log"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},'"version"'),a("span",{class:"token punctuation"},","),s(" version"),a("span",{class:"token punctuation"},")"),s("\n"),a("span",{class:"token keyword"},"export"),s(),a("span",{class:"token keyword"},"default"),s(),a("span",{class:"token punctuation"},"{"),s("\n  name"),a("span",{class:"token operator"},":"),s(),a("span",{class:"token string"},"'App'"),a("span",{class:"token punctuation"},","),s("\n  "),a("span",{class:"token function"},"data"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},"{"),s("\n    "),a("span",{class:"token keyword"},"return"),s(),a("span",{class:"token punctuation"},"{"),s("\n      version\n    "),a("span",{class:"token punctuation"},"}"),s("\n  "),a("span",{class:"token punctuation"},"}"),s("\n"),a("span",{class:"token punctuation"},"}"),s("\n")])]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),s("script")]),a("span",{class:"token punctuation"},">")]),s("\n")]),a("div",{class:"m-mdic-copy-wrapper"},[a("div",{class:"u-mdic-copy-notify",id:"j-notify-1629558012363-44844"},"复制成功"),a("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"<template>\n  <div id=\"app\">\n   这是一个版本更新测试：Artiely\n   <p>当前版本：{{version}}</p>\n  </div>\n</template>\n\n<script>\nconst {version} = require('../package.json')\nconsole.log(\"version\", version)\nexport default {\n  name: 'App',\n  data(){\n    return {\n      version\n    }\n  }\n}\n<\/script>\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629558012363-44844","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),a("div",{class:"line-numbers-wrapper"},[a("span",{class:"line-number"},"1"),a("br"),a("span",{class:"line-number"},"2"),a("br"),a("span",{class:"line-number"},"3"),a("br"),a("span",{class:"line-number"},"4"),a("br"),a("span",{class:"line-number"},"5"),a("br"),a("span",{class:"line-number"},"6"),a("br"),a("span",{class:"line-number"},"7"),a("br"),a("span",{class:"line-number"},"8"),a("br"),a("span",{class:"line-number"},"9"),a("br"),a("span",{class:"line-number"},"10"),a("br"),a("span",{class:"line-number"},"11"),a("br"),a("span",{class:"line-number"},"12"),a("br"),a("span",{class:"line-number"},"13"),a("br"),a("span",{class:"line-number"},"14"),a("br"),a("span",{class:"line-number"},"15"),a("br"),a("span",{class:"line-number"},"16"),a("br"),a("span",{class:"line-number"},"17"),a("br"),a("span",{class:"line-number"},"18"),a("br"),a("span",{class:"line-number"},"19"),a("br")])],-1),y=a("h3",{id:"安装依赖并修改backgroundjs"},[a("a",{class:"header-anchor",href:"#安装依赖并修改backgroundjs","aria-hidden":"true"},"#"),s(" 安装依赖并修改"),a("code",null,"background.js")],-1),h=a("div",{class:"language-sh line-numbers-mode"},[a("pre",null,[a("code",null,"npm i electron-updater\n"),a("div",{class:"m-mdic-copy-wrapper"},[a("div",{class:"u-mdic-copy-notify",id:"j-notify-1629558012365-37027"},"复制成功"),a("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"npm i electron-updater\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629558012365-37027","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),a("div",{class:"line-numbers-wrapper"},[a("span",{class:"line-number"},"1"),a("br")])],-1),k=a("p",null,[a("code",null,"background.js")],-1),g=a("div",{class:"language-diff line-numbers-mode"},[a("pre",null,[a("code",null,[a("span",{class:"token inserted-sign inserted"},[a("span",{class:"token prefix inserted"},"+"),a("span",{class:"token line"},' import { autoUpdater } from "electron-updater"\n')]),s("\n"),a("span",{class:"token unchanged"},[a("span",{class:"token prefix unchanged"}," "),a("span",{class:"token line"},[s(" if (process."),a("wbr"),s("env.WEBPACK_DEV_SERVER_URL) {\n")]),a("span",{class:"token prefix unchanged"}," "),a("span",{class:"token line"},"   // Load the url of the dev server if in development mode\n"),a("span",{class:"token prefix unchanged"}," "),a("span",{class:"token line"},[s("   win.loadURL(process."),a("wbr"),s("env.WEBPACK_DEV_SERVER_URL)\n")]),a("span",{class:"token prefix unchanged"}," "),a("span",{class:"token line"},[s("   if (!process."),a("wbr"),s("env.IS_TEST) win.webContents.openDevTools()\n")]),a("span",{class:"token prefix unchanged"}," "),a("span",{class:"token line"}," } else {\n"),a("span",{class:"token prefix unchanged"}," "),a("span",{class:"token line"},"   createProtocol('app')\n"),a("span",{class:"token prefix unchanged"}," "),a("span",{class:"token line"},"   // Load the index.html when not in development\n"),a("span",{class:"token prefix unchanged"}," "),a("span",{class:"token line"},"   win.loadURL('app://./index.html')\n")]),a("span",{class:"token inserted-sign inserted"},[a("span",{class:"token prefix inserted"},"+"),a("span",{class:"token line"},"   autoUpdater.checkForUpdatesAndNotify()\n")]),a("span",{class:"token unchanged"},[a("span",{class:"token prefix unchanged"}," "),a("span",{class:"token line"}," }\n")]),s("\n")]),a("div",{class:"m-mdic-copy-wrapper"},[a("div",{class:"u-mdic-copy-notify",id:"j-notify-1629558012365-70861"},"复制成功"),a("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"+ import { autoUpdater } from \"electron-updater\"\n\n  if (process.<wbr/>env.WEBPACK_DEV_SERVER_URL) {\n    // Load the url of the dev server if in development mode\n    win.loadURL(process.<wbr/>env.WEBPACK_DEV_SERVER_URL)\n    if (!process.<wbr/>env.IS_TEST) win.webContents.openDevTools()\n  } else {\n    createProtocol('app')\n    // Load the index.html when not in development\n    win.loadURL('app://./index.html')\n+   autoUpdater.checkForUpdatesAndNotify()\n  }\n\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629558012365-70861","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),a("div",{class:"line-numbers-wrapper"},[a("span",{class:"line-number"},"1"),a("br"),a("span",{class:"line-number"},"2"),a("br"),a("span",{class:"line-number"},"3"),a("br"),a("span",{class:"line-number"},"4"),a("br"),a("span",{class:"line-number"},"5"),a("br"),a("span",{class:"line-number"},"6"),a("br"),a("span",{class:"line-number"},"7"),a("br"),a("span",{class:"line-number"},"8"),a("br"),a("span",{class:"line-number"},"9"),a("br"),a("span",{class:"line-number"},"10"),a("br"),a("span",{class:"line-number"},"11"),a("br"),a("span",{class:"line-number"},"12"),a("br"),a("span",{class:"line-number"},"13"),a("br")])],-1),f=t('',5),v=a("div",{class:"language-sh line-numbers-mode"},[a("pre",null,[a("code",null,"export GH_TOKEN=TOKEN-GOES-HERE\n"),a("div",{class:"m-mdic-copy-wrapper"},[a("div",{class:"u-mdic-copy-notify",id:"j-notify-1629558012367-25337"},"复制成功"),a("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"export GH_TOKEN=TOKEN-GOES-HERE\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629558012367-25337","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),a("div",{class:"line-numbers-wrapper"},[a("span",{class:"line-number"},"1"),a("br")])],-1),C=a("p",null,"在Windows上：",-1),E=a("div",{class:"language-sh line-numbers-mode"},[a("pre",null,[a("code",null,'[Environment]::SetEnvironmentVariable("GH_TOKEN","<YOUR_TOKEN_HERE>","User")\n\n# 例如 [Environment]::SetEnvironmentVariable("GH_TOKEN","587f5a354934f73b8336d81d0168423075f37833","User")\n'),a("div",{class:"m-mdic-copy-wrapper"},[a("div",{class:"u-mdic-copy-notify",id:"j-notify-1629558012367-24826"},"复制成功"),a("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":'[Environment]::SetEnvironmentVariable("GH_TOKEN","<YOUR_TOKEN_HERE>","User")\n\n# 例如 [Environment]::SetEnvironmentVariable("GH_TOKEN","587f5a354934f73b8336d81d0168423075f37833","User")\n',"data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629558012367-24826","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),a("div",{class:"line-numbers-wrapper"},[a("span",{class:"line-number"},"1"),a("br"),a("span",{class:"line-number"},"2"),a("br"),a("span",{class:"line-number"},"3"),a("br")])],-1),w=a("div",{class:"tip custom-block"},[a("p",{class:"custom-block-title"},"TIP"),a("p",null,"注意设置完环境变量后一定要重启你的编辑器或者powershell以便让环境变量生效")],-1),_=a("h2",{id:"配置vueconfigjs"},[a("a",{class:"header-anchor",href:"#配置vueconfigjs","aria-hidden":"true"},"#"),s(" 配置vue.config.js")],-1),x=a("div",{class:"language-js line-numbers-mode"},[a("pre",null,[a("code",null,[s("module"),a("span",{class:"token punctuation"},"."),s("exports "),a("span",{class:"token operator"},"="),s(),a("span",{class:"token punctuation"},"{"),s("\n\tpluginOptions"),a("span",{class:"token operator"},":"),s(),a("span",{class:"token punctuation"},"{"),s("\n\t\telectronBuilder"),a("span",{class:"token operator"},":"),s(),a("span",{class:"token punctuation"},"{"),s("\n\t\t\tbuilderOptions"),a("span",{class:"token operator"},":"),s(),a("span",{class:"token punctuation"},"{"),s("\n\t\t\t\tpublish"),a("span",{class:"token operator"},":"),s(),a("span",{class:"token punctuation"},"["),s("\n\t\t\t\t\t"),a("span",{class:"token punctuation"},"{"),s("\n\t\t\t\t\t\tprovider"),a("span",{class:"token operator"},":"),s(),a("span",{class:"token string"},"'github'"),a("span",{class:"token punctuation"},","),s("\n\t\t\t\t\t\towner"),a("span",{class:"token operator"},":"),s(),a("span",{class:"token string"},"'artiely'"),a("span",{class:"token punctuation"},","),s("\n\t\t\t\t\t\trepo"),a("span",{class:"token operator"},":"),s(),a("span",{class:"token string"},"'electron-updater-demo'"),s("\n\t\t\t\t\t\t"),a("span",{class:"token comment"},"// token: '587f5a354934f73b8336d81d0168423075f37833'"),s("\n\t\t\t\t\t"),a("span",{class:"token punctuation"},"}"),s("\n\t\t\t\t"),a("span",{class:"token punctuation"},"]"),s("\n\t\t\t"),a("span",{class:"token punctuation"},"}"),s("\n\t\t"),a("span",{class:"token punctuation"},"}"),s("\n\t"),a("span",{class:"token punctuation"},"}"),s("\n"),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},";"),s("\n")]),a("div",{class:"m-mdic-copy-wrapper"},[a("div",{class:"u-mdic-copy-notify",id:"j-notify-1629558012368-12364"},"复制成功"),a("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"module.exports = {\n\tpluginOptions: {\n\t\telectronBuilder: {\n\t\t\tbuilderOptions: {\n\t\t\t\tpublish: [\n\t\t\t\t\t{\n\t\t\t\t\t\tprovider: 'github',\n\t\t\t\t\t\towner: 'artiely',\n\t\t\t\t\t\trepo: 'electron-updater-demo'\n\t\t\t\t\t\t// token: '587f5a354934f73b8336d81d0168423075f37833'\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t}\n\t\t}\n\t}\n};\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629558012368-12364","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),a("div",{class:"line-numbers-wrapper"},[a("span",{class:"line-number"},"1"),a("br"),a("span",{class:"line-number"},"2"),a("br"),a("span",{class:"line-number"},"3"),a("br"),a("span",{class:"line-number"},"4"),a("br"),a("span",{class:"line-number"},"5"),a("br"),a("span",{class:"line-number"},"6"),a("br"),a("span",{class:"line-number"},"7"),a("br"),a("span",{class:"line-number"},"8"),a("br"),a("span",{class:"line-number"},"9"),a("br"),a("span",{class:"line-number"},"10"),a("br"),a("span",{class:"line-number"},"11"),a("br"),a("span",{class:"line-number"},"12"),a("br"),a("span",{class:"line-number"},"13"),a("br"),a("span",{class:"line-number"},"14"),a("br"),a("span",{class:"line-number"},"15"),a("br"),a("span",{class:"line-number"},"16"),a("br")])],-1),j=a("div",{class:"tip custom-block"},[a("p",{class:"custom-block-title"},"TIP"),a("p",null,[s("如果不是vue项目可以直接再"),a("code",null,"package.json"),s("文件中加入如下内容，参数基本一致")]),a("div",{class:"language-json line-numbers-mode"},[a("pre",null,[a("code",null,[s("build"),a("span",{class:"token operator"},":"),a("span",{class:"token punctuation"},"{"),s("\n  publish"),a("span",{class:"token operator"},":"),a("span",{class:"token punctuation"},"["),a("span",{class:"token punctuation"},"]"),s("\n"),a("span",{class:"token punctuation"},"}"),s("\n")]),a("div",{class:"m-mdic-copy-wrapper"},[a("div",{class:"u-mdic-copy-notify",id:"j-notify-1629558012368-73520"},"复制成功"),a("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"build:{\n  publish:[]\n}\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629558012368-73520","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),a("div",{class:"line-numbers-wrapper"},[a("span",{class:"line-number"},"1"),a("br"),a("span",{class:"line-number"},"2"),a("br"),a("span",{class:"line-number"},"3"),a("br")])])],-1),T=a("h3",{id:"build参数讲解"},[a("a",{class:"header-anchor",href:"#build参数讲解","aria-hidden":"true"},"#"),s(" build参数讲解")],-1),A=a("div",{class:"language-js line-numbers-mode"},[a("pre",null,[a("code",null,[a("span",{class:"token punctuation"},"{"),s("\n  publish"),a("span",{class:"token operator"},":"),a("span",{class:"token punctuation"},"["),s("\n  "),a("span",{class:"token comment"},"// giuhub"),s("\n  "),a("span",{class:"token punctuation"},"{"),a("span",{class:"token comment"},"// 供应商"),s("\n    provider"),a("span",{class:"token operator"},":"),a("span",{class:"token string"},"'github'"),a("span",{class:"token punctuation"},","),s("\n    "),a("span",{class:"token comment"},"// 项目名"),s("\n    repo"),a("span",{class:"token operator"},":"),a("span",{class:"token string"},"'electron-updater-demo'"),a("span",{class:"token punctuation"},","),s("\n    "),a("span",{class:"token comment"},"// 拥有者"),s("\n    owner"),a("span",{class:"token operator"},":"),s(),a("span",{class:"token string"},"'artiely'"),a("span",{class:"token punctuation"},","),s("\n    "),a("span",{class:"token comment"},"// 此处也可以填写token但是不建议使用，你的token会有泄漏的风险，推荐使用上面环境变量的方式。"),s("\n    "),a("span",{class:"token comment"},"// token: '587f5a354934f73b8336d81d0168423075f37833'"),s("\n  "),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},","),s("\n  "),a("span",{class:"token comment"},"// 普通服务商"),s("\n  "),a("span",{class:"token punctuation"},"{"),s("\n    provider"),a("span",{class:"token operator"},":"),a("span",{class:"token string"},"'generic'"),a("span",{class:"token punctuation"},","),s("\n    url"),a("span",{class:"token operator"},":"),s(),a("span",{class:"token string"},"'https://bucket_name.s3.amazonaws.com'"),s("\n  "),a("span",{class:"token punctuation"},"}"),s("\n"),a("span",{class:"token punctuation"},"]"),s("\n"),a("span",{class:"token punctuation"},"}"),s("\n\n")]),a("div",{class:"m-mdic-copy-wrapper"},[a("div",{class:"u-mdic-copy-notify",id:"j-notify-1629558012368-73516"},"复制成功"),a("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"{\n  publish:[\n  // giuhub\n  {// 供应商\n    provider:'github',\n    // 项目名\n    repo:'electron-updater-demo',\n    // 拥有者\n    owner: 'artiely',\n    // 此处也可以填写token但是不建议使用，你的token会有泄漏的风险，推荐使用上面环境变量的方式。\n    // token: '587f5a354934f73b8336d81d0168423075f37833'\n  },\n  // 普通服务商\n  {\n    provider:'generic',\n    url: 'https://bucket_name.s3.amazonaws.com'\n  }\n]\n}\n\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629558012368-73516","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),a("div",{class:"line-numbers-wrapper"},[a("span",{class:"line-number"},"1"),a("br"),a("span",{class:"line-number"},"2"),a("br"),a("span",{class:"line-number"},"3"),a("br"),a("span",{class:"line-number"},"4"),a("br"),a("span",{class:"line-number"},"5"),a("br"),a("span",{class:"line-number"},"6"),a("br"),a("span",{class:"line-number"},"7"),a("br"),a("span",{class:"line-number"},"8"),a("br"),a("span",{class:"line-number"},"9"),a("br"),a("span",{class:"line-number"},"10"),a("br"),a("span",{class:"line-number"},"11"),a("br"),a("span",{class:"line-number"},"12"),a("br"),a("span",{class:"line-number"},"13"),a("br"),a("span",{class:"line-number"},"14"),a("br"),a("span",{class:"line-number"},"15"),a("br"),a("span",{class:"line-number"},"16"),a("br"),a("span",{class:"line-number"},"17"),a("br"),a("span",{class:"line-number"},"18"),a("br"),a("span",{class:"line-number"},"19"),a("br"),a("span",{class:"line-number"},"20"),a("br")])],-1),N=a("p",null,"供应商支持多种上面示例了最常见两种，本实例以github为例",-1),I=a("h3",{id:"发布版本到github"},[a("a",{class:"header-anchor",href:"#发布版本到github","aria-hidden":"true"},"#"),s(" 发布版本到github")],-1),$=a("div",{class:"language-sh line-numbers-mode"},[a("pre",null,[a("code",null,"npm run electron:build -- -p always\n"),a("div",{class:"m-mdic-copy-wrapper"},[a("div",{class:"u-mdic-copy-notify",id:"j-notify-1629558012368-54640"},"复制成功"),a("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"npm run electron:build -- -p always\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629558012368-54640","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),a("div",{class:"line-numbers-wrapper"},[a("span",{class:"line-number"},"1"),a("br")])],-1),P=t('',3),R=a("div",{class:"language-"},[a("pre",null,[a("code",null,"npm run electron:build -- -p always\n"),a("div",{class:"m-mdic-copy-wrapper"},[a("div",{class:"u-mdic-copy-notify",id:"j-notify-1629558012369-9922"},"复制成功"),a("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"npm run electron:build -- -p always\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629558012369-9922","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),a("div",{class:"line-numbers-wrapper"},[a("span",{class:"line-number"},"1"),a("br")])],-1),S=t('',9);o.render=function(t,a,s,c,o,D){return n(),e("div",null,[i,l,d,r,p,u,m,b,y,h,k,g,f,v,C,E,w,_,x,j,T,A,N,I,$,P,R,S])};export default o;export{c as __pageData};
