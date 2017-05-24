$(document).ready(function() {

	$('#searchString').keypress(function(event) {
		if (event.keyCode == 13 || event.which == 13) {
			event.preventDefault();
			$('#searchForm').submit();
		}
	});

	$('.homePosts').click(function () {
		window.location=$(this).find("a").attr("href");
		return false;
	});

	$('.postContent').find('p').addClass('text-justify px-1 py-1 mt-3 mb-4');

	$('.shBt').click(function () {
		var href=$(this).find("a").attr("href");
		window.open(href,'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
		return false;
	});

	$('.expandedShBt').find('.shBt').addClass('px-5 py-2 mr-2');
});