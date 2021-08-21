import{o as t,c as n,t as e,a as c,x as o}from"./app.746f22cf.js";const a='{"title":"CentOS下如何安装nodejs及相关环境","description":"","frontmatter":{"title":"CentOS下如何安装nodejs及相关环境","tag":["nodejs","centOS","pm2","nvm"],"author":"Artiely","date":"2018-1-30","cover":"https://gitee.com/artiely/Figure-bed/raw/master/images/20200315173211.png","hot":true,"base64":"6b8359"},"headers":[{"level":2,"title":"您将了解","slug":"您将了解"},{"level":2,"title":"适用对象","slug":"适用对象"},{"level":2,"title":"准备工作","slug":"准备工作"},{"level":2,"title":"安装nodejs","slug":"安装nodejs"},{"level":2,"title":"安装NVM管理多个node版本","slug":"安装nvm管理多个node版本"},{"level":2,"title":"部署测试项目","slug":"部署测试项目"},{"level":2,"title":"安装pm2 守护node进程","slug":"安装pm2-守护node进程"}],"relativePath":"post/2018/2018-1-30-centos-setup-nodejs.md","lastUpdated":1629110796627}',i={},d=e('',11),l=c("div",{class:"language-sh line-numbers-mode"},[c("pre",null,[c("code",null,"wget https://nodejs.org/dist/latest-v10.x/node-v10.17.0-linux-x64.tar.xz  \n"),c("div",{class:"m-mdic-copy-wrapper"},[c("div",{class:"u-mdic-copy-notify",id:"j-notify-1629557986758-26813"},"复制成功"),c("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"wget https://nodejs.org/dist/latest-v10.x/node-v10.17.0-linux-x64.tar.xz  \n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629557986758-26813","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),c("div",{class:"line-numbers-wrapper"},[c("span",{class:"line-number"},"1"),c("br")])],-1),s=c("blockquote",null,[c("p",null,[o("如果提示找不到"),c("code",null,"wget"),o("命令,可以先安装"),c("code",null,"weget"),o(",执行"),c("code",null,"yum -y install wget"),o("后再安装。")])],-1),m=c("ol",{start:"2"},[c("li",null,"解压文件。")],-1),p=c("div",{class:"language-sh line-numbers-mode"},[c("pre",null,[c("code",null,"tar xvf node-v10.17.0-linux-x64.tar.xz \n"),c("div",{class:"m-mdic-copy-wrapper"},[c("div",{class:"u-mdic-copy-notify",id:"j-notify-1629557986758-29405"},"复制成功"),c("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"tar xvf node-v10.17.0-linux-x64.tar.xz \n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629557986758-29405","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),c("div",{class:"line-numbers-wrapper"},[c("span",{class:"line-number"},"1"),c("br")])],-1),r=c("ol",{start:"3"},[c("li",null,"创建软链接，使node和npm命令全局有效。")],-1),y=c("p",null,"通过创建软链接的方法，使得在任意目录下都可以直接使用node和npm命令：",-1),u=c("div",{class:"language-sh line-numbers-mode"},[c("pre",null,[c("code",null,"ln -s /root/node-v10.17.0-linux-x64/bin/node /usr/local/bin/node\nln -s /root/node-v10.17.0-linux-x64/bin/npm /usr/local/bin/npm\n"),c("div",{class:"m-mdic-copy-wrapper"},[c("div",{class:"u-mdic-copy-notify",id:"j-notify-1629557986759-68242"},"复制成功"),c("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"ln -s /root/node-v10.17.0-linux-x64/bin/node /usr/local/bin/node\nln -s /root/node-v10.17.0-linux-x64/bin/npm /usr/local/bin/npm\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629557986759-68242","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),c("div",{class:"line-numbers-wrapper"},[c("span",{class:"line-number"},"1"),c("br"),c("span",{class:"line-number"},"2"),c("br")])],-1),b=c("ol",{start:"4"},[c("li",null,"查看node、npm版本。")],-1),h=c("div",{class:"language-sh line-numbers-mode"},[c("pre",null,[c("code",null,"node -v\nnpm -v\n"),c("div",{class:"m-mdic-copy-wrapper"},[c("div",{class:"u-mdic-copy-notify",id:"j-notify-1629557986759-77835"},"复制成功"),c("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"node -v\nnpm -v\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629557986759-77835","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),c("div",{class:"line-numbers-wrapper"},[c("span",{class:"line-number"},"1"),c("br"),c("span",{class:"line-number"},"2"),c("br")])],-1),f=c("ol",{start:"5"},[c("li",null,[o("至此，Node.js环境已安装完毕。"),c("br"),o(" 软件默认安装在"),c("code",null,"/"),o("目录或者"),c("code",null,"~"),o("目录下，也就是根目录或当前用户目录，如果不清楚当前的目录可以执行"),c("code",null,"pwd"),o("命令。如果需要将该软件安装到其他目录（如：/opt/node/）下，请进行如下操作：")])],-1),v=c("div",{class:"language-sh line-numbers-mode"},[c("pre",null,[c("code",null,"# 创建目录\nmkdir -p /opt/node/\n# 移动到目录中\nmv /root/node-v10.17.0-linux-x64/* /opt/node/\n# 删除之前的软链\nrm -f /usr/local/bin/node\nrm -f /usr/local/bin/npm\n# 创建新的软链\nln -s /opt/node/bin/node /usr/local/bin/node\nln -s /opt/node/bin/npm /usr/local/bin/npm\n"),c("div",{class:"m-mdic-copy-wrapper"},[c("div",{class:"u-mdic-copy-notify",id:"j-notify-1629557986759-72477"},"复制成功"),c("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"# 创建目录\nmkdir -p /opt/node/\n# 移动到目录中\nmv /root/node-v10.17.0-linux-x64/* /opt/node/\n# 删除之前的软链\nrm -f /usr/local/bin/node\nrm -f /usr/local/bin/npm\n# 创建新的软链\nln -s /opt/node/bin/node /usr/local/bin/node\nln -s /opt/node/bin/npm /usr/local/bin/npm\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629557986759-72477","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),c("div",{class:"line-numbers-wrapper"},[c("span",{class:"line-number"},"1"),c("br"),c("span",{class:"line-number"},"2"),c("br"),c("span",{class:"line-number"},"3"),c("br"),c("span",{class:"line-number"},"4"),c("br"),c("span",{class:"line-number"},"5"),c("br"),c("span",{class:"line-number"},"6"),c("br"),c("span",{class:"line-number"},"7"),c("br"),c("span",{class:"line-number"},"8"),c("br"),c("span",{class:"line-number"},"9"),c("br"),c("span",{class:"line-number"},"10"),c("br")])],-1),C=c("h2",{id:"安装nvm管理多个node版本"},[c("a",{class:"header-anchor",href:"#安装nvm管理多个node版本","aria-hidden":"true"},"#"),o(" 安装NVM管理多个node版本")],-1),k=c("p",null,[o("NVM（Node version manager）是Node.js的版本管理软件，使用户可以轻松在Node.js各个版本间进行切换。适用于长期做 node 开发的人员或有快速更新node版本、快速切换node版本这一需求的用户。"),c("br"),o(" 安装步骤：")],-1),g=c("ol",null,[c("li",null,"直接使用git将源码克隆到本地的~/.nvm目录下，并检查最新版本。")],-1),x=c("div",{class:"language-sh line-numbers-mode"},[c("pre",null,[c("code",null,"yum install git\n\ngit clone https://github.com/cnpm/nvm.git ~/.nvm && cd ~/.nvm && git checkout `git describe --abbrev=0 --tags`\n"),c("div",{class:"m-mdic-copy-wrapper"},[c("div",{class:"u-mdic-copy-notify",id:"j-notify-1629557986759-42260"},"复制成功"),c("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"yum install git\n\ngit clone https://github.com/cnpm/nvm.git ~/.nvm && cd ~/.nvm && git checkout `git describe --abbrev=0 --tags`\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629557986759-42260","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),c("div",{class:"line-numbers-wrapper"},[c("span",{class:"line-number"},"1"),c("br"),c("span",{class:"line-number"},"2"),c("br"),c("span",{class:"line-number"},"3"),c("br")])],-1),j=c("ol",{start:"2"},[c("li",null,"激活NVM。")],-1),w=c("div",{class:"language-sh line-numbers-mode"},[c("pre",null,[c("code",null,'echo ". ~/.nvm/nvm.sh" >> /etc/profile\n\nsource /etc/profile\n'),c("div",{class:"m-mdic-copy-wrapper"},[c("div",{class:"u-mdic-copy-notify",id:"j-notify-1629557986759-58005"},"复制成功"),c("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":'echo ". ~/.nvm/nvm.sh" >> /etc/profile\n\nsource /etc/profile\n',"data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629557986759-58005","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),c("div",{class:"line-numbers-wrapper"},[c("span",{class:"line-number"},"1"),c("br"),c("span",{class:"line-number"},"2"),c("br"),c("span",{class:"line-number"},"3"),c("br")])],-1),$=c("ol",{start:"3"},[c("li",null,"列出Node.js的所有版本。")],-1),N=c("div",{class:"language-sh line-numbers-mode"},[c("pre",null,[c("code",null,"nvm list-remote\n"),c("div",{class:"m-mdic-copy-wrapper"},[c("div",{class:"u-mdic-copy-notify",id:"j-notify-1629557986760-98291"},"复制成功"),c("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"nvm list-remote\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629557986760-98291","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),c("div",{class:"line-numbers-wrapper"},[c("span",{class:"line-number"},"1"),c("br")])],-1),T=c("ol",{start:"4"},[c("li",null,"安装多个Node.js版本。")],-1),E=c("div",{class:"language-sh line-numbers-mode"},[c("pre",null,[c("code",null,"nvm install v6.9.5\n\nnvm install v7.4.0\n"),c("div",{class:"m-mdic-copy-wrapper"},[c("div",{class:"u-mdic-copy-notify",id:"j-notify-1629557986760-4014"},"复制成功"),c("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"nvm install v6.9.5\n\nnvm install v7.4.0\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629557986760-4014","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),c("div",{class:"line-numbers-wrapper"},[c("span",{class:"line-number"},"1"),c("br"),c("span",{class:"line-number"},"2"),c("br"),c("span",{class:"line-number"},"3"),c("br")])],-1),I=c("ol",{start:"5"},[c("li",null,"查看已安装Node.js版本，当前使用的版本为v6.9.5。")],-1),A=c("div",{class:"language-sh line-numbers-mode"},[c("pre",null,[c("code",null,"[root@iZuf62didsxigy36d6kjtrZ .nvm]# nvm ls\n-> v6.9.5\nv7.4.0\n"),c("div",{class:"m-mdic-copy-wrapper"},[c("div",{class:"u-mdic-copy-notify",id:"j-notify-1629557986760-22843"},"复制成功"),c("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"[root@iZuf62didsxigy36d6kjtrZ .nvm]# nvm ls\n-> v6.9.5\nv7.4.0\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629557986760-22843","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),c("div",{class:"line-numbers-wrapper"},[c("span",{class:"line-number"},"1"),c("br"),c("span",{class:"line-number"},"2"),c("br"),c("span",{class:"line-number"},"3"),c("br")])],-1),P=c("ol",{start:"6"},[c("li",null,"切换Node.js版本至v7.4.0。")],-1),D=c("div",{class:"language-sh line-numbers-mode"},[c("pre",null,[c("code",null,"\n[root@iZuf62didsxigy36d6kjtrZ .nvm]# nvm use v7.4.0\nNow using node v7.4.0\n"),c("div",{class:"m-mdic-copy-wrapper"},[c("div",{class:"u-mdic-copy-notify",id:"j-notify-1629557986760-89933"},"复制成功"),c("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"\n[root@iZuf62didsxigy36d6kjtrZ .nvm]# nvm use v7.4.0\nNow using node v7.4.0\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629557986760-89933","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),c("div",{class:"line-numbers-wrapper"},[c("span",{class:"line-number"},"1"),c("br"),c("span",{class:"line-number"},"2"),c("br"),c("span",{class:"line-number"},"3"),c("br")])],-1),F=c("ol",{start:"7"},[c("li",null,"NVM的更多操作请参考帮助文档：")],-1),B=c("div",{class:"language-sh line-numbers-mode"},[c("pre",null,[c("code",null,"nvm help\n"),c("div",{class:"m-mdic-copy-wrapper"},[c("div",{class:"u-mdic-copy-notify",id:"j-notify-1629557986760-87553"},"复制成功"),c("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"nvm help\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629557986760-87553","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),c("div",{class:"line-numbers-wrapper"},[c("span",{class:"line-number"},"1"),c("br")])],-1),S=c("h2",{id:"部署测试项目"},[c("a",{class:"header-anchor",href:"#部署测试项目","aria-hidden":"true"},"#"),o(" 部署测试项目")],-1),_=c("ol",null,[c("li",null,"新建项目文件example.js。")],-1),O=c("div",{class:"language-sh line-numbers-mode"},[c("pre",null,[c("code",null,"cd ~\ntouch example.js\n"),c("div",{class:"m-mdic-copy-wrapper"},[c("div",{class:"u-mdic-copy-notify",id:"j-notify-1629557986761-96385"},"复制成功"),c("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"cd ~\ntouch example.js\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629557986761-96385","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),c("div",{class:"line-numbers-wrapper"},[c("span",{class:"line-number"},"1"),c("br"),c("span",{class:"line-number"},"2"),c("br")])],-1),V=c("ol",{start:"2"},[c("li",null,"使用vim编辑器打开项目文件example.js。")],-1),Z=c("div",{class:"language-sh line-numbers-mode"},[c("pre",null,[c("code",null,"yum install vim\nvim example.js\n"),c("div",{class:"m-mdic-copy-wrapper"},[c("div",{class:"u-mdic-copy-notify",id:"j-notify-1629557986761-65952"},"复制成功"),c("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"yum install vim\nvim example.js\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629557986761-65952","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),c("div",{class:"line-numbers-wrapper"},[c("span",{class:"line-number"},"1"),c("br"),c("span",{class:"line-number"},"2"),c("br")])],-1),q=c("p",null,[o("输入"),c("code",null,"i"),o("，进入编辑模式,将以下项目文件内容粘贴到文件中。使用"),c("code",null,"Esc"),o("按钮，退出编辑模式，输入"),c("code",null,":wq"),o("，回车，保存文件内容并退出。")],-1),M=c("p",null,"项目文件内容：",-1),z=c("div",{class:"language-js line-numbers-mode"},[c("pre",null,[c("code",null,[c("span",{class:"token keyword"},"const"),o(" http "),c("span",{class:"token operator"},"="),o(),c("span",{class:"token function"},"require"),c("span",{class:"token punctuation"},"("),c("span",{class:"token string"},"'http'"),c("span",{class:"token punctuation"},")"),c("span",{class:"token punctuation"},";"),o("\n"),c("span",{class:"token keyword"},"const"),o(" hostname "),c("span",{class:"token operator"},"="),o(),c("span",{class:"token string"},"'0.0.0.0'"),c("span",{class:"token punctuation"},";"),o("\n"),c("span",{class:"token keyword"},"const"),o(" port "),c("span",{class:"token operator"},"="),o(),c("span",{class:"token number"},"3000"),c("span",{class:"token punctuation"},";"),o("\n"),c("span",{class:"token keyword"},"const"),o(" server "),c("span",{class:"token operator"},"="),o(" http"),c("span",{class:"token punctuation"},"."),c("span",{class:"token function"},"createServer"),c("span",{class:"token punctuation"},"("),c("span",{class:"token punctuation"},"("),c("span",{class:"token parameter"},[o("req"),c("span",{class:"token punctuation"},","),o(" res")]),c("span",{class:"token punctuation"},")"),o(),c("span",{class:"token operator"},"=>"),o(),c("span",{class:"token punctuation"},"{"),o("\nres"),c("span",{class:"token punctuation"},"."),o("statusCode "),c("span",{class:"token operator"},"="),o(),c("span",{class:"token number"},"200"),c("span",{class:"token punctuation"},";"),o("\nres"),c("span",{class:"token punctuation"},"."),c("span",{class:"token function"},"setHeader"),c("span",{class:"token punctuation"},"("),c("span",{class:"token string"},"'Content-Type'"),c("span",{class:"token punctuation"},","),o(),c("span",{class:"token string"},"'text/plain'"),c("span",{class:"token punctuation"},")"),c("span",{class:"token punctuation"},";"),o("\nres"),c("span",{class:"token punctuation"},"."),c("span",{class:"token function"},"end"),c("span",{class:"token punctuation"},"("),c("span",{class:"token string"},"'Hello World\\n'"),c("span",{class:"token punctuation"},")"),c("span",{class:"token punctuation"},";"),o("\n"),c("span",{class:"token punctuation"},"}"),c("span",{class:"token punctuation"},")"),c("span",{class:"token punctuation"},";"),o("\nserver"),c("span",{class:"token punctuation"},"."),c("span",{class:"token function"},"listen"),c("span",{class:"token punctuation"},"("),o("port"),c("span",{class:"token punctuation"},","),o(" hostname"),c("span",{class:"token punctuation"},","),o(),c("span",{class:"token punctuation"},"("),c("span",{class:"token punctuation"},")"),o(),c("span",{class:"token operator"},"=>"),o(),c("span",{class:"token punctuation"},"{"),o("\nconsole"),c("span",{class:"token punctuation"},"."),c("span",{class:"token function"},"log"),c("span",{class:"token punctuation"},"("),c("span",{class:"token template-string"},[c("span",{class:"token template-punctuation string"},"`"),c("span",{class:"token string"},"Server running at http://"),c("span",{class:"token interpolation"},[c("span",{class:"token interpolation-punctuation punctuation"},"${"),o("hostname"),c("span",{class:"token interpolation-punctuation punctuation"},"}")]),c("span",{class:"token string"},":"),c("span",{class:"token interpolation"},[c("span",{class:"token interpolation-punctuation punctuation"},"${"),o("port"),c("span",{class:"token interpolation-punctuation punctuation"},"}")]),c("span",{class:"token string"},"/"),c("span",{class:"token template-punctuation string"},"`")]),c("span",{class:"token punctuation"},")"),c("span",{class:"token punctuation"},";"),o("\n"),c("span",{class:"token punctuation"},"}"),c("span",{class:"token punctuation"},")"),c("span",{class:"token punctuation"},";"),o("\n")]),c("div",{class:"m-mdic-copy-wrapper"},[c("div",{class:"u-mdic-copy-notify",id:"j-notify-1629557986761-3137"},"复制成功"),c("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"const http = require('http');\nconst hostname = '0.0.0.0';\nconst port = 3000;\nconst server = http.createServer((req, res) => {\nres.statusCode = 200;\nres.setHeader('Content-Type', 'text/plain');\nres.end('Hello World\\n');\n});\nserver.listen(port, hostname, () => {\nconsole.log(`Server running at http://${hostname}:${port}/`);\n});\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629557986761-3137","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),c("div",{class:"line-numbers-wrapper"},[c("span",{class:"line-number"},"1"),c("br"),c("span",{class:"line-number"},"2"),c("br"),c("span",{class:"line-number"},"3"),c("br"),c("span",{class:"line-number"},"4"),c("br"),c("span",{class:"line-number"},"5"),c("br"),c("span",{class:"line-number"},"6"),c("br"),c("span",{class:"line-number"},"7"),c("br"),c("span",{class:"line-number"},"8"),c("br"),c("span",{class:"line-number"},"9"),c("br"),c("span",{class:"line-number"},"10"),c("br"),c("span",{class:"line-number"},"11"),c("br")])],-1),H=c("blockquote",null,[c("p",null,"注：项目文件内容中的3000为端口号，可以自行定义。并注意在阿里云控制台安全策略中开放对于的端口")],-1),W=c("ol",{start:"3"},[c("li",null,"运行项目。")],-1),L=c("div",{class:"language-sh line-numbers-mode"},[c("pre",null,[c("code",null,"node ~/example.js\n"),c("div",{class:"m-mdic-copy-wrapper"},[c("div",{class:"u-mdic-copy-notify",id:"j-notify-1629557986762-76308"},"复制成功"),c("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"node ~/example.js\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629557986762-76308","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),c("div",{class:"line-numbers-wrapper"},[c("span",{class:"line-number"},"1"),c("br")])],-1),R=c("p",null,[o("注：可以使用命令"),c("code",null,"node ~/example.js &"),o("将项目置于后台运行。")],-1),U=c("ol",{start:"4"},[c("li",null,"使用命令查看项目端口是否存在。")],-1),X=c("div",{class:"language-sh line-numbers-mode"},[c("pre",null,[c("code",null,"netstat -tpln\n"),c("div",{class:"m-mdic-copy-wrapper"},[c("div",{class:"u-mdic-copy-notify",id:"j-notify-1629557986762-93309"},"复制成功"),c("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"netstat -tpln\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629557986762-93309","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),c("div",{class:"line-numbers-wrapper"},[c("span",{class:"line-number"},"1"),c("br")])],-1),G=c("ol",{start:"5"},[c("li",null,[o("在浏览器中输入"),c("code",null,"http://IP:端口号"),o(" 访问项目。")])],-1),J=c("h2",{id:"安装pm2-守护node进程"},[c("a",{class:"header-anchor",href:"#安装pm2-守护node进程","aria-hidden":"true"},"#"),o(" 安装pm2 守护node进程")],-1),K=c("ol",null,[c("li",null,"安装")],-1),Q=c("div",{class:"language-sh line-numbers-mode"},[c("pre",null,[c("code",null,"npm install -g pm2\n"),c("div",{class:"m-mdic-copy-wrapper"},[c("div",{class:"u-mdic-copy-notify",id:"j-notify-1629557986762-31230"},"复制成功"),c("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"npm install -g pm2\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629557986762-31230","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),c("div",{class:"line-numbers-wrapper"},[c("span",{class:"line-number"},"1"),c("br")])],-1),Y=c("p",null,"此时执行pm2可能会提示找不到pm2命令",-1),tt=c("ol",{start:"2"},[c("li",null,"通过创建软链接的方法，使得在任意目录下都可以直接使用pm2命令：")],-1),nt=c("div",{class:"language-sh line-numbers-mode"},[c("pre",null,[c("code",null,"ln -s /root/node-v10.17.0-linux-x64/bin/pm2 /usr/local/bin/pm2\n"),c("div",{class:"m-mdic-copy-wrapper"},[c("div",{class:"u-mdic-copy-notify",id:"j-notify-1629557986763-7619"},"复制成功"),c("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"ln -s /root/node-v10.17.0-linux-x64/bin/pm2 /usr/local/bin/pm2\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629557986763-7619","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),c("div",{class:"line-numbers-wrapper"},[c("span",{class:"line-number"},"1"),c("br")])],-1),et=c("p",null,"上面的软链路径不要疑惑，pm2确实安装到了node解压目录下，想要获得npm全局的安装路径可以使用命令",-1),ct=c("div",{class:"language-sh line-numbers-mode"},[c("pre",null,[c("code",null,"npm config get prefix\n#使用下面的命令设置npm的全局安装路径\nnpm config set prefix \n"),c("div",{class:"m-mdic-copy-wrapper"},[c("div",{class:"u-mdic-copy-notify",id:"j-notify-1629557986764-81733"},"复制成功"),c("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"npm config get prefix\n#使用下面的命令设置npm的全局安装路径\nnpm config set prefix \n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629557986764-81733","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),c("div",{class:"line-numbers-wrapper"},[c("span",{class:"line-number"},"1"),c("br"),c("span",{class:"line-number"},"2"),c("br"),c("span",{class:"line-number"},"3"),c("br")])],-1),ot=c("ol",{start:"3"},[c("li",null,"运行")],-1),at=c("div",{class:"language-sh line-numbers-mode"},[c("pre",null,[c("code",null,"cd myapp/\npm2 start ./bin/www\n"),c("div",{class:"m-mdic-copy-wrapper"},[c("div",{class:"u-mdic-copy-notify",id:"j-notify-1629557986764-54224"},"复制成功"),c("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"cd myapp/\npm2 start ./bin/www\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629557986764-54224","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),c("div",{class:"line-numbers-wrapper"},[c("span",{class:"line-number"},"1"),c("br"),c("span",{class:"line-number"},"2"),c("br")])],-1),it=c("p",null,"完.",-1);i.render=function(e,c,o,a,i,dt){return t(),n("div",null,[d,l,s,m,p,r,y,u,b,h,f,v,C,k,g,x,j,w,$,N,T,E,I,A,P,D,F,B,S,_,O,V,Z,q,M,z,H,W,L,R,U,X,G,J,K,Q,Y,tt,nt,et,ct,ot,at,it])};export default i;export{a as __pageData};
