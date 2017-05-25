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
	$('.footerExpandedShBt').find('.shBt').addClass('pl-3 pr-4 py-2 mr-2 rounded-circle');
	
	// Inline Footer js
	$('footer').find('.newsLetter').removeClass('px-4 py-4');
	$('footer').find('input').removeClass('px-3 py-3');
	$('footer').find('button').removeClass('btn-block');
	$('footer').find('input').addClass('px-2 py-2 col-lg-8 col-sm-12 col-8');
	$('footer').find('button').addClass('px-2 py-2 col-lg-4 col-sm-12 col-4 btn-primary');

	$('footer').find('.newsLetter').find('form').addClass('form-inline');
});