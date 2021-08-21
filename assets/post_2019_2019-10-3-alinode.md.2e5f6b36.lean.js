import{o as e,c as n,f as t,a,x as l}from"./app.b304d650.js";const o='{"title":"Nodejs通用业务模块","description":"","frontmatter":{"title":"Nodejs通用业务模块","tag":["nodejs","alinode"],"author":"Artiely","date":"2019-10-3","cover":"https://gitee.com/artiely/Figure-bed/raw/master/images/20200315144031.png","base64":"9ae3a9"},"headers":[{"level":2,"title":"目标","slug":"目标"},{"level":2,"title":"why","slug":"why"},{"level":2,"title":"nodejs之生态","slug":"nodejs之生态"},{"level":3,"title":"2019年前端，选择Nodejs 还是 PHP？","slug":"2019年前端选择nodejs-还是-php"},{"level":3,"title":"Node.js 在双十一中有哪些应用，表现如何？","slug":"nodejs-在双十一中有哪些应用表现如何"},{"level":2,"title":"接入alinode性能平台","slug":"接入alinode性能平台"},{"level":3,"title":"产品概述","slug":"产品概述"},{"level":3,"title":"应用场景","slug":"应用场景"},{"level":3,"title":"功能特性","slug":"功能特性"},{"level":3,"title":"快速入门","slug":"快速入门"},{"level":3,"title":"I. 创建应用","slug":"i-创建应用"},{"level":3,"title":"II. 服务器部署 Node.js 性能平台","slug":"ii-服务器部署-nodejs-性能平台"},{"level":3,"title":"性能指标","slug":"性能指标"}],"relativePath":"post/2019/2019-10-3-alinode.md","lastUpdated":1629110830090}',i={},c=t('',43),s=a("div",{class:"language-shell line-numbers-mode"},[a("pre",null,[a("code",null,[a("span",{class:"token comment"},"# 安装版本管理工具 tnvm，安装过程出错参考：https://github.com/aliyun-node/tnvm"),l("\n"),a("span",{class:"token function"},"wget"),l(" -O- https://raw.githubusercontent.com/aliyun-node/tnvm/master/install.sh "),a("span",{class:"token operator"},"|"),l(),a("span",{class:"token function"},"bash"),l("\n"),a("span",{class:"token builtin class-name"},"source"),l(" ~/.bashrc\n"),a("span",{class:"token comment"},"# tnvm ls-remote alinode 查看需要的版本"),l("\ntnvm "),a("span",{class:"token function"},"install"),l(" alinode-v3.11.4 "),a("span",{class:"token comment"},"# 安装需要的版本"),l("\ntnvm use alinode-v3.11.4 "),a("span",{class:"token comment"},"# 使用需要的版本"),l("\n"),a("span",{class:"token function"},"npm"),l(),a("span",{class:"token function"},"install"),l(" @alicloud/agenthub -g "),a("span",{class:"token comment"},"# 安装 agenthub"),l("\n")]),a("div",{class:"m-mdic-copy-wrapper"},[a("div",{class:"u-mdic-copy-notify",id:"j-notify-1629558739444-32936"},"复制成功"),a("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"# 安装版本管理工具 tnvm，安装过程出错参考：https://github.com/aliyun-node/tnvm\nwget -O- https://raw.githubusercontent.com/aliyun-node/tnvm/master/install.sh | bash\nsource ~/.bashrc\n# tnvm ls-remote alinode 查看需要的版本\ntnvm install alinode-v3.11.4 # 安装需要的版本\ntnvm use alinode-v3.11.4 # 使用需要的版本\nnpm install @alicloud/agenthub -g # 安装 agenthub\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629558739444-32936","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),a("div",{class:"line-numbers-wrapper"},[a("span",{class:"line-number"},"1"),a("br"),a("span",{class:"line-number"},"2"),a("br"),a("span",{class:"line-number"},"3"),a("br"),a("span",{class:"line-number"},"4"),a("br"),a("span",{class:"line-number"},"5"),a("br"),a("span",{class:"line-number"},"6"),a("br"),a("span",{class:"line-number"},"7"),a("br")])],-1),d=a("p",null,[l("验证安装是否成功,需要确保"),a("code",null,"which node"),l(" 和"),a("code",null,"which agenthub"),l("的路径中包括"),a("code",null,".tnvm"),l("即可。")],-1),r=a("div",{class:"language-shell line-numbers-mode"},[a("pre",null,[a("code",null,[l("root@iZbp1gqe9a9t5d246bp7vqZ:~"),a("span",{class:"token comment"},"# which node/root/.tnvm/versions/alinode/v3.11.4/bin/noderoot@iZbp1gqe9a9t5d246bp7vqZ:~# which agenthub /root/.tnvm/versions/alinode/v3.11.4/bin/agenthub"),l("\n")]),a("div",{class:"m-mdic-copy-wrapper"},[a("div",{class:"u-mdic-copy-notify",id:"j-notify-1629558739451-12599"},"复制成功"),a("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"root@iZbp1gqe9a9t5d246bp7vqZ:~# which node/root/.tnvm/versions/alinode/v3.11.4/bin/noderoot@iZbp1gqe9a9t5d246bp7vqZ:~# which agenthub /root/.tnvm/versions/alinode/v3.11.4/bin/agenthub\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629558739451-12599","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),a("div",{class:"line-numbers-wrapper"},[a("span",{class:"line-number"},"1"),a("br")])],-1),p=a("p",null,[l("将"),a("code",null,"创建新应用"),l("中获得的"),a("code",null,"App ID"),l(" 和 "),a("code",null,"App Secret"),l(" 按如下所示保存为 "),a("code",null,"yourconfig.json"),l("。")],-1),u=a("div",{class:"language-shell line-numbers-mode"},[a("pre",null,[a("code",null,[a("span",{class:"token punctuation"},"{"),l("  "),a("span",{class:"token string"},'"appid"'),a("span",{class:"token builtin class-name"},":"),l(),a("span",{class:"token string"},'"12345"'),l(",                          "),a("span",{class:"token comment"},'# 前面申请到的 appid，保存时删掉这条注释。  \t     "secret": "kflajglkajlgjalsgjlajdgfakjkgj" # 前面申请到的 secret，保存时删掉这条注释。'),l("\n"),a("span",{class:"token punctuation"},"}"),l("\n")]),a("div",{class:"m-mdic-copy-wrapper"},[a("div",{class:"u-mdic-copy-notify",id:"j-notify-1629558739451-37902"},"复制成功"),a("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":'{  "appid": "12345",                          # 前面申请到的 appid，保存时删掉这条注释。  \t     "secret": "kflajglkajlgjalsgjlajdgfakjkgj" # 前面申请到的 secret，保存时删掉这条注释。\n}\n',"data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629558739451-37902","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),a("div",{class:"line-numbers-wrapper"},[a("span",{class:"line-number"},"1"),a("br"),a("span",{class:"line-number"},"2"),a("br")])],-1),m=a("p",null,[a("strong",null,"注意：")],-1),h=a("p",null,[a("strong",null,"1. 本例未配置 错误日志、报警 等功能。")],-1),y=a("p",null,[a("strong",null,"2. 性能平台每分钟上传一次日志，请等待几分钟后查看数据。")],-1),b=a("p",null,[a("strong",null,"3. 更详细的 Node.js 性能平台 runtime 部署参见 自助式部署 runtime")],-1),g=a("h4",{id:"b使用egg接入nodejs性能平台"},[a("a",{class:"header-anchor",href:"#b使用egg接入nodejs性能平台","aria-hidden":"true"},"#"),l(" b.使用egg接入nodejs性能平台")],-1),f=a("ol",null,[a("li",null,"安装runtime")],-1),j=a("div",{class:"language-"},[a("pre",null,[a("code",null,"npm i nodeinstall -g\nnodeinstall --install-alinode ^3\n"),a("div",{class:"m-mdic-copy-wrapper"},[a("div",{class:"u-mdic-copy-notify",id:"j-notify-1629558739451-90587"},"复制成功"),a("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"npm i nodeinstall -g\nnodeinstall --install-alinode ^3\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629558739451-90587","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),a("div",{class:"line-numbers-wrapper"},[a("span",{class:"line-number"},"1"),a("br"),a("span",{class:"line-number"},"2"),a("br")])],-1),v=a("ol",{start:"2"},[a("li",null,"安装egg-alinode插件")],-1),k=a("div",{class:"language-"},[a("pre",null,[a("code",null,"npm i egg-alinode --save\n"),a("div",{class:"m-mdic-copy-wrapper"},[a("div",{class:"u-mdic-copy-notify",id:"j-notify-1629558739451-22807"},"复制成功"),a("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"npm i egg-alinode --save\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629558739451-22807","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),a("div",{class:"line-numbers-wrapper"},[a("span",{class:"line-number"},"1"),a("br")])],-1),C=a("ol",{start:"3"},[a("li",null,"在 Egg 项目的 config/plugin.js 中启用此插件")],-1),w=a("div",{class:"language-js line-numbers-mode"},[a("pre",null,[a("code",null,[a("span",{class:"token comment"},"// config/plugin.js"),l("\nexports"),a("span",{class:"token punctuation"},"."),l("alinode "),a("span",{class:"token operator"},"="),l(),a("span",{class:"token punctuation"},"{"),l("\n  enable"),a("span",{class:"token operator"},":"),l(),a("span",{class:"token boolean"},"true"),a("span",{class:"token punctuation"},","),l("\n  "),a("span",{class:"token keyword"},"package"),a("span",{class:"token operator"},":"),l(),a("span",{class:"token string"},"'egg-alinode'"),l("\n"),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},";"),l("\n")]),a("div",{class:"m-mdic-copy-wrapper"},[a("div",{class:"u-mdic-copy-notify",id:"j-notify-1629558739451-4258"},"复制成功"),a("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"// config/plugin.js\nexports.alinode = {\n  enable: true,\n  package: 'egg-alinode'\n};\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629558739451-4258","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),a("div",{class:"line-numbers-wrapper"},[a("span",{class:"line-number"},"1"),a("br"),a("span",{class:"line-number"},"2"),a("br"),a("span",{class:"line-number"},"3"),a("br"),a("span",{class:"line-number"},"4"),a("br"),a("span",{class:"line-number"},"5"),a("br")])],-1),N=a("ol",{start:"4"},[a("li",null,"在 Egg 项目的 config/config.default.js 中添加配置")],-1),x=a("div",{class:"language-js line-numbers-mode"},[a("pre",null,[a("code",null,[a("span",{class:"token comment"},"// config/config.default.js"),l("\nexports"),a("span",{class:"token punctuation"},"."),l("alinode "),a("span",{class:"token operator"},"="),l(),a("span",{class:"token punctuation"},"{"),l("\n  server"),a("span",{class:"token operator"},":"),l(),a("span",{class:"token string"},"'wss://agentserver.node.aliyun.com:8080'"),a("span",{class:"token punctuation"},","),l("\n  appid"),a("span",{class:"token operator"},":"),l(),a("span",{class:"token string"},"'Node.js 性能平台给您的项目生成的 appid'"),a("span",{class:"token punctuation"},","),l("\n  secret"),a("span",{class:"token operator"},":"),l(),a("span",{class:"token string"},"'Node.js 性能平台给您的项目生成的 secret'"),a("span",{class:"token punctuation"},","),l("\n  logdir"),a("span",{class:"token operator"},":"),l(),a("span",{class:"token string"},"'Node.js 性能平台日志输出地址绝对路径，与 NODE_LOG_DIR 保持一致。如：/tmp/'"),a("span",{class:"token punctuation"},","),l("\n  error_log"),a("span",{class:"token operator"},":"),l(),a("span",{class:"token punctuation"},"["),l("\n    "),a("span",{class:"token string"},"'您的应用在业务层面产生的异常日志的路径，数组，可选，可配置多个'"),a("span",{class:"token punctuation"},","),l("\n    "),a("span",{class:"token string"},"'例如：/root/.logs/error.#YYYY#-#MM#-#DD#.log'"),a("span",{class:"token punctuation"},","),l("\n    "),a("span",{class:"token string"},"'不更改 Egg 默认日志输出路径可不配置本项目'"),a("span",{class:"token punctuation"},","),l("\n  "),a("span",{class:"token punctuation"},"]"),a("span",{class:"token punctuation"},","),l("\n  agentidMode"),a("span",{class:"token operator"},":"),a("span",{class:"token string"},"'IP'"),l(),a("span",{class:"token string"},"'可选，如果设置，则在实例ID中添加部分IP信息，用于多个实例 hostname 相同的场景（以容器为主）'"),l("\n"),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},";"),l("\n")]),a("div",{class:"m-mdic-copy-wrapper"},[a("div",{class:"u-mdic-copy-notify",id:"j-notify-1629558739451-8170"},"复制成功"),a("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"// config/config.default.js\nexports.alinode = {\n  server: 'wss://agentserver.node.aliyun.com:8080',\n  appid: 'Node.js 性能平台给您的项目生成的 appid',\n  secret: 'Node.js 性能平台给您的项目生成的 secret',\n  logdir: 'Node.js 性能平台日志输出地址绝对路径，与 NODE_LOG_DIR 保持一致。如：/tmp/',\n  error_log: [\n    '您的应用在业务层面产生的异常日志的路径，数组，可选，可配置多个',\n    '例如：/root/.logs/error.#YYYY#-#MM#-#DD#.log',\n    '不更改 Egg 默认日志输出路径可不配置本项目',\n  ],\n  agentidMode:'IP' '可选，如果设置，则在实例ID中添加部分IP信息，用于多个实例 hostname 相同的场景（以容器为主）'\n};\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629558739451-8170","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),a("div",{class:"line-numbers-wrapper"},[a("span",{class:"line-number"},"1"),a("br"),a("span",{class:"line-number"},"2"),a("br"),a("span",{class:"line-number"},"3"),a("br"),a("span",{class:"line-number"},"4"),a("br"),a("span",{class:"line-number"},"5"),a("br"),a("span",{class:"line-number"},"6"),a("br"),a("span",{class:"line-number"},"7"),a("br"),a("span",{class:"line-number"},"8"),a("br"),a("span",{class:"line-number"},"9"),a("br"),a("span",{class:"line-number"},"10"),a("br"),a("span",{class:"line-number"},"11"),a("br"),a("span",{class:"line-number"},"12"),a("br"),a("span",{class:"line-number"},"13"),a("br")])],-1),_=a("ol",{start:"5"},[a("li",null,"启动应用")],-1),I=a("div",{class:"language-js line-numbers-mode"},[a("pre",null,[a("code",null,[l("egg"),a("span",{class:"token operator"},"-"),l("scripts start "),a("span",{class:"token operator"},"--"),l("daemon\n")]),a("div",{class:"m-mdic-copy-wrapper"},[a("div",{class:"u-mdic-copy-notify",id:"j-notify-1629558739451-40086"},"复制成功"),a("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"egg-scripts start --daemon\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629558739451-40086","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),a("div",{class:"line-numbers-wrapper"},[a("span",{class:"line-number"},"1"),a("br")])],-1),P=t('',15);i.render=function(t,a,l,o,i,T){return e(),n("div",null,[c,s,d,r,p,u,m,h,y,b,g,f,j,v,k,C,w,N,x,_,I,P])};export default i;export{o as __pageData};
