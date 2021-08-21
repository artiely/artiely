import{o as i,c as e,f as l}from"./app.5f3fb606.js";const r='{"title":"文件命名规范","description":"","frontmatter":{"title":"文件命名规范","tag":["file","folder"],"author":"Artiely","date":"2017-7-7","cover":"https://gitee.com/artiely/Figure-bed/raw/master/images/20200315171926.png","base64":"222d30"},"relativePath":"post/2017/2017-7-7-rules-file.md","lastUpdated":1629109030086}',p={},t=l('<h1 id="文件命名规范"><a class="header-anchor" href="#文件命名规范" aria-hidden="true">#</a> 文件命名规范</h1><p>下面列出了一些常用的名称，并不是按出现频次排序，但是列出来的都是出现频次非常高的单复数形式都出现了的只列出次数最多的注意，都是目录名称，不是文件名</p><ul><li><p>src，source<br> 源代码，用 src 居多</p></li><li><p>test，<code>__tests__</code><br> 测试文件，也经常用<code>__test__</code>，facebook 的测试框架 jest 默认的测试文件目录就是<code>__test__</code></p></li><li><p>docs<br> 文档</p></li><li><p>lib<br> 库文件，library 的缩写</p></li><li><p>dist<br> 用来放打包编译后的文件，应该是 distribution 的缩写</p></li><li><p>build，scripts<br> 构建脚本</p></li><li><p>utils，tools，helpers<br> 工具代码</p></li><li><p>controllers，views，middlewares，models<br> MVC 对应的 models，views，controllers，还有中间件 middlewares</p></li><li><p>router<br> 路由</p></li><li><p>server<br> 用来放服务端代码</p></li><li><p>adapters<br> 适配器，适配器模式是一种很常用的设计模式栗子：<a href="http://github.com/hubotio/hub%E2%80%A6" target="_blank" rel="noopener noreferrer">github.com/hubotio/hub…</a></p></li><li><p>legacy<br> 一般用来放兼容历史版本或兼容旧浏览器的代码</p></li><li><p>config<br> 配置文件</p></li><li><p>benchmarks<br> benchmarks 测试，又叫基准测试或性能测试。用来测试版本的性能变化</p></li><li><p>unit，spec<br> 单元测试，一般在 test 目录下</p></li><li><p>e2e<br> 端对端测试，一般在 test 目录下</p></li><li><p>assets，vendor<br> 资源，一般用来放图片或 css 文件</p></li><li><p>static<br> 静态资源</p></li><li><p>examples，demo<br> 示例</p></li><li><p>component<br> 组件</p></li><li><p>view,pages<br> 视图，页面</p></li><li><p>plugins<br> 插件</p></li><li><p>bin<br> 命令脚本，命令行工具经常会用到</p></li><li><p>common<br> 公用的文件</p></li><li><p>packages<br> 很多项目会打包出多个 npm 包，用来减小体积，一般会用 packages 来放不同的包</p></li><li><p>misc<br> 杂项，miscellaneous 的缩写</p></li><li><p>core<br> 核心文件</p></li></ul>',3);p.render=function(l,r,p,s,o,a){return i(),e("div",null,[t])};export default p;export{r as __pageData};
