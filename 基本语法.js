// javascript严格区分大小写
// 数据类型
// 数值类型：js不区分小数和整数 （NaN:not a number; Infinity:表示无限大）；尽量避免使用浮点数进行数值运算，因为存在精度问题

// 字符串：正常字符串使用单引号或者双引号包裹，注意转义符\


// 'use strict';严格检查模式，预防js的随意性导致出现的一些问题。必须写在最前面
'use strict';
// 1、定义变量
// 局部变量，在函数内使用let；全局使用var，全局变量都绑定在window下，如window.alert();
// 为了避免不同的js文件使用相同的全局变量，减少冲突：
/*将自己的代码全部放入自己定义的唯一空间名字中，降低全局变量名冲突问题
 唯一全局空间
var weiquan = {};
定义全局变量
weiquan.name ='tanweiquan';
weiquan.add = function(a,b){
    return a+b;
}; 
特别的，jQuery. 等价于 $()
*/
// 常量定义：const
const ax = 123;
var score = 60;

// 字符串 "abc"、'abc'和`abc`,单引号可识别特殊转义符\，如\n,\r,\t...
var s = '你好';
var s1 = `
    hello_world
`;
// 字符串拼接
var msg = `你好，${s}`; /* 相当于var msg =`你好`+s1 */
// 字符串长度
console.log(msg.length)
// 字符串不可变
msg[0]=1; // 错误，赋值失败，不可变
console.log(msg);
// 字符串转换
let asd = `hello`
console.log(asd.toUpperCase());// 大写，变量名.toUpperCase()
console.log(asd.toLowerCase());// 小写，变量名.toLowerCase()
console.log(asd.indexOf('h'));// 获取字符的下标索引，变量名.indexOf()
console.log(asd.substring(2));// 从第n个截到最后
console.log(asd.substring(1,3))// 截取区间为:[1,3)个字符
// 布尔值
var t = true;
var f = false;
// 数组
var arr = [1,2,3,4,5,6,'hello',null,true];// 可以包含任意类型
arr[1];
arr[0] = 1; // 通过下标取值和赋值
console.log(arr.length) // 数组长度，给arr.length赋值，数组大小就会发生变化
arr.slice(3);// 从第n个截到最后，返回一个数组
arr.slice(2,3);// 截取区间为[2,3)的元素，返回为一个数组 
arr.push('a','b'); // 向数组尾部压入元素
arr.pop();// 弹出数组尾部的最后一个元素
arr.unshift('a','b');// 向数组头部压入元素
arr.shift(); //弹出数组头部的第一个元素
arr.sort();// 数组的元素排序
arr.reverse();// 数组的元素反转排列
arr.concat([1,2,3]);// 数组拼接，返回一个新的数组
arr.join('-');// 数组里的元素使用特定字符/字符串拼接
var arrx = [[1,3,5],['a','b','c'],[3,6,8]];// 多维数组
arrx[2][0];// 通过多维数组的下标取值和赋值


// 对象，对象里的所有属性名(键)默认都是字符串，赋值时键可以不用加符号
/* 格式：
var 对象名 = {
    属性名: 属性值，
    属性名: 属性值，
    属性名: 属性值

}; 
*/
var person = {
    name:'hello',
    age:3,
    tags:['前端','后端']
};
// 对象赋值，直接赋值
person.name = '你好';
// 动态删减属性,同时删除属性名和属性值
delete person.name; 
// 动态添加属性,直接给新的属性名添加属性值即可
person.haha = '哈哈';
// 判断属性是否在这个对象中，格式：'属性名' in 对象名;
'age' in person;
// 判断这个属性是否是自身拥有的
person.hasownProperty('age');

// 2、流程控制
// 条件
if (score>60&&score<70) {
    alert('60~70')
}else if(score>70){
    alert('70~100')
}else{
    alert('other')
};
// 循环
while(age<100){
    age=age+1;
    console.log(age);
};
for(let i=0;i<100;i++){
    console.log(i);
};
// 遍历: for ... in 和for ... of
let age =[15,16,17,18,19,20];
for(var num in age){
    console.log(num);// 打印下标
    console.log(age[num]);// 答应下标及其值
};
for (var num of age){ // 建议使用
    console.log(num); // 打印值
}

// Map和Set
// Map
var map = new Map([['tom',26],['jack',56],['tony',26]]);
 map.set('jenny',18); // 新增或修改
var namewho = map.get('tom') // 通过key获得value  
 console.log(namewho);
 map.delete('jack'); // 删除
// Set 无序不重复的集合
var set =new Set([1,2,3,1,1,1,]); // set可以去重
set.add(2); // 添加
set.delete(1); // 删除
console.log(set.has(3)); // 是否包含某个元素

// 在浏览器的控制台打印变量！
console.log(score); 
/* 
逻辑运算：
&& 两者都满足
|| 或者
! 不

比较运算符：
=   赋值符号
==  值等于（类型不等于）
=== 绝对等于（类型也等于）

NaN与所有数值都不绝对相等，包括自己
只能通过isNaN(NaN)来判断数值是否是NaN

null和undefined
null 空
undefined 未定义
*/