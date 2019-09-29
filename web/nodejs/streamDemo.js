'use strict';//使用严格的环境
/**
 * stream:
 * 什么是流？流是一种抽象的数据结构。
 * 想象水流，当在水管中流动时，就可以从某个地方（例如自来水厂）源源不断地到达另一个地方（比如你家的洗手池）。
 * 我们也可以把数据看成是数据流，比如你敲键盘的时候，就可以把每个字符依次连起来，看成字符流。
 * 这个流是从键盘输入到应用程序，实际上它还对应着一个名字：标准输入流（stdin）。
 如果应用程序把字符一个一个输出到显示器上，这也可以看成是一个流，这个流也有名字：标准输出流（stdout）。
 流的特点是数据是有序的，而且必须依次读取，或者依次写入，不能像Array那样随机定位。
 * */

/**
 * 在Node.js中，流也是一个对象，我们只需要响应流的事件就可以了：
 *          data事件表示流的数据已经可以读取了，
 *          end事件表示这个流已经到末尾了，没有数据可以读取了
 *          error事件表示出错了。
 * */
var  fs=require("fs");
var fsStream=fs.createReadStream("1.txt");
/***
 * 监听读取数据事件
 */
fsStream.on("data",function (chunk) {
    console.log("读取到的一部分数据为："+chunk);
});//读取到的一部分数据为：我是同步写入的内容
fsStream.on("end",function () {
    console.log("读取完毕");
});
var fsWriteStream=fs.createWriteStream("1.txt");
fsWriteStream.write("使用流写入第一行数据\n");
fsWriteStream.write("使用流写入第二行数据\n");
fsWriteStream.end();
/***
 * 所有可以读取数据的流都继承自stream.Readable，
 * 所有可以写入的流都继承自stream.Writable
 */

