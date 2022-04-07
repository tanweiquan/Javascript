// 判断对象
// typeof 123 --->输出"number"
// typeof "123" --->输出"string"
// 日期对象
var now = new Date();
now.getFullYear(); // 年
now.getMonth(); // 月 老外：0~11月
now.getDate(); // 日
now.getHours(); // 时
now.getMinutes(); // 分
now.getSeconds(); // 秒
now.getDay(); // 星期几
now.getTime(); // 时间戳
var nowtime = new Date(now.getTime());// 时间戳转时间
// json对象
'use strict';
var user ={
    name: 'tanweiquan',
    age: '3',
    sex: '男'
};
// js对象转化为json字符串
var jsonstring=JSON.stringify(user);
// json字符串转换成js对象
var jsondx = JSON.parse(jsonstring);
console.log(jsondx);
// 面向对象
// 方法一：
// 定义一个A类
var A = { // 原型
name: 'xxx',
age: 18,
can: 'run'
};
// 实例化：
var xiaoming = {
    name: '小明'
};
xiaoming._proto_ = A; // 指向原型
xiaoming.can // 调用

// 方法二，class关键字,建议使用
// 定义一个学生类：
class Student{
    constructor(name){
        this.name = name; // this调用当前对象属性
    };
    hello(){ // 方法
      alert('hello')
    };
};
// 实例化：
var xiaohong = new Student('xiaohong');
// 调用
xiaohong.name;
xiaohong.hello();
// 继承(
class xiaoStudent{
    constructor(name,grade){
        super(name); // 调用父类属性
        this.grade = grade;
    };
    mygrade(){ // 方法
        alert('我是小学生');
    };
};
// 实例化：
var xiaozhi = new xiaoStudent('xiaozhi',1)
// 调用
xiaozhi.name;
xiaozhi.mygrade();