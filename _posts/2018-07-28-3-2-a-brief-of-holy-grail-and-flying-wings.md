---
layout: post
title:  "A Brief of Holy Grail and Flying Wings"
date:   2018-07-28 11:00:00 +0800
categories: jekyll update
---
<style>
	.page-content p {text-indent: 2em}
</style>
* TOC
{:toc}
## 两种经典布局

在 Web 开发中，三列(左中右)布局是最常见的布局方式．三列布局中最经典的2种方法是[圣杯布局(the Holy Grail)][holy grail]和[双飞翼布局(the Flying Wings)][flying wings].

### 圣杯布局

圣杯布局的布局思路是利用**浮动**的原理和**负外边距**的效果, 三列并排, 再用**相对定位**调整位置.

#### 圣杯布局的结构

```html
 <div class="wrap">
 	<!-- 中间列必须放在左右两列之前 -->
 	<main class="page-main"></main>
 	<aside class="page-sidebar"></aside>
 	<section class="page-ads"></section>
 </div>
```
#### 圣杯布局的样式
```css
.page-main { width: 100%;  float: left;}
.page-sidebar, .page-ads { width: 200px; float:left;}
.page-sidebar { margin-left: -100%; position: relative; left: -200px; }
.page-ads { margin-left: -200px; position: relative; right: -200px;}
.wrap {padding: 0 200px; overflow: hidden}
```
#### 圣杯布局的效果
点击查看[圣杯布局的效果]({{site.baseurl}}/pages/holy-grail).

### 双飞翼布局

双飞翼布局的布局思路与圣杯布局大体相同, 不同之处在于调整位置的方法. 它是在中间列包裹上一层父元素, 利用子元素的外边距清空位置.

#### 双飞翼布局的结构

```html
 <div class="wrap">
 	<!-- 中间列必须放在左右两列之前 -->
 	<div class="wrap-main"> <!-- 中间列父元素 -->
 		<main class="page-main"></main>
 	</div>
 	<aside class="page-sidebar"></aside>
 	<section class="page-ads"></section>
 </div>
```
#### 双飞翼布局的样式
```css
.page-sidebar {width: 200px; float: left; margin-left: -100%;}
.wrap-main { width: 100%;  float: left; }
.page-ads {width: 200px; float: left; margin-left: -200px;}
.page-main {margin-left: 200px; margin-right: 200px;}
```
#### 双飞翼布局的效果
点击查看[双飞翼布局的效果]({{site.baseurl}}/pages/double-wings).

### 总结和展望

这两种经典的布局方法, 主要是利用浮动和外边距的效果实现的. 以这两种效果为基础,可以做出各种各样的布局方式. 需要多投入一部分时间进行研究.

不过, 上述两种方法还是有不足之处, 因为它们不适用移动设备(例如手机). 解决这个问题可以采用响应式设计, 针对各种不同宽度屏幕, 进行相应的布局.

布局的方法多种多样,还可以用绝对定位来布局. 这种方法结构和圣杯布局的结构一样, 点击[绝对定位布局效果]({{site.baseurl}}/pages/abs-pos/).


[holy grail]: https://en.wikipedia.org/wiki/Holy_grail_(web_design)
[flying wings]: #



