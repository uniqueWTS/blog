---
layout: basic
---
<link rel="stylesheet" href="{{site.baseurl}}/public/css/main.css">
<!-- 最新版本的 Bootstrap 核心 CSS 文件 -->
<!-- <link rel="stylesheet" href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"> -->
<style>
	.lorem { background-color: pink }
</style>

<h1 style="text-align: center;">Grid Demo</h1>
<div class="container">
	<div class="row">
		<div class="col-xs-12 col-sm-8 col-md-6 col-md-pull-3">
			{% include main.html %}
		</div>
		<div class="col-xs-12 col-sm-4 col-md-3 col-md-push-6">
			{% include aside.html %}
		</div>
		<div class="col-xs-12 col-sm-4 col-md-3">
			{% include ads.html %}
		</div>
	</div>
</div>