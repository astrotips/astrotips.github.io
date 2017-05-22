$(document).ready(function() {

	$('.homePosts').click(function () {
		console.log("clicked");
		window.location=$(this).find("a").attr("href");
    	 return false;
	})	
});