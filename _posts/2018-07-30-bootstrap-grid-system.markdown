---
layout: post
title: Understand Bootstrap Grid System
date: 2018-07-30
categories: jekyll update
tags: bootstrap
---
栅格系统以规则的网格阵列来指导和规范网页中的版面布局以及信息分布.

根据栅格的宽度是固定或成比例, 可以分为定宽栅格系统(如 [960栅格系统][960 grid system] )和弹性栅格系统(如 [Bootstrap栅格系统][bootstrap grid system]).

定宽栅格系统的宽度是固定的, 当需求改变时, 需要重新设计每列栅格和槽(Gutter)的宽度和外层容器匹配. 本文偏向采用弹性栅格系统, 因此重点介绍 Bootstrap 栅格系统.

[Bootstrap][bootstrap docs] 提供一套响应式、移动设备优先的流式栅格系统. 点击查看 [bootstrap-grid.css][bootstrap-grid.css].

Bootstrap 使用12列栅格划分外层容器, 栅格的宽度经列数除以总栅格数得到. 它使用了 `box-sizing: border-box` 的盒模型, 栅格之间的槽由内边距产生, 所以包含在栅格的宽度中. 然而, 第1列的左内边距和最后1列的槽是多余的. Bootstrap 利用外层容器的左右边距和栅格多余的槽重叠, 从视觉上消除了影响.

Bootstrap 通过伪类 `:before` 和 `:after` 清除浮动栅格的影响.

Bootstrap 通过相对定位`position: relative`栅格实现列排序或列交换的效果. 通过左外边距`margin-left`实现整体列偏移(Columns Offset)的效果.

Bootstrap 通过媒体查询(Media Query)进行响应式设计. 默认超小屏幕, 体现移动设备优先的特性, 再通过媒体查询应用不同样式, 实现从超小屏幕到大屏幕的响应式设计.

```css
/* 超小屏幕（手机，小于 768px） */
/* 没有任何媒体查询相关的代码，
因为这在 Bootstrap 中是默认的（Bootstrap 是移动设备优先） */

/* 小屏幕（平板，大于等于 768px） */
@media (min-width: @screen-sm-min) { ... }

/* 中等屏幕（桌面显示器，大于等于 992px） */
@media (min-width: @screen-md-min) { ... }

/* 大屏幕（大桌面显示器，大于等于 1200px） */
@media (min-width: @screen-lg-min) { ... }

```
了解 Bootstrap 栅格系统的特性和实现方式之后, 读者可以自己动手用 CSS 或 [CSS 预编译器实现][bootstrap grid system design with sass].



[960 grid system]:https://960.gs/demo.html
[bootstrap docs]:http://www.bootcss.com/
[bootstrap-grid.css]:{{site.baseurl}}/public/css/bootstrap-grid.css
[bootstrap grid system]:https://v3.bootcss.com/css/#grid
[bootstrap grid system design with sass]:{{site.baseurl}}/public/css/main.css
