---
layout: post
title: "JavaScript 的语言特点"
date: 2018-08-01
categoires: jekyll update
tags: JavaScript
---
* TOC
{:toc}

## JavaScript简介

> [JavaScript](https://en.wikipedia.org/wiki/) 是一门动态的、基于原型的、弱类型和多范式编程语言.

## 任意类型的变量值
JavaScript 变量值可以是类型. 这是它最鲜明的特点之一.

它不仅可以保存6种原始类型数据, 还可以保存对象, 函数, 数据等复杂数据对象. 不管传递参数, 还是返回值, 类型都是不确定的. 因此,它可以传递任意类型的值, 也可以返回任意类型的数据. 
```
/*x可以是任意类型的数据*/
var variable = x; 
```
JavaScript有6种原始类型的数据.
- Number. 数值类型, 可以保存任意类型的数值.
- Boolean. 布尔类型.
- String. 字符类型.
- Undefined. 变量声明但未初台化
- Symbol. ES6新类型.
- Null. 空对象指针.

switch 参数不局限于数值类型. JavaScript拥有许多和其它语言(如 C++ )的相似语句, 例如条件语句, 循环语句等. 这些语句的关键字大体上是相同的. JavaScript 变量值的鲜明特点, 同样出现在某些语句上. C++ 的
 `switch` 语句`expression`的值, 只能是数值. 而 JavaScript 可以是任意类型! 
```
switch (expression){
  statement
}
```

## 没有函数重载
JavaScript 函数不介意传递进来多少个参数,也不在乎传进来参数是什么数据类型. 它接收一个参数列表 `arguments`, 类似数组, 可以通过数组下标访问参数值. `arguments.length` 是接收参数的总个数, `arguments[i]` 是接收到的第 `i` 个参数. 

JavaScript 函数没有确定的返回值类型, 没有确定的参数类型和参数个数, 因此它是没有函数重载的. 拥有相同标识符的函数, 位置在后面会覆盖前面的. 

## 作用域链
JavaScript 没有封闭的块状作用域, 只有作用域链. C++ 条件语句构成一个封闭的块状作用域. 外面不能访问 `statement` 的变量. 而 JavaScript 可以访问. 
```cpp
if (condition) {
  statement
}
```
JavaScript 由函数体形成作用域, 变量在局部没有定义, 就去查找外层作用域, 若找不到定义就继续向外, 直到全局作用域. 若是全局作用域还找不到定义, 就会报错.