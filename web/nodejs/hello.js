//编写hello.js，输出一个或多个函数；
function hi(name) {
    console.log(`${name}，您好`);
}
var z=10;
//暴露函数
module.exports={z:z,hi:hi};
//相等于，因为exports已经有{}，所以不能直接给它赋值为exports={z:z,hi:hi}
/*exports.z=z;
exports.hi=hi;*///这样可以
exports={z:z,hi:hi};//TypeError: hello.hi is not a function 这个是不起作用的
//module.exports=hi;
/***
 * 如果要输出一个键值对象{}，可以利用exports这个已存在的空对象{}，并继续在上面添加新的键值；

 如果要输出一个函数或数组，必须直接对module.exports对象赋值。

 所以我们可以得出结论：直接对module.exports赋值，可以应对任何情况：

 module.exports = {
    foo: function () { return 'foo'; }
};
 或者：

 module.exports = function () { return 'foo'; };
 最终，我们强烈建议使用module.exports = xxx的方式来输出模块变量，这样，你只需要记忆一种方法。
 */

/**
 * 练习:
 编写hello.js，输出一个或多个函数；
 编写main.js，引入hello模块，调用其函数。
 * */
function one() {
    return "哈哈，我是hello模块中的f1方法";
}
function two() {
    return "哈哈，我是hello模块中的f2方法";
}
/*
* 暴露方法给外部
* */
//每次都要都暴露
module.exports={
    one:one,
    two:two,
    z:z,
    hi:hi
};