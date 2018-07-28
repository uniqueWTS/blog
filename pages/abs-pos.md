---
layout: basic
---

<link rel="stylesheet" href="{{site.baseurl}}/public/css/page
.css">
<link rel="stylesheet" href="{{site.baseurl}}/public/css/abs-pos.css">
<link rel="stylesheet" type="text/css" href="{{site.baseurl}}/public/css/abs-pos.css">

<h1 style="text-align: center;">3 Columns Layout with Absolute Positioning</h1>
<div class="wrap">
	<!-- Holy Cup Layout: main must be first! -->
	<div class="wrap-main">
		{% include main.html %}
	</div>
	{% include aside.html %}
	{% include ads.html %}
</div>