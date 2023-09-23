// let声明变量
let myString1 = "Hello";
let myString2 = "World";
let res1="";
let res2="";
let res3="";
// 格式化字符串
res1=myString1 + myString2 + "!"; //HelloWorld!
res2=myString1 + " " + myString2 + "!"; //Hello World!
res3=myString1 + ", " + myString2 + "!"; //Hello, World!
console.log(res1)
console.log(res2)
console.log(res3)


// const声明常量，无法更改引用
//对象引用受保护
//对象值不受保护
const me={
    name:"wlh",
    age:20
}
const message=`Hello, my name is ${me.name}, i am ${me.age} years old `
console.log(message)