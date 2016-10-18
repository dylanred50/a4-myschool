$(document).ready (function() {
	
	$("h1").click (function() {

	$("h2").animate( {
		
		"font-size": "toggle",
		"width": "65%",
		"left": "+=100px"
		
	}, 1000, function() {
		$("h3").fadeToggle(1000);
	});
		
	});
	
	$("h4").click(function() {
		
		/*
		$(this).text("Why you click me bruh!");
		
		$("p").text("Why you click me bruh!");
		*/
		
	});
	
});
