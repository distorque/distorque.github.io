(function() {
	function getStyle(el,styleProp) { // Adapted from http://www.quirksmode.org/dom/getstyles.html
		if (el.currentStyle)
			var y = el.currentStyle[styleProp];
		else if (window.getComputedStyle)
			var y = document.defaultView.getComputedStyle(el,null).getPropertyValue(styleProp);
		return y;
	}

	var sidebar = document.getElementById('sidebar');
	var content = document.getElementById('content');

	function resizeContentWidth() {  // Automatically resize content so we can see the whole sidebar without the content overflowing
		content.style.width = (document.body.clientWidth * 0.85 - parseFloat(getStyle(sidebar, 'margin-left')) - 200) + 'px';
	}

	if (sidebar) {
		window.addEventListener('load', function() {
			sidebar.style.width = '200px';
			resizeContentWidth();
		});
		window.addEventListener('resize', resizeContentWidth);
	}
})();
