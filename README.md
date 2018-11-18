# mintui

> 使用mint-ui+vue构建的移动端项目

## 结构
1.Header-->Mint-UI的Header组件
2.Tabbar-->MUI的Tabbar.html
3.中间区域配置路由

##功能
1.底部tabbar切换路由，更换相应组件，页面切换有淡入淡出的效果
2.首页：轮播图、九宫格
3.图片分享：横向scroll
>总结一下

 3.1需要借助于MUI中的tab-top-webview-main.html
 3.2需要把slider区域的mui-fullscreen类去掉，不然滚动条会显示在整个页面
 3.3滑动条无法正常触发滑动，发现这个是js组件，需要被初始化一下
 + 导入mui.js
 + 调用官方提供的方法去初始化：
 ```
     mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
 ```
 3.4在初始化滑动条的时候会有错误提示：TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them
 是mui.js中用到了'caller', 'callee', and 'arguments'，但在使用webpack进行打包时默认使用严格模式，在网上的一些解决方法中，说可以安装babel-plugin-transform-remove-strict-mode这个包，并在babelrc文件中添加"plugins": ["transform-remove-strict-mode"],亲测，还是有问题，感觉是版本或者建项目的方法有不同导致的，我的解决方案是在babelrc这个文件中添加"ignore": ["./src/lib/mui/js/*.js"]来忽略对某些文件进行严格模式的打包
 3.5进入页面的时候滚动条还是无法正常工作，初始化的语句要写在mounted这个钩子函数里面才可以，执行到这个钩子函数的时候表示页面上的DOM元素已经全部加载完毕，此时执行初始化才会有效
 3.6此时发现底部的tabbar又不能正常工作了，是因为tabbar组件中的.mui-tab-item-lib类名引入的js文件内部有冲突，所以只要重写这个类名就可以，把tabbar组件中所有用到这个类名的地方重新换掉
