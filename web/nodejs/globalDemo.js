/**
 * 全局变量
 * 和JS中一样，node中也有全局变量叫global
 * 由于node是服务器语言，所以浏览器是无法识别的
 * global和process是基本模块
 * */
console.log("全局变量："+global);
/***
 * 判断是不是node.js环境
 */
if(typeof window===undefined){
    console.log("这是node.js环境");
}else{
    console.log("这是浏览器环境");
}//这是浏览器环境

