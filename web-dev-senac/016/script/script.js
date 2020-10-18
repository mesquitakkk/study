$(document).ready(function(){
	$("#header1").click(function(){
		$("#content1").slideDown("fast");
	});
	$("#header1").dblclick(function(){
		$("#content1").slideUp("slow");
	});
	$("#header2").mouseenter(function(){
		$("#content2").slideDown("fast");
	});
	$("#header2").mouseleave(function(){
		$("#content2").slideUp("slow");
	});
	$("#header3").mousedown(function(){
		$("#content3").slideDown("fast");
	});
	$("#header3").mouseup(function(){
		$("#content3").slideUp("slow");
	});
	$("#header4").click(function(){
		$("#content4").slideToggle();
	});
	$(".textfield").focus(function(){
		$(this).css("background-color", "#f7c67a")
	});
	$(".textfield").blur(function(){
		$(this).css("background-color", "#90b6db")
	});
	$("#submit").click(function(){
		$("#content4").slideUp();
	});
});