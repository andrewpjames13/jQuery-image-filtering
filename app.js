$(document).ready(function() {

	$('span.dark').on('click', function(){
		$('body').css('background-image','url(img/dark_wood.png)');
	});

	$('span.light').on('click', function(){
		$('body').css('background-image','url(img/tileable_wood_texture.png)');
	});

});
