$(document).ready(function() {

	var homes = $('.home');
	var backgroundToggle = function(){
		$('span.dark').on('click', function(){
			$('body').css('background-image','url(img/dark_wood.png)');
		});

		$('span.light').on('click', function(){
			$('body').css('background-image','url(img/tileable_wood_texture.png)');
		});

		$('span.forest').on('click', function(){
			$('body').css({'background-image':'url(img/forest.jpg)', 'background-size': 'cover'});
		});
	};

	var lowToggle = function(){
		$('.low').on('click', function(){
			var myArray = $("article");
			var count = 0;

			myArray.sort(function (a, b) {
			    a = parseInt($(a).attr("data-price"), 10);
			    b = parseInt($(b).attr("data-price"), 10);
			    count += 2;

			    if(a > b) {
			        return 1;
			    } else if(a < b) {
			        return -1;
			    } else {
			        return 0;
			    }
			});
			$(".image-container").append(myArray);
		});
	};

	var highToggle = function(){
		$('.high').on('click', function(){
			var myArray = $("article");
			var count = 0;

			myArray.sort(function (a, b) {
			    a = parseInt($(a).attr("data-price"), 10);
			    b = parseInt($(b).attr("data-price"), 10);
			    count += 2;

			    if(a < b) {
			        return 1;
			    } else if(a > b) {
			        return -1;
			    } else {
			        return 0;
			    }
			});
			$(".image-container").append(myArray);
		});
	};

	highToggle();
	lowToggle();
	backgroundToggle();
});
