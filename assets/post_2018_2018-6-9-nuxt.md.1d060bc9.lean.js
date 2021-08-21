import{o as n,c as t,a as s,v as a,x as e}from"./app.5f3fb606.js";const c='{"title":"Nuxt基础入门","description":"","frontmatter":{"title":"Nuxt基础入门","tag":["vue","nuxt"],"author":"Artiely","date":"2018-6-9","cover":"https://gitee.com/artiely/Figure-bed/raw/master/images/20200315161236.png","base64":"dddee0"},"relativePath":"post/2018/2018-6-9-nuxt.md","lastUpdated":1629110797057}',o={},l=s("h1",{id:"nuxt基础入门"},[s("a",{class:"header-anchor",href:"#nuxt基础入门","aria-hidden":"true"},"#"),e(" Nuxt基础入门")],-1),i=s("p",null,"Nuxt 是一个基于 Vue 生态的更高层的框架，为开发服务端渲染的 Vue 应用提供了极其便利的开发体验。更酷的是，你甚至可以用它来做为静态站生成器,推荐尝试。目前Nuxt.js官方文档目前已经覆盖了大部分常用需求 , 这篇文章主要讲nuxt工程中一些需要注意的知识点，以及一些比较常用的功能介绍。",-1),p=s("p",null,"安装和部署",-1),u=s("div",{class:"language-js line-numbers-mode"},[s("pre",null,[s("code",null,[e("npm install "),s("span",{class:"token operator"},"-"),e("g vue"),s("span",{class:"token operator"},"-"),e("cli   "),s("span",{class:"token comment"},"//安装vue-cli架子"),e("\n\nvue init nuxt"),s("span",{class:"token operator"},"-"),e("community"),s("span",{class:"token operator"},"/"),e("starter"),s("span",{class:"token operator"},"-"),e("template "),s("span",{class:"token operator"},"<"),e("project"),s("span",{class:"token operator"},"-"),e("name"),s("span",{class:"token operator"},">"),e(),s("span",{class:"token comment"},"//安装nuxt"),e("\n\nnpm run dev "),s("span",{class:"token comment"},"//开发运行， http://localhost:3000"),e("\n")]),s("div",{class:"m-mdic-copy-wrapper"},[s("div",{class:"u-mdic-copy-notify",id:"j-notify-1629556982149-5591"},"复制成功"),s("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"npm install -g vue-cli   //安装vue-cli架子\n\nvue init nuxt-community/starter-template <project-name> //安装nuxt\n\nnpm run dev //开发运行， http://localhost:3000\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629556982149-5591","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),s("div",{class:"line-numbers-wrapper"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br")])],-1),r=s("p",null,"服务器部署：(需要安装node环境和pm2工具)",-1),d=s("div",{class:"language-js line-numbers-mode"},[s("pre",null,[s("code",null,[e("npm install pm2 "),s("span",{class:"token operator"},"-"),e("g "),s("span",{class:"token comment"},"//强大的node进程管理器"),e("\n\nnpm run build\n\nnpm start "),s("span",{class:"token comment"},"//需要先配置package.json,配置如下："),e("\n\n"),s("span",{class:"token string"},'"scripts"'),s("span",{class:"token operator"},":"),e(),s("span",{class:"token punctuation"},"{"),e("\n  "),s("span",{class:"token string"},'"start"'),s("span",{class:"token operator"},":"),e(),s("span",{class:"token string"},'"pm2 start ./node_modules/nuxt/bin/nuxt-start -i max --attach"'),s("span",{class:"token punctuation"},","),s("span",{class:"token comment"},"//-i max使用最大cpu核数，不需要可不取消"),e("\n "),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),e("\n"),s("span",{class:"token comment"},"//如果需要生产静态文件使用命令：npm run generate"),e("\n\n")]),s("div",{class:"m-mdic-copy-wrapper"},[s("div",{class:"u-mdic-copy-notify",id:"j-notify-1629556982149-33847"},"复制成功"),s("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":'npm install pm2 -g //强大的node进程管理器\n\nnpm run build\n\nnpm start //需要先配置package.json,配置如下：\n\n"scripts": {\n  "start": "pm2 start ./node_modules/nuxt/bin/nuxt-start -i max --attach",//-i max使用最大cpu核数，不需要可不取消\n },\n//如果需要生产静态文件使用命令：npm run generate\n\n',"data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629556982149-33847","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),s("div",{class:"line-numbers-wrapper"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br"),s("span",{class:"line-number"},"6"),s("br"),s("span",{class:"line-number"},"7"),s("br"),s("span",{class:"line-number"},"8"),s("br"),s("span",{class:"line-number"},"9"),s("br"),s("span",{class:"line-number"},"10"),s("br"),s("span",{class:"line-number"},"11"),s("br")])],-1),m=s("p",null,"nuxt.config.js的一些配置",-1),k=s("div",{class:"language-js line-numbers-mode"},[s("pre",null,[s("code",null,[e("  head"),s("span",{class:"token operator"},":"),e(),s("span",{class:"token punctuation"},"{"),e("\n    script"),s("span",{class:"token operator"},":"),e(),s("span",{class:"token punctuation"},"["),e("\n      "),s("span",{class:"token punctuation"},"{"),e(" src"),s("span",{class:"token operator"},":"),e(),s("span",{class:"token string"},"'/'"),e(),s("span",{class:"token punctuation"},"}"),s("span",{class:"token comment"},"/*外部js的引入，或者static中的js文件引入（/**.js）*/"),e("\n    "),s("span",{class:"token punctuation"},"]"),e("\n  "),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),e("\n  env"),s("span",{class:"token operator"},":"),e(),s("span",{class:"token punctuation"},"{"),e("\n    url"),s("span",{class:"token operator"},":"),e(),s("span",{class:"token string"},"'http://***.com'"),e(),s("span",{class:"token comment"},"/*全局asyncData({env})的配置，比如请求头URL常量*/"),e("\n  "),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),e("\n  "),s("span",{class:"token comment"},"/*代理IP的使用*/"),e("\n  proxy"),s("span",{class:"token operator"},":"),e(),s("span",{class:"token punctuation"},"["),e(),s("span",{class:"token punctuation"},"["),s("span",{class:"token string"},"'/api'"),s("span",{class:"token punctuation"},","),e(),s("span",{class:"token punctuation"},"{"),e("target"),s("span",{class:"token operator"},":"),e(),s("span",{class:"token string"},"'http://**.com'"),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},"]"),e(),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},","),e(" \n  build"),s("span",{class:"token operator"},":"),e(),s("span",{class:"token punctuation"},"{"),e("\n    vendor"),s("span",{class:"token operator"},":"),e(),s("span",{class:"token punctuation"},"["),s("span",{class:"token string"},"'axios'"),s("span",{class:"token punctuation"},","),e(),s("span",{class:"token string"},"'qs'"),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},","),s("span",{class:"token comment"},"/*多个地方引用，防止多次打包*/"),e("\n    "),s("span",{class:"token punctuation"},"}"),e("\n  "),s("span",{class:"token punctuation"},"}"),e("\n"),s("span",{class:"token comment"},"//其他配置请看官网文档"),e("\n\n")]),s("div",{class:"m-mdic-copy-wrapper"},[s("div",{class:"u-mdic-copy-notify",id:"j-notify-1629556982149-35795"},"复制成功"),s("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"  head: {\n    script: [\n      { src: '/' }/*外部js的引入，或者static中的js文件引入（/**.js）*/\n    ]\n  },\n  env: {\n    url: 'http://***.com' /*全局asyncData({env})的配置，比如请求头URL常量*/\n  },\n  /*代理IP的使用*/\n  proxy: [ ['/api', {target: 'http://**.com'}] ], \n  build: {\n    vendor: ['axios', 'qs'],/*多个地方引用，防止多次打包*/\n    }\n  }\n//其他配置请看官网文档\n\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629556982149-35795","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),s("div",{class:"line-numbers-wrapper"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br"),s("span",{class:"line-number"},"6"),s("br"),s("span",{class:"line-number"},"7"),s("br"),s("span",{class:"line-number"},"8"),s("br"),s("span",{class:"line-number"},"9"),s("br"),s("span",{class:"line-number"},"10"),s("br"),s("span",{class:"line-number"},"11"),s("br"),s("span",{class:"line-number"},"12"),s("br"),s("span",{class:"line-number"},"13"),s("br"),s("span",{class:"line-number"},"14"),s("br"),s("span",{class:"line-number"},"15"),s("br"),s("span",{class:"line-number"},"16"),s("br")])],-1),b=s("p",null,[e("nuxt添加静态文件"),s("br"),e(" 当我们在使用nuxt的时候，网站可以会遇到一部分是动态生成，而另一部分直接就是静态文件，在nuxt的文件配置下static目录，直接把文件放入static目录下，就可以通过域名或者IP（/对应的文件名）直接访问。")],-1),y=s("p",null,"过滤器的使用配置 plugins/filter.js",-1),f=s("div",{class:"language-js line-numbers-mode"},[s("pre",null,[s("code",null,[s("span",{class:"token keyword"},"import"),e(" Vue "),s("span",{class:"token keyword"},"from"),e(),s("span",{class:"token string"},"'vue'"),e("\n"),s("span",{class:"token keyword"},"export"),e(),s("span",{class:"token keyword"},"function"),e(),s("span",{class:"token function"},"trim"),e(),s("span",{class:"token punctuation"},"("),s("span",{class:"token parameter"},"str"),s("span",{class:"token punctuation"},")"),e(),s("span",{class:"token punctuation"},"{"),e("\n  "),s("span",{class:"token keyword"},"return"),e(" str"),s("span",{class:"token punctuation"},"."),s("span",{class:"token function"},"replace"),s("span",{class:"token punctuation"},"("),s("span",{class:"token regex"},[s("span",{class:"token regex-delimiter"},"/"),s("span",{class:"token regex-source language-regex"},"(^\\s*)(\\s*$)"),s("span",{class:"token regex-delimiter"},"/"),s("span",{class:"token regex-flags"},"g")]),s("span",{class:"token punctuation"},","),e(),s("span",{class:"token string"},"''"),s("span",{class:"token punctuation"},")"),e("\n"),s("span",{class:"token punctuation"},"}"),e("\n"),s("span",{class:"token keyword"},"const"),e(" filters "),s("span",{class:"token operator"},"="),e(),s("span",{class:"token punctuation"},"{"),e("\n  trim\n"),s("span",{class:"token punctuation"},"}"),e("\n"),s("span",{class:"token keyword"},"export"),e(),s("span",{class:"token keyword"},"default"),e(" filters\nObject"),s("span",{class:"token punctuation"},"."),s("span",{class:"token function"},"keys"),s("span",{class:"token punctuation"},"("),e("filters"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},"."),s("span",{class:"token function"},"forEach"),s("span",{class:"token punctuation"},"("),s("span",{class:"token parameter"},"key"),e(),s("span",{class:"token operator"},"=>"),e(),s("span",{class:"token punctuation"},"{"),e("\n  Vue"),s("span",{class:"token punctuation"},"."),s("span",{class:"token function"},"filter"),s("span",{class:"token punctuation"},"("),e("key"),s("span",{class:"token punctuation"},","),e(" filters"),s("span",{class:"token punctuation"},"["),e("key"),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},")"),e("\n"),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},")"),e("\n")]),s("div",{class:"m-mdic-copy-wrapper"},[s("div",{class:"u-mdic-copy-notify",id:"j-notify-1629556982149-54148"},"复制成功"),s("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"import Vue from 'vue'\nexport function trim (str) {\n  return str.replace(/(^\\s*)(\\s*$)/g, '')\n}\nconst filters = {\n  trim\n}\nexport default filters\nObject.keys(filters).forEach(key => {\n  Vue.filter(key, filters[key])\n})\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629556982149-54148","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),s("div",{class:"line-numbers-wrapper"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br"),s("span",{class:"line-number"},"6"),s("br"),s("span",{class:"line-number"},"7"),s("br"),s("span",{class:"line-number"},"8"),s("br"),s("span",{class:"line-number"},"9"),s("br"),s("span",{class:"line-number"},"10"),s("br"),s("span",{class:"line-number"},"11"),s("br")])],-1),h=s("p",null,"公用方法的配置 plugins/globle.js",-1),g=s("div",{class:"language-js line-numbers-mode"},[s("pre",null,[s("code",null,[s("span",{class:"token keyword"},"import"),e(" Vue "),s("span",{class:"token keyword"},"from"),e(),s("span",{class:"token string"},"'vue'"),e("\n\nVue"),s("span",{class:"token punctuation"},"."),s("span",{class:"token function"},"mixin"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},"{"),e("\n  methods"),s("span",{class:"token operator"},":"),e(),s("span",{class:"token punctuation"},"{"),e("\n    "),s("span",{class:"token comment"},"/* 设置标题描述 */"),e("\n    "),s("span",{class:"token function"},"$setSeo"),e(),s("span",{class:"token punctuation"},"("),s("span",{class:"token parameter"},[e("title"),s("span",{class:"token punctuation"},","),e(" content")]),s("span",{class:"token punctuation"},")"),e(),s("span",{class:"token punctuation"},"{"),e("\n      "),s("span",{class:"token keyword"},"return"),e(),s("span",{class:"token punctuation"},"{"),e(" title"),s("span",{class:"token operator"},":"),e(" title"),s("span",{class:"token punctuation"},","),e(" meta"),s("span",{class:"token operator"},":"),e(),s("span",{class:"token punctuation"},"["),e(),s("span",{class:"token punctuation"},"{"),e(" hid"),s("span",{class:"token operator"},":"),e(),s("span",{class:"token string"},"'description'"),s("span",{class:"token punctuation"},","),e(" name"),s("span",{class:"token operator"},":"),e(),s("span",{class:"token string"},"'description'"),s("span",{class:"token punctuation"},","),e(" content"),s("span",{class:"token operator"},":"),e(" content "),s("span",{class:"token punctuation"},"}"),e(),s("span",{class:"token punctuation"},"]"),e(),s("span",{class:"token punctuation"},"}"),e("\n    "),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),e("\n"),s("span",{class:"token punctuation"},"}"),e("\n")]),s("div",{class:"m-mdic-copy-wrapper"},[s("div",{class:"u-mdic-copy-notify",id:"j-notify-1629556982150-70898"},"复制成功"),s("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"import Vue from 'vue'\n\nVue.mixin({\n  methods: {\n    /* 设置标题描述 */\n    $setSeo (title, content) {\n      return { title: title, meta: [ { hid: 'description', name: 'description', content: content } ] }\n    },\n}\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629556982150-70898","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),s("div",{class:"line-numbers-wrapper"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br"),s("span",{class:"line-number"},"6"),s("br"),s("span",{class:"line-number"},"7"),s("br"),s("span",{class:"line-number"},"8"),s("br"),s("span",{class:"line-number"},"9"),s("br")])],-1),v=s("p",null,"需要在nuxt.config.js 配置 plugins: [ '~plugins/globle.js' ],页面的使用方法：",-1),x=s("div",{class:"language-js line-numbers-mode"},[s("pre",null,[s("code",null,[s("span",{class:"token function"},"head"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},"{"),e("\n   "),s("span",{class:"token keyword"},"return"),e(),s("span",{class:"token keyword"},"this"),s("span",{class:"token punctuation"},"."),s("span",{class:"token function"},"$setSeo"),s("span",{class:"token punctuation"},"("),s("span",{class:"token string"},"'title'"),s("span",{class:"token punctuation"},","),s("span",{class:"token string"},"'des'"),s("span",{class:"token punctuation"},")"),e("\n"),s("span",{class:"token punctuation"},"}"),e("\n")]),s("div",{class:"m-mdic-copy-wrapper"},[s("div",{class:"u-mdic-copy-notify",id:"j-notify-1629556982150-73517"},"复制成功"),s("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"head(){\n   return this.$setSeo('title','des')\n}\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629556982150-73517","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),s("div",{class:"line-numbers-wrapper"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br")])],-1),C=s("p",null,[e("中间件的使用"),s("br"),e(" 比如说用户未登录状态下，通过路由闯入了需要鉴权的页面，我们可以自定义一些错误：")],-1),j=s("div",{class:"language-js line-numbers-mode"},[s("pre",null,[s("code",null,[s("span",{class:"token comment"},"// auth.js"),e("\n"),s("span",{class:"token keyword"},"export"),e(),s("span",{class:"token keyword"},"default"),e(),s("span",{class:"token keyword"},"function"),e(),s("span",{class:"token punctuation"},"("),s("span",{class:"token parameter"},[s("span",{class:"token punctuation"},"{"),e(" store"),s("span",{class:"token punctuation"},","),e(" error "),s("span",{class:"token punctuation"},"}")]),s("span",{class:"token punctuation"},")"),e(),s("span",{class:"token punctuation"},"{"),e("\n"),s("span",{class:"token comment"},"// 可通过组件的props接收error信息"),e("\n  "),s("span",{class:"token keyword"},"if"),e(),s("span",{class:"token punctuation"},"("),s("span",{class:"token operator"},"!"),e("store"),s("span",{class:"token punctuation"},"."),e("state"),s("span",{class:"token punctuation"},"."),e("token"),s("span",{class:"token punctuation"},")"),e(),s("span",{class:"token punctuation"},"{"),e("\n    "),s("span",{class:"token function"},"error"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},"{"),e("\n      message"),s("span",{class:"token operator"},":"),e(),s("span",{class:"token string"},"'cookie失效或未登录，请登录后操作'"),s("span",{class:"token punctuation"},","),e("\n      statusCode"),s("span",{class:"token operator"},":"),e(),s("span",{class:"token number"},"403"),e("\n    "),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},")"),e("\n  "),s("span",{class:"token punctuation"},"}"),e("\n"),s("span",{class:"token punctuation"},"}"),e("\n")]),s("div",{class:"m-mdic-copy-wrapper"},[s("div",{class:"u-mdic-copy-notify",id:"j-notify-1629556982150-3485"},"复制成功"),s("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"// auth.js\nexport default function ({ store, error }) {\n// 可通过组件的props接收error信息\n  if (!store.state.token) {\n    error({\n      message: 'cookie失效或未登录，请登录后操作',\n      statusCode: 403\n    })\n  }\n}\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629556982150-3485","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),s("div",{class:"line-numbers-wrapper"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br"),s("span",{class:"line-number"},"6"),s("br"),s("span",{class:"line-number"},"7"),s("br"),s("span",{class:"line-number"},"8"),s("br"),s("span",{class:"line-number"},"9"),s("br"),s("span",{class:"line-number"},"10"),s("br")])],-1),w=s("p",null,"在组件中使用该中间件：",-1),$=s("div",{class:"language-js line-numbers-mode"},[s("pre",null,[s("code",null,[s("span",{class:"token keyword"},"export"),e(),s("span",{class:"token keyword"},"default"),e(),s("span",{class:"token punctuation"},"{"),e("\n  middleware"),s("span",{class:"token operator"},":"),e(),s("span",{class:"token string"},"'auth'"),s("span",{class:"token punctuation"},","),e("\n  "),s("span",{class:"token comment"},"// 还可以把用户重定位到登录页"),e("\n  "),s("span",{class:"token function"},"fetch"),e(),s("span",{class:"token punctuation"},"("),s("span",{class:"token parameter"},[s("span",{class:"token punctuation"},"{"),e("redirect"),s("span",{class:"token punctuation"},","),e(" store"),s("span",{class:"token punctuation"},"}")]),s("span",{class:"token punctuation"},")"),e(),s("span",{class:"token punctuation"},"{"),e("\n    "),s("span",{class:"token keyword"},"if"),e(),s("span",{class:"token punctuation"},"("),s("span",{class:"token operator"},"!"),e("store"),s("span",{class:"token punctuation"},"."),e("state"),s("span",{class:"token punctuation"},"."),e("token"),s("span",{class:"token punctuation"},")"),e(),s("span",{class:"token punctuation"},"{"),e("\n      "),s("span",{class:"token function"},"redirect"),s("span",{class:"token punctuation"},"("),s("span",{class:"token string"},"'/login'"),s("span",{class:"token punctuation"},")"),e("\n    "),s("span",{class:"token punctuation"},"}"),e("\n  "),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),e("\n"),s("span",{class:"token punctuation"},"}"),e("\n\n")]),s("div",{class:"m-mdic-copy-wrapper"},[s("div",{class:"u-mdic-copy-notify",id:"j-notify-1629556982150-83901"},"复制成功"),s("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"export default {\n  middleware: 'auth',\n  // 还可以把用户重定位到登录页\n  fetch ({redirect, store}) {\n    if (!store.state.token) {\n      redirect('/login')\n    }\n  },\n}\n\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629556982150-83901","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),s("div",{class:"line-numbers-wrapper"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br"),s("span",{class:"line-number"},"6"),s("br"),s("span",{class:"line-number"},"7"),s("br"),s("span",{class:"line-number"},"8"),s("br"),s("span",{class:"line-number"},"9"),s("br"),s("span",{class:"line-number"},"10"),s("br")])],-1),N=s("p",null,[e("第三方库的引用plugins/element-ui.js"),s("br"),e(" 官方不屏蔽你正常的import，但有提供插件模式且推荐使用插件模式")],-1),E=s("div",{class:"language-js line-numbers-mode"},[s("pre",null,[s("code",null,[s("span",{class:"token keyword"},"import"),e(" Vue "),s("span",{class:"token keyword"},"from"),e(),s("span",{class:"token string"},"'vue'"),e("\n"),s("span",{class:"token keyword"},"import"),e(" Element "),s("span",{class:"token keyword"},"from"),e(),s("span",{class:"token string"},"'element-ui'"),e("\nVue"),s("span",{class:"token punctuation"},"."),s("span",{class:"token function"},"use"),s("span",{class:"token punctuation"},"("),e("Element"),s("span",{class:"token punctuation"},")"),e("\n"),s("span",{class:"token comment"},"/*nuxt.config.js配置*/"),e("\nplugins"),s("span",{class:"token operator"},":"),e(),s("span",{class:"token punctuation"},"["),s("span",{class:"token punctuation"},"{"),e("src"),s("span",{class:"token operator"},":"),e(),s("span",{class:"token string"},"'~plugins/element-ui'"),s("span",{class:"token punctuation"},","),e(" ssr"),s("span",{class:"token operator"},":"),e(),s("span",{class:"token boolean"},"true"),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},"]"),e("\ncss"),s("span",{class:"token operator"},":"),e(),s("span",{class:"token punctuation"},"["),s("span",{class:"token string"},"'element-ui/lib/theme-default/index.css'"),s("span",{class:"token punctuation"},"]"),e("\nvendor"),s("span",{class:"token operator"},":"),e(),s("span",{class:"token punctuation"},"["),s("span",{class:"token string"},"'element-ui'"),s("span",{class:"token punctuation"},"]"),e("\n"),s("span",{class:"token comment"},"/*按需加载 在build下配置babel，安装插件babel-plugin-component*/"),e("\nbabel"),s("span",{class:"token operator"},":"),e(),s("span",{class:"token punctuation"},"{"),e("\n  plugins"),s("span",{class:"token operator"},":"),e(),s("span",{class:"token punctuation"},"["),s("span",{class:"token punctuation"},"["),s("span",{class:"token string"},"'component'"),s("span",{class:"token punctuation"},","),e(),s("span",{class:"token punctuation"},"["),e("\n    "),s("span",{class:"token punctuation"},"{"),e("\n      "),s("span",{class:"token string"},"'libraryName'"),s("span",{class:"token operator"},":"),e(),s("span",{class:"token string"},"'element-ui'"),s("span",{class:"token punctuation"},","),e("\n      "),s("span",{class:"token string"},"'styleLibraryName'"),s("span",{class:"token operator"},":"),e(),s("span",{class:"token string"},"'theme-default'"),e("\n    "),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),e("\n    "),s("span",{class:"token string"},"'transform-async-to-generator'"),s("span",{class:"token punctuation"},","),e("\n    "),s("span",{class:"token string"},"'transform-runtime'"),e("\n  "),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},","),e("\n  comments"),s("span",{class:"token operator"},":"),e(),s("span",{class:"token boolean"},"false"),e("\n"),s("span",{class:"token punctuation"},"}"),e("\n")]),s("div",{class:"m-mdic-copy-wrapper"},[s("div",{class:"u-mdic-copy-notify",id:"j-notify-1629556982150-44887"},"复制成功"),s("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"import Vue from 'vue'\nimport Element from 'element-ui'\nVue.use(Element)\n/*nuxt.config.js配置*/\nplugins: [{src: '~plugins/element-ui', ssr: true}]\ncss: ['element-ui/lib/theme-default/index.css']\nvendor: ['element-ui']\n/*按需加载 在build下配置babel，安装插件babel-plugin-component*/\nbabel: {\n  plugins: [['component', [\n    {\n      'libraryName': 'element-ui',\n      'styleLibraryName': 'theme-default'\n    },\n    'transform-async-to-generator',\n    'transform-runtime'\n  ]]],\n  comments: false\n}\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629556982150-44887","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),s("div",{class:"line-numbers-wrapper"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br"),s("span",{class:"line-number"},"6"),s("br"),s("span",{class:"line-number"},"7"),s("br"),s("span",{class:"line-number"},"8"),s("br"),s("span",{class:"line-number"},"9"),s("br"),s("span",{class:"line-number"},"10"),s("br"),s("span",{class:"line-number"},"11"),s("br"),s("span",{class:"line-number"},"12"),s("br"),s("span",{class:"line-number"},"13"),s("br"),s("span",{class:"line-number"},"14"),s("br"),s("span",{class:"line-number"},"15"),s("br"),s("span",{class:"line-number"},"16"),s("br"),s("span",{class:"line-number"},"17"),s("br"),s("span",{class:"line-number"},"18"),s("br"),s("span",{class:"line-number"},"19"),s("br")])],-1),I=s("p",null,[e("Window 或 Document 对象未定义？"),s("br"),e(" 这是因为一些只兼容客户端的脚本被打包进了服务端的执行脚本中去。必须使用该变量process.browser，在引入的地方：")],-1),T=s("div",{class:"language-js line-numbers-mode"},[s("pre",null,[s("code",null,[s("span",{class:"token keyword"},"if"),e(),s("span",{class:"token punctuation"},"("),e("process"),s("span",{class:"token punctuation"},"."),s("span",{class:"token constant"},"BROWSER_BUILD"),s("span",{class:"token punctuation"},")"),e(),s("span",{class:"token punctuation"},"{"),e("\n  "),s("span",{class:"token keyword"},"let"),e(" lib"),s("span",{class:"token operator"},"="),s("span",{class:"token function"},"require"),s("span",{class:"token punctuation"},"("),s("span",{class:"token string"},"'external_library'"),s("span",{class:"token punctuation"},")"),e("\n"),s("span",{class:"token punctuation"},"}"),e("\nnuxt"),s("span",{class:"token punctuation"},"."),e("config"),s("span",{class:"token punctuation"},"."),e("js 文件中配置 vendor 配置项 ：\n\nbuild"),s("span",{class:"token operator"},":"),e(),s("span",{class:"token punctuation"},"{"),e("\n    vendor"),s("span",{class:"token operator"},":"),e(),s("span",{class:"token punctuation"},"["),s("span",{class:"token string"},"'external_library'"),s("span",{class:"token punctuation"},"]"),e("\n"),s("span",{class:"token punctuation"},"}"),e("\n")]),s("div",{class:"m-mdic-copy-wrapper"},[s("div",{class:"u-mdic-copy-notify",id:"j-notify-1629556982151-45301"},"复制成功"),s("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"if (process.BROWSER_BUILD) {\n  let lib=require('external_library')\n}\nnuxt.config.js 文件中配置 vendor 配置项 ：\n\nbuild: {\n    vendor: ['external_library']\n}\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629556982151-45301","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),s("div",{class:"line-numbers-wrapper"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br"),s("span",{class:"line-number"},"6"),s("br"),s("span",{class:"line-number"},"7"),s("br"),s("span",{class:"line-number"},"8"),s("br")])],-1);o.render=function(e,c,o,D,B,P){return n(),t("div",null,[l,i,p,u,r,d,m,k,b,y,f,s("p",null,"使用"+a(e.string|e.trim)+",需要在nuxt.config.js 配置 plugins: [ '~plugins/filters.js' ]",1),h,g,v,x,C,j,w,$,N,E,I,T])};export default o;export{c as __pageData};
