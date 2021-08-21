import{o as n,c as t,f as e,a,x as i}from"./app.b304d650.js";const c='{"title":"前端面试题汇总-css-1","description":"","frontmatter":{"title":"前端面试题汇总-css-1","tag":["CSS"],"cover":"https://gitee.com/artiely/Figure-bed/raw/master/image/20200829105244.png","base64":"fafa00","author":"artiely","date":"2020-8-27"},"headers":[{"level":2,"title":"BFC、IFC、GFC、FFC","slug":"bfc-ifc-gfc-ffc"},{"level":3,"title":"What\'s FC？","slug":"whats-fc"},{"level":3,"title":"BFC","slug":"bfc"},{"level":3,"title":"IFC","slug":"ifc"},{"level":3,"title":"GFC","slug":"gfc"},{"level":3,"title":"FFC","slug":"ffc"},{"level":2,"title":"display/opacity","slug":"displayopacity"},{"level":3,"title":"display: none;","slug":"display-none"},{"level":3,"title":"visibility: hidden;","slug":"visibility-hidden"},{"level":3,"title":"opacity: 0;","slug":"opacity-0"},{"level":3,"title":"display: none;","slug":"display-none-1"},{"level":3,"title":"visibility: hidden;","slug":"visibility-hidden-1"},{"level":3,"title":"opacity: 0;","slug":"opacity-0-1"},{"level":2,"title":"内联覆盖元素宽度","slug":"内联覆盖元素宽度"},{"level":3,"title":"在不改变当前代码的情况下，使这张图片的宽度为300px?","slug":"在不改变当前代码的情况下使这张图片的宽度为300px"},{"level":3,"title":"1.css方法","slug":"1css方法"},{"level":3,"title":"2.js方法","slug":"2js方法"}],"relativePath":"post/2020/2020-8-27-frontend-css1.md","lastUpdated":1629110862979}',l={},s=e('',21),o=a("div",{class:"language-"},[a("pre",null,[a("code",null,"div{\n    background:red;\n    position: absolute;\n    left:50%;\n    top:50%;\n    transform: translate(-50%, -50%);\n}\n"),a("div",{class:"m-mdic-copy-wrapper"},[a("div",{class:"u-mdic-copy-notify",id:"j-notify-1629558768203-48814"},"复制成功"),a("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"div{\n    background:red;\n    position: absolute;\n    left:50%;\n    top:50%;\n    transform: translate(-50%, -50%);\n}\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629558768203-48814","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),a("div",{class:"line-numbers-wrapper"},[a("span",{class:"line-number"},"1"),a("br"),a("span",{class:"line-number"},"2"),a("br"),a("span",{class:"line-number"},"3"),a("br"),a("span",{class:"line-number"},"4"),a("br"),a("span",{class:"line-number"},"5"),a("br"),a("span",{class:"line-number"},"6"),a("br"),a("span",{class:"line-number"},"7"),a("br")])],-1),d=a("p",null,null,-1),p=a("p",null,[a("strong",null,"方法二:")],-1),r=a("p",null,"绝对定位方法：确定了当前div的宽度，margin值为当前div宽度一半的负值",-1),u=a("p",null,"图片展示： 如方法一的图片展示",-1),m=a("p",null,"代码如下：",-1),y=a("div",{class:"language-"},[a("pre",null,[a("code",null,"div{\n    width:600px;\n    height: 600px;\n    background:red;\n    position: absolute;\n    left:50%;\n    top:50%;\n    margin-left:-300px;\n    margin-top:-300px;\n}\n"),a("div",{class:"m-mdic-copy-wrapper"},[a("div",{class:"u-mdic-copy-notify",id:"j-notify-1629558768203-77058"},"复制成功"),a("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"div{\n    width:600px;\n    height: 600px;\n    background:red;\n    position: absolute;\n    left:50%;\n    top:50%;\n    margin-left:-300px;\n    margin-top:-300px;\n}\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629558768203-77058","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),a("div",{class:"line-numbers-wrapper"},[a("span",{class:"line-number"},"1"),a("br"),a("span",{class:"line-number"},"2"),a("br"),a("span",{class:"line-number"},"3"),a("br"),a("span",{class:"line-number"},"4"),a("br"),a("span",{class:"line-number"},"5"),a("br"),a("span",{class:"line-number"},"6"),a("br"),a("span",{class:"line-number"},"7"),a("br"),a("span",{class:"line-number"},"8"),a("br"),a("span",{class:"line-number"},"9"),a("br"),a("span",{class:"line-number"},"10"),a("br")])],-1),b=a("p",null,null,-1),h=a("p",null,[a("strong",null,"方法三：")],-1),f=a("p",null,"绝对定位方法：绝对定位下top left right bottom 都设置0",-1),g=a("p",null,"图片展示： 如方法一的图片展示",-1),x=a("p",null,"代码如下：",-1),k=a("div",{class:"language-"},[a("pre",null,[a("code",null,"div.child{\n    width: 600px;\n    height: 600px;\n    background: red;\n    position:absolute;\n    left:0;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    margin: auto;\n}\n"),a("div",{class:"m-mdic-copy-wrapper"},[a("div",{class:"u-mdic-copy-notify",id:"j-notify-1629558768203-57683"},"复制成功"),a("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"div.child{\n    width: 600px;\n    height: 600px;\n    background: red;\n    position:absolute;\n    left:0;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    margin: auto;\n}\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629558768203-57683","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),a("div",{class:"line-numbers-wrapper"},[a("span",{class:"line-number"},"1"),a("br"),a("span",{class:"line-number"},"2"),a("br"),a("span",{class:"line-number"},"3"),a("br"),a("span",{class:"line-number"},"4"),a("br"),a("span",{class:"line-number"},"5"),a("br"),a("span",{class:"line-number"},"6"),a("br"),a("span",{class:"line-number"},"7"),a("br"),a("span",{class:"line-number"},"8"),a("br"),a("span",{class:"line-number"},"9"),a("br"),a("span",{class:"line-number"},"10"),a("br"),a("span",{class:"line-number"},"11"),a("br")])],-1),C=a("p",null,null,-1),v=a("p",null,[a("strong",null,"方法四:")],-1),F=a("p",null,"flex布局方法：当前div的父级添加flex css样式",-1),w=a("p",null,"展示图如下：",-1),j=a("p",null,[a("img",{src:"https://gitee.com/artiely/Figure-bed/raw/master/image/20200829093029.png",alt:""})],-1),I=a("p",null,"代码如下：",-1),T=a("div",{class:"language-"},[a("pre",null,[a("code",null,".box{\n    height:800px;\n    -webkit-display:flex;\n    display:flex;\n    -webkit-align-items:center;\n    align-items:center;\n    -webkit-justify-content:center;\n    justify-content:center;\n    border:1px solid #ccc;\n}\ndiv.child{\n    width:600px;\n    height:600px;\n    background-color:red;\n}\n"),a("div",{class:"m-mdic-copy-wrapper"},[a("div",{class:"u-mdic-copy-notify",id:"j-notify-1629558768203-40779"},"复制成功"),a("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":".box{\n    height:800px;\n    -webkit-display:flex;\n    display:flex;\n    -webkit-align-items:center;\n    align-items:center;\n    -webkit-justify-content:center;\n    justify-content:center;\n    border:1px solid #ccc;\n}\ndiv.child{\n    width:600px;\n    height:600px;\n    background-color:red;\n}\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629558768203-40779","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),a("div",{class:"line-numbers-wrapper"},[a("span",{class:"line-number"},"1"),a("br"),a("span",{class:"line-number"},"2"),a("br"),a("span",{class:"line-number"},"3"),a("br"),a("span",{class:"line-number"},"4"),a("br"),a("span",{class:"line-number"},"5"),a("br"),a("span",{class:"line-number"},"6"),a("br"),a("span",{class:"line-number"},"7"),a("br"),a("span",{class:"line-number"},"8"),a("br"),a("span",{class:"line-number"},"9"),a("br"),a("span",{class:"line-number"},"10"),a("br"),a("span",{class:"line-number"},"11"),a("br"),a("span",{class:"line-number"},"12"),a("br"),a("span",{class:"line-number"},"13"),a("br"),a("span",{class:"line-number"},"14"),a("br"),a("span",{class:"line-number"},"15"),a("br")])],-1),$=a("p",null,null,-1),_=a("p",null,[a("strong",null,"方法五:")],-1),B=a("p",null,"table-cell实现水平垂直居中: table-cell middle center组合使用",-1),D=a("p",null,"展示图如下：",-1),E=a("p",null,[a("img",{src:"https://gitee.com/artiely/Figure-bed/raw/master/image/20200829093051.png",alt:""})],-1),N=a("p",null,"代码如下：",-1),A=a("div",{class:"language-"},[a("pre",null,[a("code",null,".table-cell {\n    display: table-cell;\n    vertical-align: middle;\n    text-align: center;\n    width: 240px;\n    height: 180px;\n    border:1px solid #666;\n}\n"),a("div",{class:"m-mdic-copy-wrapper"},[a("div",{class:"u-mdic-copy-notify",id:"j-notify-1629558768203-70899"},"复制成功"),a("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":".table-cell {\n    display: table-cell;\n    vertical-align: middle;\n    text-align: center;\n    width: 240px;\n    height: 180px;\n    border:1px solid #666;\n}\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629558768203-70899","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),a("div",{class:"line-numbers-wrapper"},[a("span",{class:"line-number"},"1"),a("br"),a("span",{class:"line-number"},"2"),a("br"),a("span",{class:"line-number"},"3"),a("br"),a("span",{class:"line-number"},"4"),a("br"),a("span",{class:"line-number"},"5"),a("br"),a("span",{class:"line-number"},"6"),a("br"),a("span",{class:"line-number"},"7"),a("br"),a("span",{class:"line-number"},"8"),a("br")])],-1),S=a("p",null,null,-1),q=a("p",null,[a("strong",null,"方法六:")],-1),P=a("p",null,"绝对定位：calc() 函数动态计算实现水平垂直居中",-1),O=a("p",null,"展示图如下：",-1),M=a("p",null,[a("img",{src:"https://gitee.com/artiely/Figure-bed/raw/master/image/20200829093116.png",alt:""})],-1),G=a("p",null,"代码如下：",-1),z=a("div",{class:"language-"},[a("pre",null,[a("code",null,".calc{\n  position: relative;\n  border: 1px solid #ccc;\n  width: 400px;\n  height: 160px;\n}\n.calc .child{\n  position: absolute;\n  width: 200px;\n  height: 50px;\n  left:-webkit-calc((400px - 200px)/2);\n  top:-webkit-calc((160px - 50px)/2);\n  left:-moz-calc((400px - 200px)/2);\n  top:-moz-calc((160px - 50px)/2);\n  left:calc((400px - 200px)/2);\n  top:calc((160px - 50px)/2);\n}　　\n"),a("div",{class:"m-mdic-copy-wrapper"},[a("div",{class:"u-mdic-copy-notify",id:"j-notify-1629558768203-31798"},"复制成功"),a("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":".calc{\n  position: relative;\n  border: 1px solid #ccc;\n  width: 400px;\n  height: 160px;\n}\n.calc .child{\n  position: absolute;\n  width: 200px;\n  height: 50px;\n  left:-webkit-calc((400px - 200px)/2);\n  top:-webkit-calc((160px - 50px)/2);\n  left:-moz-calc((400px - 200px)/2);\n  top:-moz-calc((160px - 50px)/2);\n  left:calc((400px - 200px)/2);\n  top:calc((160px - 50px)/2);\n}　　\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629558768203-31798","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),a("div",{class:"line-numbers-wrapper"},[a("span",{class:"line-number"},"1"),a("br"),a("span",{class:"line-number"},"2"),a("br"),a("span",{class:"line-number"},"3"),a("br"),a("span",{class:"line-number"},"4"),a("br"),a("span",{class:"line-number"},"5"),a("br"),a("span",{class:"line-number"},"6"),a("br"),a("span",{class:"line-number"},"7"),a("br"),a("span",{class:"line-number"},"8"),a("br"),a("span",{class:"line-number"},"9"),a("br"),a("span",{class:"line-number"},"10"),a("br"),a("span",{class:"line-number"},"11"),a("br"),a("span",{class:"line-number"},"12"),a("br"),a("span",{class:"line-number"},"13"),a("br"),a("span",{class:"line-number"},"14"),a("br"),a("span",{class:"line-number"},"15"),a("br"),a("span",{class:"line-number"},"16"),a("br"),a("span",{class:"line-number"},"17"),a("br")])],-1),V=e('',15),W=a("div",{class:"language-"},[a("pre",null,[a("code",null,'<img src="1.jpg" style="width:480px!important"/>\n'),a("div",{class:"m-mdic-copy-wrapper"},[a("div",{class:"u-mdic-copy-notify",id:"j-notify-1629558768204-57249"},"复制成功"),a("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":'<img src="1.jpg" style="width:480px!important"/>\n',"data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629558768204-57249","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),a("div",{class:"line-numbers-wrapper"},[a("span",{class:"line-number"},"1"),a("br")])],-1),K=a("h3",{id:"1css方法"},[a("a",{class:"header-anchor",href:"#1css方法","aria-hidden":"true"},"#"),i(" 1.css方法")],-1),L=a("div",{class:"language-html line-numbers-mode"},[a("pre",null,[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),i("img")]),i(),a("span",{class:"token attr-name"},"src"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),i("1.jpg"),a("span",{class:"token punctuation"},'"')]),i(),a("span",{class:"token special-attr"},[a("span",{class:"token attr-name"},"style"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),a("span",{class:"token value css language-css"},[a("span",{class:"token property"},"width"),a("span",{class:"token punctuation"},":"),i("480px"),a("span",{class:"token important"},"!important"),a("span",{class:"token punctuation"},";"),i(),a("span",{class:"token property"},"max-width"),a("span",{class:"token punctuation"},":"),i(" 300px")]),a("span",{class:"token punctuation"},'"')])]),a("span",{class:"token punctuation"},">")]),i("\n"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),i("img")]),i(),a("span",{class:"token attr-name"},"src"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),i("1.jpg"),a("span",{class:"token punctuation"},'"')]),i(),a("span",{class:"token special-attr"},[a("span",{class:"token attr-name"},"style"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),a("span",{class:"token value css language-css"},[a("span",{class:"token property"},"width"),a("span",{class:"token punctuation"},":"),i("480px"),a("span",{class:"token important"},"!important"),a("span",{class:"token punctuation"},";"),i(),a("span",{class:"token property"},"transform"),a("span",{class:"token punctuation"},":"),i(),a("span",{class:"token function"},"scale"),a("span",{class:"token punctuation"},"("),i("0.625"),a("span",{class:"token punctuation"},","),i(" 1"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";")]),a("span",{class:"token punctuation"},'"')])]),i(),a("span",{class:"token punctuation"},">")]),i("\n"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),i("img")]),i(),a("span",{class:"token attr-name"},"src"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),i("1.jpg"),a("span",{class:"token punctuation"},'"')]),i(),a("span",{class:"token special-attr"},[a("span",{class:"token attr-name"},"style"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),a("span",{class:"token value css language-css"},[a("span",{class:"token property"},"width"),a("span",{class:"token punctuation"},":"),i("480px"),a("span",{class:"token important"},"!important"),a("span",{class:"token punctuation"},";"),i(),a("span",{class:"token property"},"width"),a("span",{class:"token punctuation"},":"),i("300px"),a("span",{class:"token important"},"!important"),a("span",{class:"token punctuation"},";")]),a("span",{class:"token punctuation"},'"')])]),a("span",{class:"token punctuation"},">")]),i("\n")]),a("div",{class:"m-mdic-copy-wrapper"},[a("div",{class:"u-mdic-copy-notify",id:"j-notify-1629558768204-95675"},"复制成功"),a("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":'<img src="1.jpg" style="width:480px!important; max-width: 300px">\n<img src="1.jpg" style="width:480px!important; transform: scale(0.625, 1);" >\n<img src="1.jpg" style="width:480px!important; width:300px!important;">\n',"data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629558768204-95675","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),a("div",{class:"line-numbers-wrapper"},[a("span",{class:"line-number"},"1"),a("br"),a("span",{class:"line-number"},"2"),a("br"),a("span",{class:"line-number"},"3"),a("br")])],-1),R=a("h3",{id:"2js方法"},[a("a",{class:"header-anchor",href:"#2js方法","aria-hidden":"true"},"#"),i(" 2.js方法")],-1),J=a("div",{class:"language-JavaScript line-numbers-mode"},[a("pre",null,[a("code",null,[i("document"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"getElementsByTagName"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},'"img"'),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},"["),a("span",{class:"token number"},"0"),a("span",{class:"token punctuation"},"]"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"setAttribute"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},'"style"'),a("span",{class:"token punctuation"},","),a("span",{class:"token string"},'"width:300px!important;"'),a("span",{class:"token punctuation"},")"),i("\n")]),a("div",{class:"m-mdic-copy-wrapper"},[a("div",{class:"u-mdic-copy-notify",id:"j-notify-1629558768204-81100"},"复制成功"),a("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":'document.getElementsByTagName("img")[0].setAttribute("style","width:300px!important;")\n',"data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629558768204-81100","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),a("div",{class:"line-numbers-wrapper"},[a("span",{class:"line-number"},"1"),a("br")])],-1);l.render=function(e,a,i,c,l,U){return n(),t("div",null,[s,o,d,p,r,u,m,y,b,h,f,g,x,k,C,v,F,w,j,I,T,$,_,B,D,E,N,A,S,q,P,O,M,G,z,V,W,K,L,R,J])};export default l;export{c as __pageData};
