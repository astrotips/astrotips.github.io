$(document).ready(function() {

	$('.homePosts').click(function () {
		console.log("clicked");
		window.location=$(this).find("a").attr("href");
		return false;
	})

	$('.postContent').find('p').addClass('text-justify px-1 py-1 mt-3 mb-4');
});