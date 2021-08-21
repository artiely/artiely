import{o as n,c as t,f as e,a,x as s}from"./app.b304d650.js";const c='{"title":"如何创建自定义 VuePress 主题","description":"","frontmatter":{"title":"如何创建自定义 VuePress 主题","tag":["vue","vuepress"],"author":"Artiely","date":"2019-4-3","cover":"https://gitee.com/artiely/Figure-bed/raw/master/images/20200315154942.png","base64":"c2175b"},"headers":[{"level":2,"title":"设置 VuePress 项目","slug":"设置-vuepress-项目"},{"level":2,"title":"构建内容","slug":"构建内容"},{"level":2,"title":"创建自定义 VuePress 主题","slug":"创建自定义-vuepress-主题"},{"level":2,"title":"在主题中呈现您网站的内容。","slug":"在主题中呈现您网站的内容"},{"level":2,"title":"将第三方 UI 集成到主题中","slug":"将第三方-ui-集成到主题中"},{"level":2,"title":"结论","slug":"结论"},{"level":2,"title":"番外篇","slug":"番外篇"},{"level":2,"title":"安装","slug":"安装"},{"level":2,"title":"使用","slug":"使用"},{"level":2,"title":"提示","slug":"提示"},{"level":2,"title":"其他","slug":"其他"}],"relativePath":"post/2019/2019-4-3-vuepress-theme.md","lastUpdated":1629110827963}',o={},l=e('<h1 id="如何创建自定义-vuepress-主题"><a class="header-anchor" href="#如何创建自定义-vuepress-主题" aria-hidden="true">#</a> 如何创建自定义 VuePress 主题</h1><p><img src="https://gitee.com/artiely/Figure-bed/raw/master/images/20200314182957.png" alt=""></p><p>如果您已经听说过 VuePress，那么可能会知道它是一个功能极小的静态站点生成器。VuePress 使创建文本繁多的文档网站变得简单，比 Nuxt.js 容易得多。</p><p>但是，您是否知道 VuePress 有一个基于 Vue 构建的自定义主题系统，可以让您使用自定义功能构建自己的全功能主题？</p><p>在本文中，我们将介绍如何开始创建自己的自定义主题，遵循一些最佳实践，以及如何集成第三方 UI 库以快速创建布局。</p><p>例如，让我们来看看VuePress 文档网站。它使用默认主题。默认主题开箱即用，具有许多自定义功能，如内置搜索，可自定义导航和侧边栏，甚至是自动生成的 GitHub 链接和页面编辑链接，并用 github 托管这些页面。</p><p>在创建自定义主题有着和使用 vue 一样的开发体验。</p><p>当前版本 1.0.0-alpha.44 还不是稳定版本，可能略有变动。</p><h2 id="设置-vuepress-项目"><a class="header-anchor" href="#设置-vuepress-项目" aria-hidden="true">#</a> 设置 VuePress 项目</h2><p>首先，确保在系统上安装了 VuePress。</p>',10),i=a("div",{class:"language-sh line-numbers-mode"},[a("pre",null,[a("code",null,"npm install -g vuepress\n"),a("div",{class:"m-mdic-copy-wrapper"},[a("div",{class:"u-mdic-copy-notify",id:"j-notify-1629558739867-75478"},"复制成功"),a("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"npm install -g vuepress\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629558739867-75478","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),a("div",{class:"line-numbers-wrapper"},[a("span",{class:"line-number"},"1"),a("br")])],-1),p=a("h2",{id:"构建内容"},[a("a",{class:"header-anchor",href:"#构建内容","aria-hidden":"true"},"#"),s(" 构建内容")],-1),d=a("p",null,"VuePress 的魅力在于它允许您根据自己的喜好构建内容。项目中的每个 markdown 文件都将编译为静态 HTML 文件。 例如，您的项目可能结构如下：",-1),u=a("div",{class:"language-sh line-numbers-mode"},[a("pre",null,[a("code",null,"vuepress-theme-koala\nㄴguide\n  ㄴREADME.md\n  ㄴgetting-started.md\n  ㄴconfig.md\nㄴ.vuepress\n  ㄴconfig.js\n"),a("div",{class:"m-mdic-copy-wrapper"},[a("div",{class:"u-mdic-copy-notify",id:"j-notify-1629558739867-4175"},"复制成功"),a("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"vuepress-theme-koala\nㄴguide\n  ㄴREADME.md\n  ㄴgetting-started.md\n  ㄴconfig.md\nㄴ.vuepress\n  ㄴconfig.js\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629558739867-4175","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),a("div",{class:"line-numbers-wrapper"},[a("span",{class:"line-number"},"1"),a("br"),a("span",{class:"line-number"},"2"),a("br"),a("span",{class:"line-number"},"3"),a("br"),a("span",{class:"line-number"},"4"),a("br"),a("span",{class:"line-number"},"5"),a("br"),a("span",{class:"line-number"},"6"),a("br"),a("span",{class:"line-number"},"7"),a("br")])],-1),r=a("p",null,"因此，一旦您的项目有内容，您如何开始创建自定义主题以显示该内容？",-1),m=a("h2",{id:"创建自定义-vuepress-主题"},[a("a",{class:"header-anchor",href:"#创建自定义-vuepress-主题","aria-hidden":"true"},"#"),s(" 创建自定义 VuePress 主题")],-1),y=a("p",null,"在上面的文件夹结构示例中，您可能已经注意到名为的文件夹 .vuepress。此文件夹是您的配置和所有特定于 VuePress 的文件的位置。它也是您的自定义主题文件的位置。",-1),b=a("p",null,"要创建自定义主题，请在 VuePress 项目中的 theme 目录内创建一个目录 .vuepress，然后创建一个Layout.vue文件。",-1),k=a("div",{class:"language-sh line-numbers-mode"},[a("pre",null,[a("code",null,"theme\n├── global-components\n│   └── xxx.vue\n├── components\n│   └── xxx.vue\n├── layouts\n│   ├── Layout.vue (必要的)\n│   └── 404.vue\n├── styles\n│   ├── index.styl\n│   └── palette.styl\n├── templates\n│   ├── dev.html\n│   └── ssr.html\n├── index.js\n├── enhanceApp.js\n└── package.json\n"),a("div",{class:"m-mdic-copy-wrapper"},[a("div",{class:"u-mdic-copy-notify",id:"j-notify-1629558739867-59815"},"复制成功"),a("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"theme\n├── global-components\n│   └── xxx.vue\n├── components\n│   └── xxx.vue\n├── layouts\n│   ├── Layout.vue (必要的)\n│   └── 404.vue\n├── styles\n│   ├── index.styl\n│   └── palette.styl\n├── templates\n│   ├── dev.html\n│   └── ssr.html\n├── index.js\n├── enhanceApp.js\n└── package.json\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629558739867-59815","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),a("div",{class:"line-numbers-wrapper"},[a("span",{class:"line-number"},"1"),a("br"),a("span",{class:"line-number"},"2"),a("br"),a("span",{class:"line-number"},"3"),a("br"),a("span",{class:"line-number"},"4"),a("br"),a("span",{class:"line-number"},"5"),a("br"),a("span",{class:"line-number"},"6"),a("br"),a("span",{class:"line-number"},"7"),a("br"),a("span",{class:"line-number"},"8"),a("br"),a("span",{class:"line-number"},"9"),a("br"),a("span",{class:"line-number"},"10"),a("br"),a("span",{class:"line-number"},"11"),a("br"),a("span",{class:"line-number"},"12"),a("br"),a("span",{class:"line-number"},"13"),a("br"),a("span",{class:"line-number"},"14"),a("br"),a("span",{class:"line-number"},"15"),a("br"),a("span",{class:"line-number"},"16"),a("br"),a("span",{class:"line-number"},"17"),a("br")])],-1),h=e('<ul><li>theme/global-components: 该目录下的组件都会被自动注册为全局组件。想了解更多，请参考 @vuepress/plugin-register-components。</li><li>theme/components: Vue 组件。</li><li>theme/layouts: 布局组件，其中 Layout.vue 是必需的。</li><li>theme/styles: 全局的样式和调色板。</li><li>theme/templates: 修改默认的模板文件。</li><li>theme/index.js: 主题文件的入口文件。</li><li>theme/enhanceApp.js: 主题水平的客户端增强文件。</li></ul><h2 id="在主题中呈现您网站的内容"><a class="header-anchor" href="#在主题中呈现您网站的内容" aria-hidden="true">#</a> 在主题中呈现您网站的内容。</h2><p>最简单的主题可以只是一个 Layout.vue 具有以下标记的组件：</p>',3),g=a("div",{class:"language-html line-numbers-mode"},[a("pre",null,[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),s("div")]),s(),a("span",{class:"token attr-name"},"class"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("theme-container"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),s("\n    "),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),s("Content")]),a("span",{class:"token punctuation"},"/>")]),s("\n"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),s("div")]),a("span",{class:"token punctuation"},">")]),s("\n")]),a("div",{class:"m-mdic-copy-wrapper"},[a("div",{class:"u-mdic-copy-notify",id:"j-notify-1629558739867-26344"},"复制成功"),a("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":'<div class="theme-container">\n    <Content/>\n</div>\n',"data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629558739867-26344","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),a("div",{class:"line-numbers-wrapper"},[a("span",{class:"line-number"},"1"),a("br"),a("span",{class:"line-number"},"2"),a("br"),a("span",{class:"line-number"},"3"),a("br")])],-1),v=a("p",null,[s(".md 正在呈现的当前文件的已编译内容 将作为特殊"),a("code",null,"<Content/>"),s("全局组件提供。")],-1),f=a("p",null,"另一种思考 Layout.vue 文件的方式是作为主题的起点，因为实际上，完全充实的主题需要的不仅仅是单个文件。",-1),C=a("h2",{id:"将第三方-ui-集成到主题中"},[a("a",{class:"header-anchor",href:"#将第三方-ui-集成到主题中","aria-hidden":"true"},"#"),s(" 将第三方 UI 集成到主题中")],-1),x=a("p",null,"cd 到 theme 文件下安装 ui 库 如 ant-design-vue",-1),w=a("p",null,[s("npm i ant-design-vue"),a("br"),s(" 在 theme/enhanceApp.js中注册 ui 组件(当然最好是按需加载)")],-1),j=a("div",{class:"language-js line-numbers-mode"},[a("pre",null,[a("code",null,[a("span",{class:"token keyword"},"import"),s(" Antd "),a("span",{class:"token keyword"},"from"),s(),a("span",{class:"token string"},"'ant-design-vue'"),s("\n"),a("span",{class:"token keyword"},"import"),s(),a("span",{class:"token string"},"'ant-design-vue/dist/antd.css'"),s("\n"),a("span",{class:"token keyword"},"import"),s(" Layout "),a("span",{class:"token keyword"},"from"),s(),a("span",{class:"token string"},"'ant-design-vue/lib/layout'"),s("\n"),a("span",{class:"token keyword"},"import"),s(" Tag "),a("span",{class:"token keyword"},"from"),s(),a("span",{class:"token string"},"'ant-design-vue/lib/tag'"),s("\n"),a("span",{class:"token keyword"},"import"),s(),a("span",{class:"token string"},"'ant-design-vue/lib/layout/style/index.css'"),s("\n"),a("span",{class:"token keyword"},"import"),s(),a("span",{class:"token string"},"'ant-design-vue/lib/tag/style/index.css'"),s("\n"),a("span",{class:"token keyword"},"export"),s(),a("span",{class:"token keyword"},"default"),s(),a("span",{class:"token punctuation"},"("),a("span",{class:"token parameter"},[a("span",{class:"token punctuation"},"{"),s(" Vue"),a("span",{class:"token punctuation"},","),s(" isServer "),a("span",{class:"token punctuation"},"}")]),a("span",{class:"token punctuation"},")"),s(),a("span",{class:"token operator"},"=>"),s(),a("span",{class:"token punctuation"},"{"),s("\n  Vue"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"use"),a("span",{class:"token punctuation"},"("),s("Layout"),a("span",{class:"token punctuation"},")"),s(" Vue"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"use"),a("span",{class:"token punctuation"},"("),s("Tag"),a("span",{class:"token punctuation"},")"),s("\n"),a("span",{class:"token punctuation"},"}"),s("\n")]),a("div",{class:"m-mdic-copy-wrapper"},[a("div",{class:"u-mdic-copy-notify",id:"j-notify-1629558739867-977"},"复制成功"),a("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"import Antd from 'ant-design-vue'\nimport 'ant-design-vue/dist/antd.css'\nimport Layout from 'ant-design-vue/lib/layout'\nimport Tag from 'ant-design-vue/lib/tag'\nimport 'ant-design-vue/lib/layout/style/index.css'\nimport 'ant-design-vue/lib/tag/style/index.css'\nexport default ({ Vue, isServer }) => {\n  Vue.use(Layout) Vue.use(Tag)\n}\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629558739867-977","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),a("div",{class:"line-numbers-wrapper"},[a("span",{class:"line-number"},"1"),a("br"),a("span",{class:"line-number"},"2"),a("br"),a("span",{class:"line-number"},"3"),a("br"),a("span",{class:"line-number"},"4"),a("br"),a("span",{class:"line-number"},"5"),a("br"),a("span",{class:"line-number"},"6"),a("br"),a("span",{class:"line-number"},"7"),a("br"),a("span",{class:"line-number"},"8"),a("br"),a("span",{class:"line-number"},"9"),a("br")])],-1),T=a("p",null,"布局就随意发挥了咯 假设我们有个主页 Home.vue 还有个详情页 Detail.vue",-1),$=a("p",null,"Home.vue",-1),_=a("div",{class:"language-vue line-numbers-mode"},[a("pre",null,[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),s("a-layout")]),a("span",{class:"token punctuation"},">")]),s("\n  "),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),s("a-layout-content")]),a("span",{class:"token punctuation"},">")]),s("\n  {{$site.pages}}\n  "),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),s("a-layout-content")]),a("span",{class:"token punctuation"},">")]),s("\n"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),s("a-layout")]),a("span",{class:"token punctuation"},">")]),s("\n")]),a("div",{class:"m-mdic-copy-wrapper"},[a("div",{class:"u-mdic-copy-notify",id:"j-notify-1629558739868-83419"},"复制成功"),a("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"<a-layout>\n  <a-layout-content>\n  {{$site.pages}}\n  </a-layout-content>\n</a-layout>\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629558739868-83419","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),a("div",{class:"line-numbers-wrapper"},[a("span",{class:"line-number"},"1"),a("br"),a("span",{class:"line-number"},"2"),a("br"),a("span",{class:"line-number"},"3"),a("br"),a("span",{class:"line-number"},"4"),a("br"),a("span",{class:"line-number"},"5"),a("br")])],-1),P=a("p",null,"Detail.veu",-1),I=a("div",{class:"language-vue line-numbers-mode"},[a("pre",null,[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),s("a-layout")]),a("span",{class:"token punctuation"},">")]),s("\n  "),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),s("a-layout-sider")]),a("span",{class:"token punctuation"},">")]),s("Sider"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),s("a-layout-sider")]),a("span",{class:"token punctuation"},">")]),s("\n  "),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),s("a-layout-content")]),a("span",{class:"token punctuation"},">")]),s("\n    "),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),s("Content")]),a("span",{class:"token punctuation"},"/>")]),s("\n  "),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),s("a-layout-content")]),a("span",{class:"token punctuation"},">")]),s("\n"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),s("a-layout")]),a("span",{class:"token punctuation"},">")]),s("\n")]),a("div",{class:"m-mdic-copy-wrapper"},[a("div",{class:"u-mdic-copy-notify",id:"j-notify-1629558739868-39218"},"复制成功"),a("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"<a-layout>\n  <a-layout-sider>Sider</a-layout-sider>\n  <a-layout-content>\n    <Content/>\n  </a-layout-content>\n</a-layout>\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629558739868-39218","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),a("div",{class:"line-numbers-wrapper"},[a("span",{class:"line-number"},"1"),a("br"),a("span",{class:"line-number"},"2"),a("br"),a("span",{class:"line-number"},"3"),a("br"),a("span",{class:"line-number"},"4"),a("br"),a("span",{class:"line-number"},"5"),a("br"),a("span",{class:"line-number"},"6"),a("br")])],-1),V=a("p",null,"Layou.vue",-1),A=a("div",{class:"language-vue line-numbers-mode"},[a("div",{class:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{class:"highlighted"}," "),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",null,[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),s("template")]),a("span",{class:"token punctuation"},">")]),s("\n  "),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),s("div")]),a("span",{class:"token punctuation"},">")]),s("\n    "),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),s("header")]),a("span",{class:"token punctuation"},">")]),s("{{ $site.themeConfig.nav }}"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),s("header")]),a("span",{class:"token punctuation"},">")]),s("\n    "),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),s("componen")]),s(),a("span",{class:"token attr-name"},"class"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("main-content"),a("span",{class:"token punctuation"},'"')]),s(),a("span",{class:"token attr-name"},":is"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("layout"),a("span",{class:"token punctuation"},'"')]),s(),a("span",{class:"token punctuation"},"/>")]),s("\n  "),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),s("div")]),a("span",{class:"token punctuation"},">")]),s("\n"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),s("template")]),a("span",{class:"token punctuation"},">")]),s("\n\n"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),s("script")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token script"},[a("span",{class:"token language-javascript"},[s("\n"),a("span",{class:"token keyword"},"import"),s(" Home "),a("span",{class:"token keyword"},"from"),s(),a("span",{class:"token string"},"'./Home'"),s("\n"),a("span",{class:"token keyword"},"import"),s(" Detail "),a("span",{class:"token keyword"},"from"),s(),a("span",{class:"token string"},"'./Detail'"),s("\n\n"),a("span",{class:"token keyword"},"export"),s(),a("span",{class:"token keyword"},"default"),s(),a("span",{class:"token punctuation"},"{"),s("\n  computed"),a("span",{class:"token operator"},":"),s(),a("span",{class:"token punctuation"},"{"),s("\n    "),a("span",{class:"token function"},"layout"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),s(),a("span",{class:"token punctuation"},"{"),s("\n      "),a("span",{class:"token keyword"},"const"),s(),a("span",{class:"token punctuation"},"{"),s(" path "),a("span",{class:"token punctuation"},"}"),s(),a("span",{class:"token operator"},"="),s(),a("span",{class:"token keyword"},"this"),a("span",{class:"token punctuation"},"."),s("$page\n      "),a("span",{class:"token keyword"},"if"),s(),a("span",{class:"token punctuation"},"("),s("path "),a("span",{class:"token operator"},"==="),s(),a("span",{class:"token string"},"'/'"),a("span",{class:"token punctuation"},")"),s(),a("span",{class:"token punctuation"},"{"),s("\n        "),a("span",{class:"token keyword"},"return"),s(" Home\n      "),a("span",{class:"token punctuation"},"}"),s(),a("span",{class:"token keyword"},"else"),s(),a("span",{class:"token punctuation"},"{"),s("\n        "),a("span",{class:"token keyword"},"return"),s(" Detail\n      "),a("span",{class:"token punctuation"},"}"),s("\n    "),a("span",{class:"token punctuation"},"}"),s("\n  "),a("span",{class:"token punctuation"},"}"),s("\n"),a("span",{class:"token punctuation"},"}"),s("\n")])]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),s("script")]),a("span",{class:"token punctuation"},">")]),s("\n")]),a("div",{class:"m-mdic-copy-wrapper"},[a("div",{class:"u-mdic-copy-notify",id:"j-notify-1629558739868-78253"},"复制成功"),a("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"<template>\n  <div>\n    <header>{{ $site.themeConfig.nav }}</header>\n    <componen class=\"main-content\" :is=\"layout\" />\n  </div>\n</template>\n\n<script>\nimport Home from './Home'\nimport Detail from './Detail'\n\nexport default {\n  computed: {\n    layout() {\n      const { path } = this.$page\n      if (path === '/') {\n        return Home\n      } else {\n        return Detail\n      }\n    }\n  }\n}\n<\/script>\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629558739868-78253","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),a("div",{class:"line-numbers-wrapper"},[a("span",{class:"line-number"},"1"),a("br"),a("span",{class:"line-number"},"2"),a("br"),a("span",{class:"line-number"},"3"),a("br"),a("span",{class:"line-number"},"4"),a("br"),a("span",{class:"line-number"},"5"),a("br"),a("span",{class:"line-number"},"6"),a("br"),a("span",{class:"line-number"},"7"),a("br"),a("span",{class:"line-number"},"8"),a("br"),a("span",{class:"line-number"},"9"),a("br"),a("span",{class:"line-number"},"10"),a("br"),a("span",{class:"line-number"},"11"),a("br"),a("span",{class:"line-number"},"12"),a("br"),a("span",{class:"line-number"},"13"),a("br"),a("span",{class:"line-number"},"14"),a("br"),a("span",{class:"line-number"},"15"),a("br"),a("span",{class:"line-number"},"16"),a("br"),a("span",{class:"line-number"},"17"),a("br"),a("span",{class:"line-number"},"18"),a("br"),a("span",{class:"line-number"},"19"),a("br"),a("span",{class:"line-number"},"20"),a("br"),a("span",{class:"line-number"},"21"),a("br"),a("span",{class:"line-number"},"22"),a("br"),a("span",{class:"line-number"},"23"),a("br"),a("span",{class:"line-number"},"24"),a("br")])],-1),E=e('<p>请注意高亮部分，即为对应的原始数据，有了数据可以自己随意组织界面</p><h2 id="结论"><a class="header-anchor" href="#结论" aria-hidden="true">#</a> 结论</h2><p>最终，创建 VuePress 主题可以提供与创建 Vue.js 应用程序一样多的灵活性。您可以自由地以最适合您的方式布置您的主题。</p><p>在这篇文章中，我们介绍了一些最佳实践，可以在主题组件中使用的数据，以及如何与 UI 库集成以创建布局。</p><h2 id="番外篇"><a class="header-anchor" href="#番外篇" aria-hidden="true">#</a> 番外篇</h2><p>本人也写了一个主题 <code>vuepress-theme-koala</code></p><h2 id="安装"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2>',7),N=a("div",{class:"language-sh line-numbers-mode"},[a("pre",null,[a("code",null,"npm i vuepress-theme-koala\n"),a("div",{class:"m-mdic-copy-wrapper"},[a("div",{class:"u-mdic-copy-notify",id:"j-notify-1629558739868-10868"},"复制成功"),a("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"npm i vuepress-theme-koala\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629558739868-10868","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),a("div",{class:"line-numbers-wrapper"},[a("span",{class:"line-number"},"1"),a("br")])],-1),D=a("h2",{id:"使用"},[a("a",{class:"header-anchor",href:"#使用","aria-hidden":"true"},"#"),s(" 使用")],-1),F=a("p",null,".vuepress/congig.js",-1),L=a("div",{class:"language-js line-numbers-mode"},[a("pre",null,[a("code",null,[s("module"),a("span",{class:"token punctuation"},"."),s("exports "),a("span",{class:"token operator"},"="),s(),a("span",{class:"token punctuation"},"{"),s("\n  theme"),a("span",{class:"token operator"},":"),s(),a("span",{class:"token string"},"'vuepress-theme-koala'"),s("\n"),a("span",{class:"token punctuation"},"}"),s("\n")]),a("div",{class:"m-mdic-copy-wrapper"},[a("div",{class:"u-mdic-copy-notify",id:"j-notify-1629558739868-24870"},"复制成功"),a("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"module.exports = {\n  theme: 'vuepress-theme-koala'\n}\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629558739868-24870","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),a("div",{class:"line-numbers-wrapper"},[a("span",{class:"line-number"},"1"),a("br"),a("span",{class:"line-number"},"2"),a("br"),a("span",{class:"line-number"},"3"),a("br")])],-1),S=a("h2",{id:"提示"},[a("a",{class:"header-anchor",href:"#提示","aria-hidden":"true"},"#"),s(" 提示")],-1),B=a("p",null,"vuepress 设计理念是约定大于配置，此主题的配置等同于 vuepress 文档",-1),H=a("h2",{id:"其他"},[a("a",{class:"header-anchor",href:"#其他","aria-hidden":"true"},"#"),s(" 其他")],-1),R=a("p",null,"VuePress 提供了对 YAML front matter 开箱即用的支持: vuepress-theme-koala 扩展的字段如下",-1),U=a("div",{class:"language-md line-numbers-mode"},[a("pre",null,[a("code",null,[a("span",{class:"token front-matter-block"},[a("span",{class:"token punctuation"},"---"),s("\n"),a("span",{class:"token font-matter yaml language-yaml"},"poster: xx/xx.png\ntag: vue,js"),s("\n"),a("span",{class:"token punctuation"},"---")]),s("\n"),a("span",{class:"token title important"},[a("span",{class:"token punctuation"},"#"),s("poster为首页列表的封面")]),s("\n"),a("span",{class:"token title important"},[a("span",{class:"token punctuation"},"#"),s("tag为文章的标签英文逗号分隔")]),s("\n")]),a("div",{class:"m-mdic-copy-wrapper"},[a("div",{class:"u-mdic-copy-notify",id:"j-notify-1629558739868-7896"},"复制成功"),a("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"---\nposter: xx/xx.png\ntag: vue,js\n---\n#poster为首页列表的封面\n#tag为文章的标签英文逗号分隔\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629558739868-7896","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),a("div",{class:"line-numbers-wrapper"},[a("span",{class:"line-number"},"1"),a("br"),a("span",{class:"line-number"},"2"),a("br"),a("span",{class:"line-number"},"3"),a("br"),a("span",{class:"line-number"},"4"),a("br"),a("span",{class:"line-number"},"5"),a("br"),a("span",{class:"line-number"},"6"),a("br")])],-1),M=a("p",null,"over",-1);o.render=function(e,a,s,c,o,q){return n(),t("div",null,[l,i,p,d,u,r,m,y,b,k,h,g,v,f,C,x,w,j,T,$,_,P,I,V,A,E,N,D,F,L,S,B,H,R,U,M])};export default o;export{c as __pageData};
