// 函数

// 计算数组元素求和公式
function addition(ls){
    let res=0
    for(i=0;i<ls.length;i++){
        res=res+ls[i]
    }
    return res
}
let numberlist=new Array(1,2,3,4,5)
addresult=addition(numberlist)
console.log(addresult)