var words ='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
// 随机获取某一个字母的函数
function getRandomWord(){
    var key = getRandomNumber(0,words.length - 1)
    // 取0~25任意随机数
    return words[key]
    // 下标的范围是0~25
}

// 随机生成指定范围区间的数字的函数
function getRandomNumber(min,max){
// console.log(getRandomNumber(0,25))：随机产生0-25之间的一个整数
// Math.random()  随机函数，随机产生（0，1）之间的小数
// Math.random() * 10 ：产生的数是0到10之间的小数
// Math.floor(Math.random() ： 向下取整
// Math.floor(Math.random() * (max - min + 1)) + min [x,y)
    var result = Math.floor(Math.random() * (max-min+1)) +min
    return result
}

// 给随机选中的li添加动画样式
function selectedLiCss(){
    var word = getRandomWord()
    var li = document.getElementById(word)
    // 通过字母选中元素
    li.classList.add('selected')
}
selectedLiCss()

document.addEventListener('keyup',function(e){
    // 添加事件监听器
    // keyup 事件在按键被松开时触发。
    // console.log(e.key.toUpperCase())
    var pressWord = e.key.toUpperCase()
    // toUpperCase：将字符串转为大写  保存当前电脑键盘上按的这个键  获取字母
    var pressWordEl = document.getElementById(pressWord)
    // 当前按的元素  获取元素
    var selectedWordEl = document.querySelector('.selected')
    // querySelector() 方法返回文档中与指定选择器或选择器组匹配的第一个Element对象
    // .selected：选择器的名字
    console.log(pressWord)

    if(pressWordEl){
       pressWordEl.classList.add('press')
    //    添加press动画效果
       pressWordEl.addEventListener('animationend',function(){
        pressWordEl.classList.remove('press')
       })
    }
    console.log(selectedWordEl)

    if(selectedWordEl.innerHTML  === pressWord){
        // 比对键盘按压与press是否相等
        selectedWordEl.classList.remove('selected')
        // 如果一样清除选中状态
        selectedLiCss()
        // 并且选中下一个元素
    }
})