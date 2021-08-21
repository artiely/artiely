import{o as n,c as t,a as e,x as a,f as s}from"./app.5f3fb606.js";const c='{"title":"创建自定义事件","description":"","frontmatter":{"title":"创建自定义事件","tag":["javascript"],"cover":"https://gitee.com/artiely/Figure-bed/raw/master/images/20200625193949.png","base64":"e7eb91","date":"2020-6-25","author":"artiely"},"headers":[{"level":2,"title":"添加自定义数据– CustomEvent()","slug":"添加自定义数据-customevent"},{"level":2,"title":"老式的方式","slug":"老式的方式"},{"level":2,"title":"参数","slug":"参数"},{"level":2,"title":"事件冒泡","slug":"事件冒泡"},{"level":2,"title":"动态创建和调度事件","slug":"动态创建和调度事件"},{"level":2,"title":"触发内置事件","slug":"触发内置事件"},{"level":2,"title":"如何区分事件是否用户触发","slug":"如何区分事件是否用户触发"},{"level":2,"title":"实践","slug":"实践"},{"level":2,"title":"思考","slug":"思考"}],"relativePath":"post/2020/2020-6-25-custom-event.md","lastUpdated":1629110852438}',o={},l=e("h1",{id:"创建自定义事件"},[e("a",{class:"header-anchor",href:"#创建自定义事件","aria-hidden":"true"},"#"),a(" 创建自定义事件")],-1),i=e("p",null,[a("可以使用"),e("code",null,"Event"),a("构造函数创建事件，如下所示：")],-1),p=e("div",{class:"language-js line-numbers-mode"},[e("pre",null,[e("code",null,[e("span",{class:"token keyword"},"var"),a(" event "),e("span",{class:"token operator"},"="),a(),e("span",{class:"token keyword"},"new"),a(),e("span",{class:"token class-name"},"Event"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},"'build'"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),a("\n\n"),e("span",{class:"token comment"},"// Listen for the event."),a("\nelem"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"addEventListener"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},"'build'"),e("span",{class:"token punctuation"},","),a(),e("span",{class:"token keyword"},"function"),a(),e("span",{class:"token punctuation"},"("),e("span",{class:"token parameter"},"e"),e("span",{class:"token punctuation"},")"),a(),e("span",{class:"token punctuation"},"{"),a(),e("span",{class:"token comment"},"/* ... */"),a(),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),a(),e("span",{class:"token boolean"},"false"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),a("\n\n"),e("span",{class:"token comment"},"// Dispatch the event."),a("\nelem"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"dispatchEvent"),e("span",{class:"token punctuation"},"("),a("event"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),a("\n")]),e("div",{class:"m-mdic-copy-wrapper"},[e("div",{class:"u-mdic-copy-notify",id:"j-notify-1629557008574-10582"},"复制成功"),e("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"var event = new Event('build');\n\n// Listen for the event.\nelem.addEventListener('build', function (e) { /* ... */ }, false);\n\n// Dispatch the event.\nelem.dispatchEvent(event);\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629557008574-10582","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),e("div",{class:"line-numbers-wrapper"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br"),e("span",{class:"line-number"},"3"),e("br"),e("span",{class:"line-number"},"4"),e("br"),e("span",{class:"line-number"},"5"),e("br"),e("span",{class:"line-number"},"6"),e("br"),e("span",{class:"line-number"},"7"),e("br")])],-1),d=e("p",null,[a("上面的代码示例使用"),e("code",null,"EventTarget.dispatchEvent()"),a("方法。"),e("br"),a(" 大多数现代浏览器都支持此构造函数（Internet Explorer除外）。有关更详细的方法（可与Internet Explorer一起使用），请参见下面的老式方法。")],-1),u=e("h2",{id:"添加自定义数据-customevent"},[e("a",{class:"header-anchor",href:"#添加自定义数据-customevent","aria-hidden":"true"},"#"),a(" 添加自定义数据– CustomEvent()")],-1),r=e("p",null,[a("为了向事件对象添加更多数据，存在"),e("code",null,"CustomEvent"),a("接口，并且detail 属性可用于传递自定义数据。"),e("br"),a(" 例如，可以如下创建事件：")],-1),m=e("div",{class:"language-js line-numbers-mode"},[e("pre",null,[e("code",null,[e("span",{class:"token keyword"},"var"),a(" event "),e("span",{class:"token operator"},"="),a(),e("span",{class:"token keyword"},"new"),a(),e("span",{class:"token class-name"},"CustomEvent"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},"'build'"),e("span",{class:"token punctuation"},","),a(),e("span",{class:"token punctuation"},"{"),a(" detail"),e("span",{class:"token operator"},":"),a(" elem"),e("span",{class:"token punctuation"},"."),a("dataset"),e("span",{class:"token punctuation"},"."),a("time "),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),a("\n")]),e("div",{class:"m-mdic-copy-wrapper"},[e("div",{class:"u-mdic-copy-notify",id:"j-notify-1629557008574-90436"},"复制成功"),e("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"var event = new CustomEvent('build', { detail: elem.dataset.time });\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629557008574-90436","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),e("div",{class:"line-numbers-wrapper"},[e("span",{class:"line-number"},"1"),e("br")])],-1),k=e("p",null,"然后，这将允许您在事件侦听器中访问其他数据：",-1),y=e("div",{class:"language-js line-numbers-mode"},[e("pre",null,[e("code",null,[e("span",{class:"token keyword"},"function"),a(),e("span",{class:"token function"},"eventHandler"),e("span",{class:"token punctuation"},"("),e("span",{class:"token parameter"},"e"),e("span",{class:"token punctuation"},")"),a(),e("span",{class:"token punctuation"},"{"),a("\n  console"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"log"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},"'The time is: '"),a(),e("span",{class:"token operator"},"+"),a(" e"),e("span",{class:"token punctuation"},"."),a("detail"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),a("\n"),e("span",{class:"token punctuation"},"}"),a("\n")]),e("div",{class:"m-mdic-copy-wrapper"},[e("div",{class:"u-mdic-copy-notify",id:"j-notify-1629557008574-37197"},"复制成功"),e("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"function eventHandler(e) {\n  console.log('The time is: ' + e.detail);\n}\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629557008574-37197","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),e("div",{class:"line-numbers-wrapper"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br"),e("span",{class:"line-number"},"3"),e("br")])],-1),b=e("h2",{id:"老式的方式"},[e("a",{class:"header-anchor",href:"#老式的方式","aria-hidden":"true"},"#"),a(" 老式的方式")],-1),h=e("p",null,"创建事件的较旧方法使用受Java启发的API。下面显示了一个示例：",-1),v=e("div",{class:"language-js line-numbers-mode"},[e("pre",null,[e("code",null,[e("span",{class:"token comment"},"//创建事件。"),a("\n"),e("span",{class:"token keyword"},"var"),a(" event "),e("span",{class:"token operator"},"="),a(" document"),e("span",{class:"token punctuation"},"."),a("createEvent（"),e("span",{class:"token string"},"'Event'"),a("）"),e("span",{class:"token punctuation"},";"),a("\n\n"),e("span",{class:"token comment"},"//定义事件名称为“ build”。"),a("\nevent"),e("span",{class:"token punctuation"},"."),a("initEvent（"),e("span",{class:"token string"},"'build'"),a("，"),e("span",{class:"token boolean"},"true"),a("，"),e("span",{class:"token boolean"},"true"),a("）"),e("span",{class:"token punctuation"},";"),a("\n\n"),e("span",{class:"token comment"},"//监听事件。"),a("\nelem"),e("span",{class:"token punctuation"},"."),a("addEventListener（"),e("span",{class:"token string"},"'build'"),a("，"),e("span",{class:"token keyword"},"function"),a("（e）"),e("span",{class:"token punctuation"},"{"),a("\n  "),e("span",{class:"token comment"},"// e.target匹配elem"),a("\n"),e("span",{class:"token punctuation"},"}"),a("，错误）；\n\n"),e("span",{class:"token comment"},"// target可以是任何Element或其他EventTarget。"),a("\nelem"),e("span",{class:"token punctuation"},"."),a("dispatchEvent（event）"),e("span",{class:"token punctuation"},";"),a("\n")]),e("div",{class:"m-mdic-copy-wrapper"},[e("div",{class:"u-mdic-copy-notify",id:"j-notify-1629557008574-78931"},"复制成功"),e("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"//创建事件。\nvar event = document.createEvent（'Event'）;\n\n//定义事件名称为“ build”。\nevent.initEvent（'build'，true，true）;\n\n//监听事件。\nelem.addEventListener（'build'，function（e）{\n  // e.target匹配elem\n}，错误）；\n\n// target可以是任何Element或其他EventTarget。\nelem.dispatchEvent（event）;\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629557008574-78931","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),e("div",{class:"line-numbers-wrapper"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br"),e("span",{class:"line-number"},"3"),e("br"),e("span",{class:"line-number"},"4"),e("br"),e("span",{class:"line-number"},"5"),e("br"),e("span",{class:"line-number"},"6"),e("br"),e("span",{class:"line-number"},"7"),e("br"),e("span",{class:"line-number"},"8"),e("br"),e("span",{class:"line-number"},"9"),e("br"),e("span",{class:"line-number"},"10"),e("br"),e("span",{class:"line-number"},"11"),e("br"),e("span",{class:"line-number"},"12"),e("br"),e("span",{class:"line-number"},"13"),e("br")])],-1),f=e("div",{class:"language-js line-numbers-mode"},[e("pre",null,[e("code",null,[a("event"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"initEvent"),e("span",{class:"token punctuation"},"("),a("type"),e("span",{class:"token punctuation"},","),a(" bubbles"),e("span",{class:"token punctuation"},","),a(" cancelable"),e("span",{class:"token punctuation"},")"),a("\n")]),e("div",{class:"m-mdic-copy-wrapper"},[e("div",{class:"u-mdic-copy-notify",id:"j-notify-1629557008575-209"},"复制成功"),e("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"event.initEvent(type, bubbles, cancelable)\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629557008575-209","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),e("div",{class:"line-numbers-wrapper"},[e("span",{class:"line-number"},"1"),e("br")])],-1),g=s('<h2 id="参数"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><code>type</code></p><p>一个 <code>DOMString</code> 类型的字段，定义了事件的类型.</p><p><code>bubbles</code></p><p>一个 <code>Boolean</code> 值，决定是否事件是否应该向上冒泡. 一旦设置了这个值，只读属性<code>Event.bubbles</code>也会获取相应的值.</p><p><code>cancelable</code></p><p>一个 <code>Boolean</code> 值，决定该事件的默认动作是否可以被取消. 一旦设置了这个值, 只读属性 <code>Event.cancelable</code> 也会获取相应的值.</p></div><h2 id="事件冒泡"><a class="header-anchor" href="#事件冒泡" aria-hidden="true">#</a> 事件冒泡</h2><p>通常希望从子元素触发事件，并让祖先捕获该事件。（可选）数据：</p>',4),C=e("div",{class:"language-html line-numbers-mode"},[e("pre",null,[e("code",null,[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("form")]),e("span",{class:"token punctuation"},">")]),a("\n  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("textarea")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("textarea")]),e("span",{class:"token punctuation"},">")]),a("\n"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("form")]),e("span",{class:"token punctuation"},">")]),a("\n")]),e("div",{class:"m-mdic-copy-wrapper"},[e("div",{class:"u-mdic-copy-notify",id:"j-notify-1629557008575-42523"},"复制成功"),e("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"<form>\n  <textarea></textarea>\n</form>\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629557008575-42523","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),e("div",{class:"line-numbers-wrapper"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br"),e("span",{class:"line-number"},"3"),e("br")])],-1),w=e("div",{class:"language-js line-numbers-mode"},[e("pre",null,[e("code",null,[e("span",{class:"token keyword"},"const"),a(" form "),e("span",{class:"token operator"},"="),a(" document"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"querySelector"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},"'form'"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),a("\n"),e("span",{class:"token keyword"},"const"),a(" textarea "),e("span",{class:"token operator"},"="),a(" document"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"querySelector"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},"'textarea'"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),a("\n\n"),e("span",{class:"token comment"},'// Create a new event, allow bubbling, and provide any data you want to pass to the "detail" property'),a("\n"),e("span",{class:"token keyword"},"const"),a(" eventAwesome "),e("span",{class:"token operator"},"="),a(),e("span",{class:"token keyword"},"new"),a(),e("span",{class:"token class-name"},"CustomEvent"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},"'awesome'"),e("span",{class:"token punctuation"},","),a(),e("span",{class:"token punctuation"},"{"),a("\n  bubbles"),e("span",{class:"token operator"},":"),a(),e("span",{class:"token boolean"},"true"),e("span",{class:"token punctuation"},","),a("\n  detail"),e("span",{class:"token operator"},":"),a(),e("span",{class:"token punctuation"},"{"),a(),e("span",{class:"token function-variable function"},"text"),e("span",{class:"token operator"},":"),a(),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),a(),e("span",{class:"token operator"},"=>"),a(" textarea"),e("span",{class:"token punctuation"},"."),a("value "),e("span",{class:"token punctuation"},"}"),a("\n"),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),a("\n\n"),e("span",{class:"token comment"},'// The form element listens for the custom "awesome" event and then consoles the output of the passed text() method'),a("\nform"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"addEventListener"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},"'awesome'"),e("span",{class:"token punctuation"},","),a(),e("span",{class:"token parameter"},"e"),a(),e("span",{class:"token operator"},"=>"),a(" console"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"log"),e("span",{class:"token punctuation"},"("),a("e"),e("span",{class:"token punctuation"},"."),a("detail"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"text"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),a("\n\n"),e("span",{class:"token comment"},"// As the user types, the textarea inside the form dispatches/triggers the event to fire, and uses itself as the starting point"),a("\ntextarea"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"addEventListener"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},"'input'"),e("span",{class:"token punctuation"},","),a(),e("span",{class:"token parameter"},"e"),a(),e("span",{class:"token operator"},"=>"),a(" e"),e("span",{class:"token punctuation"},"."),a("target"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"dispatchEvent"),e("span",{class:"token punctuation"},"("),a("eventAwesome"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),a("\n")]),e("div",{class:"m-mdic-copy-wrapper"},[e("div",{class:"u-mdic-copy-notify",id:"j-notify-1629557008575-55599"},"复制成功"),e("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"const form = document.querySelector('form');\nconst textarea = document.querySelector('textarea');\n\n// Create a new event, allow bubbling, and provide any data you want to pass to the \"detail\" property\nconst eventAwesome = new CustomEvent('awesome', {\n  bubbles: true,\n  detail: { text: () => textarea.value }\n});\n\n// The form element listens for the custom \"awesome\" event and then consoles the output of the passed text() method\nform.addEventListener('awesome', e => console.log(e.detail.text()));\n\n// As the user types, the textarea inside the form dispatches/triggers the event to fire, and uses itself as the starting point\ntextarea.addEventListener('input', e => e.target.dispatchEvent(eventAwesome));\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629557008575-55599","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),e("div",{class:"line-numbers-wrapper"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br"),e("span",{class:"line-number"},"3"),e("br"),e("span",{class:"line-number"},"4"),e("br"),e("span",{class:"line-number"},"5"),e("br"),e("span",{class:"line-number"},"6"),e("br"),e("span",{class:"line-number"},"7"),e("br"),e("span",{class:"line-number"},"8"),e("br"),e("span",{class:"line-number"},"9"),e("br"),e("span",{class:"line-number"},"10"),e("br"),e("span",{class:"line-number"},"11"),e("br"),e("span",{class:"line-number"},"12"),e("br"),e("span",{class:"line-number"},"13"),e("br"),e("span",{class:"line-number"},"14"),e("br")])],-1),x=e("h2",{id:"动态创建和调度事件"},[e("a",{class:"header-anchor",href:"#动态创建和调度事件","aria-hidden":"true"},"#"),a(" 动态创建和调度事件")],-1),E=e("p",null,"元素可以侦听尚未创建的事件：",-1),T=e("div",{class:"language-html line-numbers-mode"},[e("pre",null,[e("code",null,[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("form")]),e("span",{class:"token punctuation"},">")]),a("\n  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("textarea")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("textarea")]),e("span",{class:"token punctuation"},">")]),a("\n"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),a("form")]),e("span",{class:"token punctuation"},">")]),a("\n")]),e("div",{class:"m-mdic-copy-wrapper"},[e("div",{class:"u-mdic-copy-notify",id:"j-notify-1629557008575-35422"},"复制成功"),e("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"<form>\n  <textarea></textarea>\n</form>\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629557008575-35422","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),e("div",{class:"line-numbers-wrapper"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br"),e("span",{class:"line-number"},"3"),e("br")])],-1),j=e("div",{class:"language-js line-numbers-mode"},[e("pre",null,[e("code",null,[e("span",{class:"token keyword"},"const"),a(" form "),e("span",{class:"token operator"},"="),a(" document"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"querySelector"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},"'form'"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),a("\n"),e("span",{class:"token keyword"},"const"),a(" textarea "),e("span",{class:"token operator"},"="),a(" document"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"querySelector"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},"'textarea'"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),a("\n\nform"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"addEventListener"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},"'awesome'"),e("span",{class:"token punctuation"},","),a(),e("span",{class:"token parameter"},"e"),a(),e("span",{class:"token operator"},"=>"),a(" console"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"log"),e("span",{class:"token punctuation"},"("),a("e"),e("span",{class:"token punctuation"},"."),a("detail"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"text"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),a("\n\ntextarea"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"addEventListener"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},"'input'"),e("span",{class:"token punctuation"},","),a(),e("span",{class:"token keyword"},"function"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),a(),e("span",{class:"token punctuation"},"{"),a("\n  "),e("span",{class:"token comment"},"// Create and dispatch/trigger an event on the fly"),a("\n  "),e("span",{class:"token comment"},'// Note: Optionally, we\'ve also leveraged the "function expression" (instead of the "arrow function expression") so "this" will represent the element'),a("\n  "),e("span",{class:"token keyword"},"this"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"dispatchEvent"),e("span",{class:"token punctuation"},"("),e("span",{class:"token keyword"},"new"),a(),e("span",{class:"token class-name"},"CustomEvent"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},"'awesome'"),e("span",{class:"token punctuation"},","),a(),e("span",{class:"token punctuation"},"{"),a(" bubbles"),e("span",{class:"token operator"},":"),a(),e("span",{class:"token boolean"},"true"),e("span",{class:"token punctuation"},","),a(" detail"),e("span",{class:"token operator"},":"),a(),e("span",{class:"token punctuation"},"{"),a(),e("span",{class:"token function-variable function"},"text"),e("span",{class:"token operator"},":"),a(),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),a(),e("span",{class:"token operator"},"=>"),a(" textarea"),e("span",{class:"token punctuation"},"."),a("value "),e("span",{class:"token punctuation"},"}"),a(),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},")"),a("\n"),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),a("\n")]),e("div",{class:"m-mdic-copy-wrapper"},[e("div",{class:"u-mdic-copy-notify",id:"j-notify-1629557008576-90322"},"复制成功"),e("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"const form = document.querySelector('form');\nconst textarea = document.querySelector('textarea');\n\nform.addEventListener('awesome', e => console.log(e.detail.text()));\n\ntextarea.addEventListener('input', function() {\n  // Create and dispatch/trigger an event on the fly\n  // Note: Optionally, we've also leveraged the \"function expression\" (instead of the \"arrow function expression\") so \"this\" will represent the element\n  this.dispatchEvent(new CustomEvent('awesome', { bubbles: true, detail: { text: () => textarea.value } }))\n});\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629557008576-90322","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),e("div",{class:"line-numbers-wrapper"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br"),e("span",{class:"line-number"},"3"),e("br"),e("span",{class:"line-number"},"4"),e("br"),e("span",{class:"line-number"},"5"),e("br"),e("span",{class:"line-number"},"6"),e("br"),e("span",{class:"line-number"},"7"),e("br"),e("span",{class:"line-number"},"8"),e("br"),e("span",{class:"line-number"},"9"),e("br"),e("span",{class:"line-number"},"10"),e("br")])],-1),_=e("h2",{id:"触发内置事件"},[e("a",{class:"header-anchor",href:"#触发内置事件","aria-hidden":"true"},"#"),a(" 触发内置事件")],-1),I=e("p",null,"本示例演示了使用DOM方法在复选框上模拟单击（以编程方式生成单击事件）",-1),$=e("div",{class:"language-js line-numbers-mode"},[e("pre",null,[e("code",null,[e("span",{class:"token keyword"},"function"),a(),e("span",{class:"token function"},"simulateClick"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),a(),e("span",{class:"token punctuation"},"{"),a("\n  "),e("span",{class:"token keyword"},"var"),a(" event "),e("span",{class:"token operator"},"="),a(),e("span",{class:"token keyword"},"new"),a(),e("span",{class:"token class-name"},"MouseEvent"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},"'click'"),e("span",{class:"token punctuation"},","),a(),e("span",{class:"token punctuation"},"{"),a("\n    view"),e("span",{class:"token operator"},":"),a(" window"),e("span",{class:"token punctuation"},","),a("\n    bubbles"),e("span",{class:"token operator"},":"),a(),e("span",{class:"token boolean"},"true"),e("span",{class:"token punctuation"},","),a("\n    cancelable"),e("span",{class:"token operator"},":"),a(),e("span",{class:"token boolean"},"true"),a("\n  "),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),a("\n  "),e("span",{class:"token keyword"},"var"),a(" cb "),e("span",{class:"token operator"},"="),a(" document"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"getElementById"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},"'checkbox'"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),a(" \n  "),e("span",{class:"token keyword"},"var"),a(" cancelled "),e("span",{class:"token operator"},"="),a(),e("span",{class:"token operator"},"!"),a("cb"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"dispatchEvent"),e("span",{class:"token punctuation"},"("),a("event"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),a("\n  "),e("span",{class:"token keyword"},"if"),a(),e("span",{class:"token punctuation"},"("),a("cancelled"),e("span",{class:"token punctuation"},")"),a(),e("span",{class:"token punctuation"},"{"),a("\n    "),e("span",{class:"token comment"},"// A handler called preventDefault."),a("\n    "),e("span",{class:"token function"},"alert"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"cancelled"'),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),a("\n  "),e("span",{class:"token punctuation"},"}"),a(),e("span",{class:"token keyword"},"else"),a(),e("span",{class:"token punctuation"},"{"),a("\n    "),e("span",{class:"token comment"},"// None of the handlers called preventDefault."),a("\n    "),e("span",{class:"token function"},"alert"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},'"not cancelled"'),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),a("\n  "),e("span",{class:"token punctuation"},"}"),a("\n"),e("span",{class:"token punctuation"},"}"),a("\n")]),e("div",{class:"m-mdic-copy-wrapper"},[e("div",{class:"u-mdic-copy-notify",id:"j-notify-1629557008576-83568"},"复制成功"),e("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"function simulateClick() {\n  var event = new MouseEvent('click', {\n    view: window,\n    bubbles: true,\n    cancelable: true\n  });\n  var cb = document.getElementById('checkbox'); \n  var cancelled = !cb.dispatchEvent(event);\n  if (cancelled) {\n    // A handler called preventDefault.\n    alert(\"cancelled\");\n  } else {\n    // None of the handlers called preventDefault.\n    alert(\"not cancelled\");\n  }\n}\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629557008576-83568","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),e("div",{class:"line-numbers-wrapper"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br"),e("span",{class:"line-number"},"3"),e("br"),e("span",{class:"line-number"},"4"),e("br"),e("span",{class:"line-number"},"5"),e("br"),e("span",{class:"line-number"},"6"),e("br"),e("span",{class:"line-number"},"7"),e("br"),e("span",{class:"line-number"},"8"),e("br"),e("span",{class:"line-number"},"9"),e("br"),e("span",{class:"line-number"},"10"),e("br"),e("span",{class:"line-number"},"11"),e("br"),e("span",{class:"line-number"},"12"),e("br"),e("span",{class:"line-number"},"13"),e("br"),e("span",{class:"line-number"},"14"),e("br"),e("span",{class:"line-number"},"15"),e("br"),e("span",{class:"line-number"},"16"),e("br")])],-1),N=s('<div class="warning custom-block"><p class="custom-block-title">WARNING</p><p><code>Event.initEvent()</code><br> 该特性已经从 Web 标准中删除，虽然一些浏览器目前仍然支持它，但也许会在未来的某个时间停止支持，请尽量不要使用该特性。</p></div><p><code>Event.initEvent()</code> 方法可以用来初始化由<code>Document.createEvent()</code> 创建的 event 实例.</p><p>用这种方式初始化事件必须是由 <code>Document.createEvent()</code> 方法创建的实例. 本方法必须在事件被触发之前调用（用<code>EventTarget.dispatchEvent()</code>调用）.事件 一旦被调用, 便不再做其他任何事.</p><h2 id="如何区分事件是否用户触发"><a class="header-anchor" href="#如何区分事件是否用户触发" aria-hidden="true">#</a> 如何区分事件是否用户触发</h2><p>有时我们需要区分事件是用户触发的还是程序触发的</p>',5),A=e("div",{class:"language-js line-numbers-mode"},[e("pre",null,[e("code",null,[e("span",{class:"token comment"},"// e 事件源"),a("\n"),e("span",{class:"token keyword"},"if"),a(),e("span",{class:"token punctuation"},"("),e("span",{class:"token operator"},"!"),a("e"),e("span",{class:"token punctuation"},"."),a("isTrusted"),e("span",{class:"token punctuation"},")"),a(),e("span",{class:"token keyword"},"return"),a("\n")]),e("div",{class:"m-mdic-copy-wrapper"},[e("div",{class:"u-mdic-copy-notify",id:"j-notify-1629557008576-8179"},"复制成功"),e("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"// e 事件源\nif (!e.isTrusted) return\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629557008576-8179","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),e("div",{class:"line-numbers-wrapper"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br")])],-1),D=s('<p><code>e.isTrusted</code>为<code>true</code>表示由用户触发反之不然</p><h2 id="实践"><a class="header-anchor" href="#实践" aria-hidden="true">#</a> 实践</h2><p>在[指令限制字符的长度]一文中查看。</p><h2 id="思考"><a class="header-anchor" href="#思考" aria-hidden="true">#</a> 思考</h2><p><code>jQuery</code>的<code>trigger</code>实现.</p>',5);o.render=function(e,a,s,c,o,P){return n(),t("div",null,[l,i,p,d,u,r,m,k,y,b,h,v,f,g,C,w,x,E,T,j,_,I,$,N,A,D])};export default o;export{c as __pageData};
