import{o as e,c as a,a as r,x as t,v as l,f as s}from"./app.5f3fb606.js";const i='{"title":"前端面试题汇总-框架-1","description":"","frontmatter":{"title":"前端面试题汇总-框架-1","tag":["javaScript"],"cover":"https://gitee.com/artiely/Figure-bed/raw/master/image/20200901095902.png","base64":"3fb782","author":"artiely","date":"2020-9-1"},"headers":[{"level":3,"title":"1.vue优点？","slug":"1vue优点"},{"level":3,"title":"2.vue父组件向子组件传递数据？","slug":"2vue父组件向子组件传递数据"},{"level":3,"title":"3.子组件像父组件传递事件？","slug":"3子组件像父组件传递事件"},{"level":3,"title":"4.v-show和v-if指令的共同点和不同点？","slug":"4v-show和v-if指令的共同点和不同点"},{"level":3,"title":"5.如何让CSS只在当前组件中起作用？","slug":"5如何让css只在当前组件中起作用"},{"level":3,"title":"6.的作用是什么?","slug":"6的作用是什么"},{"level":3,"title":"7.如何获取dom?","slug":"7如何获取dom"},{"level":3,"title":"8.说出几种vue当中的指令和它的用法？","slug":"8说出几种vue当中的指令和它的用法"},{"level":3,"title":"9. vue-loader是什么？使用它的用途有哪些？","slug":"9-vue-loader是什么使用它的用途有哪些"},{"level":3,"title":"10.为什么使用key?","slug":"10为什么使用key"},{"level":3,"title":"11.axios及安装?","slug":"11axios及安装"},{"level":3,"title":"12.v-modal的使用。","slug":"12v-modal的使用"},{"level":3,"title":"13.请说出vue.cli项目中src目录每个文件夹和文件的用法？","slug":"13请说出vuecli项目中src目录每个文件夹和文件的用法"},{"level":3,"title":"14.分别简述computed和watch的使用场景","slug":"14分别简述computed和watch的使用场景"},{"level":3,"title":"15.v-on可以监听多个方法吗？","slug":"15v-on可以监听多个方法吗"},{"level":3,"title":"16.$nextTick的使用","slug":"16nexttick的使用"},{"level":3,"title":"17.vue组件中data为什么必须是一个函数？","slug":"17vue组件中data为什么必须是一个函数"},{"level":3,"title":"18.渐进式框架的理解","slug":"18渐进式框架的理解"},{"level":3,"title":"19.Vue中双向数据绑定是如何实现的？","slug":"19vue中双向数据绑定是如何实现的"},{"level":3,"title":"20.单页面应用和多页面应用区别及优缺点","slug":"20单页面应用和多页面应用区别及优缺点"},{"level":3,"title":"21.v-if和v-for的优先级","slug":"21v-if和v-for的优先级"},{"level":3,"title":"22.assets和static的区别","slug":"22assets和static的区别"},{"level":3,"title":"23.vue常用的修饰符","slug":"23vue常用的修饰符"},{"level":3,"title":"24.vue的两个核心点","slug":"24vue的两个核心点"},{"level":3,"title":"25.vue和jQuery的区别","slug":"25vue和jquery的区别"},{"level":3,"title":"26. 引进组件的步骤","slug":"26-引进组件的步骤"},{"level":3,"title":"27.delete和Vue.delete删除数组的区别","slug":"27delete和vuedelete删除数组的区别"},{"level":3,"title":"28.SPA首屏加载慢如何解决","slug":"28spa首屏加载慢如何解决"},{"level":3,"title":"29.Vue-router跳转和location.href有什么区别","slug":"29vue-router跳转和locationhref有什么区别"},{"level":3,"title":"30. vue slot","slug":"30-vue-slot"},{"level":3,"title":"31.你们vue项目是打包了一个js文件，一个css文件，还是有多个文件？","slug":"31你们vue项目是打包了一个js文件一个css文件还是有多个文件"},{"level":3,"title":"32.Vue里面router-link在电脑上有用，在安卓上没反应怎么解决？","slug":"32vue里面router-link在电脑上有用在安卓上没反应怎么解决"},{"level":3,"title":"33.Vue2中注册在router-link上事件无效解决方法","slug":"33vue2中注册在router-link上事件无效解决方法"},{"level":3,"title":"34.RouterLink在IE和Firefox中不起作用（路由不跳转）的问题","slug":"34routerlink在ie和firefox中不起作用路由不跳转的问题"},{"level":3,"title":"35.axios的特点有哪些","slug":"35axios的特点有哪些"},{"level":3,"title":"36.请说下封装 vue 组件的过程？","slug":"36请说下封装-vue-组件的过程"},{"level":3,"title":"37.params和query的区别","slug":"37params和query的区别"},{"level":3,"title":"38.vue初始化页面闪动问题","slug":"38vue初始化页面闪动问题"},{"level":3,"title":"39.vue更新数组时触发视图更新的方法","slug":"39vue更新数组时触发视图更新的方法"},{"level":3,"title":"40.vue常用的UI组件库","slug":"40vue常用的ui组件库"},{"level":3,"title":"41.vue修改打包后静态资源路径的修改","slug":"41vue修改打包后静态资源路径的修改"}],"relativePath":"post/2020/2020-9-1-fw.md","lastUpdated":1629110864716}',u={},h=s('<h1 id="前端面试题汇总-框架-1"><a class="header-anchor" href="#前端面试题汇总-框架-1" aria-hidden="true">#</a> 前端面试题汇总-框架-1</h1><h3 id="1vue优点"><a class="header-anchor" href="#1vue优点" aria-hidden="true">#</a> 1.vue优点？</h3><p>答：轻量级框架：只关注视图层，是一个构建数据的视图集合，大小只有几十kb；<br> 简单易学：国人开发，中文文档，不存在语言障碍 ，易于理解和学习；<br> 双向数据绑定：保留了angular的特点，在数据操作方面更为简单；<br> 组件化：保留了react的优点，实现了html的封装和重用，在构建单页面应用方面有着独特的优势；<br> 视图，数据，结构分离：使数据的更改更为简单，不需要进行逻辑代码的修改，只需要操作数据就能完成相关操作；<br> 虚拟DOM：dom操作是非常耗费性能的， 不再使用原生的dom操作节点，极大解放dom操作，但具体操作的还是dom不过是换了另一种方式；<br> 运行速度更快:相比较与react而言，同样是操作虚拟dom，就性能而言，vue存在很大的优势。</p><h3 id="2vue父组件向子组件传递数据"><a class="header-anchor" href="#2vue父组件向子组件传递数据" aria-hidden="true">#</a> 2.vue父组件向子组件传递数据？</h3><p>答：通过props</p><h3 id="3子组件像父组件传递事件"><a class="header-anchor" href="#3子组件像父组件传递事件" aria-hidden="true">#</a> 3.子组件像父组件传递事件？</h3><p>答：$emit方法</p><h3 id="4v-show和v-if指令的共同点和不同点"><a class="header-anchor" href="#4v-show和v-if指令的共同点和不同点" aria-hidden="true">#</a> 4.v-show和v-if指令的共同点和不同点？</h3><p>答: 共同点：都能控制元素的显示和隐藏；<br> 不同点：实现本质方法不同，v-show本质就是通过控制css中的display设置为none，控制隐藏，只会编译一次；v-if是动态的向DOM树内添加或者删除DOM元素，若初始值为false，就不会编译了。而且v-if不停的销毁和创建比较消耗性能。<br> 总结：如果要频繁切换某节点，使用v-show(切换开销比较小，初始开销较大)。如果不需要频繁切换某节点使用v-if（初始渲染开销较小，切换开销比较大）。</p><h3 id="5如何让css只在当前组件中起作用"><a class="header-anchor" href="#5如何让css只在当前组件中起作用" aria-hidden="true">#</a> 5.如何让CSS只在当前组件中起作用？</h3><p>答：在组件中的style前面加上scoped</p><h3 id="6的作用是什么"><a class="header-anchor" href="#6的作用是什么" aria-hidden="true">#</a> 6.的作用是什么?</h3><p>答:keep-alive 是 Vue 内置的一个组件，可以使被包含的组件保留状态，或避免重新渲染。</p><h3 id="7如何获取dom"><a class="header-anchor" href="#7如何获取dom" aria-hidden="true">#</a> 7.如何获取dom?</h3><p>答：ref=&quot;domName&quot; 用法：this.$refs.domName</p><h3 id="8说出几种vue当中的指令和它的用法"><a class="header-anchor" href="#8说出几种vue当中的指令和它的用法" aria-hidden="true">#</a> 8.说出几种vue当中的指令和它的用法？</h3><p>答：v-model双向数据绑定；<br> v-for循环；<br> v-if v-show 显示与隐藏；<br> v-on事件；v-once: 只绑定一次。</p><h3 id="9-vue-loader是什么使用它的用途有哪些"><a class="header-anchor" href="#9-vue-loader是什么使用它的用途有哪些" aria-hidden="true">#</a> 9. vue-loader是什么？使用它的用途有哪些？</h3><p>答：vue文件的一个加载器，将template/js/style转换成js模块。<br> 用途：js可以写es6、style样式可以scss或less、template可以加jade等</p><h3 id="10为什么使用key"><a class="header-anchor" href="#10为什么使用key" aria-hidden="true">#</a> 10.为什么使用key?</h3><p>答：需要使用key来给每个节点做一个唯一标识，Diff算法就可以正确的识别此节点。<br> 作用主要是为了高效的更新虚拟DOM。</p><h3 id="11axios及安装"><a class="header-anchor" href="#11axios及安装" aria-hidden="true">#</a> 11.axios及安装?</h3><p>答：请求后台资源的模块。npm install axios --save装好，<br> js中使用import进来，然后.get或.post。返回在.then函数中如果成功，失败则是在.catch函数中。</p><h3 id="12v-modal的使用"><a class="header-anchor" href="#12v-modal的使用" aria-hidden="true">#</a> 12.v-modal的使用。</h3><p>答：v-model用于表单数据的双向绑定，其实它就是一个语法糖，这个背后就做了两个操作：<br> v-bind绑定一个value属性；<br> v-on指令给当前元素绑定input事件。</p><h3 id="13请说出vuecli项目中src目录每个文件夹和文件的用法"><a class="header-anchor" href="#13请说出vuecli项目中src目录每个文件夹和文件的用法" aria-hidden="true">#</a> 13.请说出vue.cli项目中src目录每个文件夹和文件的用法？</h3><p>答：assets文件夹是放静态资源；components是放组件；router是定义路由相关的配置; app.vue是一个应用主组件；main.js是入口文件。</p><h3 id="14分别简述computed和watch的使用场景"><a class="header-anchor" href="#14分别简述computed和watch的使用场景" aria-hidden="true">#</a> 14.分别简述computed和watch的使用场景</h3><p>答：computed:<br> 　　　　当一个属性受多个属性影响的时候就需要用到computed<br> 　　　　最典型的栗子： 购物车商品结算的时候<br> watch:<br> 　　　　当一条数据影响多条数据的时候就需要用watch<br> 　　　　栗子：搜索数据</p><h3 id="15v-on可以监听多个方法吗"><a class="header-anchor" href="#15v-on可以监听多个方法吗" aria-hidden="true">#</a> 15.v-on可以监听多个方法吗？</h3><p>答：可以，栗子：<code>&lt;input type=&quot;text&quot; v-on=&quot;{ input:onInput,focus:onFocus,blur:onBlur, }&quot;&gt;。</code></p><h3 id="16nexttick的使用"><a class="header-anchor" href="#16nexttick的使用" aria-hidden="true">#</a> 16.$nextTick的使用</h3><p>答：当你修改了data的值然后马上获取这个dom元素的值，是不能获取到更新后的值，<br> 你需要使用$nextTick这个回调，让修改后的data值渲染更新到dom元素之后在获取，才能成功。</p><h3 id="17vue组件中data为什么必须是一个函数"><a class="header-anchor" href="#17vue组件中data为什么必须是一个函数" aria-hidden="true">#</a> 17.vue组件中data为什么必须是一个函数？</h3><p>答：因为JavaScript的特性所导致，在component中，data必须以函数的形式存在，不可以是对象。<br> 　　组建中的data写成一个函数，数据以函数返回值的形式定义，这样每次复用组件的时候，都会返回一份新的data，相当于每个组件实例都有自己私有的数据空间，它们只负责各自维护的数据，不会造成混乱。而单纯的写成对象形式，就是所有的组件实例共用了一个data，这样改一个全都改了。</p><h3 id="18渐进式框架的理解"><a class="header-anchor" href="#18渐进式框架的理解" aria-hidden="true">#</a> 18.渐进式框架的理解</h3><p>答：主张最少；可以根据不同的需求选择不同的层级；</p><h3 id="19vue中双向数据绑定是如何实现的"><a class="header-anchor" href="#19vue中双向数据绑定是如何实现的" aria-hidden="true">#</a> 19.Vue中双向数据绑定是如何实现的？</h3><p>答：vue 双向数据绑定是通过 数据劫持 结合 发布订阅模式的方式来实现的， 也就是说数据和视图同步，数据发生变化，视图跟着变化，视图变化，数据也随之发生改变；<br> 核心：关于VUE双向数据绑定，其核心是 Object.defineProperty()方法。</p><h3 id="20单页面应用和多页面应用区别及优缺点"><a class="header-anchor" href="#20单页面应用和多页面应用区别及优缺点" aria-hidden="true">#</a> 20.单页面应用和多页面应用区别及优缺点</h3><p>答：单页面应用（SPA），通俗一点说就是指只有一个主页面的应用，浏览器一开始要加载所有必须的 html, js, css。所有的页面内容都包含在这个所谓的主页面中。但在写的时候，还是会分开写（页面片段），然后在交互的时候由路由程序动态载入，单页面的页面跳转，仅刷新局部资源。多应用于pc端。<br> 多页面（MPA），就是指一个应用中有多个页面，页面跳转时是整页刷新<br> 单页面的优点：<br> 用户体验好，快，内容的改变不需要重新加载整个页面，基于这一点spa对服务器压力较小；前后端分离；页面效果会比较炫酷（比如切换页面内容时的专场动画）。<br> 单页面缺点：<br> 不利于seo；导航不可用，如果一定要导航需要自行实现前进、后退。（由于是单页面不能用浏览器的前进后退功能，所以需要自己建立堆栈管理）；初次加载时耗时多；页面复杂度提高很多。</p><h3 id="21v-if和v-for的优先级"><a class="header-anchor" href="#21v-if和v-for的优先级" aria-hidden="true">#</a> 21.v-if和v-for的优先级</h3><p>答：当 v-if 与 v-for 一起使用时，v-for 具有比 v-if 更高的优先级，这意味着 v-if 将分别重复运行于每个 v-for 循环中。所以，不推荐v-if和v-for同时使用。<br> 如果v-if和v-for一起用的话，vue中的的会自动提示v-if应该放到外层去。</p><h3 id="22assets和static的区别"><a class="header-anchor" href="#22assets和static的区别" aria-hidden="true">#</a> 22.assets和static的区别</h3><p>答：相同点：assets和static两个都是存放静态资源文件。项目中所需要的资源文件图片，字体图标，样式文件等都可以放在这两个文件下，这是相同点<br> 不相同点：assets中存放的静态资源文件在项目打包时，也就是运行npm run build时会将assets中放置的静态资源文件进行打包上传，所谓打包简单点可以理解为压缩体积，代码格式化。而压缩后的静态资源文件最终也都会放置在static文件中跟着index.html一同上传至服务器。static中放置的静态资源文件就不会要走打包压缩格式化等流程，而是直接进入打包好的目录，直接上传至服务器。因为避免了压缩直接进行上传，在打包时会提高一定的效率，但是static中的资源文件由于没有进行压缩等操作，所以文件的体积也就相对于assets中打包后的文件提交较大点。在服务器中就会占据更大的空间。<br> 建议：将项目中template需要的样式文件js文件等都可以放置在assets中，走打包这一流程。减少体积。而项目中引入的第三方的资源文件如iconfoont.css等文件可以放置在static中，因为这些引入的第三方文件已经经过处理，我们不再需要处理，直接上传。</p><h3 id="23vue常用的修饰符"><a class="header-anchor" href="#23vue常用的修饰符" aria-hidden="true">#</a> 23.vue常用的修饰符</h3><p>答：.stop：等同于JavaScript中的event.stopPropagation()，防止事件冒泡；<br> .prevent：等同于JavaScript中的event.preventDefault()，防止执行预设的行为（如果事件可取消，则取消该事件，而不停止事件的进一步传播）；<br> .capture：与事件冒泡的方向相反，事件捕获由外到内；<br> .self：只会触发自己范围内的事件，不包含子元素；<br> .once：只会触发一次。</p><h3 id="24vue的两个核心点"><a class="header-anchor" href="#24vue的两个核心点" aria-hidden="true">#</a> 24.vue的两个核心点</h3><p>答：数据驱动、组件系统<br> 数据驱动：ViewModel，保证数据和视图的一致性。<br> 组件系统：应用类UI可以看作全部是由组件树构成的。</p><h3 id="25vue和jquery的区别"><a class="header-anchor" href="#25vue和jquery的区别" aria-hidden="true">#</a> 25.vue和jQuery的区别</h3><p>答：jQuery是使用选择器（$）选取DOM对象，对其进行赋值、取值、事件绑定等操作，其实和原生的HTML的区别只在于可以更方便的选取和操作DOM对象，而数据和界面是在一起的。比如需要获取label标签的内容：$(&quot;lable&quot;).val();,它还是依赖DOM元素的值。<br> Vue则是通过Vue对象将数据和View完全分离开来了。对数据进行操作不再需要引用相应的DOM对象，可以说数据和View是分离的，他们通过Vue对象这个vm实现相互的绑定。这就是传说中的MVVM。</p><h3 id="26-引进组件的步骤"><a class="header-anchor" href="#26-引进组件的步骤" aria-hidden="true">#</a> 26. 引进组件的步骤</h3><p>答: 在template中引入组件；<br> 在script的第一行用import引入路径；<br> 用component中写上组件名称。</p><h3 id="27delete和vuedelete删除数组的区别"><a class="header-anchor" href="#27delete和vuedelete删除数组的区别" aria-hidden="true">#</a> 27.delete和Vue.delete删除数组的区别</h3><p>答：delete只是被删除的元素变成了 empty/undefined 其他的元素的键值还是不变。Vue.delete 直接删除了数组 改变了数组的键值。</p><h3 id="28spa首屏加载慢如何解决"><a class="header-anchor" href="#28spa首屏加载慢如何解决" aria-hidden="true">#</a> 28.SPA首屏加载慢如何解决</h3><p>答：安装动态懒加载所需插件；使用CDN资源。</p><h3 id="29vue-router跳转和locationhref有什么区别"><a class="header-anchor" href="#29vue-router跳转和locationhref有什么区别" aria-hidden="true">#</a> 29.Vue-router跳转和location.href有什么区别</h3><p>答：使用location.href=&#39;/url&#39;来跳转，简单方便，但是刷新了页面；<br> 使用history.pushState(&#39;/url&#39;)，无刷新页面，静态跳转；<br> 引进router，然后使用router.push(&#39;/url&#39;)来跳转，使用了diff算法，实现了按需加载，减少了dom的消耗。<br> 其实使用router跳转和使用history.pushState()没什么差别的，因为vue-router就是用了history.pushState()，尤其是在history模式下。</p><h3 id="30-vue-slot"><a class="header-anchor" href="#30-vue-slot" aria-hidden="true">#</a> 30. vue slot</h3><p>答：简单来说，假如父组件需要在子组件内放一些DOM，那么这些DOM是显示、不显示、在哪个地方显示、如何显示，就是slot分发负责的活。</p><h3 id="31你们vue项目是打包了一个js文件一个css文件还是有多个文件"><a class="header-anchor" href="#31你们vue项目是打包了一个js文件一个css文件还是有多个文件" aria-hidden="true">#</a> 31.你们vue项目是打包了一个js文件，一个css文件，还是有多个文件？</h3><p>答：根据vue-cli脚手架规范，一个js文件，一个CSS文件。</p><h3 id="32vue里面router-link在电脑上有用在安卓上没反应怎么解决"><a class="header-anchor" href="#32vue里面router-link在电脑上有用在安卓上没反应怎么解决" aria-hidden="true">#</a> 32.Vue里面router-link在电脑上有用，在安卓上没反应怎么解决？</h3><p>答：Vue路由在Android机上有问题，babel问题，安装babel polypill插件解决。</p><h3 id="33vue2中注册在router-link上事件无效解决方法"><a class="header-anchor" href="#33vue2中注册在router-link上事件无效解决方法" aria-hidden="true">#</a> 33.Vue2中注册在router-link上事件无效解决方法</h3><p>答： 使用@click.native。原因：router-link会阻止click事件，.native指直接监听一个原生事件。</p><h3 id="34routerlink在ie和firefox中不起作用路由不跳转的问题"><a class="header-anchor" href="#34routerlink在ie和firefox中不起作用路由不跳转的问题" aria-hidden="true">#</a> 34.RouterLink在IE和Firefox中不起作用（路由不跳转）的问题</h3><p>答: 方法一：只用a标签，不适用button标签；方法二：使用button标签和Router.navigate方法</p><h3 id="35axios的特点有哪些"><a class="header-anchor" href="#35axios的特点有哪些" aria-hidden="true">#</a> 35.axios的特点有哪些</h3><p>答：从浏览器中创建XMLHttpRequests；<br> node.js创建http请求；<br> 支持Promise API；<br> 拦截请求和响应；<br> 转换请求数据和响应数据；<br> 取消请求；<br> 自动换成json。<br> axios中的发送字段的参数是data跟params两个，两者的区别在于params是跟请求地址一起发送的，data的作为一个请求体进行发送<br> params一般适用于get请求，data一般适用于post put 请求。</p><h3 id="36请说下封装-vue-组件的过程"><a class="header-anchor" href="#36请说下封装-vue-组件的过程" aria-hidden="true">#</a> 36.请说下封装 vue 组件的过程？</h3><p>答：1. 建立组件的模板，先把架子搭起来，写写样式，考虑好组件的基本逻辑。(os：思考1小时，码码10分钟，程序猿的准则。)<br> 　　2. 准备好组件的数据输入。即分析好逻辑，定好 props 里面的数据、类型。<br> 　　3. 准备好组件的数据输出。即根据组件逻辑，做好要暴露出来的方法。<br> 4. 封装完毕了，直接调用即可</p><h3 id="37params和query的区别"><a class="header-anchor" href="#37params和query的区别" aria-hidden="true">#</a> 37.params和query的区别</h3><p>答：用法：query要用path来引入，params要用name来引入，接收参数都是类似的，<a href="http://xn--this-pg9fthm24k.$route.query.name%E5%92%8Cthis.$route.params.name" target="_blank" rel="noopener noreferrer">分别是this.$route.query.name和this.$route.params.name</a>。<br> url地址显示：query更加类似于我们ajax中get传参，params则类似于post，说的再简单一点，前者在浏览器地址栏中显示参数，后者则不显示<br> 注意点：query刷新不会丢失query里面的数据<br> params刷新 会 丢失 params里面的数据。</p><h3 id="38vue初始化页面闪动问题"><a class="header-anchor" href="#38vue初始化页面闪动问题" aria-hidden="true">#</a> 38.vue初始化页面闪动问题</h3>',76),d=r("br",null,null,-1),o=t(" 首先：在css里加上[v-cloak] {"),v=r("br",null,null,-1),n=t(" display: none;"),c=r("br",null,null,-1),p=t(" }。"),f=r("br",null,null,-1),b=t(' 如果没有彻底解决问题，则在根元素加上style="display: none;" :style="{display: \'block\'}"'),m=s('<h3 id="39vue更新数组时触发视图更新的方法"><a class="header-anchor" href="#39vue更新数组时触发视图更新的方法" aria-hidden="true">#</a> 39.vue更新数组时触发视图更新的方法</h3><p>答:push()；pop()；shift()；unshift()；splice()； sort()；reverse()</p><h3 id="40vue常用的ui组件库"><a class="header-anchor" href="#40vue常用的ui组件库" aria-hidden="true">#</a> 40.vue常用的UI组件库</h3><p>答：Mint UI，element，VUX</p><h3 id="41vue修改打包后静态资源路径的修改"><a class="header-anchor" href="#41vue修改打包后静态资源路径的修改" aria-hidden="true">#</a> 41.vue修改打包后静态资源路径的修改</h3><p>cli3版本：在根目录下新建vue.config.js 文件，然后加上以下内容：（如果已经有此文件就直接修改）<br> module.exports = {<br> publicPath: &#39;&#39;, // 相对于 HTML 页面（目录相同） }</p>',6);u.render=function(s,i,u,g,y,k){return e(),a("div",null,[h,r("p",null,[t("答：使用vue开发时，在vue初始化之前，由于div是不归vue管的，所以我们写的代码在还没有解析的情况下会容易出现花屏现象，看到类似于"+l(s.message)+"的字样，虽然一般情况下这个时间很短暂，但是我们还是有必要让解决这个问题的。",1),d,o,v,n,c,p,f,b]),m])};export default u;export{i as __pageData};
