---
layout: page
title: Pool
permalink: /pool/
---
<ul>
	<li id="new_text">New Text</li>
</ul>
<div id="pool">
    
</div>
<script type="text/javascript">
	$("#new_text").click(
		function() {
			var newText = Object.create(content.text);
			newText.define(prompt('enter your text'));
			newText.place();
		}
	);
</script>



<style>
.text {
	display:block;
    position: absolute;
    z-index: 2;
}
</style>
