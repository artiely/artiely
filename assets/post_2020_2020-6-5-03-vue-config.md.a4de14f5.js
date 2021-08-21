import{o as n,c as s,f as e,a,x as t}from"./app.5f3fb606.js";const c='{"title":"vue管理系统从0到1-vue.config","description":"","frontmatter":{"title":"vue管理系统从0到1-vue.config","tag":["vue"],"cover":"https://gitee.com/artiely/Figure-bed/raw/master/images/20200606170608.png","base64":"ef5559","date":"2020-6-5"},"headers":[{"level":2,"title":"官网","slug":"官网"},{"level":2,"title":"将变量全局化","slug":"将变量全局化"},{"level":3,"title":"题外话","slug":"题外话"}],"relativePath":"post/2020/2020-6-5-03-vue-config.md","lastUpdated":1629110851388}',l={},o=e('<h1 id="vue管理系统从0到1-vueconfig"><a class="header-anchor" href="#vue管理系统从0到1-vueconfig" aria-hidden="true">#</a> vue管理系统从0到1-vue.config</h1><h2 id="官网"><a class="header-anchor" href="#官网" aria-hidden="true">#</a> 官网</h2><p><a href="https://cli.vuejs.org/zh/config/#vue-config-js" target="_blank" rel="noopener noreferrer">官网文档</a></p><h2 id="将变量全局化"><a class="header-anchor" href="#将变量全局化" aria-hidden="true">#</a> 将变量全局化</h2><p>平时在定义css变量时总是得在每个页面去引用，这也太繁琐了，所以</p>',5),r=a("div",{class:"language-js line-numbers-mode"},[a("pre",null,[a("code",null,[a("span",{class:"token keyword"},"const"),t(" path "),a("span",{class:"token operator"},"="),t(),a("span",{class:"token function"},"require"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},"'path'"),a("span",{class:"token punctuation"},")"),t("\nmodule"),a("span",{class:"token punctuation"},"."),t("exports "),a("span",{class:"token operator"},"="),t(),a("span",{class:"token punctuation"},"{"),t("\n  "),a("span",{class:"token comment"},"// https://www.npmjs.com/package/vue-cli-plugin-style-resources-loader"),t("\n  "),a("span",{class:"token comment"},"// 不是这个 https://www.npmjs.com/package/style-resources-loader"),t("\n  pluginOptions"),a("span",{class:"token operator"},":"),t(),a("span",{class:"token punctuation"},"{"),t("\n    "),a("span",{class:"token string"},"'style-resources-loader'"),a("span",{class:"token operator"},":"),t(),a("span",{class:"token punctuation"},"{"),t("\n      preProcessor"),a("span",{class:"token operator"},":"),t(),a("span",{class:"token string"},"'less'"),a("span",{class:"token punctuation"},","),t("\n      patterns"),a("span",{class:"token operator"},":"),t(),a("span",{class:"token punctuation"},"["),t("path"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"resolve"),a("span",{class:"token punctuation"},"("),t("__dirname"),a("span",{class:"token punctuation"},","),t(),a("span",{class:"token string"},"'./src/assets/style/var.less'"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},"]"),a("span",{class:"token punctuation"},","),t(),a("span",{class:"token comment"},"// 引入全局样式变量"),t("\n    "),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},","),t("\n  "),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},","),t("\n  "),a("span",{class:"token comment"},"// https://github.com/ant-design/ant-motion/issues/44"),t("\n  css"),a("span",{class:"token operator"},":"),t(),a("span",{class:"token punctuation"},"{"),t("\n    loaderOptions"),a("span",{class:"token operator"},":"),t(),a("span",{class:"token punctuation"},"{"),t("\n      less"),a("span",{class:"token operator"},":"),t(),a("span",{class:"token punctuation"},"{"),t("\n        javascriptEnabled"),a("span",{class:"token operator"},":"),t(),a("span",{class:"token boolean"},"true"),a("span",{class:"token punctuation"},","),t("\n      "),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},","),t("\n    "),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},","),t("\n  "),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},","),t("\n"),a("span",{class:"token punctuation"},"}"),t("\n\n")]),a("div",{class:"m-mdic-copy-wrapper"},[a("div",{class:"u-mdic-copy-notify",id:"j-notify-1629557010082-27120"},"复制成功"),a("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"const path = require('path')\nmodule.exports = {\n  // https://www.npmjs.com/package/vue-cli-plugin-style-resources-loader\n  // 不是这个 https://www.npmjs.com/package/style-resources-loader\n  pluginOptions: {\n    'style-resources-loader': {\n      preProcessor: 'less',\n      patterns: [path.resolve(__dirname, './src/assets/style/var.less')], // 引入全局样式变量\n    },\n  },\n  // https://github.com/ant-design/ant-motion/issues/44\n  css: {\n    loaderOptions: {\n      less: {\n        javascriptEnabled: true,\n      },\n    },\n  },\n}\n\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629557010082-27120","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),a("div",{class:"line-numbers-wrapper"},[a("span",{class:"line-number"},"1"),a("br"),a("span",{class:"line-number"},"2"),a("br"),a("span",{class:"line-number"},"3"),a("br"),a("span",{class:"line-number"},"4"),a("br"),a("span",{class:"line-number"},"5"),a("br"),a("span",{class:"line-number"},"6"),a("br"),a("span",{class:"line-number"},"7"),a("br"),a("span",{class:"line-number"},"8"),a("br"),a("span",{class:"line-number"},"9"),a("br"),a("span",{class:"line-number"},"10"),a("br"),a("span",{class:"line-number"},"11"),a("br"),a("span",{class:"line-number"},"12"),a("br"),a("span",{class:"line-number"},"13"),a("br"),a("span",{class:"line-number"},"14"),a("br"),a("span",{class:"line-number"},"15"),a("br"),a("span",{class:"line-number"},"16"),a("br"),a("span",{class:"line-number"},"17"),a("br"),a("span",{class:"line-number"},"18"),a("br"),a("span",{class:"line-number"},"19"),a("br"),a("span",{class:"line-number"},"20"),a("br")])],-1),p=a("p",null,"同时我们为了更方便引用这么多的文件夹，避免各种返回层级，我们添加一些alias",-1),i=a("div",{class:"language-diff line-numbers-mode"},[a("pre",null,[a("code",null,[a("span",{class:"token unchanged"},[a("span",{class:"token prefix unchanged"}," "),a("span",{class:"token line"}," const path = require('path')\n")]),a("span",{class:"token inserted-sign inserted"},[a("span",{class:"token prefix inserted"},"+"),a("span",{class:"token line"}," function resolve(dir) {\n"),a("span",{class:"token prefix inserted"},"+"),a("span",{class:"token line"},"   return path.join(__dirname, dir)\n"),a("span",{class:"token prefix inserted"},"+"),a("span",{class:"token line"}," }\n")]),a("span",{class:"token unchanged"},[a("span",{class:"token prefix unchanged"}," "),a("span",{class:"token line"}," module.exports = {\n"),a("span",{class:"token prefix unchanged"}," "),a("span",{class:"token line"},"   // https://www.npmjs.com/package/vue-cli-plugin-style-resources-loader\n"),a("span",{class:"token prefix unchanged"}," "),a("span",{class:"token line"},"   // 不是这个 https://www.npmjs.com/package/style-resources-loader\n"),a("span",{class:"token prefix unchanged"}," "),a("span",{class:"token line"},"   pluginOptions: {\n"),a("span",{class:"token prefix unchanged"}," "),a("span",{class:"token line"},"     'style-resources-loader': {\n"),a("span",{class:"token prefix unchanged"}," "),a("span",{class:"token line"},"       preProcessor: 'less',\n"),a("span",{class:"token prefix unchanged"}," "),a("span",{class:"token line"},"       patterns: [path.resolve(__dirname, './src/assets/style/var.less')], // 引入全局样式变量\n"),a("span",{class:"token prefix unchanged"}," "),a("span",{class:"token line"},"     },\n"),a("span",{class:"token prefix unchanged"}," "),a("span",{class:"token line"},"   },\n"),a("span",{class:"token prefix unchanged"}," "),a("span",{class:"token line"},"   // https://github.com/ant-design/ant-motion/issues/44\n"),a("span",{class:"token prefix unchanged"}," "),a("span",{class:"token line"},"   css: {\n"),a("span",{class:"token prefix unchanged"}," "),a("span",{class:"token line"},"     loaderOptions: {\n"),a("span",{class:"token prefix unchanged"}," "),a("span",{class:"token line"},"       less: {\n"),a("span",{class:"token prefix unchanged"}," "),a("span",{class:"token line"},"         javascriptEnabled: true,\n"),a("span",{class:"token prefix unchanged"}," "),a("span",{class:"token line"},"       },\n"),a("span",{class:"token prefix unchanged"}," "),a("span",{class:"token line"},"     },\n"),a("span",{class:"token prefix unchanged"}," "),a("span",{class:"token line"},"   },\n")]),a("span",{class:"token inserted-sign inserted"},[a("span",{class:"token prefix inserted"},"+"),a("span",{class:"token line"},"  configureWebpack: {\n"),a("span",{class:"token prefix inserted"},"+"),a("span",{class:"token line"},"    resolve: {\n"),a("span",{class:"token prefix inserted"},"+"),a("span",{class:"token line"},"      alias: {\n"),a("span",{class:"token prefix inserted"},"+"),a("span",{class:"token line"},"        '@': resolve('src'),\n"),a("span",{class:"token prefix inserted"},"+"),a("span",{class:"token line"},"        '@views': resolve('src/views'),\n"),a("span",{class:"token prefix inserted"},"+"),a("span",{class:"token line"},"        '@components': resolve('src/components'),\n"),a("span",{class:"token prefix inserted"},"+"),a("span",{class:"token line"},"        '@assets': resolve('src/assets'),\n"),a("span",{class:"token prefix inserted"},"+"),a("span",{class:"token line"},"        '@router': resolve('src/router'),\n"),a("span",{class:"token prefix inserted"},"+"),a("span",{class:"token line"},"        '@common': resolve('src/common'),\n"),a("span",{class:"token prefix inserted"},"+"),a("span",{class:"token line"},"        '@store': resolve('src/store'),\n"),a("span",{class:"token prefix inserted"},"+"),a("span",{class:"token line"},"        '@layout': resolve('src/layout'),\n"),a("span",{class:"token prefix inserted"},"+"),a("span",{class:"token line"},"        '@api': resolve('src/api'),\n"),a("span",{class:"token prefix inserted"},"+"),a("span",{class:"token line"},"        '@config': resolve('src/config'),\n"),a("span",{class:"token prefix inserted"},"+"),a("span",{class:"token line"},"      },\n"),a("span",{class:"token prefix inserted"},"+"),a("span",{class:"token line"},"    },\n"),a("span",{class:"token prefix inserted"},"+"),a("span",{class:"token line"},"  },\n")]),a("span",{class:"token unchanged"},[a("span",{class:"token prefix unchanged"}," "),a("span",{class:"token line"}," }\n")]),t("\n")]),a("div",{class:"m-mdic-copy-wrapper"},[a("div",{class:"u-mdic-copy-notify",id:"j-notify-1629557010082-94390"},"复制成功"),a("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"  const path = require('path')\n+ function resolve(dir) {\n+   return path.join(__dirname, dir)\n+ }\n  module.exports = {\n    // https://www.npmjs.com/package/vue-cli-plugin-style-resources-loader\n    // 不是这个 https://www.npmjs.com/package/style-resources-loader\n    pluginOptions: {\n      'style-resources-loader': {\n        preProcessor: 'less',\n        patterns: [path.resolve(__dirname, './src/assets/style/var.less')], // 引入全局样式变量\n      },\n    },\n    // https://github.com/ant-design/ant-motion/issues/44\n    css: {\n      loaderOptions: {\n        less: {\n          javascriptEnabled: true,\n        },\n      },\n    },\n+  configureWebpack: {\n+    resolve: {\n+      alias: {\n+        '@': resolve('src'),\n+        '@views': resolve('src/views'),\n+        '@components': resolve('src/components'),\n+        '@assets': resolve('src/assets'),\n+        '@router': resolve('src/router'),\n+        '@common': resolve('src/common'),\n+        '@store': resolve('src/store'),\n+        '@layout': resolve('src/layout'),\n+        '@api': resolve('src/api'),\n+        '@config': resolve('src/config'),\n+      },\n+    },\n+  },\n  }\n\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629557010082-94390","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),a("div",{class:"line-numbers-wrapper"},[a("span",{class:"line-number"},"1"),a("br"),a("span",{class:"line-number"},"2"),a("br"),a("span",{class:"line-number"},"3"),a("br"),a("span",{class:"line-number"},"4"),a("br"),a("span",{class:"line-number"},"5"),a("br"),a("span",{class:"line-number"},"6"),a("br"),a("span",{class:"line-number"},"7"),a("br"),a("span",{class:"line-number"},"8"),a("br"),a("span",{class:"line-number"},"9"),a("br"),a("span",{class:"line-number"},"10"),a("br"),a("span",{class:"line-number"},"11"),a("br"),a("span",{class:"line-number"},"12"),a("br"),a("span",{class:"line-number"},"13"),a("br"),a("span",{class:"line-number"},"14"),a("br"),a("span",{class:"line-number"},"15"),a("br"),a("span",{class:"line-number"},"16"),a("br"),a("span",{class:"line-number"},"17"),a("br"),a("span",{class:"line-number"},"18"),a("br"),a("span",{class:"line-number"},"19"),a("br"),a("span",{class:"line-number"},"20"),a("br"),a("span",{class:"line-number"},"21"),a("br"),a("span",{class:"line-number"},"22"),a("br"),a("span",{class:"line-number"},"23"),a("br"),a("span",{class:"line-number"},"24"),a("br"),a("span",{class:"line-number"},"25"),a("br"),a("span",{class:"line-number"},"26"),a("br"),a("span",{class:"line-number"},"27"),a("br"),a("span",{class:"line-number"},"28"),a("br"),a("span",{class:"line-number"},"29"),a("br"),a("span",{class:"line-number"},"30"),a("br"),a("span",{class:"line-number"},"31"),a("br"),a("span",{class:"line-number"},"32"),a("br"),a("span",{class:"line-number"},"33"),a("br"),a("span",{class:"line-number"},"34"),a("br"),a("span",{class:"line-number"},"35"),a("br"),a("span",{class:"line-number"},"36"),a("br"),a("span",{class:"line-number"},"37"),a("br"),a("span",{class:"line-number"},"38"),a("br"),a("span",{class:"line-number"},"39"),a("br")])],-1),u=a("h3",{id:"题外话"},[a("a",{class:"header-anchor",href:"#题外话","aria-hidden":"true"},"#"),t(" 题外话")],-1),d=a("p",null,"当我们在写代码的时候或者使用插件的时候尽量留下插件出处，后期好维护和定位问题，俗话说的好，留图不留种，菊花万人捅！",-1),m=a("p",null,"第三步！",-1);l.render=function(e,a,t,c,l,b){return n(),s("div",null,[o,r,p,i,u,d,m])};export default l;export{c as __pageData};
