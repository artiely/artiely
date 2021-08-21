import{o as n,c as s,a,x as t,f as e}from"./app.5f3fb606.js";const c='{"title":"面试问题总结","description":"","frontmatter":{"title":"面试问题总结","tag":["javaScript"],"cover":"https://gitee.com/artiely/Figure-bed/raw/master/images/20200924191108.png","base64":"3f5d5e","author":"artiely","date":"2020-9-24"},"headers":[{"level":3,"title":"笔试和问答","slug":"笔试和问答"},{"level":3,"title":"开放题及软实力","slug":"开放题及软实力"},{"level":2,"title":"避坑","slug":"避坑"},{"level":3,"title":"面试者自身应该注意的点","slug":"面试者自身应该注意的点"},{"level":3,"title":"通过面试官看一家公司或企业","slug":"通过面试官看一家公司或企业"}],"relativePath":"post/2020/2020-9-24-interview.md","lastUpdated":1629110865996}',o={},l=a("h1",{id:"面试问题总结"},[a("a",{class:"header-anchor",href:"#面试问题总结","aria-hidden":"true"},"#"),t(" 面试问题总结")],-1),p=a("p",null,"最近参加了一些面试，凭借着自己的记忆把还记得住的问题做一个归纳总结和个人观点。暂时不写答案，大家可以自己答一答，再找我要答案。",-1),u=a("h3",{id:"笔试和问答"},[a("a",{class:"header-anchor",href:"#笔试和问答","aria-hidden":"true"},"#"),t(" 笔试和问答")],-1),i=a("div",{class:"language-js line-numbers-mode"},[a("pre",null,[a("code",null,[a("span",{class:"token comment"},"// 说出一下代码执行结果，为什么？"),t("\nconsole"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"log"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},"'script start'"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),t("\n"),a("span",{class:"token function"},"setTimeout"),a("span",{class:"token punctuation"},"("),a("span",{class:"token keyword"},"function"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},"{"),t("\n  console"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"log"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},"'settimeout'"),a("span",{class:"token punctuation"},")"),t("\n"),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),t("\n"),a("span",{class:"token keyword"},"let"),t(" promise1 "),a("span",{class:"token operator"},"="),t(),a("span",{class:"token keyword"},"new"),t(),a("span",{class:"token class-name"},"Promise"),a("span",{class:"token punctuation"},"("),a("span",{class:"token keyword"},"function"),t(),a("span",{class:"token punctuation"},"("),a("span",{class:"token parameter"},"resolve"),a("span",{class:"token punctuation"},")"),t(),a("span",{class:"token punctuation"},"{"),t("\n  console"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"log"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},"'promise1'"),a("span",{class:"token punctuation"},")"),t("\n  "),a("span",{class:"token function"},"resolve"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),t("\n  console"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"log"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},"'promise1 end'"),a("span",{class:"token punctuation"},")"),t("\n"),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"then"),a("span",{class:"token punctuation"},"("),a("span",{class:"token keyword"},"function"),t(),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),t(),a("span",{class:"token punctuation"},"{"),t("\n  console"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"log"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},"'promise2'"),a("span",{class:"token punctuation"},")"),t("\n"),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),t("\nconsole"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"log"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},"'script end'"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),t("\n\n\n\n"),a("span",{class:"token comment"},"// 请将数组array中的重复项去除，并按照升序排序 三种以上的方式"),t("\n"),a("span",{class:"token keyword"},"let"),t(" array "),a("span",{class:"token operator"},"="),t(),a("span",{class:"token punctuation"},"["),a("span",{class:"token number"},"1"),a("span",{class:"token punctuation"},","),a("span",{class:"token number"},"2"),a("span",{class:"token punctuation"},","),a("span",{class:"token number"},"1"),a("span",{class:"token punctuation"},","),a("span",{class:"token number"},"3"),a("span",{class:"token punctuation"},","),a("span",{class:"token number"},"2"),a("span",{class:"token punctuation"},","),a("span",{class:"token number"},"1"),a("span",{class:"token punctuation"},","),a("span",{class:"token number"},"3"),a("span",{class:"token punctuation"},","),a("span",{class:"token number"},"5"),a("span",{class:"token punctuation"},","),a("span",{class:"token number"},"7"),a("span",{class:"token punctuation"},","),a("span",{class:"token number"},"23"),a("span",{class:"token punctuation"},","),a("span",{class:"token number"},"8"),a("span",{class:"token punctuation"},","),a("span",{class:"token number"},"23"),a("span",{class:"token punctuation"},","),a("span",{class:"token number"},"45"),a("span",{class:"token punctuation"},","),a("span",{class:"token number"},"102"),a("span",{class:"token punctuation"},","),a("span",{class:"token number"},"23"),a("span",{class:"token punctuation"},"]"),a("span",{class:"token punctuation"},";"),t("\n\n"),a("span",{class:"token comment"},"// 注释标明执行结果"),t("\n"),a("span",{class:"token keyword"},"async"),t(),a("span",{class:"token keyword"},"function"),t(),a("span",{class:"token function"},"async1"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},"{"),t("\n  console"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"log"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},"'async1 start'"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),t("\n  "),a("span",{class:"token keyword"},"await"),t(),a("span",{class:"token function"},"async2"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),t("\n  console"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"log"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},"'async1 end'"),a("span",{class:"token punctuation"},")"),t("\n"),a("span",{class:"token punctuation"},"}"),t("\n"),a("span",{class:"token keyword"},"async"),t(),a("span",{class:"token keyword"},"function"),t(),a("span",{class:"token function"},"async2"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},"{"),t("\n  console"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"log"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},"'async2'"),a("span",{class:"token punctuation"},")"),t("\n"),a("span",{class:"token punctuation"},"}"),t("\n\nconsole"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"log"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},"'script start'"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),t("\n"),a("span",{class:"token function"},"async1"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),t("\nconsole"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"log"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},"'script end'"),a("span",{class:"token punctuation"},")"),t("\n\n\n\n"),a("span",{class:"token comment"},"// 实现函数sum([1,2,3,4,5]), 返回所有参数相加的结果"),t("\n\n\n"),a("span",{class:"token comment"},"//  实现 www.baidu.com?name=tanjei&age=18 转换为 {name:tanjie,age:18}"),t("\n\n"),a("span",{class:"token comment"},"// 实现一个localstorage的api"),t("\n\n"),a("span",{class:"token comment"},"// 手写map,reduce （直接挂）"),t("\n\n"),a("span",{class:"token comment"},"// 手写promise"),t("\n\n"),a("span",{class:"token comment"},"// 手写bind"),t("\n\n"),a("span",{class:"token comment"},"// 简化如下代码"),t("\n\n"),a("span",{class:"token keyword"},"function"),t(),a("span",{class:"token function"},"func"),a("span",{class:"token punctuation"},"("),a("span",{class:"token parameter"},"c"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},"{"),t("\n  "),a("span",{class:"token keyword"},"var"),t(" a "),a("span",{class:"token operator"},"="),t(),a("span",{class:"token number"},"1"),t("\n  "),a("span",{class:"token keyword"},"var"),t(" b "),a("span",{class:"token operator"},"="),t(),a("span",{class:"token number"},"2"),t("\n  "),a("span",{class:"token keyword"},"var"),t(" d "),a("span",{class:"token operator"},"="),t(" a "),a("span",{class:"token operator"},"+"),t(" b\n  "),a("span",{class:"token keyword"},"return"),t(" d "),a("span",{class:"token operator"},"+"),t(" c "),a("span",{class:"token operator"},"+"),t(" d\n"),a("span",{class:"token punctuation"},"}"),t("\n\n"),a("span",{class:"token comment"},"// 获取字符串中标签的属性值，尽可能多的方案"),t("\n\n"),a("span",{class:"token keyword"},"var"),t(" str "),a("span",{class:"token operator"},"="),t(),a("span",{class:"token template-string"},[a("span",{class:"token template-punctuation string"},"`"),a("span",{class:"token string"},'<img src="http:www.baidu.com/images/01.png">'),a("span",{class:"token template-punctuation string"},"`")]),t("\n\n"),a("span",{class:"token comment"},"// vuex的原理"),t("\n\n"),a("span",{class:"token comment"},"// vue-router 的原理"),t("\n\n"),a("span",{class:"token comment"},"// vue的原理"),t("\n\n"),a("span",{class:"token comment"},"// v-model 语法糖的原理和实现"),t("\n\n"),a("span",{class:"token comment"},"// 什么情况下会跨域"),t("\n\n"),a("span",{class:"token comment"},"// 跨域的解决办法"),t("\n\n\n"),a("span",{class:"token comment"},"// jsonp的原理及弊端"),t("\n\n\n"),a("span",{class:"token comment"},"// webpack的loader和plugin的区别"),t("\n\n\n"),a("span",{class:"token comment"},"// 如何优化webpack的打包速度"),t("\n\n"),a("span",{class:"token comment"},"// flex相关问题"),t("\n\n"),a("span",{class:"token comment"},"// css盒模型及转化 如何实现垂直居中"),t("\n\n"),a("span",{class:"token comment"},"// vue的diff算法"),t("\n\n"),a("span",{class:"token comment"},"// vue数据改变视图不改变的原因如何解决"),t("\n\n"),a("span",{class:"token comment"},"// 缓存"),t("\n\n"),a("span",{class:"token comment"},"// webpack的原理"),t("\n\n"),a("span",{class:"token comment"},"// webpack中hash、chunkhash、contenthash区别"),t("\n\n"),a("span",{class:"token comment"},"// webpack 优化项目有哪些手段"),t("\n\n"),a("span",{class:"token comment"},"// eventloop"),t("\n\n\n"),a("span",{class:"token comment"},"// 微任务和宏任务"),t("\n\n"),a("span",{class:"token comment"},"// 回流与重绘 如何避免"),t("\n\n"),a("span",{class:"token comment"},"// 长列表的方案"),t("\n\n"),a("span",{class:"token comment"},"// 下列代码执行顺序"),t("\nPromise"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"resolve"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"then"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),a("span",{class:"token operator"},"=>"),a("span",{class:"token punctuation"},"{"),t("console"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"log"),a("span",{class:"token punctuation"},"("),a("span",{class:"token number"},"1"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"then"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),a("span",{class:"token operator"},"=>"),a("span",{class:"token punctuation"},"{"),t("console"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"log"),a("span",{class:"token punctuation"},"("),a("span",{class:"token number"},"2"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},")"),t("\nPromise"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"resolve"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"then"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),a("span",{class:"token operator"},"=>"),a("span",{class:"token punctuation"},"{"),t("console"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"log"),a("span",{class:"token punctuation"},"("),a("span",{class:"token number"},"3"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},")"),t("\nconsole"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"log"),a("span",{class:"token punctuation"},"("),t("'end"),a("span",{class:"token punctuation"},")"),t("\n\n\n\n"),a("span",{class:"token comment"},"//  get 与 post 的区别"),t("\n\n"),a("span",{class:"token comment"},"// 为什么用 setTimeout 替代 setinterval"),t("\n\n"),a("span",{class:"token comment"},"// 实现函数 让其依次执行"),t("\n"),a("span",{class:"token function"},"f1"),a("span",{class:"token punctuation"},"("),a("span",{class:"token parameter"},"next"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},"{"),t("\n  "),a("span",{class:"token function"},"setTimeout"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),a("span",{class:"token operator"},"=>"),a("span",{class:"token punctuation"},"{"),t("\n    next"),a("span",{class:"token operator"},"&&"),a("span",{class:"token function"},"next"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),t("\n  "),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},","),a("span",{class:"token number"},"100"),a("span",{class:"token punctuation"},")"),t("\n"),a("span",{class:"token punctuation"},"}"),t("\n"),a("span",{class:"token function"},"f2"),a("span",{class:"token punctuation"},"("),a("span",{class:"token parameter"},"next"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},"{"),t("\n  "),a("span",{class:"token function"},"setTimeout"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),a("span",{class:"token operator"},"=>"),a("span",{class:"token punctuation"},"{"),t("\n    next"),a("span",{class:"token operator"},"&&"),a("span",{class:"token function"},"next"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),t("\n  "),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},","),a("span",{class:"token number"},"100"),a("span",{class:"token punctuation"},")"),t("\n"),a("span",{class:"token punctuation"},"}"),t("\n"),a("span",{class:"token function"},"f3"),a("span",{class:"token punctuation"},"("),a("span",{class:"token parameter"},"next"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},"{"),t("\n  "),a("span",{class:"token function"},"setTimeout"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),a("span",{class:"token operator"},"=>"),a("span",{class:"token punctuation"},"{"),t("\n    next"),a("span",{class:"token operator"},"&&"),a("span",{class:"token function"},"next"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),t("\n  "),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},","),a("span",{class:"token number"},"100"),a("span",{class:"token punctuation"},")"),t("\n"),a("span",{class:"token punctuation"},"}"),t("\n"),a("span",{class:"token keyword"},"var"),t(),a("span",{class:"token constant"},"F"),a("span",{class:"token operator"},"="),t(),a("span",{class:"token function"},"eq"),a("span",{class:"token punctuation"},"("),t("f1"),a("span",{class:"token punctuation"},","),t("f2"),a("span",{class:"token punctuation"},","),t("f3"),a("span",{class:"token punctuation"},")"),t("\n"),a("span",{class:"token comment"},"// f1->f2>f3"),t("\n\n\n"),a("span",{class:"token comment"},"// 下列代码的执行结果"),t("\n\nPromise"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"resolve"),a("span",{class:"token punctuation"},"("),a("span",{class:"token number"},"1"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"then"),a("span",{class:"token punctuation"},"("),t("Promise"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"resolve"),a("span",{class:"token punctuation"},"("),a("span",{class:"token number"},"2"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"then"),a("span",{class:"token punctuation"},"("),a("span",{class:"token number"},"3"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"then"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),a("span",{class:"token operator"},"=>"),a("span",{class:"token number"},"4"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"then"),a("span",{class:"token punctuation"},"("),t("console"),a("span",{class:"token punctuation"},"."),t("log"),a("span",{class:"token punctuation"},")"),t("\nPromise"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"resolve"),a("span",{class:"token punctuation"},"("),a("span",{class:"token number"},"1"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"then"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),a("span",{class:"token operator"},"=>"),a("span",{class:"token number"},"2"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"then"),a("span",{class:"token punctuation"},"("),t("Promise"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"resolve"),a("span",{class:"token punctuation"},"("),a("span",{class:"token number"},"3"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"then"),a("span",{class:"token punctuation"},"("),t("console"),a("span",{class:"token punctuation"},"."),t("log"),a("span",{class:"token punctuation"},")"),t("\n"),a("span",{class:"token comment"},"// 下列代码的执行结果"),t("\n"),a("span",{class:"token keyword"},"let"),t(" p1 "),a("span",{class:"token operator"},"="),t(" Promise"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"resolve"),a("span",{class:"token punctuation"},"("),a("span",{class:"token number"},"1"),a("span",{class:"token punctuation"},")"),t("\n"),a("span",{class:"token keyword"},"let"),t(" p2 "),a("span",{class:"token operator"},"="),t(" Promise"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"resolve"),a("span",{class:"token punctuation"},"("),a("span",{class:"token number"},"2"),a("span",{class:"token punctuation"},")"),t("\n"),a("span",{class:"token keyword"},"let"),t(" p3 "),a("span",{class:"token operator"},"="),t(" Promise"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"reject"),a("span",{class:"token punctuation"},"("),a("span",{class:"token number"},"3"),a("span",{class:"token punctuation"},")"),t("\nPromise"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"all"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},"["),t("p1"),a("span",{class:"token punctuation"},","),t("p2"),a("span",{class:"token punctuation"},","),t("p3"),a("span",{class:"token punctuation"},"]"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"then"),a("span",{class:"token punctuation"},"("),a("span",{class:"token parameter"},"res"),a("span",{class:"token operator"},"=>"),a("span",{class:"token punctuation"},"{"),t("\n  console"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"log"),a("span",{class:"token punctuation"},"("),t("res"),a("span",{class:"token punctuation"},")"),t("\n"),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"catch"),a("span",{class:"token punctuation"},"("),a("span",{class:"token parameter"},"err"),a("span",{class:"token operator"},"=>"),a("span",{class:"token punctuation"},"{"),t("\n  console"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"log"),a("span",{class:"token punctuation"},"("),t("err"),a("span",{class:"token punctuation"},")"),t("\n"),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},")"),t("\n\n"),a("span",{class:"token comment"},"// 上题衍生问题如何让结果走then"),t("\n"),a("span",{class:"token comment"},"// 衍生问题：首页同时10个请求如何优化体验和性能"),t("\n"),a("span",{class:"token comment"},"// 查找回文字符串 找出最长的 abccbaabcc"),t("\n"),a("span",{class:"token comment"},"// 算法题和逻辑思维题都记不住了，也没特别难的。以上每个问题都会衍生很多的问题出来。也有些题记不住了。"),t("\n"),a("span",{class:"token comment"},"// 前端安全 xss xsrf"),t("\n"),a("span",{class:"token comment"},"// 如何实现跨域页面的数据传输"),t("\n"),a("span",{class:"token comment"},"// css的选择器有哪些"),t("\n"),a("span",{class:"token comment"},"// 常见的浏览器缓存及优缺点"),t("\n"),a("span",{class:"token comment"},"// 异步编程的实现方式"),t("\n"),a("span",{class:"token comment"},"// Promise是否可以先.finally()会如何执行"),t("\n"),a("span",{class:"token comment"},"// js拖拽的实现"),t("\n"),a("span",{class:"token comment"},"// 请使用闭包每秒打印1,2,3,4"),t("\n"),a("span",{class:"token comment"},"// javascript继承的几种实现方式"),t("\n"),a("span",{class:"token comment"},"// div水平垂直居中"),t("\n"),a("span",{class:"token comment"},"// jsbridge用什么数据形式交互，如何处理大数据交互"),t("\n"),a("span",{class:"token comment"},"// 还有些针对项目深问的问题在这就不提了。"),t("\n")]),a("div",{class:"m-mdic-copy-wrapper"},[a("div",{class:"u-mdic-copy-notify",id:"j-notify-1629557013963-30124"},"复制成功"),a("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"// 说出一下代码执行结果，为什么？\nconsole.log('script start');\nsetTimeout(function(){\n  console.log('settimeout')\n});\nlet promise1 = new Promise(function (resolve) {\n  console.log('promise1')\n  resolve()\n  console.log('promise1 end')\n}).then(function () {\n  console.log('promise2')\n});\nconsole.log('script end');\n\n\n\n// 请将数组array中的重复项去除，并按照升序排序 三种以上的方式\nlet array = [1,2,1,3,2,1,3,5,7,23,8,23,45,102,23];\n\n// 注释标明执行结果\nasync function async1(){\n  console.log('async1 start');\n  await async2();\n  console.log('async1 end')\n}\nasync function async2(){\n  console.log('async2')\n}\n\nconsole.log('script start');\nasync1();\nconsole.log('script end')\n\n\n\n// 实现函数sum([1,2,3,4,5]), 返回所有参数相加的结果\n\n\n//  实现 www.baidu.com?name=tanjei&age=18 转换为 {name:tanjie,age:18}\n\n// 实现一个localstorage的api\n\n// 手写map,reduce （直接挂）\n\n// 手写promise\n\n// 手写bind\n\n// 简化如下代码\n\nfunction func(c){\n  var a = 1\n  var b = 2\n  var d = a + b\n  return d + c + d\n}\n\n// 获取字符串中标签的属性值，尽可能多的方案\n\nvar str = `<img src=\"http:www.baidu.com/images/01.png\">`\n\n// vuex的原理\n\n// vue-router 的原理\n\n// vue的原理\n\n// v-model 语法糖的原理和实现\n\n// 什么情况下会跨域\n\n// 跨域的解决办法\n\n\n// jsonp的原理及弊端\n\n\n// webpack的loader和plugin的区别\n\n\n// 如何优化webpack的打包速度\n\n// flex相关问题\n\n// css盒模型及转化 如何实现垂直居中\n\n// vue的diff算法\n\n// vue数据改变视图不改变的原因如何解决\n\n// 缓存\n\n// webpack的原理\n\n// webpack中hash、chunkhash、contenthash区别\n\n// webpack 优化项目有哪些手段\n\n// eventloop\n\n\n// 微任务和宏任务\n\n// 回流与重绘 如何避免\n\n// 长列表的方案\n\n// 下列代码执行顺序\nPromise.resolve().then(()=>{console.log(1)}).then(()=>{console.log(2)})\nPromise.resolve().then(()=>{console.log(3)})\nconsole.log('end)\n\n\n\n//  get 与 post 的区别\n\n// 为什么用 setTimeout 替代 setinterval\n\n// 实现函数 让其依次执行\nf1(next){\n  setTimeout(()=>{\n    next&&next()\n  },100)\n}\nf2(next){\n  setTimeout(()=>{\n    next&&next()\n  },100)\n}\nf3(next){\n  setTimeout(()=>{\n    next&&next()\n  },100)\n}\nvar F= eq(f1,f2,f3)\n// f1->f2>f3\n\n\n// 下列代码的执行结果\n\nPromise.resolve(1).then(Promise.resolve(2)).then(3).then(()=>4).then(console.log)\nPromise.resolve(1).then(()=>2).then(Promise.resolve(3)).then(console.log)\n// 下列代码的执行结果\nlet p1 = Promise.resolve(1)\nlet p2 = Promise.resolve(2)\nlet p3 = Promise.reject(3)\nPromise.all([p1,p2,p3]).then(res=>{\n  console.log(res)\n}).catch(err=>{\n  console.log(err)\n})\n\n// 上题衍生问题如何让结果走then\n// 衍生问题：首页同时10个请求如何优化体验和性能\n// 查找回文字符串 找出最长的 abccbaabcc\n// 算法题和逻辑思维题都记不住了，也没特别难的。以上每个问题都会衍生很多的问题出来。也有些题记不住了。\n// 前端安全 xss xsrf\n// 如何实现跨域页面的数据传输\n// css的选择器有哪些\n// 常见的浏览器缓存及优缺点\n// 异步编程的实现方式\n// Promise是否可以先.finally()会如何执行\n// js拖拽的实现\n// 请使用闭包每秒打印1,2,3,4\n// javascript继承的几种实现方式\n// div水平垂直居中\n// jsbridge用什么数据形式交互，如何处理大数据交互\n// 还有些针对项目深问的问题在这就不提了。\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629557013963-30124","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),a("div",{class:"line-numbers-wrapper"},[a("span",{class:"line-number"},"1"),a("br"),a("span",{class:"line-number"},"2"),a("br"),a("span",{class:"line-number"},"3"),a("br"),a("span",{class:"line-number"},"4"),a("br"),a("span",{class:"line-number"},"5"),a("br"),a("span",{class:"line-number"},"6"),a("br"),a("span",{class:"line-number"},"7"),a("br"),a("span",{class:"line-number"},"8"),a("br"),a("span",{class:"line-number"},"9"),a("br"),a("span",{class:"line-number"},"10"),a("br"),a("span",{class:"line-number"},"11"),a("br"),a("span",{class:"line-number"},"12"),a("br"),a("span",{class:"line-number"},"13"),a("br"),a("span",{class:"line-number"},"14"),a("br"),a("span",{class:"line-number"},"15"),a("br"),a("span",{class:"line-number"},"16"),a("br"),a("span",{class:"line-number"},"17"),a("br"),a("span",{class:"line-number"},"18"),a("br"),a("span",{class:"line-number"},"19"),a("br"),a("span",{class:"line-number"},"20"),a("br"),a("span",{class:"line-number"},"21"),a("br"),a("span",{class:"line-number"},"22"),a("br"),a("span",{class:"line-number"},"23"),a("br"),a("span",{class:"line-number"},"24"),a("br"),a("span",{class:"line-number"},"25"),a("br"),a("span",{class:"line-number"},"26"),a("br"),a("span",{class:"line-number"},"27"),a("br"),a("span",{class:"line-number"},"28"),a("br"),a("span",{class:"line-number"},"29"),a("br"),a("span",{class:"line-number"},"30"),a("br"),a("span",{class:"line-number"},"31"),a("br"),a("span",{class:"line-number"},"32"),a("br"),a("span",{class:"line-number"},"33"),a("br"),a("span",{class:"line-number"},"34"),a("br"),a("span",{class:"line-number"},"35"),a("br"),a("span",{class:"line-number"},"36"),a("br"),a("span",{class:"line-number"},"37"),a("br"),a("span",{class:"line-number"},"38"),a("br"),a("span",{class:"line-number"},"39"),a("br"),a("span",{class:"line-number"},"40"),a("br"),a("span",{class:"line-number"},"41"),a("br"),a("span",{class:"line-number"},"42"),a("br"),a("span",{class:"line-number"},"43"),a("br"),a("span",{class:"line-number"},"44"),a("br"),a("span",{class:"line-number"},"45"),a("br"),a("span",{class:"line-number"},"46"),a("br"),a("span",{class:"line-number"},"47"),a("br"),a("span",{class:"line-number"},"48"),a("br"),a("span",{class:"line-number"},"49"),a("br"),a("span",{class:"line-number"},"50"),a("br"),a("span",{class:"line-number"},"51"),a("br"),a("span",{class:"line-number"},"52"),a("br"),a("span",{class:"line-number"},"53"),a("br"),a("span",{class:"line-number"},"54"),a("br"),a("span",{class:"line-number"},"55"),a("br"),a("span",{class:"line-number"},"56"),a("br"),a("span",{class:"line-number"},"57"),a("br"),a("span",{class:"line-number"},"58"),a("br"),a("span",{class:"line-number"},"59"),a("br"),a("span",{class:"line-number"},"60"),a("br"),a("span",{class:"line-number"},"61"),a("br"),a("span",{class:"line-number"},"62"),a("br"),a("span",{class:"line-number"},"63"),a("br"),a("span",{class:"line-number"},"64"),a("br"),a("span",{class:"line-number"},"65"),a("br"),a("span",{class:"line-number"},"66"),a("br"),a("span",{class:"line-number"},"67"),a("br"),a("span",{class:"line-number"},"68"),a("br"),a("span",{class:"line-number"},"69"),a("br"),a("span",{class:"line-number"},"70"),a("br"),a("span",{class:"line-number"},"71"),a("br"),a("span",{class:"line-number"},"72"),a("br"),a("span",{class:"line-number"},"73"),a("br"),a("span",{class:"line-number"},"74"),a("br"),a("span",{class:"line-number"},"75"),a("br"),a("span",{class:"line-number"},"76"),a("br"),a("span",{class:"line-number"},"77"),a("br"),a("span",{class:"line-number"},"78"),a("br"),a("span",{class:"line-number"},"79"),a("br"),a("span",{class:"line-number"},"80"),a("br"),a("span",{class:"line-number"},"81"),a("br"),a("span",{class:"line-number"},"82"),a("br"),a("span",{class:"line-number"},"83"),a("br"),a("span",{class:"line-number"},"84"),a("br"),a("span",{class:"line-number"},"85"),a("br"),a("span",{class:"line-number"},"86"),a("br"),a("span",{class:"line-number"},"87"),a("br"),a("span",{class:"line-number"},"88"),a("br"),a("span",{class:"line-number"},"89"),a("br"),a("span",{class:"line-number"},"90"),a("br"),a("span",{class:"line-number"},"91"),a("br"),a("span",{class:"line-number"},"92"),a("br"),a("span",{class:"line-number"},"93"),a("br"),a("span",{class:"line-number"},"94"),a("br"),a("span",{class:"line-number"},"95"),a("br"),a("span",{class:"line-number"},"96"),a("br"),a("span",{class:"line-number"},"97"),a("br"),a("span",{class:"line-number"},"98"),a("br"),a("span",{class:"line-number"},"99"),a("br"),a("span",{class:"line-number"},"100"),a("br"),a("span",{class:"line-number"},"101"),a("br"),a("span",{class:"line-number"},"102"),a("br"),a("span",{class:"line-number"},"103"),a("br"),a("span",{class:"line-number"},"104"),a("br"),a("span",{class:"line-number"},"105"),a("br"),a("span",{class:"line-number"},"106"),a("br"),a("span",{class:"line-number"},"107"),a("br"),a("span",{class:"line-number"},"108"),a("br"),a("span",{class:"line-number"},"109"),a("br"),a("span",{class:"line-number"},"110"),a("br"),a("span",{class:"line-number"},"111"),a("br"),a("span",{class:"line-number"},"112"),a("br"),a("span",{class:"line-number"},"113"),a("br"),a("span",{class:"line-number"},"114"),a("br"),a("span",{class:"line-number"},"115"),a("br"),a("span",{class:"line-number"},"116"),a("br"),a("span",{class:"line-number"},"117"),a("br"),a("span",{class:"line-number"},"118"),a("br"),a("span",{class:"line-number"},"119"),a("br"),a("span",{class:"line-number"},"120"),a("br"),a("span",{class:"line-number"},"121"),a("br"),a("span",{class:"line-number"},"122"),a("br"),a("span",{class:"line-number"},"123"),a("br"),a("span",{class:"line-number"},"124"),a("br"),a("span",{class:"line-number"},"125"),a("br"),a("span",{class:"line-number"},"126"),a("br"),a("span",{class:"line-number"},"127"),a("br"),a("span",{class:"line-number"},"128"),a("br"),a("span",{class:"line-number"},"129"),a("br"),a("span",{class:"line-number"},"130"),a("br"),a("span",{class:"line-number"},"131"),a("br"),a("span",{class:"line-number"},"132"),a("br"),a("span",{class:"line-number"},"133"),a("br"),a("span",{class:"line-number"},"134"),a("br"),a("span",{class:"line-number"},"135"),a("br"),a("span",{class:"line-number"},"136"),a("br"),a("span",{class:"line-number"},"137"),a("br"),a("span",{class:"line-number"},"138"),a("br"),a("span",{class:"line-number"},"139"),a("br"),a("span",{class:"line-number"},"140"),a("br"),a("span",{class:"line-number"},"141"),a("br"),a("span",{class:"line-number"},"142"),a("br"),a("span",{class:"line-number"},"143"),a("br"),a("span",{class:"line-number"},"144"),a("br"),a("span",{class:"line-number"},"145"),a("br"),a("span",{class:"line-number"},"146"),a("br"),a("span",{class:"line-number"},"147"),a("br"),a("span",{class:"line-number"},"148"),a("br"),a("span",{class:"line-number"},"149"),a("br"),a("span",{class:"line-number"},"150"),a("br"),a("span",{class:"line-number"},"151"),a("br"),a("span",{class:"line-number"},"152"),a("br"),a("span",{class:"line-number"},"153"),a("br"),a("span",{class:"line-number"},"154"),a("br"),a("span",{class:"line-number"},"155"),a("br"),a("span",{class:"line-number"},"156"),a("br"),a("span",{class:"line-number"},"157"),a("br"),a("span",{class:"line-number"},"158"),a("br"),a("span",{class:"line-number"},"159"),a("br"),a("span",{class:"line-number"},"160"),a("br"),a("span",{class:"line-number"},"161"),a("br"),a("span",{class:"line-number"},"162"),a("br"),a("span",{class:"line-number"},"163"),a("br"),a("span",{class:"line-number"},"164"),a("br"),a("span",{class:"line-number"},"165"),a("br"),a("span",{class:"line-number"},"166"),a("br"),a("span",{class:"line-number"},"167"),a("br"),a("span",{class:"line-number"},"168"),a("br")])],-1),r=a("h3",{id:"开放题及软实力"},[a("a",{class:"header-anchor",href:"#开放题及软实力","aria-hidden":"true"},"#"),t(" 开放题及软实力")],-1),k=a("div",{class:"language-js line-numbers-mode"},[a("pre",null,[a("code",null,[a("span",{class:"token comment"},"// 如何优化项目"),t("\n"),a("span",{class:"token comment"},"// 浏览器输入地址回车后发生了什么"),t("\n"),a("span",{class:"token comment"},"// 你做过最满意/印象深刻/最具挑战的事情是什么"),t("\n"),a("span",{class:"token comment"},"// 如何做架构，有哪些职能"),t("\n"),a("span",{class:"token comment"},"// 如何管理"),t("\n"),a("span",{class:"token comment"},"// 团队如何协作，任务如何分配，进度出现问题如何处理"),t("\n"),a("span",{class:"token comment"},"// 自我评价或用几个词概括自己"),t("\n"),a("span",{class:"token comment"},"// 总结自己的优点和缺点"),t("\n"),a("span",{class:"token comment"},"// 个人的职业规划"),t("\n"),a("span",{class:"token comment"},"// 作为空降的管理如何处理老员工的关系"),t("\n")]),a("div",{class:"m-mdic-copy-wrapper"},[a("div",{class:"u-mdic-copy-notify",id:"j-notify-1629557013964-3796"},"复制成功"),a("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"// 如何优化项目\n// 浏览器输入地址回车后发生了什么\n// 你做过最满意/印象深刻/最具挑战的事情是什么\n// 如何做架构，有哪些职能\n// 如何管理\n// 团队如何协作，任务如何分配，进度出现问题如何处理\n// 自我评价或用几个词概括自己\n// 总结自己的优点和缺点\n// 个人的职业规划\n// 作为空降的管理如何处理老员工的关系\n","data-mdic-attach-content":"copyright | [artiely]","data-mdic-notify-id":"j-notify-1629557013964-3796","data-mdic-notify-delay":"1000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"复制")])]),a("div",{class:"line-numbers-wrapper"},[a("span",{class:"line-number"},"1"),a("br"),a("span",{class:"line-number"},"2"),a("br"),a("span",{class:"line-number"},"3"),a("br"),a("span",{class:"line-number"},"4"),a("br"),a("span",{class:"line-number"},"5"),a("br"),a("span",{class:"line-number"},"6"),a("br"),a("span",{class:"line-number"},"7"),a("br"),a("span",{class:"line-number"},"8"),a("br"),a("span",{class:"line-number"},"9"),a("br"),a("span",{class:"line-number"},"10"),a("br")])],-1),m=e('<h2 id="避坑"><a class="header-anchor" href="#避坑" aria-hidden="true">#</a> 避坑</h2><h3 id="面试者自身应该注意的点"><a class="header-anchor" href="#面试者自身应该注意的点" aria-hidden="true">#</a> 面试者自身应该注意的点</h3><p>我也面试过很多的人，所以以下大家需要注重一点。</p><ol><li>形象：这里不是说你得长的多帅，起码得衣着整洁干净，看起来精神。面试的过程中切忌抖腿等过多的小动作，声音要明亮。</li><li>态度：谦虚有礼，经常遇到候选人表现得自己什么都懂什么都会什么都瞧不上，以为这样可以显得自己牛逼？可是，没有谁喜欢和咄咄逼人的人共事啊，你这么牛逼根本不应该来这里。即使你觉得这面试官不咋滴，也要保证自己的修养先。遇到面试官平易近人，没有架子的，也不要和面试官套近乎。也不必表现的卑微。</li><li>表达：让候选人介绍一下以往经历，很多候选人都讲不清自己做过什么，那将来一起共事怎么交流？</li><li>思考有体会：让候选人说一下以往工作经历的体会，如果能够讲出个子丑寅卯，说明这个候选人能够独立思考，不是当一天和尚撞一天钟。</li><li>注重实干的：嘴炮谁都会，实干才是本事，让候选人来实操一件事情，看他会不会。</li><li>能适应新的问题：很多候选人只能做自己曾经做过的事情，永远逃不出以前的影子，你给他一个全新的问题，他就懵了，说来说去都是拿以前的方法来套用现在的问题，要是能解出来也好，往往因为思维受限，就是解不出来。相反，对于即使没有遇到过的问题，也能有一个恰当的思路，即使最后解法不完美，也会给人深刻印象。要知道，世界上没有任何两个工作是完全相同的，如果不能快速适应新工作的挑战，那代表这个人很迟钝，无法快速进步。</li><li>以往工作经历的亮点：自己有真材实料才是硬道理。</li></ol><h3 id="通过面试官看一家公司或企业"><a class="header-anchor" href="#通过面试官看一家公司或企业" aria-hidden="true">#</a> 通过面试官看一家公司或企业</h3><ol><li>形象： 在你没进入一家公司之前，你唯一可以接触到的人就是人事和面试官。他们也是公司的一个名片或侧面。面试官萎靡不振，人事沟通没耐心的，都可以从侧面反映出这家公司的问题。</li><li>态度： 他们对你的态度也可以看出这家公司的态度，是否给予你足够的尊重很重要。给你的尊重也是他们对自己的尊重。群面的不用考虑，或者你过去发现约了几十人在那等着面试的。自备打印简历虽然是你自己应该准备的，但是公司能否提前打印你的简历也可以看出他们是否真的有提前了解你。简历都不能打印的是 HR 有问题或者公司文化有问题。<br> 他如果对你敷衍了事就认为你可以入职，那我建议你不用去，其他的员工可能也是这么进去的，里面可能是乌合之众。至少他们要对有个全面的了解。这个过程中你也应该对他们有全面的了解。<br> 有几种典型的场景：1. 早早的让你去，去了之后在那干等，2. 填写一大堆的表格和各种测试题目。</li><li>交流：如果面试官对你没有耐心或者不愿引导你思考给出答案，要么他自己不会，要么不好交流。不过一般 hr 会在你面试结果后找你要面试的反馈结果，包括对面试官的评价。一个正常的技术面试一般在一个小时左右。太短要么你不行，要么他不行。</li><li>实干：如果面试官各种 diss 你，秀优越你也不用考虑，大多不是实干派。</li></ol><p>祝大家少踩坑，早日飞黄腾达。</p>',7);o.render=function(a,t,e,c,o,b){return n(),s("div",null,[l,p,u,i,r,k,m])};export default o;export{c as __pageData};
