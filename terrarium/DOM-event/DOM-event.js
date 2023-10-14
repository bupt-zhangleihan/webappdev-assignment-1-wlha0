window.onload = function(){
    // console.log('e',e);
    // console.log('window.event',window.event)
    // type为load
    // 读取windows事件

    document.onclick = function(e){
        // console.log('e',e);
        // console.log('window.event',window.event)
        // type为click  触发事件形式不同
        var ev = e;
        var iTarget = ev.target;
        // target：用于实现事件委托的属性

        if(iTarget.id == 'myDiv'){
            iTarget.style.background = 'red';
        }
    }
    
}