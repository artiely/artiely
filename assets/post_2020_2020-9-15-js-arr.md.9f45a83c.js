import{o as n,c as s,a,x as t}from"./app.5f3fb606.js";const e='{"title":"手写 map 和 reduce","description":"","frontmatter":{"title":"手写 map 和 reduce","tag":["javaScript"],"cover":"https://gitee.com/artiely/Figure-bed/raw/master/images/20200924191410.png","base64":"1b1b20","author":"artiely","date":"2020-9-15"},"headers":[{"level":2,"title":"JS 稀疏数组","slug":"js-稀疏数组"}],"relativePath":"post/2020/2020-9-15-js-arr.md","lastUpdated":1629110865852}',o={},c=a("h1",{id:"手写-map-和-reduce"},[a("a",{class:"header-anchor",href:"#手写-map-和-reduce","aria-hidden":"true"},"#"),t(" 手写 map 和 reduce")],-1),p=a("div",{class:"language-js line-numbers-mode"},[a("pre",null,[a("code",null,[a("span",{class:"token punctuation"},";"),a("span",{class:"token punctuation"},"("),a("span",{class:"token keyword"},"function"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),t(),a("span",{class:"token punctuation"},"{"),t("\n  "),a("span",{class:"token keyword"},"var"),t(),a("span",{class:"token function-variable function"},"selfMap"),t(),a("span",{class:"token operator"},"="),t(),a("span",{class:"token keyword"},"function"),a("span",{class:"token punctuation"},"("),a("span",{class:"token parameter"},[t("fn"),a("span",{class:"token punctuation"},","),t(" context")]),a("span",{class:"token punctuation"},")"),t(),a("span",{class:"token punctuation"},"{"),t("\n    "),a("span",{class:"token comment"},"// fn: 回调  context:回调作用域指定的this"),t("\n    "),a("span",{class:"token comment"},"// 1. 获取调用者this,并转为数组"),t("\n    "),a("span",{class:"token keyword"},"var"),t(" arr "),a("span",{class:"token operator"},"="),t(),a("span",{class:"token punctuation"},"["),a("span",{class:"token punctuation"},"]"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"slice"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"call"),a("span",{class:"token punctuation"},"("),a("span",{class:"token keyword"},"this"),a("span",{class:"token punctuation"},")"),t("\n    "),a("span",{class:"token comment"},"// 2. 遍历调用者"),t("\n    "),a("span",{class:"token keyword"},"var"),t(" arrMap "),a("span",{class:"token operator"},"="),t(),a("span",{class:"token punctuation"},"["),a("span",{class:"token punctuation"},"]"),t("\n    "),a("span",{class:"token keyword"},"for"),t(),a("span",{class:"token punctuation"},"("),a("span",{class:"token keyword"},"var"),t(" i "),a("span",{class:"token operator"},"="),t(),a("span",{class:"token number"},"0"),a("span",{class:"token punctuation"},";"),t(" i "),a("span",{class:"token operator"},"<"),t(" arr"),a("span",{class:"token punctuation"},"."),t("length"),a("span",{class:"token punctuation"},";"),t(" i"),a("span",{class:"token operator"},"++"),a("span",{class:"token punctuation"},")"),t(),a("span",{class:"token punctuation"},"{"),t("\n      "),a("span",{class:"token comment"},"// 这个判断就是处理js 稀疏数组"),t("\n      "),a("span",{class:"token keyword"},"if"),t(),a("span",{class:"token punctuation"},"("),a("span",{class:"token operator"},"!"),t("arr"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"hasOwnProperty"),a("span",{class:"token punctuation"},"("),t("i"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},")"),t(),a("span",{class:"token punctuation"},"{"),t("\n        "),a("span",{class:"token keyword"},"continue"),t("\n      "),a("span",{class:"token punctuation"},"}"),t("\n      arrMap"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"push"),a("span",{class:"token punctuation"},"("),a("span",{class:"token function"},"fn"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"call"),a("span",{class:"token punctuation"},"("),t("context"),a("span",{class:"token punctuation"},","),t(" arr"),a("span",{class:"token punctuation"},"["),t("i"),a("span",{class:"token punctuation"},"]"),a("span",{class:"token punctuation"},","),t(" i"),a("span",{class:"token punctuation"},","),t(),a("span",{class:"token keyword"},"this"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},")"),t("\n    "),a("span",{class:"token punctuation"},"}"),t("\n    "),a("span",{class:"token keyword"},"return"),t(" arrMap\n  "),a("span",{class:"token punctuation"},"}"),t("\n  "),a("span",{class:"token keyword"},"var"),t(),a("span",{class:"token function-variable function"},"selfReduce"),t(),a("span",{class:"token operator"},"="),t(),a("span",{class:"token keyword"},"function"),a("span",{class:"token punctuation"},"("),a("span",{class:"token parameter"},[t("fn"),a("span",{class:"token punctuation"},","),t(" initialValue")]),a("span",{class:"token punctuation"},")"),t(),a("span",{class:"token punctuation"},"{"),t("\n    "),a("span",{class:"token keyword"},"var"),t(" arr "),a("span",{class:"token operator"},"="),t(),a("span",{class:"token punctuation"},"["),a("span",{class:"token punctuation"},"]"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"slice"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"call"),a("span",{class:"token punctuation"},"("),a("span",{class:"token keyword"},"this"),a("span",{class:"token punctuation"},")"),t("\n    "),a("span",{class:"token comment"},"// 通过判断入参长度,可以避免过滤initialValue传入的非法值(0,undifind,...)"),t("\n    "),a("span",{class:"token keyword"},"if"),t(),a("span",{class:"token punctuation"},"("),t("arguments"),a("span",{class:"token punctuation"},"."),t("length "),a("span",{class:"token operator"},"==="),t(),a("span",{class:"token number"},"2"),a("span",{class:"token punctuation"},")"),t(),a("span",{class:"token punctuation"},"{"),t("\n      arr"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"unshift"),a("span",{class:"token punctuation"},"("),t("initialValue"),a("span",{class:"token punctuation"},")"),t("\n    "),a("span",{class:"token punctuation"},"}"),t("\n    "),a("span",{class:"token keyword"},"var"),t(" result "),a("span",{class:"token operator"},"="),t(" arr"),a("span",{class:"token punctuation"},"["),a("span",{class:"token number"},"0"),a("span",{class:"token punctuation"},"]"),t("\n    "),a("span",{class:"token keyword"},"for"),t(),a("span",{class:"token punctuation"},"("),a("span",{class:"token keyword"},"var"),t(" i "),a("span",{class:"token operator"},"="),t(),a("span",{class:"token number"},"1"),a("span",{class:"token punctuation"},";"),t(" i "),a("span",{class:"token operator"},"<"),t(" arr"),a("span",{class:"token punctuation"},"."),t("length"),a("span",{class:"token punctuation"},";"),t(" i"),a("span",{class:"token operator"},"++"),a("span",{class:"token punctuation"},")"),t(),a("span",{class:"token punctuation"},"{"),t("\n      "),a("span",{class:"token keyword"},"if"),t(),a("span",{class:"token punctuation"},"("),a("span",{class:"token operator"},"!"),t("arr"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"hasOwnProperty"),a("span",{class:"token punctuation"},"("),t("i"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},")"),t(),a("span",{class:"token punctuation"},"{"),t("\n        "),a("span",{class:"token keyword"},"continue"),t("\n      "),a("span",{class:"token punctuation"},"}"),t("\n      "),a("span",{class:"token comment"},"// 将第一次的出参作为第二次的入参"),t("\n      result "),a("span",{class:"token operator"},"="),t(),a("span",{class:"token function"},"fn"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"call"),a("span",{class:"token punctuation"},"("),a("span",{class:"token keyword"},"null"),a("span",{class:"token punctuation"},","),t(" result"),a("span",{class:"token punctuation"},","),t(" arr"),a("span",{class:"token punctuation"},"["),t("i"),a("span",{class:"token punctuation"},"]"),a("span",{class:"token punctuation"},","),t(" i"),a("span",{class:"token punctuation"},","),t(),a("span",{class:"token keyword"},"this"),a("span",{class:"token punctuation"},")"),t("\n    "),a("span",{class:"token punctuation"},"}"),t("\n    "),a("span",{class:"token keyword"},"return"),t(" result\n  "),a("span",{class:"token punctuation"},"}"),t("\n  "),a("span",{class:"token class-name"},"Object"),a("span",{class:"token punctuation"},"."),t("prototype"),a("span",{class:"token punctuation"},"["),a("span",{class:"token string"},"'selfReduce'"),a("span",{class:"token punctuation"},"]"),t(),a("span",{class:"token operator"},"="),t(" selfReduce\n  "),a("span",{class:"token class-name"},"Object"),a("span",{class:"token punctuation"},"."),t("prototype"),a("span",{class:"token punctuation"},"["),a("span",{class:"token string"},"'selfMap'"),a("span",{class:"token punctuation"},"]"),t(),a("span",{class:"token operator"},"="),t(" selfMap\n"),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),t("\n")]),a("div",{class:"m-mdic-copy-wrapper"},[a("div",{class:"u-mdic-copy-notify",id:"j-notify-1629557013851-48860"},"复制成功"),a("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":";(function() {\n  var selfMap = function(fn, context) {\n    // fn: 回调  context:回调作用域指定的this\n    // 1. 获取调用者this,并转为数组\n    var arr = [].slice.call(this)\n    // 2. 遍历调用者\n    var arrMap = []\n    for (var i = 0; i < arr.length; i++) {\n      // 这个判断就是处理js 稀疏数组\n      if (!arr.hasOwnProperty(i)) {\n        continue\n      }\n      arrMap.push(fn.call(context, arr[i], i, this))\n    }\n    return arrMap\n  }\n  var selfReduce = function(fn, initialValue) {\n    var arr = [].slice.call(this)\n    // 通过判断入参长度,可以避免过滤initialValue传入的非法值(0,undifind,...)\n    if (arguments.length === 2) {\n      arr.unshift(initialValue)\n    }\n    var result = arr[0]\n    for (var i = 1; i < arr.length; i++) {\n      if (!arr.hasOwnProperty(i)) {\n        continue\n      }\n      // 将第一次的出参作为第二次的入参\n      result = fn.call(null, result, arr[i], i, this)\n    }\n    return result\n  }\n  Object.prototype['selfReduce'] = selfReduce\n  Object.prototype['selfMap'] = selfMap\n})()\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629557013851-48860","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),a("div",{class:"line-numbers-wrapper"},[a("span",{class:"line-number"},"1"),a("br"),a("span",{class:"line-number"},"2"),a("br"),a("span",{class:"line-number"},"3"),a("br"),a("span",{class:"line-number"},"4"),a("br"),a("span",{class:"line-number"},"5"),a("br"),a("span",{class:"line-number"},"6"),a("br"),a("span",{class:"line-number"},"7"),a("br"),a("span",{class:"line-number"},"8"),a("br"),a("span",{class:"line-number"},"9"),a("br"),a("span",{class:"line-number"},"10"),a("br"),a("span",{class:"line-number"},"11"),a("br"),a("span",{class:"line-number"},"12"),a("br"),a("span",{class:"line-number"},"13"),a("br"),a("span",{class:"line-number"},"14"),a("br"),a("span",{class:"line-number"},"15"),a("br"),a("span",{class:"line-number"},"16"),a("br"),a("span",{class:"line-number"},"17"),a("br"),a("span",{class:"line-number"},"18"),a("br"),a("span",{class:"line-number"},"19"),a("br"),a("span",{class:"line-number"},"20"),a("br"),a("span",{class:"line-number"},"21"),a("br"),a("span",{class:"line-number"},"22"),a("br"),a("span",{class:"line-number"},"23"),a("br"),a("span",{class:"line-number"},"24"),a("br"),a("span",{class:"line-number"},"25"),a("br"),a("span",{class:"line-number"},"26"),a("br"),a("span",{class:"line-number"},"27"),a("br"),a("span",{class:"line-number"},"28"),a("br"),a("span",{class:"line-number"},"29"),a("br"),a("span",{class:"line-number"},"30"),a("br"),a("span",{class:"line-number"},"31"),a("br"),a("span",{class:"line-number"},"32"),a("br"),a("span",{class:"line-number"},"33"),a("br"),a("span",{class:"line-number"},"34"),a("br"),a("span",{class:"line-number"},"35"),a("br")])],-1),l=a("h2",{id:"js-稀疏数组"},[a("a",{class:"header-anchor",href:"#js-稀疏数组","aria-hidden":"true"},"#"),t(" JS 稀疏数组")],-1),u=a("p",null,[a("a",{href:"https://www.jianshu.com/p/181b122eb10e",target:"_blank",rel:"noopener noreferrer"},"https://www.jianshu.com/p/181b122eb10e")],-1);o.render=function(a,t,e,o,r,i){return n(),s("div",null,[c,p,l,u])};export default o;export{e as __pageData};
