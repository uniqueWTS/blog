---
layout: post
title: Make Bootstrap Grids with Sass
date: 2018-07-31
categories: jekyll update
tags: bootstrap, sass
---
* TOC
{:toc}


## 前言
[Sass][sass] 是成熟, 稳定且功能强大的 CSS 扩展语言. 它兼容 CSS 语法, 是我喜欢的风格. 

上一篇文章 [Understand Bootstrap Grid System][1], 大概上讲述 Bootstrap 栅格系统的实现过程, 本文接着用Sass 编码实践.
- [点击查看demo][3]
- [点击下载代码][2] 

先回忆一下 Bootstrap 栅格系统的功能特性, 主要是:

- 移动优先
- 列偏移
- 列排序
- 响应式(从超小屏幕到大屏幕)

## 移动优先

遵循**移动优先**的原则, 先对超小屏幕进行设计和编码(约占70%比重). 再通过媒体查询, 完成其余部分.

盒模型和栅格参数让栅格的设计和维护变得简单.

```
* { boxsizing: border-box }
$columns: 12;
$gutter-width: 30px;

```
`@mixins`让 CSS 代码结构变得清晰, 有条理.

```
/* @mixins */

@mixin make-gutter {
	padding-left: $gutter;
	padding-right: $gutter;
}

@mixin center-block {
	margin-left: auto;
	margin-right: auto;
}

// 清除浮动 IE8+
@mixin clearfix {
	&:after, &:before {
		clear: both;
		content: "";
		display: table;
	}
}

@mixin col {
	float: left;
	min-height: 1px;
	@include make-gutter;
	position: relative; 
}
```
`container` 和 `row` 的边界重叠, `container` 和 `col-*` 的左右边距重叠, 让所有被 `container` 包含的元素左对齐.
```
.container,
.container-fluid {
	@include make-gutter;
	@include center-block;
}

.row {
	margin-left: -$gutter;
	margin-right: -$gutter;
}
.container,
.row,
.container-fluid {
	@include clearfix;
}

```
`col-xs-*` 继承 `col` 所有属性, `col-xs-*` 的栅格宽度不同可视为对 `col` 的扩展. 使用循环语句计算栅格百分比宽度. 若完全使用 CSS 语句, 篇幅太长, 代码编写起来费时费力, 还容易出错. 

```
/* columns */
.col-xs {
	@include col;
}

/* width pull push offset */
$i: $columns;
@while $i > 0 {
  $v: percentage($i / $columns);
	.col-xs-#{$i} {
		@extend .col-xs;
		width: $v;
	}
	.col-xs-pull-#{$i} {
		left: $v;
	}
	.col-xs-push-#{$i} {
		right: $v;
	}
	.col-xs-offset-#{$i} {
		margin-left: $v;
	}
	$i: $i - 1;
}

```
## 小屏幕
添加媒体查询, 为 `container` 设计容器宽度, 接着把 `column.scss` 查找所有 `xs` , 并将它们替换成 `sm`.   
```
/* For small screen only */
@media only screen and (min-width: $screen-sm-min){
	.container {
		width: $container-sm;
	}
	.col-sm {
		@include col;
	}

	/* set width pull push offset */
$i: $columns;
@while $i > 0 {
	$v: percentage($i / $columns);
	.col-sm-#{$i} {
		@extend .col-sm;
		width: $v;
	}
	.col-sm-pull-#{$i} {
		left: $v;
	}
	.col-sm-push-#{$i} {
		right: $v;
	}
	.col-sm-offset-#{$i} {
		margin-left: $v;
	}
	$i: $i - 1;
}
```
## 其它
同理, 中等屏幕和大屏幕同样修改相应前缀. 有兴趣可以[下载代码查看][2].


[sass]:http://sass.bootcss.com/
[sass docs]:http://sass.bootcss.com/docs/guide/
[1]: {{site.baseurl}}/jekyll/update/2018/07/30/bootstrap-grid-system.html
[2]: {{site.baseurl}}/public/grid.scss.zip
[3]: {{site.baseurl}}/public/html/grid