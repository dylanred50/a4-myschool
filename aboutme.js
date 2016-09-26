$(document).ready(function() {
	
	$("#myinfo").hide();
	
	$("#aboutme").click(function(){
		
		$("#myinfo").fadeToggle(500);
		
	});

	// start of mouseover
	
	$(".mousechange").mouseenter (function(){
		
		$(this).css("font-size", "2.5em");
		$(this).css("color", "FFFFFF");
		
	});
	
	$(".mousechange").mouseleave (function(){
		
		$(this).css("font-size", "2em");
		$(this).css("color", "FFFFFF");	
		
	});	
	
});
