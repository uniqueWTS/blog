---
layout: basic
---

<link rel="stylesheet" href="{{site.baseurl}}/assets/css/col.css">
<link rel="stylesheet" href="{{site.baseurl}}/assets/css/abs-pos.css">
<link rel="stylesheet" type="text/css" href="{{site.baseurl}}/assets/css/3-cols.css">

<h1 style="text-align: center;">3 Columns Layout with Absolute Positioning</h1>
<div class="wrap">
	<!-- Holy Cup Layout: main must be first! -->
	<div class="wrap-main">
		{% include main.html %}
	</div>
	{% include aside.html %}
	{% include ads.html %}
</div>