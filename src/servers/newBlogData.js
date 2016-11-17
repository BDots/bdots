"use strict";
/**
 * Created by xihong.shi on 11/15/2016.
 */
var NewBlogDatas = (function () {
    function NewBlogDatas() {
    }
    NewBlogDatas.NewBlogData = [
        {
            type: "Typescript",
            title: "Express学习笔记——中间件",
            body: "中间件函数能够访问请求对象 (req)、响应对象 (res) 以及应用程序的请求/响应循环中的下一个中间件函数。下一个中间件函数通常由名为 next 的变量来表示。 对于Express的中间件，之前不是很理解这个是什么东西，查看了好多博客 ...",
            link: "http://bdots.net/blog/archives/53",
            typeLink: "http://bdots.net/blog/archives/category/typescript",
            userLink: "http://bdots.net/blog/archives/author/xiaoshizi",
            anthor: "@小柿子",
            date: "6小时前",
            viewCount: "41",
            commentCount: "10"
        },
        {
            type: "TypeScript",
            title: "搭建第一个TypeScript和React示例",
            body: "本文重点讲述如何利用TypeScript、React、webpack创建一个TypeScript工程。 第一步：创建你的项目目录 在NPM中利用mkdir或者手动下面的项目目录...",
            link: "http://bdots.net/blog/archives/43",
            typeLink: "http://bdots.net/blog/archives/category/typescript",
            userLink: "http://bdots.net/blog/archives/author/xiaoshizi",
            anthor: "@小柿子",
            date: "1天前",
            viewCount: "50",
            commentCount: "21"
        },
        {
            type: "JQuery",
            title: "在RequireJS中引用layer插件",
            body: "用requirejs引用jquery layer插件会导致样式无法加载， 官方给出解决方案是添加layer.config， 如下： requirejs.config({ baseUrl: 'js/libs', paths...",
            link: "http://bdots.net/blog/archives/31",
            typeLink: "http://bdots.net/blog/archives/category/jquery",
            userLink: "http://bdots.net/blog/archives/author/xiaoshizi",
            anthor: "@小柿子",
            date: "2天前",
            viewCount: "80",
            commentCount: "32"
        }
    ];
    return NewBlogDatas;
}());
exports.NewBlogDatas = NewBlogDatas;
