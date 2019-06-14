# toTop
### JQ版返回顶部插件  
&#8195;这是一个jQ实例的方法，所以需要在一个jQ实例上调用，例如  
````javascript
$('.toTop').backBtn(options)
````
&#8195;options是可选项，可配置的参数是  
````javascript
     {
         isBack:true,//是否返回顶部
         scrollTop:0,//页面滚动多少高度显示
         position:'left',//显示的位置
         width:1000,//显示的内容区域的宽度
         offset:0,//距离内容区域的距离
         speed:800,//滚动的速度，越小越大
         ifShow:true//是否显示
     }
````
