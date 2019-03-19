* 本项目集成了bootstrap4，jquery等
* 采用webpack4多页面(多入口)配置，实现常用webpack配置

# 项目适用于哪些人
* 想使用bootstrap、jquery开发项目，尤其是简单的门户网站，宣传页面等小项目
* 想学习webpack4配置
  > 还不知道webpack是干什么的？
它就是一个打包工具，能帮我们压缩代码，处理图片，热启动（开发时修改代码自动刷新浏览器），代码转义（写[es6](http://es6.ruanyifeng.com/)转成es5，写[scss](https://www.sass.hk/)转成css）等

# 如何运行？
* 确保已安装nodejs，最好是8.x以上，该项目在v8.9.4上测试。
* 检出项目到本地
```
```
* 进入项目并安装依赖
```
cnpm i
```
* 跑起来
```
npm run dev
```
# 打包
```
npm run build
```
> 打包后资源放在dist目录下
 src / assets  里面 ckeditor5  为富文本编辑器，按照说明使用即可 需单独引入静态资源库



