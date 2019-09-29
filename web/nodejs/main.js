// 编写main.js，引入hello模块，调用其函数。
/*引入模板
1.模块名是否写对了；
2.模块文件是否存在；
3.相对路径是否写对了。*/
var hello=require("./hello");
hello.hi("战三");
console.log("我是引入的z里面的变量z:"+hello.z);
/***
 * 引入hello中的f1\f2方法
 */
console.log(hello.one());
console.log(hello.two());