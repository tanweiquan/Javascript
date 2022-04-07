// 定义方法1：
function abs1(x){ // 推荐使用
    if (arguments.length>1){ // 拿到参数的个数，并判断是否大于1(arguments代表传递进来的所有参数是一个数组)
        arguments[1];
    };
    if(x>=0){
        return x;
    }else{
        return -x;
    }
};  
// 定义方法二：
var abs2 = function(x,...rest){ // 获取除了已经定义的参数外的所有参数
    if(x>=0){
        return x;
    }else{
        return -x;
    }
};
// 匿名函数：function(x){...};通过赋值给abs2从而可以被调用
// 调用，可以传任意个参数，也可以不传参数
abs1(10);
abs2(-10);