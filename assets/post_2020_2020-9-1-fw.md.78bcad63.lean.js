import{o as e,c as a,a as r,x as t,v as l,f as s}from"./app.5f3fb606.js";const i='{"title":"前端面试题汇总-框架-1","description":"","frontmatter":{"title":"前端面试题汇总-框架-1","tag":["javaScript"],"cover":"https://gitee.com/artiely/Figure-bed/raw/master/image/20200901095902.png","base64":"3fb782","author":"artiely","date":"2020-9-1"},"headers":[{"level":3,"title":"1.vue优点？","slug":"1vue优点"},{"level":3,"title":"2.vue父组件向子组件传递数据？","slug":"2vue父组件向子组件传递数据"},{"level":3,"title":"3.子组件像父组件传递事件？","slug":"3子组件像父组件传递事件"},{"level":3,"title":"4.v-show和v-if指令的共同点和不同点？","slug":"4v-show和v-if指令的共同点和不同点"},{"level":3,"title":"5.如何让CSS只在当前组件中起作用？","slug":"5如何让css只在当前组件中起作用"},{"level":3,"title":"6.的作用是什么?","slug":"6的作用是什么"},{"level":3,"title":"7.如何获取dom?","slug":"7如何获取dom"},{"level":3,"title":"8.说出几种vue当中的指令和它的用法？","slug":"8说出几种vue当中的指令和它的用法"},{"level":3,"title":"9. vue-loader是什么？使用它的用途有哪些？","slug":"9-vue-loader是什么使用它的用途有哪些"},{"level":3,"title":"10.为什么使用key?","slug":"10为什么使用key"},{"level":3,"title":"11.axios及安装?","slug":"11axios及安装"},{"level":3,"title":"12.v-modal的使用。","slug":"12v-modal的使用"},{"level":3,"title":"13.请说出vue.cli项目中src目录每个文件夹和文件的用法？","slug":"13请说出vuecli项目中src目录每个文件夹和文件的用法"},{"level":3,"title":"14.分别简述computed和watch的使用场景","slug":"14分别简述computed和watch的使用场景"},{"level":3,"title":"15.v-on可以监听多个方法吗？","slug":"15v-on可以监听多个方法吗"},{"level":3,"title":"16.$nextTick的使用","slug":"16nexttick的使用"},{"level":3,"title":"17.vue组件中data为什么必须是一个函数？","slug":"17vue组件中data为什么必须是一个函数"},{"level":3,"title":"18.渐进式框架的理解","slug":"18渐进式框架的理解"},{"level":3,"title":"19.Vue中双向数据绑定是如何实现的？","slug":"19vue中双向数据绑定是如何实现的"},{"level":3,"title":"20.单页面应用和多页面应用区别及优缺点","slug":"20单页面应用和多页面应用区别及优缺点"},{"level":3,"title":"21.v-if和v-for的优先级","slug":"21v-if和v-for的优先级"},{"level":3,"title":"22.assets和static的区别","slug":"22assets和static的区别"},{"level":3,"title":"23.vue常用的修饰符","slug":"23vue常用的修饰符"},{"level":3,"title":"24.vue的两个核心点","slug":"24vue的两个核心点"},{"level":3,"title":"25.vue和jQuery的区别","slug":"25vue和jquery的区别"},{"level":3,"title":"26. 引进组件的步骤","slug":"26-引进组件的步骤"},{"level":3,"title":"27.delete和Vue.delete删除数组的区别","slug":"27delete和vuedelete删除数组的区别"},{"level":3,"title":"28.SPA首屏加载慢如何解决","slug":"28spa首屏加载慢如何解决"},{"level":3,"title":"29.Vue-router跳转和location.href有什么区别","slug":"29vue-router跳转和locationhref有什么区别"},{"level":3,"title":"30. vue slot","slug":"30-vue-slot"},{"level":3,"title":"31.你们vue项目是打包了一个js文件，一个css文件，还是有多个文件？","slug":"31你们vue项目是打包了一个js文件一个css文件还是有多个文件"},{"level":3,"title":"32.Vue里面router-link在电脑上有用，在安卓上没反应怎么解决？","slug":"32vue里面router-link在电脑上有用在安卓上没反应怎么解决"},{"level":3,"title":"33.Vue2中注册在router-link上事件无效解决方法","slug":"33vue2中注册在router-link上事件无效解决方法"},{"level":3,"title":"34.RouterLink在IE和Firefox中不起作用（路由不跳转）的问题","slug":"34routerlink在ie和firefox中不起作用路由不跳转的问题"},{"level":3,"title":"35.axios的特点有哪些","slug":"35axios的特点有哪些"},{"level":3,"title":"36.请说下封装 vue 组件的过程？","slug":"36请说下封装-vue-组件的过程"},{"level":3,"title":"37.params和query的区别","slug":"37params和query的区别"},{"level":3,"title":"38.vue初始化页面闪动问题","slug":"38vue初始化页面闪动问题"},{"level":3,"title":"39.vue更新数组时触发视图更新的方法","slug":"39vue更新数组时触发视图更新的方法"},{"level":3,"title":"40.vue常用的UI组件库","slug":"40vue常用的ui组件库"},{"level":3,"title":"41.vue修改打包后静态资源路径的修改","slug":"41vue修改打包后静态资源路径的修改"}],"relativePath":"post/2020/2020-9-1-fw.md","lastUpdated":1629110864716}',u={},h=s('',76),d=r("br",null,null,-1),o=t(" 首先：在css里加上[v-cloak] {"),v=r("br",null,null,-1),n=t(" display: none;"),c=r("br",null,null,-1),p=t(" }。"),f=r("br",null,null,-1),b=t(' 如果没有彻底解决问题，则在根元素加上style="display: none;" :style="{display: \'block\'}"'),m=s('',6);u.render=function(s,i,u,g,y,k){return e(),a("div",null,[h,r("p",null,[t("答：使用vue开发时，在vue初始化之前，由于div是不归vue管的，所以我们写的代码在还没有解析的情况下会容易出现花屏现象，看到类似于"+l(s.message)+"的字样，虽然一般情况下这个时间很短暂，但是我们还是有必要让解决这个问题的。",1),d,o,v,n,c,p,f,b]),m])};export default u;export{i as __pageData};
