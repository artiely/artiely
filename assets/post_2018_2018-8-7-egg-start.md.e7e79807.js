import{o as e,c as n,f as s,a as t,x as a}from"./app.5f3fb606.js";const i='{"title":"Egg.js 入门","description":"","frontmatter":{"title":"Egg.js 入门","tag":["eggjs","nodejs"],"author":"Artiely","date":"2018-8-7","cover":"https://gitee.com/artiely/Figure-bed/raw/master/images/20200315165024.png","base64":"1a1a1a"},"headers":[{"level":2,"title":"Egg.js 官网","slug":"eggjs-官网"},{"level":2,"title":"Egg.js 是什么?","slug":"eggjs-是什么"},{"level":2,"title":"Egg.js 的特性：","slug":"eggjs-的特性"},{"level":2,"title":"Egg.js 的历史？","slug":"eggjs-的历史"},{"level":2,"title":"学习 Egg 前的必备基础。","slug":"学习-egg-前的必备基础"},{"level":2,"title":"Egg 快速入门、搭建环境、创建项目","slug":"egg-快速入门-搭建环境-创建项目"},{"level":3,"title":"创建项目","slug":"创建项目"},{"level":3,"title":"启动项目:","slug":"启动项目"},{"level":2,"title":"目录结构","slug":"目录结构"},{"level":3,"title":"由内置插件约定的目录：","slug":"由内置插件约定的目录"}],"relativePath":"post/2018/2018-8-7-egg-start.md","lastUpdated":1629110798989}',l={},c=s('<h1 id="eggjs-入门"><a class="header-anchor" href="#eggjs-入门" aria-hidden="true">#</a> Egg.js 入门</h1><h2 id="eggjs-官网"><a class="header-anchor" href="#eggjs-官网" aria-hidden="true">#</a> Egg.js 官网</h2><p>官 网：<a href="https://eggjs.org" target="_blank" rel="noopener noreferrer">https://eggjs.org</a><br> 中文网站：<a href="https://eggjs.org/zh-cn/" target="_blank" rel="noopener noreferrer">https://eggjs.org/zh-cn/</a></p><h2 id="eggjs-是什么"><a class="header-anchor" href="#eggjs-是什么" aria-hidden="true">#</a> Egg.js 是什么?</h2><p>Egg.js 是《阿里旗下产品》基于 Node.js 和 Koa 是一个 Nodejs 的企业级应用开发框架。<br> 可以帮助发团队和开发人员降低开发和维护成本。<br> Express 和 Koa 是 Node.js 社区广泛使用的框架，简单且扩展性强，非常适合做个人项<br> 目。但框架本身缺少约定，标准的 MVC 模型会有各种千奇百怪的写法。Egg 按照约定进行<br> 开发，奉行『约定优于配置』，团队协作成本低。<br> Egg.js 基于 Es6、Es7 以及 Typescript、Koa2 使得 Nodejs 具有更规范的开发模式、更低<br> 的学习成本、更优雅的代码、更少的开发成本、更少的维护成本。为企业级框架而生。</p><h2 id="eggjs-的特性"><a class="header-anchor" href="#eggjs-的特性" aria-hidden="true">#</a> Egg.js 的特性：</h2><p>1、提供基于 Egg 定制上层框架的能力<br> 2、高度可扩展的插件机制<br> 3、内置多进程管理<br> 4、基于 Koa 开发，性能优异<br> 5、框架稳定，测试覆盖率高<br> 6、渐进式开发</p><h2 id="eggjs-的历史"><a class="header-anchor" href="#eggjs-的历史" aria-hidden="true">#</a> Egg.js 的历史？</h2><p>2013 年蚂蚁的 chair 框架，可以视为 egg 的前身。<br> 2015 年 11 月，在苏千的召集下，阿里各 BU 的前端骨干齐聚黄龙，闭门共建。<br> 2016 年初，各 BU 的基础 web 框架完成升级，在同一套规范的基础上进行差异化定<br> 制。<br> 2016 年中，广泛使用在绝大部分阿里的前端 Node.js 应用。<br> 2016 年 09 月，在 JSConf China 2016 上亮相并宣布开源。<br> 2017 年初，官网文档 egg - 为企业级框架和应用而生 亮相，并将在本月发布 egg@1.0<br> 版本。<br> 2017 年 12 月左右 Egg 社区版 2.0 正式发布，性能提升 30%，基于 koa2 拥抱 Async<br> 2018 年 7 月最新 egg 的版本是 2.2.1<br> 经过几年的沉淀 Egg 已经非常成熟,下面让我们一起开启 Egg 的学习之旅。</p><h2 id="学习-egg-前的必备基础"><a class="header-anchor" href="#学习-egg-前的必备基础" aria-hidden="true">#</a> 学习 Egg 前的必备基础。</h2><p>1、html、 css、 js、 es6 基础<br> 2、必备 Nodejs 基础、Koa 基础</p><h2 id="egg-快速入门-搭建环境-创建项目"><a class="header-anchor" href="#egg-快速入门-搭建环境-创建项目" aria-hidden="true">#</a> Egg 快速入门、搭建环境、创建项目</h2><p>环境准备<br> 操作系统：支持 macOS，Linux，Windows<br> 运行环境：Nodejs 建议选择 LTS 版本，Nodejs 最低要求 8.x。 安装 egg 脚手架以及使用 egg-init</p><h3 id="创建项目"><a class="header-anchor" href="#创建项目" aria-hidden="true">#</a> 创建项目</h3><p>我们推荐直接使用脚手架，只需几条简单指令，即可快速生成项目:</p>',15),r=t("div",{class:"language-sh line-numbers-mode"},[t("pre",null,[t("code",null,"$ npm i egg-init -g\n$ egg-init egg-example --type=simple\n$ cd egg-example\n$ npm i\n"),t("div",{class:"m-mdic-copy-wrapper"},[t("div",{class:"u-mdic-copy-notify",id:"j-notify-1629556988942-40639"},"复制成功"),t("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"$ npm i egg-init -g\n$ egg-init egg-example --type=simple\n$ cd egg-example\n$ npm i\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629556988942-40639","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),t("div",{class:"line-numbers-wrapper"},[t("span",{class:"line-number"},"1"),t("br"),t("span",{class:"line-number"},"2"),t("br"),t("span",{class:"line-number"},"3"),t("br"),t("span",{class:"line-number"},"4"),t("br")])],-1),o=t("h3",{id:"启动项目"},[t("a",{class:"header-anchor",href:"#启动项目","aria-hidden":"true"},"#"),a(" 启动项目:")],-1),d=t("div",{class:"language-sh line-numbers-mode"},[t("pre",null,[t("code",null,"$ npm run dev\n$ open localhost:7001\n"),t("div",{class:"m-mdic-copy-wrapper"},[t("div",{class:"u-mdic-copy-notify",id:"j-notify-1629556988942-99662"},"复制成功"),t("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"$ npm run dev\n$ open localhost:7001\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629556988942-99662","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),t("div",{class:"line-numbers-wrapper"},[t("span",{class:"line-number"},"1"),t("br"),t("span",{class:"line-number"},"2"),t("br")])],-1),p=t("h2",{id:"目录结构"},[t("a",{class:"header-anchor",href:"#目录结构","aria-hidden":"true"},"#"),a(" 目录结构")],-1),g=t("p",null,"在快速入门中，大家对框架应该有了初步的印象，接下来我们简单了解下目录约定规范。",-1),m=t("div",{class:"language-sh line-numbers-mode"},[t("pre",null,[t("code",null,"egg-project\n├── package.json\n├── app.js (可选)\n├── agent.js (可选)\n├── app\n|   ├── router.js\n│   ├── controller\n│   |   └── home.js\n│   ├── service (可选)\n│   |   └── user.js\n│   ├── middleware (可选)\n│   |   └── response_time.js\n│   ├── schedule (可选)\n│   |   └── my_task.js\n│   ├── public (可选)\n│   |   └── reset.css\n│   ├── view (可选)\n│   |   └── home.tpl\n│   └── extend (可选)\n│       ├── helper.js (可选)\n│       ├── request.js (可选)\n│       ├── response.js (可选)\n│       ├── context.js (可选)\n│       ├── application.js (可选)\n│       └── agent.js (可选)\n├── config\n|   ├── plugin.js\n|   ├── config.default.js\n│   ├── config.prod.js\n|   ├── config.test.js (可选)\n|   ├── config.local.js (可选)\n|   └── config.unittest.js (可选)\n└── test\n    ├── middleware\n    |   └── response_time.test.js\n    └── controller\n        └── home.test.js\n"),t("div",{class:"m-mdic-copy-wrapper"},[t("div",{class:"u-mdic-copy-notify",id:"j-notify-1629556988943-62157"},"复制成功"),t("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"egg-project\n├── package.json\n├── app.js (可选)\n├── agent.js (可选)\n├── app\n|   ├── router.js\n│   ├── controller\n│   |   └── home.js\n│   ├── service (可选)\n│   |   └── user.js\n│   ├── middleware (可选)\n│   |   └── response_time.js\n│   ├── schedule (可选)\n│   |   └── my_task.js\n│   ├── public (可选)\n│   |   └── reset.css\n│   ├── view (可选)\n│   |   └── home.tpl\n│   └── extend (可选)\n│       ├── helper.js (可选)\n│       ├── request.js (可选)\n│       ├── response.js (可选)\n│       ├── context.js (可选)\n│       ├── application.js (可选)\n│       └── agent.js (可选)\n├── config\n|   ├── plugin.js\n|   ├── config.default.js\n│   ├── config.prod.js\n|   ├── config.test.js (可选)\n|   ├── config.local.js (可选)\n|   └── config.unittest.js (可选)\n└── test\n    ├── middleware\n    |   └── response_time.test.js\n    └── controller\n        └── home.test.js\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629556988943-62157","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),t("div",{class:"line-numbers-wrapper"},[t("span",{class:"line-number"},"1"),t("br"),t("span",{class:"line-number"},"2"),t("br"),t("span",{class:"line-number"},"3"),t("br"),t("span",{class:"line-number"},"4"),t("br"),t("span",{class:"line-number"},"5"),t("br"),t("span",{class:"line-number"},"6"),t("br"),t("span",{class:"line-number"},"7"),t("br"),t("span",{class:"line-number"},"8"),t("br"),t("span",{class:"line-number"},"9"),t("br"),t("span",{class:"line-number"},"10"),t("br"),t("span",{class:"line-number"},"11"),t("br"),t("span",{class:"line-number"},"12"),t("br"),t("span",{class:"line-number"},"13"),t("br"),t("span",{class:"line-number"},"14"),t("br"),t("span",{class:"line-number"},"15"),t("br"),t("span",{class:"line-number"},"16"),t("br"),t("span",{class:"line-number"},"17"),t("br"),t("span",{class:"line-number"},"18"),t("br"),t("span",{class:"line-number"},"19"),t("br"),t("span",{class:"line-number"},"20"),t("br"),t("span",{class:"line-number"},"21"),t("br"),t("span",{class:"line-number"},"22"),t("br"),t("span",{class:"line-number"},"23"),t("br"),t("span",{class:"line-number"},"24"),t("br"),t("span",{class:"line-number"},"25"),t("br"),t("span",{class:"line-number"},"26"),t("br"),t("span",{class:"line-number"},"27"),t("br"),t("span",{class:"line-number"},"28"),t("br"),t("span",{class:"line-number"},"29"),t("br"),t("span",{class:"line-number"},"30"),t("br"),t("span",{class:"line-number"},"31"),t("br"),t("span",{class:"line-number"},"32"),t("br"),t("span",{class:"line-number"},"33"),t("br"),t("span",{class:"line-number"},"34"),t("br"),t("span",{class:"line-number"},"35"),t("br"),t("span",{class:"line-number"},"36"),t("br"),t("span",{class:"line-number"},"37"),t("br")])],-1),b=s('<p>如上，由框架约定的目录：</p><ul><li>app/router.js 用于配置 URL 路由规则，具体参见 Router。</li><li>app/controller/** 用于解析用户的输入，处理后返回相应的结果，具体参见 Controller。</li><li>app/service/** 用于编写业务逻辑层，可选，建议使用，具体参见 Service。</li><li>app/middleware/** 用于编写中间件，可选，具体参见 Middleware。</li><li>app/public/** 用于放置静态资源，可选，具体参见内置插件 egg-static。</li><li>app/extend/** 用于框架的扩展，可选，具体参见框架扩展。</li><li>config/config.{env}.js 用于编写配置文件，具体参见配置。</li><li>config/plugin.js 用于配置需要加载的插件，具体参见插件。</li><li>test/** 用于单元测试，具体参见单元测试。</li><li>app.js 和 agent.js 用于自定义启动时的初始化工作，可选，具体参见启动自定义。关于agent.js的作用参见Agent机制。</li></ul><h3 id="由内置插件约定的目录"><a class="header-anchor" href="#由内置插件约定的目录" aria-hidden="true">#</a> 由内置插件约定的目录：</h3><ul><li>app/public/** 用于放置静态资源，可选，具体参见内置插件 egg-static。</li><li>app/schedule/** 用于定时任务，可选，具体参见定时任务。</li></ul>',4);l.render=function(s,t,a,i,l,u){return e(),n("div",null,[c,r,o,d,p,g,m,b])};export default l;export{i as __pageData};
