event接口指由用户触发的事件，例如鼠标或键盘事件。

通过研究该网页的DOM断点用法，总结event应用思路如下：
1.在html文件中设置网页展示16个200*200的黑色正方形，属性为myDiv
2.window.onload=function(){}：读取window事件，当文档内容完全加载就会触发事件（包括图像、脚本文件、CSS文件等）
3.document.onclick=function(e){}：javascript的事件监听器，将文档的点击事件绑定于匿名函数上，当用户点击任意位置，函数将执行并将对象e作为参数传入
4.读取点击位置的属性
5.判断属性是否为”myDiv”，即黑色正方形，若为TRUE，将其style的background属性改为红色
6.最后效果为：鼠标点击页面的黑色正方形，正方形会变红