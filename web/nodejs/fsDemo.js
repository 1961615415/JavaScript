'use strict';//使用严格的环境
/**
 * node.js的内部对象fs提供了同步和异步操作文件读写的方法
 * 在fs模块中，提供同步方法是为了方便使用。那我们到底是应该用异步方法还是同步方法呢？
 由于Node环境执行的JavaScript代码是服务器端代码，
 所以，绝大部分需要在服务器运行期反复执行业务逻辑的代码，必须使用异步代码，
 否则，同步代码在执行时期，服务器将停止响应，因为JavaScript只有一个执行线程。
 服务器启动时如果需要读取配置文件，或者结束时需要写入到状态文件时，可以使用同步代码，
 因为这些代码只在启动和结束时执行一次，不影响服务器正常运行时的异步执行。
 * */
/**
 * 注意一下文件的位置
 *          要在同一目录下直接写文件名
 *          其它目录用相对目录来定位一下
 * @type {module:fs}
 */
var fs=require("fs");
//异步读取文本文件
fs.readFile("f.txt","UTF-8",function (err, data) {
if(err){
    console.log("文件读取出错了，"+err);
}else{
    console.log("文件读取完成,内容是:"+data);
}
});//文件读取完成,内容是:我是一个文件
try{
    var data=fs.readFileSync("f1.txt","UTF-8");
    console.log(data);//我是一个文件
}catch (error) {
console.log("出错了："+error);
}//出错了：Error: ENOENT: no such file or directory, open 'f1.txt'
/***
 * 读取二进制文件
 * 返回的是Buffer类型的
 */
var bufferImage;
fs.readFile("1.png",function (err,data) {
    if(err){
        console.log("出错了:"+err);
    }else{
        console.log(data);
        bufferImage=data;
    }
});
//<Buffer 89 50 4e 47 0d 0a 1a 0a 00 00 00 0d 49 48 44 52 00 00 00 4e 00 00 00 4b 08 02 00 00 00 51 05 26 f9 00 00 11 0c 49 44 41 54 78 01 ed 5a 0b 70 15 d7 79 ... >
//String和Buffer间的转换
var stxt="哈哈哈，你是这条街上最靓的仔";
var butterS=Buffer.from(stxt,"UTF-8");
console.log("转换后的buffer文件是："+butterS);
/*var image=bufferImage.toString();
console.log("图片是："+image);*/

/***
 * 写文件:String->默认是UTF-8
 *        Buffer->默认是二进制
 */
fs.writeFile("2.txt","我是被写入的内容",function (err) {
    if(err){
        console.log("写入文件出错了："+err);
    }else{
        console.log("写入文件成功！");
    }
});//写入文件成功！
try{
    fs.writeFileSync("1.txt","我是同步写入的内容");
}catch (e) {
    console.log("同步写入出错："+e);
}
/***
 * 获取文件的属性
 */
fs.stat("1.txt",function (err, stats) {
    console.log("文件创建时间："+stats.birthtime);
    console.log("文件修改时间："+stats.mtime);
    console.log("是否是文件："+stats.isFile());
});

