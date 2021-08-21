import{o as n,c as s,t,a,x as e}from"./app.746f22cf.js";const o='{"title":"移动端滚动穿透解决办法","description":"","frontmatter":{"title":"移动端滚动穿透解决办法","tag":["css","javaScript"],"author":"Artiely","date":"2017-6-7","cover":"https://gitee.com/artiely/Figure-bed/raw/master/images/20200315180601.png","base64":"c0cad6"},"headers":[{"level":2,"title":"问题","slug":"问题"},{"level":2,"title":"css 之 overflow: hidden","slug":"css-之-overflow-hidden"},{"level":2,"title":"js 之 touchmove + preventDefault","slug":"js-之-touchmove-preventdefault"},{"level":2,"title":"css 结合 js","slug":"css-结合-js"},{"level":2,"title":"看一下其他框架的处理办法","slug":"看一下其他框架的处理办法"},{"level":3,"title":"vant 有赞","slug":"vant-有赞"},{"level":3,"title":"mand-mobile","slug":"mand-mobile"}],"relativePath":"post/2017/2017-6-7-css-mobile-scroll-through.md","lastUpdated":1629109029048}',c={},l=t('<h1 id="移动端滚动穿透解决办法"><a class="header-anchor" href="#移动端滚动穿透解决办法" aria-hidden="true">#</a> 移动端滚动穿透解决办法</h1><h2 id="问题"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h2><p>在滚动模态框里的内容的时候，背景（模态框下面的内容）也在跟着滚动</p><h2 id="css-之-overflow-hidden"><a class="header-anchor" href="#css-之-overflow-hidden" aria-hidden="true">#</a> css 之 overflow: hidden</h2>',4),p=a("div",{class:"language-css line-numbers-mode"},[a("pre",null,[a("code",null,[a("span",{class:"token selector"},".modal-open"),e(),a("span",{class:"token punctuation"},"{"),e("\n  "),a("span",{class:"token selector"},"&,\n  body"),e(),a("span",{class:"token punctuation"},"{"),e("\n    "),a("span",{class:"token property"},"overflow"),a("span",{class:"token punctuation"},":"),e(" hidden"),a("span",{class:"token punctuation"},";"),e("\n    "),a("span",{class:"token property"},"height"),a("span",{class:"token punctuation"},":"),e(" 100%"),a("span",{class:"token punctuation"},";"),e("\n  "),a("span",{class:"token punctuation"},"}"),e("\n"),a("span",{class:"token punctuation"},"}"),e("\n")]),a("div",{class:"m-mdic-copy-wrapper"},[a("div",{class:"u-mdic-copy-notify",id:"j-notify-1629557986389-28309"},"复制成功"),a("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":".modal-open {\n  &,\n  body {\n    overflow: hidden;\n    height: 100%;\n  }\n}\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629557986389-28309","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),a("div",{class:"line-numbers-wrapper"},[a("span",{class:"line-number"},"1"),a("br"),a("span",{class:"line-number"},"2"),a("br"),a("span",{class:"line-number"},"3"),a("br"),a("span",{class:"line-number"},"4"),a("br"),a("span",{class:"line-number"},"5"),a("br"),a("span",{class:"line-number"},"6"),a("br"),a("span",{class:"line-number"},"7"),a("br")])],-1),i=a("p",null,"页面弹出层上将 .modal-open 添加到 html 上，禁用 html 和 body 的滚动条，但是这个方案有两个缺点：",-1),u=a("ul",null,[a("li",null,"由于 html 和 body 的滚动条都被禁用，弹出层后页面的滚动位置会丢失，需要用 js 来还原。"),a("li",null,"页面的背景还是能够有滚的动的效果")],-1),r=a("h2",{id:"js-之-touchmove-preventdefault"},[a("a",{class:"header-anchor",href:"#js-之-touchmove-preventdefault","aria-hidden":"true"},"#"),e(" js 之 touchmove + preventDefault")],-1),d=a("div",{class:"language-js line-numbers-mode"},[a("pre",null,[a("code",null,[e("modal"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"addEventListener"),a("span",{class:"token punctuation"},"("),e("\n  "),a("span",{class:"token string"},"'touchmove'"),a("span",{class:"token punctuation"},","),e("\n  "),a("span",{class:"token keyword"},"function"),a("span",{class:"token punctuation"},"("),a("span",{class:"token parameter"},"e"),a("span",{class:"token punctuation"},")"),e(),a("span",{class:"token punctuation"},"{"),e("\n    e"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"preventDefault"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),e("\n  "),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},","),e("\n  "),a("span",{class:"token boolean"},"false"),e("\n"),a("span",{class:"token punctuation"},")"),e("\n")]),a("div",{class:"m-mdic-copy-wrapper"},[a("div",{class:"u-mdic-copy-notify",id:"j-notify-1629557986389-62723"},"复制成功"),a("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"modal.addEventListener(\n  'touchmove',\n  function(e) {\n    e.preventDefault()\n  },\n  false\n)\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629557986389-62723","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),a("div",{class:"line-numbers-wrapper"},[a("span",{class:"line-number"},"1"),a("br"),a("span",{class:"line-number"},"2"),a("br"),a("span",{class:"line-number"},"3"),a("br"),a("span",{class:"line-number"},"4"),a("br"),a("span",{class:"line-number"},"5"),a("br"),a("span",{class:"line-number"},"6"),a("br"),a("span",{class:"line-number"},"7"),a("br")])],-1),k=a("p",null,"这样用 js 阻止滚动后看起来效果不错了，但是也有一个缺点：弹出层里不能有其它需要滚动的内容（如大段文字需要固定高度，显示滚动条也会被阻止）",-1),m=a("h2",{id:"css-结合-js"},[a("a",{class:"header-anchor",href:"#css-结合-js","aria-hidden":"true"},"#"),e(" css 结合 js")],-1),b=a("div",{class:"language-css line-numbers-mode"},[a("pre",null,[a("code",null,[a("span",{class:"token selector"},"body.modal-open"),e(),a("span",{class:"token punctuation"},"{"),e("\n  "),a("span",{class:"token property"},"position"),a("span",{class:"token punctuation"},":"),e(" fixed"),a("span",{class:"token punctuation"},";"),e("\n  "),a("span",{class:"token property"},"width"),a("span",{class:"token punctuation"},":"),e(" 100%"),a("span",{class:"token punctuation"},";"),e("\n"),a("span",{class:"token punctuation"},"}"),e("\n")]),a("div",{class:"m-mdic-copy-wrapper"},[a("div",{class:"u-mdic-copy-notify",id:"j-notify-1629557986395-76761"},"复制成功"),a("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"body.modal-open {\n  position: fixed;\n  width: 100%;\n}\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629557986395-76761","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),a("div",{class:"line-numbers-wrapper"},[a("span",{class:"line-number"},"1"),a("br"),a("span",{class:"line-number"},"2"),a("br"),a("span",{class:"line-number"},"3"),a("br"),a("span",{class:"line-number"},"4"),a("br")])],-1),y=a("p",null,[e("如果只是上面的 css，滚动条的位置同样会丢失。"),a("br"),e(" 所以如果需要保持滚动条的位置需要用 js 保存滚动条位置关闭的时候还原滚动位置。")],-1),h=a("div",{class:"language-js line-numbers-mode"},[a("pre",null,[a("code",null,[a("span",{class:"token comment"},"/**\n * ModalHelper helpers resolve the modal scrolling issue on mobile devices\n * https://github.com/twbs/bootstrap/issues/15852\n * requires document.scrollingElement polyfill https://github.com/yangg/scrolling-element\n */"),e("\n"),a("span",{class:"token keyword"},"var"),e(" ModalHelper "),a("span",{class:"token operator"},"="),e(),a("span",{class:"token punctuation"},"("),a("span",{class:"token keyword"},"function"),a("span",{class:"token punctuation"},"("),a("span",{class:"token parameter"},"bodyCls"),a("span",{class:"token punctuation"},")"),e(),a("span",{class:"token punctuation"},"{"),e("\n  "),a("span",{class:"token keyword"},"var"),e(" scrollTop\n  "),a("span",{class:"token keyword"},"return"),e(),a("span",{class:"token punctuation"},"{"),e("\n    "),a("span",{class:"token function-variable function"},"afterOpen"),a("span",{class:"token operator"},":"),e(),a("span",{class:"token keyword"},"function"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),e(),a("span",{class:"token punctuation"},"{"),e("\n      scrollTop "),a("span",{class:"token operator"},"="),e(" document"),a("span",{class:"token punctuation"},"."),e("scrollingElement"),a("span",{class:"token punctuation"},"."),e("scrollTop\n      document"),a("span",{class:"token punctuation"},"."),e("body"),a("span",{class:"token punctuation"},"."),e("classList"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"add"),a("span",{class:"token punctuation"},"("),e("bodyCls"),a("span",{class:"token punctuation"},")"),e("\n      document"),a("span",{class:"token punctuation"},"."),e("body"),a("span",{class:"token punctuation"},"."),e("style"),a("span",{class:"token punctuation"},"."),e("top "),a("span",{class:"token operator"},"="),e(),a("span",{class:"token operator"},"-"),e("scrollTop "),a("span",{class:"token operator"},"+"),e(),a("span",{class:"token string"},"'px'"),e("\n    "),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},","),e("\n    "),a("span",{class:"token function-variable function"},"beforeClose"),a("span",{class:"token operator"},":"),e(),a("span",{class:"token keyword"},"function"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),e(),a("span",{class:"token punctuation"},"{"),e("\n      document"),a("span",{class:"token punctuation"},"."),e("body"),a("span",{class:"token punctuation"},"."),e("classList"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"remove"),a("span",{class:"token punctuation"},"("),e("bodyCls"),a("span",{class:"token punctuation"},")"),e("\n      "),a("span",{class:"token comment"},"// scrollTop lost after set position:fixed, restore it back."),e("\n      document"),a("span",{class:"token punctuation"},"."),e("scrollingElement"),a("span",{class:"token punctuation"},"."),e("scrollTop "),a("span",{class:"token operator"},"="),e(" scrollTop\n    "),a("span",{class:"token punctuation"},"}"),e("\n  "),a("span",{class:"token punctuation"},"}"),e("\n"),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},"'modal-open'"),a("span",{class:"token punctuation"},")"),e("\n")]),a("div",{class:"m-mdic-copy-wrapper"},[a("div",{class:"u-mdic-copy-notify",id:"j-notify-1629557986395-43490"},"复制成功"),a("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"/**\n * ModalHelper helpers resolve the modal scrolling issue on mobile devices\n * https://github.com/twbs/bootstrap/issues/15852\n * requires document.scrollingElement polyfill https://github.com/yangg/scrolling-element\n */\nvar ModalHelper = (function(bodyCls) {\n  var scrollTop\n  return {\n    afterOpen: function() {\n      scrollTop = document.scrollingElement.scrollTop\n      document.body.classList.add(bodyCls)\n      document.body.style.top = -scrollTop + 'px'\n    },\n    beforeClose: function() {\n      document.body.classList.remove(bodyCls)\n      // scrollTop lost after set position:fixed, restore it back.\n      document.scrollingElement.scrollTop = scrollTop\n    }\n  }\n})('modal-open')\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629557986395-43490","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),a("div",{class:"line-numbers-wrapper"},[a("span",{class:"line-number"},"1"),a("br"),a("span",{class:"line-number"},"2"),a("br"),a("span",{class:"line-number"},"3"),a("br"),a("span",{class:"line-number"},"4"),a("br"),a("span",{class:"line-number"},"5"),a("br"),a("span",{class:"line-number"},"6"),a("br"),a("span",{class:"line-number"},"7"),a("br"),a("span",{class:"line-number"},"8"),a("br"),a("span",{class:"line-number"},"9"),a("br"),a("span",{class:"line-number"},"10"),a("br"),a("span",{class:"line-number"},"11"),a("br"),a("span",{class:"line-number"},"12"),a("br"),a("span",{class:"line-number"},"13"),a("br"),a("span",{class:"line-number"},"14"),a("br"),a("span",{class:"line-number"},"15"),a("br"),a("span",{class:"line-number"},"16"),a("br"),a("span",{class:"line-number"},"17"),a("br"),a("span",{class:"line-number"},"18"),a("br"),a("span",{class:"line-number"},"19"),a("br"),a("span",{class:"line-number"},"20"),a("br")])],-1),f=a("p",null,"注意兼容 document.scrollingElement",-1),v=a("h2",{id:"看一下其他框架的处理办法"},[a("a",{class:"header-anchor",href:"#看一下其他框架的处理办法","aria-hidden":"true"},"#"),e(" 看一下其他框架的处理办法")],-1),x=a("h3",{id:"vant-有赞"},[a("a",{class:"header-anchor",href:"#vant-有赞","aria-hidden":"true"},"#"),e(" vant 有赞")],-1),g=a("div",{class:"language-js line-numbers-mode"},[a("pre",null,[a("code",null,[e(),a("span",{class:"token comment"},"// 打开的时候给body动态添加css 关闭的时候移除样式"),e("\n "),a("span",{class:"token function"},"open"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),e(),a("span",{class:"token punctuation"},"{"),e("\n      "),a("span",{class:"token comment"},"/* istanbul ignore next */"),e("\n      "),a("span",{class:"token keyword"},"if"),e(),a("span",{class:"token punctuation"},"("),a("span",{class:"token keyword"},"this"),a("span",{class:"token punctuation"},"."),e("$isServer "),a("span",{class:"token operator"},"||"),e(),a("span",{class:"token keyword"},"this"),a("span",{class:"token punctuation"},"."),e("opened"),a("span",{class:"token punctuation"},")"),e(),a("span",{class:"token punctuation"},"{"),e("\n        "),a("span",{class:"token keyword"},"return"),a("span",{class:"token punctuation"},";"),e("\n      "),a("span",{class:"token punctuation"},"}"),e("\n\n      "),a("span",{class:"token comment"},"// 如果属性中传入了`zIndex`，则覆盖`context`中对应的`zIndex`"),e("\n      "),a("span",{class:"token keyword"},"if"),e(),a("span",{class:"token punctuation"},"("),a("span",{class:"token keyword"},"this"),a("span",{class:"token punctuation"},"."),e("zIndex "),a("span",{class:"token operator"},"!=="),e(),a("span",{class:"token keyword"},"undefined"),a("span",{class:"token punctuation"},")"),e(),a("span",{class:"token punctuation"},"{"),e("\n        context"),a("span",{class:"token punctuation"},"."),e("zIndex "),a("span",{class:"token operator"},"="),e(),a("span",{class:"token keyword"},"this"),a("span",{class:"token punctuation"},"."),e("zIndex"),a("span",{class:"token punctuation"},";"),e("\n      "),a("span",{class:"token punctuation"},"}"),e("\n\n      "),a("span",{class:"token keyword"},"this"),a("span",{class:"token punctuation"},"."),e("opened "),a("span",{class:"token operator"},"="),e(),a("span",{class:"token boolean"},"true"),a("span",{class:"token punctuation"},";"),e("\n      "),a("span",{class:"token keyword"},"this"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"renderOverlay"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),e("\n\n      "),a("span",{class:"token keyword"},"if"),e(),a("span",{class:"token punctuation"},"("),a("span",{class:"token keyword"},"this"),a("span",{class:"token punctuation"},"."),e("lockScroll"),a("span",{class:"token punctuation"},")"),e(),a("span",{class:"token punctuation"},"{"),e("\n        "),a("span",{class:"token function"},"on"),a("span",{class:"token punctuation"},"("),e("document"),a("span",{class:"token punctuation"},","),e(),a("span",{class:"token string"},"'touchstart'"),a("span",{class:"token punctuation"},","),e(),a("span",{class:"token keyword"},"this"),a("span",{class:"token punctuation"},"."),e("touchStart"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),e("\n        "),a("span",{class:"token function"},"on"),a("span",{class:"token punctuation"},"("),e("document"),a("span",{class:"token punctuation"},","),e(),a("span",{class:"token string"},"'touchmove'"),a("span",{class:"token punctuation"},","),e(),a("span",{class:"token keyword"},"this"),a("span",{class:"token punctuation"},"."),e("onTouchMove"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),e("\n        "),a("span",{class:"token keyword"},"if"),e(),a("span",{class:"token punctuation"},"("),a("span",{class:"token operator"},"!"),e("context"),a("span",{class:"token punctuation"},"."),e("lockCount"),a("span",{class:"token punctuation"},")"),e(),a("span",{class:"token punctuation"},"{"),e("\n          document"),a("span",{class:"token punctuation"},"."),e("body"),a("span",{class:"token punctuation"},"."),e("classList"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"add"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},"'van-overflow-hidden'"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),e("\n        "),a("span",{class:"token punctuation"},"}"),e("\n        context"),a("span",{class:"token punctuation"},"."),e("lockCount"),a("span",{class:"token operator"},"++"),a("span",{class:"token punctuation"},";"),e("\n      "),a("span",{class:"token punctuation"},"}"),e("\n    "),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},","),e("\n\n    "),a("span",{class:"token function"},"close"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),e(),a("span",{class:"token punctuation"},"{"),e("\n      "),a("span",{class:"token keyword"},"if"),e(),a("span",{class:"token punctuation"},"("),a("span",{class:"token operator"},"!"),a("span",{class:"token keyword"},"this"),a("span",{class:"token punctuation"},"."),e("opened"),a("span",{class:"token punctuation"},")"),e(),a("span",{class:"token punctuation"},"{"),e("\n        "),a("span",{class:"token keyword"},"return"),a("span",{class:"token punctuation"},";"),e("\n      "),a("span",{class:"token punctuation"},"}"),e("\n\n      "),a("span",{class:"token keyword"},"if"),e(),a("span",{class:"token punctuation"},"("),a("span",{class:"token keyword"},"this"),a("span",{class:"token punctuation"},"."),e("lockScroll"),a("span",{class:"token punctuation"},")"),e(),a("span",{class:"token punctuation"},"{"),e("\n        context"),a("span",{class:"token punctuation"},"."),e("lockCount"),a("span",{class:"token operator"},"--"),a("span",{class:"token punctuation"},";"),e("\n        "),a("span",{class:"token function"},"off"),a("span",{class:"token punctuation"},"("),e("document"),a("span",{class:"token punctuation"},","),e(),a("span",{class:"token string"},"'touchstart'"),a("span",{class:"token punctuation"},","),e(),a("span",{class:"token keyword"},"this"),a("span",{class:"token punctuation"},"."),e("touchStart"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),e("\n        "),a("span",{class:"token function"},"off"),a("span",{class:"token punctuation"},"("),e("document"),a("span",{class:"token punctuation"},","),e(),a("span",{class:"token string"},"'touchmove'"),a("span",{class:"token punctuation"},","),e(),a("span",{class:"token keyword"},"this"),a("span",{class:"token punctuation"},"."),e("onTouchMove"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),e("\n        "),a("span",{class:"token keyword"},"if"),e(),a("span",{class:"token punctuation"},"("),a("span",{class:"token operator"},"!"),e("context"),a("span",{class:"token punctuation"},"."),e("lockCount"),a("span",{class:"token punctuation"},")"),e(),a("span",{class:"token punctuation"},"{"),e("\n          document"),a("span",{class:"token punctuation"},"."),e("body"),a("span",{class:"token punctuation"},"."),e("classList"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"remove"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},"'van-overflow-hidden'"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),e("\n        "),a("span",{class:"token punctuation"},"}"),e("\n      "),a("span",{class:"token punctuation"},"}"),e("\n\n      "),a("span",{class:"token keyword"},"this"),a("span",{class:"token punctuation"},"."),e("opened "),a("span",{class:"token operator"},"="),e(),a("span",{class:"token boolean"},"false"),a("span",{class:"token punctuation"},";"),e("\n      manager"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"close"),a("span",{class:"token punctuation"},"("),a("span",{class:"token keyword"},"this"),a("span",{class:"token punctuation"},"."),e("_popupId"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),e("\n      "),a("span",{class:"token keyword"},"this"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"$emit"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},"'input'"),a("span",{class:"token punctuation"},","),e(),a("span",{class:"token boolean"},"false"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),e("\n    "),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},","),e("\n")]),a("div",{class:"m-mdic-copy-wrapper"},[a("div",{class:"u-mdic-copy-notify",id:"j-notify-1629557986395-83060"},"复制成功"),a("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":" // 打开的时候给body动态添加css 关闭的时候移除样式\n open() {\n      /* istanbul ignore next */\n      if (this.$isServer || this.opened) {\n        return;\n      }\n\n      // 如果属性中传入了`zIndex`，则覆盖`context`中对应的`zIndex`\n      if (this.zIndex !== undefined) {\n        context.zIndex = this.zIndex;\n      }\n\n      this.opened = true;\n      this.renderOverlay();\n\n      if (this.lockScroll) {\n        on(document, 'touchstart', this.touchStart);\n        on(document, 'touchmove', this.onTouchMove);\n        if (!context.lockCount) {\n          document.body.classList.add('van-overflow-hidden');\n        }\n        context.lockCount++;\n      }\n    },\n\n    close() {\n      if (!this.opened) {\n        return;\n      }\n\n      if (this.lockScroll) {\n        context.lockCount--;\n        off(document, 'touchstart', this.touchStart);\n        off(document, 'touchmove', this.onTouchMove);\n        if (!context.lockCount) {\n          document.body.classList.remove('van-overflow-hidden');\n        }\n      }\n\n      this.opened = false;\n      manager.close(this._popupId);\n      this.$emit('input', false);\n    },\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629557986395-83060","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),a("div",{class:"line-numbers-wrapper"},[a("span",{class:"line-number"},"1"),a("br"),a("span",{class:"line-number"},"2"),a("br"),a("span",{class:"line-number"},"3"),a("br"),a("span",{class:"line-number"},"4"),a("br"),a("span",{class:"line-number"},"5"),a("br"),a("span",{class:"line-number"},"6"),a("br"),a("span",{class:"line-number"},"7"),a("br"),a("span",{class:"line-number"},"8"),a("br"),a("span",{class:"line-number"},"9"),a("br"),a("span",{class:"line-number"},"10"),a("br"),a("span",{class:"line-number"},"11"),a("br"),a("span",{class:"line-number"},"12"),a("br"),a("span",{class:"line-number"},"13"),a("br"),a("span",{class:"line-number"},"14"),a("br"),a("span",{class:"line-number"},"15"),a("br"),a("span",{class:"line-number"},"16"),a("br"),a("span",{class:"line-number"},"17"),a("br"),a("span",{class:"line-number"},"18"),a("br"),a("span",{class:"line-number"},"19"),a("br"),a("span",{class:"line-number"},"20"),a("br"),a("span",{class:"line-number"},"21"),a("br"),a("span",{class:"line-number"},"22"),a("br"),a("span",{class:"line-number"},"23"),a("br"),a("span",{class:"line-number"},"24"),a("br"),a("span",{class:"line-number"},"25"),a("br"),a("span",{class:"line-number"},"26"),a("br"),a("span",{class:"line-number"},"27"),a("br"),a("span",{class:"line-number"},"28"),a("br"),a("span",{class:"line-number"},"29"),a("br"),a("span",{class:"line-number"},"30"),a("br"),a("span",{class:"line-number"},"31"),a("br"),a("span",{class:"line-number"},"32"),a("br"),a("span",{class:"line-number"},"33"),a("br"),a("span",{class:"line-number"},"34"),a("br"),a("span",{class:"line-number"},"35"),a("br"),a("span",{class:"line-number"},"36"),a("br"),a("span",{class:"line-number"},"37"),a("br"),a("span",{class:"line-number"},"38"),a("br"),a("span",{class:"line-number"},"39"),a("br"),a("span",{class:"line-number"},"40"),a("br"),a("span",{class:"line-number"},"41"),a("br"),a("span",{class:"line-number"},"42"),a("br"),a("span",{class:"line-number"},"43"),a("br")])],-1),w=a("h3",{id:"mand-mobile"},[a("a",{class:"header-anchor",href:"#mand-mobile","aria-hidden":"true"},"#"),e(" mand-mobile")],-1),C=a("div",{class:"language-js line-numbers-mode"},[a("pre",null,[a("code",null,[a("span",{class:"token comment"},"// 滚动的时候阻止默认事件 排除的元素及子节点继续执行绑定事件"),e("\n"),a("span",{class:"token function"},"$_preventScroll"),a("span",{class:"token punctuation"},"("),a("span",{class:"token parameter"},"isBind"),a("span",{class:"token punctuation"},")"),e(),a("span",{class:"token punctuation"},"{"),e("\n      "),a("span",{class:"token keyword"},"const"),e(" handler "),a("span",{class:"token operator"},"="),e(" isBind "),a("span",{class:"token operator"},"?"),e(),a("span",{class:"token string"},"'addEventListener'"),e(),a("span",{class:"token operator"},":"),e(),a("span",{class:"token string"},"'removeEventListener'"),e("\n      "),a("span",{class:"token keyword"},"const"),e(" masker "),a("span",{class:"token operator"},"="),e(),a("span",{class:"token keyword"},"this"),a("span",{class:"token punctuation"},"."),e("$el"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"querySelector"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},"'.md-popup-mask'"),a("span",{class:"token punctuation"},")"),e("\n      "),a("span",{class:"token keyword"},"const"),e(" boxer "),a("span",{class:"token operator"},"="),e(),a("span",{class:"token keyword"},"this"),a("span",{class:"token punctuation"},"."),e("$el"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"querySelector"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},"'.md-popup-box'"),a("span",{class:"token punctuation"},")"),e("\n      masker "),a("span",{class:"token operator"},"&&"),e(" masker"),a("span",{class:"token punctuation"},"["),e("handler"),a("span",{class:"token punctuation"},"]"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},"'touchmove'"),a("span",{class:"token punctuation"},","),e(),a("span",{class:"token keyword"},"this"),a("span",{class:"token punctuation"},"."),e("$_preventDefault"),a("span",{class:"token punctuation"},","),e(),a("span",{class:"token boolean"},"false"),a("span",{class:"token punctuation"},")"),e("\n      boxer "),a("span",{class:"token operator"},"&&"),e(" boxer"),a("span",{class:"token punctuation"},"["),e("handler"),a("span",{class:"token punctuation"},"]"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},"'touchmove'"),a("span",{class:"token punctuation"},","),e(),a("span",{class:"token keyword"},"this"),a("span",{class:"token punctuation"},"."),e("$_preventDefault"),a("span",{class:"token punctuation"},","),e(),a("span",{class:"token boolean"},"false"),a("span",{class:"token punctuation"},")"),e("\n      "),a("span",{class:"token keyword"},"this"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"$_preventScrollExclude"),a("span",{class:"token punctuation"},"("),e("isBind"),a("span",{class:"token punctuation"},")"),e("\n    "),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},","),e("\n    "),a("span",{class:"token function"},"$_preventScrollExclude"),a("span",{class:"token punctuation"},"("),a("span",{class:"token parameter"},[e("isBind"),a("span",{class:"token punctuation"},","),e(" preventScrollExclude")]),a("span",{class:"token punctuation"},")"),e(),a("span",{class:"token punctuation"},"{"),e("\n      "),a("span",{class:"token keyword"},"const"),e(" handler "),a("span",{class:"token operator"},"="),e(" isBind "),a("span",{class:"token operator"},"?"),e(),a("span",{class:"token string"},"'addEventListener'"),e(),a("span",{class:"token operator"},":"),e(),a("span",{class:"token string"},"'removeEventListener'"),e("\n      preventScrollExclude "),a("span",{class:"token operator"},"="),e(" preventScrollExclude "),a("span",{class:"token operator"},"||"),e(),a("span",{class:"token keyword"},"this"),a("span",{class:"token punctuation"},"."),e("preventScrollExclude\n      "),a("span",{class:"token keyword"},"const"),e(" excluder "),a("span",{class:"token operator"},"="),e("\n        preventScrollExclude "),a("span",{class:"token operator"},"&&"),e(),a("span",{class:"token keyword"},"typeof"),e(" preventScrollExclude "),a("span",{class:"token operator"},"==="),e(),a("span",{class:"token string"},"'string'"),e("\n          "),a("span",{class:"token operator"},"?"),e(),a("span",{class:"token keyword"},"this"),a("span",{class:"token punctuation"},"."),e("$el"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"querySelector"),a("span",{class:"token punctuation"},"("),e("preventScrollExclude"),a("span",{class:"token punctuation"},")"),e("\n          "),a("span",{class:"token operator"},":"),e(" preventScrollExclude\n      excluder "),a("span",{class:"token operator"},"&&"),e(" excluder"),a("span",{class:"token punctuation"},"["),e("handler"),a("span",{class:"token punctuation"},"]"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},"'touchmove'"),a("span",{class:"token punctuation"},","),e(),a("span",{class:"token keyword"},"this"),a("span",{class:"token punctuation"},"."),e("$_stopImmediatePropagation"),a("span",{class:"token punctuation"},","),e(),a("span",{class:"token boolean"},"false"),a("span",{class:"token punctuation"},")"),e("\n    "),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},","),e("\n    "),a("span",{class:"token function"},"$_preventDefault"),a("span",{class:"token punctuation"},"("),a("span",{class:"token parameter"},"event"),a("span",{class:"token punctuation"},")"),e(),a("span",{class:"token punctuation"},"{"),e("\n      event"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"preventDefault"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),e("\n    "),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},","),e("\n    "),a("span",{class:"token function"},"$_stopImmediatePropagation"),a("span",{class:"token punctuation"},"("),a("span",{class:"token parameter"},"event"),a("span",{class:"token punctuation"},")"),e(),a("span",{class:"token punctuation"},"{"),e("\n      "),a("span",{class:"token comment"},"/* istanbul ignore next */"),e("\n      event"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"stopImmediatePropagation"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),e("\n    "),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},","),e("\n")]),a("div",{class:"m-mdic-copy-wrapper"},[a("div",{class:"u-mdic-copy-notify",id:"j-notify-1629557986396-26"},"复制成功"),a("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"// 滚动的时候阻止默认事件 排除的元素及子节点继续执行绑定事件\n$_preventScroll(isBind) {\n      const handler = isBind ? 'addEventListener' : 'removeEventListener'\n      const masker = this.$el.querySelector('.md-popup-mask')\n      const boxer = this.$el.querySelector('.md-popup-box')\n      masker && masker[handler]('touchmove', this.$_preventDefault, false)\n      boxer && boxer[handler]('touchmove', this.$_preventDefault, false)\n      this.$_preventScrollExclude(isBind)\n    },\n    $_preventScrollExclude(isBind, preventScrollExclude) {\n      const handler = isBind ? 'addEventListener' : 'removeEventListener'\n      preventScrollExclude = preventScrollExclude || this.preventScrollExclude\n      const excluder =\n        preventScrollExclude && typeof preventScrollExclude === 'string'\n          ? this.$el.querySelector(preventScrollExclude)\n          : preventScrollExclude\n      excluder && excluder[handler]('touchmove', this.$_stopImmediatePropagation, false)\n    },\n    $_preventDefault(event) {\n      event.preventDefault()\n    },\n    $_stopImmediatePropagation(event) {\n      /* istanbul ignore next */\n      event.stopImmediatePropagation()\n    },\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629557986396-26","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),a("div",{class:"line-numbers-wrapper"},[a("span",{class:"line-number"},"1"),a("br"),a("span",{class:"line-number"},"2"),a("br"),a("span",{class:"line-number"},"3"),a("br"),a("span",{class:"line-number"},"4"),a("br"),a("span",{class:"line-number"},"5"),a("br"),a("span",{class:"line-number"},"6"),a("br"),a("span",{class:"line-number"},"7"),a("br"),a("span",{class:"line-number"},"8"),a("br"),a("span",{class:"line-number"},"9"),a("br"),a("span",{class:"line-number"},"10"),a("br"),a("span",{class:"line-number"},"11"),a("br"),a("span",{class:"line-number"},"12"),a("br"),a("span",{class:"line-number"},"13"),a("br"),a("span",{class:"line-number"},"14"),a("br"),a("span",{class:"line-number"},"15"),a("br"),a("span",{class:"line-number"},"16"),a("br"),a("span",{class:"line-number"},"17"),a("br"),a("span",{class:"line-number"},"18"),a("br"),a("span",{class:"line-number"},"19"),a("br"),a("span",{class:"line-number"},"20"),a("br"),a("span",{class:"line-number"},"21"),a("br"),a("span",{class:"line-number"},"22"),a("br"),a("span",{class:"line-number"},"23"),a("br"),a("span",{class:"line-number"},"24"),a("br"),a("span",{class:"line-number"},"25"),a("br")])],-1);c.render=function(t,a,e,o,c,E){return n(),s("div",null,[l,p,i,u,r,d,k,m,b,y,h,f,v,x,g,w,C])};export default c;export{o as __pageData};
