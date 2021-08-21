import{o as n,c as t,f as e,a,x as i}from"./app.5f3fb606.js";const c='{"title":"前端面试题汇总-css-1","description":"","frontmatter":{"title":"前端面试题汇总-css-1","tag":["CSS"],"cover":"https://gitee.com/artiely/Figure-bed/raw/master/image/20200829105244.png","base64":"fafa00","author":"artiely","date":"2020-8-27"},"headers":[{"level":2,"title":"BFC、IFC、GFC、FFC","slug":"bfc-ifc-gfc-ffc"},{"level":3,"title":"What\'s FC？","slug":"whats-fc"},{"level":3,"title":"BFC","slug":"bfc"},{"level":3,"title":"IFC","slug":"ifc"},{"level":3,"title":"GFC","slug":"gfc"},{"level":3,"title":"FFC","slug":"ffc"},{"level":2,"title":"display/opacity","slug":"displayopacity"},{"level":3,"title":"display: none;","slug":"display-none"},{"level":3,"title":"visibility: hidden;","slug":"visibility-hidden"},{"level":3,"title":"opacity: 0;","slug":"opacity-0"},{"level":3,"title":"display: none;","slug":"display-none-1"},{"level":3,"title":"visibility: hidden;","slug":"visibility-hidden-1"},{"level":3,"title":"opacity: 0;","slug":"opacity-0-1"},{"level":2,"title":"内联覆盖元素宽度","slug":"内联覆盖元素宽度"},{"level":3,"title":"在不改变当前代码的情况下，使这张图片的宽度为300px?","slug":"在不改变当前代码的情况下使这张图片的宽度为300px"},{"level":3,"title":"1.css方法","slug":"1css方法"},{"level":3,"title":"2.js方法","slug":"2js方法"}],"relativePath":"post/2020/2020-8-27-frontend-css1.md","lastUpdated":1629110862979}',l={},s=e('<h1 id="前端面试题汇总-css-1"><a class="header-anchor" href="#前端面试题汇总-css-1" aria-hidden="true">#</a> 前端面试题汇总-css-1</h1><h2 id="bfc-ifc-gfc-ffc"><a class="header-anchor" href="#bfc-ifc-gfc-ffc" aria-hidden="true">#</a> BFC、IFC、GFC、FFC</h2><p>CSS2.1中只有BFC和IFC, CSS3中才有GFC和FFC。</p><p>到底什么是BFC、IFC、GFC和FFC</p><h3 id="whats-fc"><a class="header-anchor" href="#whats-fc" aria-hidden="true">#</a> What&#39;s FC？</h3><p>一定不是KFC，FC的全称是：Formatting Contexts，是W3C CSS2.1规范中的一个概念。它是页面中的一块渲染区域，并且有一套渲染规则，它决定了其子元素将如何定位，以及和其他元素的关系和相互作用。</p><h3 id="bfc"><a class="header-anchor" href="#bfc" aria-hidden="true">#</a> BFC</h3><p>BFC(Block Formatting Contexts)直译为&quot;块级格式化上下文&quot;。Block Formatting Contexts就是页面上的一个隔离的渲染区域，容器里面的子元素不会在布局上影响到外面的元素，反之也是如此。如何产生BFC？<br> float的值不为none。<br> overflow的值不为visible。<br> position的值不为relative和static。<br> display的值为table-cell, table-caption, inline-block中的任何一个。<br> 那BFC一般有什么用呢？比如常见的多栏布局，结合块级别元素浮动，里面的元素则是在一个相对隔离的环境里运行。</p><h3 id="ifc"><a class="header-anchor" href="#ifc" aria-hidden="true">#</a> IFC</h3><p>IFC(Inline Formatting Contexts)直译为&quot;内联格式化上下文&quot;，IFC的line box（线框）高度由其包含行内元素中最高的实际高度计算而来（不受到竖直方向的padding/margin影响)<br> IFC中的line box一般左右都贴紧整个IFC，但是会因为float元素而扰乱。float元素会位于IFC与与line box之间，使得line box宽度缩短。 同个ifc下的多个line box高度会不同。 IFC中时不可能有块级元素的，当插入块级元素时（如p中插入div）会产生两个匿名块与div分隔开，即产生两个IFC，每个IFC对外表现为块级元素，与div垂直排列。<br> 那么IFC一般有什么用呢？<br> 水平居中：当一个块要在环境中水平居中时，设置其为inline-block则会在外层产生IFC，通过text-align则可以使其水平居中。<br> 垂直居中：创建一个IFC，用其中一个元素撑开父元素的高度，然后设置其vertical-align:middle，其他行内元素则可以在此父元素下垂直居中。</p><h3 id="gfc"><a class="header-anchor" href="#gfc" aria-hidden="true">#</a> GFC</h3><p>GFC(GridLayout Formatting Contexts)直译为&quot;网格布局格式化上下文&quot;，当为一个元素设置display值为grid的时候，此元素将会获得一个独立的渲染区域，我们可以通过在网格容器（grid container）上定义网格定义行（grid definition rows）和网格定义列（grid definition columns）属性各在网格项目（grid item）上定义网格行（grid row）和网格列（grid columns）为每一个网格项目（grid item）定义位置和空间。<br> 那么GFC有什么用呢，和table又有什么区别呢？首先同样是一个二维的表格，但GridLayout会有更加丰富的属性来控制行列，控制对齐以及更为精细的渲染语义和控制。</p><h3 id="ffc"><a class="header-anchor" href="#ffc" aria-hidden="true">#</a> FFC</h3><p>FFC(Flex Formatting Contexts)直译为&quot;自适应格式化上下文&quot;，display值为flex或者inline-flex的元素将会生成自适应容器（flex container），可惜这个牛逼的属性只有谷歌和火狐支持，不过在移动端也足够了，至少safari和chrome还是OK的，毕竟这俩在移动端才是王道。<br> Flex Box 由伸缩容器和伸缩项目组成。通过设置元素的 display 属性为 flex 或 inline-flex 可以得到一个伸缩容器。设置为 flex 的容器被渲染为一个块级元素，而设置为 inline-flex 的容器则渲染为一个行内元素。<br> 伸缩容器中的每一个子元素都是一个伸缩项目。伸缩项目可以是任意数量的。伸缩容器外和伸缩项目内的一切元素都不受影响。简单地说，Flexbox 定义了伸缩容器内伸缩项目该如何布局。</p><h1 id="div水平垂直居中的方法"><a class="header-anchor" href="#div水平垂直居中的方法" aria-hidden="true">#</a> div水平垂直居中的方法</h1><p>在平时，我们经常会碰到让一个div框针对某个模块上下左右都居中（水平垂直居中），其实针对这种情况，我们有多种方法实现。</p><p><strong>方法一:</strong></p><p>绝对定位方法：不确定当前div的宽度和高度，采用 transform: translate(-50%,-50%); 当前div的父级添加相对定位（position: relative;）</p><p>图片展示：</p><p><img src="https://gitee.com/artiely/Figure-bed/raw/master/image/20200829092919.png" alt=""></p><p>代码如下：</p>',21),o=a("div",{class:"language-"},[a("pre",null,[a("code",null,"div{\n    background:red;\n    position: absolute;\n    left:50%;\n    top:50%;\n    transform: translate(-50%, -50%);\n}\n"),a("div",{class:"m-mdic-copy-wrapper"},[a("div",{class:"u-mdic-copy-notify",id:"j-notify-1629557011445-42969"},"复制成功"),a("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"div{\n    background:red;\n    position: absolute;\n    left:50%;\n    top:50%;\n    transform: translate(-50%, -50%);\n}\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629557011445-42969","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),a("div",{class:"line-numbers-wrapper"},[a("span",{class:"line-number"},"1"),a("br"),a("span",{class:"line-number"},"2"),a("br"),a("span",{class:"line-number"},"3"),a("br"),a("span",{class:"line-number"},"4"),a("br"),a("span",{class:"line-number"},"5"),a("br"),a("span",{class:"line-number"},"6"),a("br"),a("span",{class:"line-number"},"7"),a("br")])],-1),d=a("p",null,null,-1),p=a("p",null,[a("strong",null,"方法二:")],-1),r=a("p",null,"绝对定位方法：确定了当前div的宽度，margin值为当前div宽度一半的负值",-1),u=a("p",null,"图片展示： 如方法一的图片展示",-1),m=a("p",null,"代码如下：",-1),y=a("div",{class:"language-"},[a("pre",null,[a("code",null,"div{\n    width:600px;\n    height: 600px;\n    background:red;\n    position: absolute;\n    left:50%;\n    top:50%;\n    margin-left:-300px;\n    margin-top:-300px;\n}\n"),a("div",{class:"m-mdic-copy-wrapper"},[a("div",{class:"u-mdic-copy-notify",id:"j-notify-1629557011445-1709"},"复制成功"),a("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"div{\n    width:600px;\n    height: 600px;\n    background:red;\n    position: absolute;\n    left:50%;\n    top:50%;\n    margin-left:-300px;\n    margin-top:-300px;\n}\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629557011445-1709","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),a("div",{class:"line-numbers-wrapper"},[a("span",{class:"line-number"},"1"),a("br"),a("span",{class:"line-number"},"2"),a("br"),a("span",{class:"line-number"},"3"),a("br"),a("span",{class:"line-number"},"4"),a("br"),a("span",{class:"line-number"},"5"),a("br"),a("span",{class:"line-number"},"6"),a("br"),a("span",{class:"line-number"},"7"),a("br"),a("span",{class:"line-number"},"8"),a("br"),a("span",{class:"line-number"},"9"),a("br"),a("span",{class:"line-number"},"10"),a("br")])],-1),b=a("p",null,null,-1),h=a("p",null,[a("strong",null,"方法三：")],-1),f=a("p",null,"绝对定位方法：绝对定位下top left right bottom 都设置0",-1),g=a("p",null,"图片展示： 如方法一的图片展示",-1),x=a("p",null,"代码如下：",-1),k=a("div",{class:"language-"},[a("pre",null,[a("code",null,"div.child{\n    width: 600px;\n    height: 600px;\n    background: red;\n    position:absolute;\n    left:0;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    margin: auto;\n}\n"),a("div",{class:"m-mdic-copy-wrapper"},[a("div",{class:"u-mdic-copy-notify",id:"j-notify-1629557011445-86161"},"复制成功"),a("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"div.child{\n    width: 600px;\n    height: 600px;\n    background: red;\n    position:absolute;\n    left:0;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    margin: auto;\n}\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629557011445-86161","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),a("div",{class:"line-numbers-wrapper"},[a("span",{class:"line-number"},"1"),a("br"),a("span",{class:"line-number"},"2"),a("br"),a("span",{class:"line-number"},"3"),a("br"),a("span",{class:"line-number"},"4"),a("br"),a("span",{class:"line-number"},"5"),a("br"),a("span",{class:"line-number"},"6"),a("br"),a("span",{class:"line-number"},"7"),a("br"),a("span",{class:"line-number"},"8"),a("br"),a("span",{class:"line-number"},"9"),a("br"),a("span",{class:"line-number"},"10"),a("br"),a("span",{class:"line-number"},"11"),a("br")])],-1),C=a("p",null,null,-1),v=a("p",null,[a("strong",null,"方法四:")],-1),F=a("p",null,"flex布局方法：当前div的父级添加flex css样式",-1),w=a("p",null,"展示图如下：",-1),j=a("p",null,[a("img",{src:"https://gitee.com/artiely/Figure-bed/raw/master/image/20200829093029.png",alt:""})],-1),I=a("p",null,"代码如下：",-1),T=a("div",{class:"language-"},[a("pre",null,[a("code",null,".box{\n    height:800px;\n    -webkit-display:flex;\n    display:flex;\n    -webkit-align-items:center;\n    align-items:center;\n    -webkit-justify-content:center;\n    justify-content:center;\n    border:1px solid #ccc;\n}\ndiv.child{\n    width:600px;\n    height:600px;\n    background-color:red;\n}\n"),a("div",{class:"m-mdic-copy-wrapper"},[a("div",{class:"u-mdic-copy-notify",id:"j-notify-1629557011445-19856"},"复制成功"),a("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":".box{\n    height:800px;\n    -webkit-display:flex;\n    display:flex;\n    -webkit-align-items:center;\n    align-items:center;\n    -webkit-justify-content:center;\n    justify-content:center;\n    border:1px solid #ccc;\n}\ndiv.child{\n    width:600px;\n    height:600px;\n    background-color:red;\n}\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629557011445-19856","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),a("div",{class:"line-numbers-wrapper"},[a("span",{class:"line-number"},"1"),a("br"),a("span",{class:"line-number"},"2"),a("br"),a("span",{class:"line-number"},"3"),a("br"),a("span",{class:"line-number"},"4"),a("br"),a("span",{class:"line-number"},"5"),a("br"),a("span",{class:"line-number"},"6"),a("br"),a("span",{class:"line-number"},"7"),a("br"),a("span",{class:"line-number"},"8"),a("br"),a("span",{class:"line-number"},"9"),a("br"),a("span",{class:"line-number"},"10"),a("br"),a("span",{class:"line-number"},"11"),a("br"),a("span",{class:"line-number"},"12"),a("br"),a("span",{class:"line-number"},"13"),a("br"),a("span",{class:"line-number"},"14"),a("br"),a("span",{class:"line-number"},"15"),a("br")])],-1),$=a("p",null,null,-1),_=a("p",null,[a("strong",null,"方法五:")],-1),B=a("p",null,"table-cell实现水平垂直居中: table-cell middle center组合使用",-1),D=a("p",null,"展示图如下：",-1),E=a("p",null,[a("img",{src:"https://gitee.com/artiely/Figure-bed/raw/master/image/20200829093051.png",alt:""})],-1),N=a("p",null,"代码如下：",-1),A=a("div",{class:"language-"},[a("pre",null,[a("code",null,".table-cell {\n    display: table-cell;\n    vertical-align: middle;\n    text-align: center;\n    width: 240px;\n    height: 180px;\n    border:1px solid #666;\n}\n"),a("div",{class:"m-mdic-copy-wrapper"},[a("div",{class:"u-mdic-copy-notify",id:"j-notify-1629557011445-80848"},"复制成功"),a("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":".table-cell {\n    display: table-cell;\n    vertical-align: middle;\n    text-align: center;\n    width: 240px;\n    height: 180px;\n    border:1px solid #666;\n}\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629557011445-80848","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),a("div",{class:"line-numbers-wrapper"},[a("span",{class:"line-number"},"1"),a("br"),a("span",{class:"line-number"},"2"),a("br"),a("span",{class:"line-number"},"3"),a("br"),a("span",{class:"line-number"},"4"),a("br"),a("span",{class:"line-number"},"5"),a("br"),a("span",{class:"line-number"},"6"),a("br"),a("span",{class:"line-number"},"7"),a("br"),a("span",{class:"line-number"},"8"),a("br")])],-1),S=a("p",null,null,-1),q=a("p",null,[a("strong",null,"方法六:")],-1),P=a("p",null,"绝对定位：calc() 函数动态计算实现水平垂直居中",-1),O=a("p",null,"展示图如下：",-1),M=a("p",null,[a("img",{src:"https://gitee.com/artiely/Figure-bed/raw/master/image/20200829093116.png",alt:""})],-1),G=a("p",null,"代码如下：",-1),z=a("div",{class:"language-"},[a("pre",null,[a("code",null,".calc{\n  position: relative;\n  border: 1px solid #ccc;\n  width: 400px;\n  height: 160px;\n}\n.calc .child{\n  position: absolute;\n  width: 200px;\n  height: 50px;\n  left:-webkit-calc((400px - 200px)/2);\n  top:-webkit-calc((160px - 50px)/2);\n  left:-moz-calc((400px - 200px)/2);\n  top:-moz-calc((160px - 50px)/2);\n  left:calc((400px - 200px)/2);\n  top:calc((160px - 50px)/2);\n}　　\n"),a("div",{class:"m-mdic-copy-wrapper"},[a("div",{class:"u-mdic-copy-notify",id:"j-notify-1629557011445-26150"},"复制成功"),a("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":".calc{\n  position: relative;\n  border: 1px solid #ccc;\n  width: 400px;\n  height: 160px;\n}\n.calc .child{\n  position: absolute;\n  width: 200px;\n  height: 50px;\n  left:-webkit-calc((400px - 200px)/2);\n  top:-webkit-calc((160px - 50px)/2);\n  left:-moz-calc((400px - 200px)/2);\n  top:-moz-calc((160px - 50px)/2);\n  left:calc((400px - 200px)/2);\n  top:calc((160px - 50px)/2);\n}　　\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629557011445-26150","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),a("div",{class:"line-numbers-wrapper"},[a("span",{class:"line-number"},"1"),a("br"),a("span",{class:"line-number"},"2"),a("br"),a("span",{class:"line-number"},"3"),a("br"),a("span",{class:"line-number"},"4"),a("br"),a("span",{class:"line-number"},"5"),a("br"),a("span",{class:"line-number"},"6"),a("br"),a("span",{class:"line-number"},"7"),a("br"),a("span",{class:"line-number"},"8"),a("br"),a("span",{class:"line-number"},"9"),a("br"),a("span",{class:"line-number"},"10"),a("br"),a("span",{class:"line-number"},"11"),a("br"),a("span",{class:"line-number"},"12"),a("br"),a("span",{class:"line-number"},"13"),a("br"),a("span",{class:"line-number"},"14"),a("br"),a("span",{class:"line-number"},"15"),a("br"),a("span",{class:"line-number"},"16"),a("br"),a("span",{class:"line-number"},"17"),a("br")])],-1),V=e('<h2 id="displayopacity"><a class="header-anchor" href="#displayopacity" aria-hidden="true">#</a> display/opacity</h2><h3 id="display-none"><a class="header-anchor" href="#display-none" aria-hidden="true">#</a> display: none;</h3><ol><li>DOM 结构：浏览器不会渲染 display 属性为 none 的元素，不占据空间；</li><li>事件监听：无法进行 DOM 事件监听；</li><li>性能：动态改变此属性时会引起重排，性能较差；</li><li>继承：不会被子元素继承，毕竟子类也不会被渲染；</li><li>transition：transition 不支持 display。</li></ol><h3 id="visibility-hidden"><a class="header-anchor" href="#visibility-hidden" aria-hidden="true">#</a> visibility: hidden;</h3><ol><li>DOM 结构：元素被隐藏，但是会被渲染不会消失，占据空间；</li><li>事件监听：无法进行 DOM 事件监听；</li><li>性 能：动态改变此属性时会引起重绘，性能较高；</li><li>继 承：会被子元素继承，子元素可以通过设置 visibility: visible; 来取消隐藏；</li><li>transition：visibility 会立即显示，隐藏时会延时</li></ol><h3 id="opacity-0"><a class="header-anchor" href="#opacity-0" aria-hidden="true">#</a> opacity: 0;</h3><ol><li>DOM 结构：透明度为 100%，元素隐藏，占据空间；</li><li>事件监听：可以进行 DOM 事件监听；</li><li>性 能：提升为合成层，不会触发重绘，性能较高；</li><li>继 承：会被子元素继承,且，子元素并不能通过 opacity: 1 来取消隐藏；</li><li>transition：opacity 可以延时显示和隐藏</li></ol><h3 id="display-none-1"><a class="header-anchor" href="#display-none-1" aria-hidden="true">#</a> display: none;</h3><ol><li>DOM 结构：浏览器不会渲染 display 属性为 none 的元素，不占据空间；</li><li>事件监听：无法进行 DOM 事件监听；</li><li>性能：动态改变此属性时会引起重排，性能较差；</li><li>继承：不会被子元素继承，毕竟子类也不会被渲染；</li><li>transition：transition 不支持 display。</li></ol><h3 id="visibility-hidden-1"><a class="header-anchor" href="#visibility-hidden-1" aria-hidden="true">#</a> visibility: hidden;</h3><ol><li>DOM 结构：元素被隐藏，但是会被渲染不会消失，占据空间；</li><li>事件监听：无法进行 DOM 事件监听；</li><li>性 能：动态改变此属性时会引起重绘，性能较高；</li><li>继 承：会被子元素继承，子元素可以通过设置 visibility: visible; 来取消隐藏；</li><li>transition：visibility 会立即显示，隐藏时会延时</li></ol><h3 id="opacity-0-1"><a class="header-anchor" href="#opacity-0-1" aria-hidden="true">#</a> opacity: 0;</h3><ol><li>DOM 结构：透明度为 100%，元素隐藏，占据空间；</li><li>事件监听：可以进行 DOM 事件监听；</li><li>性 能：提升为合成层，不会触发重绘，性能较高；</li><li>继 承：会被子元素继承,且，子元素并不能通过 opacity: 1 来取消隐藏；</li><li>transition：opacity 可以延时显示和隐藏</li></ol><h2 id="内联覆盖元素宽度"><a class="header-anchor" href="#内联覆盖元素宽度" aria-hidden="true">#</a> 内联覆盖元素宽度</h2><h3 id="在不改变当前代码的情况下使这张图片的宽度为300px"><a class="header-anchor" href="#在不改变当前代码的情况下使这张图片的宽度为300px" aria-hidden="true">#</a> 在不改变当前代码的情况下，使这张图片的宽度为300px?</h3>',15),W=a("div",{class:"language-"},[a("pre",null,[a("code",null,'<img src="1.jpg" style="width:480px!important"/>\n'),a("div",{class:"m-mdic-copy-wrapper"},[a("div",{class:"u-mdic-copy-notify",id:"j-notify-1629557011445-75080"},"复制成功"),a("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":'<img src="1.jpg" style="width:480px!important"/>\n',"data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629557011445-75080","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),a("div",{class:"line-numbers-wrapper"},[a("span",{class:"line-number"},"1"),a("br")])],-1),K=a("h3",{id:"1css方法"},[a("a",{class:"header-anchor",href:"#1css方法","aria-hidden":"true"},"#"),i(" 1.css方法")],-1),L=a("div",{class:"language-html line-numbers-mode"},[a("pre",null,[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),i("img")]),i(),a("span",{class:"token attr-name"},"src"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),i("1.jpg"),a("span",{class:"token punctuation"},'"')]),i(),a("span",{class:"token special-attr"},[a("span",{class:"token attr-name"},"style"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),a("span",{class:"token value css language-css"},[a("span",{class:"token property"},"width"),a("span",{class:"token punctuation"},":"),i("480px"),a("span",{class:"token important"},"!important"),a("span",{class:"token punctuation"},";"),i(),a("span",{class:"token property"},"max-width"),a("span",{class:"token punctuation"},":"),i(" 300px")]),a("span",{class:"token punctuation"},'"')])]),a("span",{class:"token punctuation"},">")]),i("\n"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),i("img")]),i(),a("span",{class:"token attr-name"},"src"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),i("1.jpg"),a("span",{class:"token punctuation"},'"')]),i(),a("span",{class:"token special-attr"},[a("span",{class:"token attr-name"},"style"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),a("span",{class:"token value css language-css"},[a("span",{class:"token property"},"width"),a("span",{class:"token punctuation"},":"),i("480px"),a("span",{class:"token important"},"!important"),a("span",{class:"token punctuation"},";"),i(),a("span",{class:"token property"},"transform"),a("span",{class:"token punctuation"},":"),i(),a("span",{class:"token function"},"scale"),a("span",{class:"token punctuation"},"("),i("0.625"),a("span",{class:"token punctuation"},","),i(" 1"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";")]),a("span",{class:"token punctuation"},'"')])]),i(),a("span",{class:"token punctuation"},">")]),i("\n"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),i("img")]),i(),a("span",{class:"token attr-name"},"src"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),i("1.jpg"),a("span",{class:"token punctuation"},'"')]),i(),a("span",{class:"token special-attr"},[a("span",{class:"token attr-name"},"style"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),a("span",{class:"token value css language-css"},[a("span",{class:"token property"},"width"),a("span",{class:"token punctuation"},":"),i("480px"),a("span",{class:"token important"},"!important"),a("span",{class:"token punctuation"},";"),i(),a("span",{class:"token property"},"width"),a("span",{class:"token punctuation"},":"),i("300px"),a("span",{class:"token important"},"!important"),a("span",{class:"token punctuation"},";")]),a("span",{class:"token punctuation"},'"')])]),a("span",{class:"token punctuation"},">")]),i("\n")]),a("div",{class:"m-mdic-copy-wrapper"},[a("div",{class:"u-mdic-copy-notify",id:"j-notify-1629557011445-98293"},"复制成功"),a("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":'<img src="1.jpg" style="width:480px!important; max-width: 300px">\n<img src="1.jpg" style="width:480px!important; transform: scale(0.625, 1);" >\n<img src="1.jpg" style="width:480px!important; width:300px!important;">\n',"data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629557011445-98293","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),a("div",{class:"line-numbers-wrapper"},[a("span",{class:"line-number"},"1"),a("br"),a("span",{class:"line-number"},"2"),a("br"),a("span",{class:"line-number"},"3"),a("br")])],-1),R=a("h3",{id:"2js方法"},[a("a",{class:"header-anchor",href:"#2js方法","aria-hidden":"true"},"#"),i(" 2.js方法")],-1),J=a("div",{class:"language-JavaScript line-numbers-mode"},[a("pre",null,[a("code",null,[i("document"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"getElementsByTagName"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},'"img"'),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},"["),a("span",{class:"token number"},"0"),a("span",{class:"token punctuation"},"]"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"setAttribute"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},'"style"'),a("span",{class:"token punctuation"},","),a("span",{class:"token string"},'"width:300px!important;"'),a("span",{class:"token punctuation"},")"),i("\n")]),a("div",{class:"m-mdic-copy-wrapper"},[a("div",{class:"u-mdic-copy-notify",id:"j-notify-1629557011445-83009"},"复制成功"),a("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":'document.getElementsByTagName("img")[0].setAttribute("style","width:300px!important;")\n',"data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629557011445-83009","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),a("div",{class:"line-numbers-wrapper"},[a("span",{class:"line-number"},"1"),a("br")])],-1);l.render=function(e,a,i,c,l,U){return n(),t("div",null,[s,o,d,p,r,u,m,y,b,h,f,g,x,k,C,v,F,w,j,I,T,$,_,B,D,E,N,A,S,q,P,O,M,G,z,V,W,K,L,R,J])};export default l;export{c as __pageData};
