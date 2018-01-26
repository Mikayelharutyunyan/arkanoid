/*
$(document) . ready(function(){
	var p = $("<p/>") . appendTo("body");
	var div = $("<div/>") . appendTo("body");
	var img = $("<img/>") . appendTo("body");
	var audio = $("<audio/>") . appendTo("body");

	div.css({
		"width":"550px",
		"height":"700px",
		"background-color":"antiquewhite"
	});

	var d2 = $("<div/>") . attr("class","guin") . attr("id","div1") . appendTo("body");
	var d3 = $("<div/>") . attr("class","guin") . attr("id","div2") . appendTo("body");
	var d4 = $("<div/>") . attr("class","guin") . attr("id","div3") . appendTo("body");
	var d5 = $("<div/>") . attr("class","guin") . attr("id","div4") . appendTo("body");

	$(".guin").css({
		"position":"absolute",
		"background-color":"red"
	});

	$("#div1").css({
		"height":"20px",
		"width":"200px",
		"top":"200px",
		"left":"150px"
	});	

	$("#div2").css({
		"height":"20px",
		"width":"270px",
		"top":"450px"
	});

	$("#div3").css({
		"height":"20px",
		"width":"140px",
		"top":"400px",
		"left":"350px"
	});

	$("#div4").css({
		"height":"65px",
		"width": "65px",
		"top":"385px",
		"background-color":"black"
	});

});
*/

$(document) . ready(function(){
	var div = $("<div/>") . appendTo("body");
    var dig = $("<div/>") . appendTo("body");
	var p = $("<h1/>") . appendTo("div");
	var mar = $("<marquee/>") . attr("id","marq") . appendTo("div");
	var button = $("<button/>") . appendTo("div");
	var button1 = $("<button/>").attr("id","song") . appendTo("body");
	var button3 = $("<button/>") . appendTo("div");

	p.text("Main Menu");
	button.text("Start");
	button1.text("Song");
	button3.text("Exit");
	mar.text("Play Arkanoid");
	
	p.css({
		"color": "white",
		"position":"absolute",
		"top":"0px",
		"left":"590px",
		"font-size":"1000%"
	});

	button.css({
		"position":"absolute",
		"top":"375px",
		"left":"850px",
		"width":"150px",
		"height":"40px",
		"cursor":"pointer",
		"background-color":"blue",
		"color":"white"		
	});

	button1.css({
		"position":"absolute",
		"top":"465px",
		"left":"850px",
		"width":"150px",
		"height":"40px",
		"cursor":"pointer",
		"background-color":"blue",
		"color":"white"		
	});	

	button3.css({
		"position":"absolute",
		"top":"550px",
		"left":"850px",
		"width":"150px",
		"height":"40px",
		"cursor":"pointer",
		"background-color":"blue",
		"color":"white"
	});

	var clickSound = $("<audio/>") . appendTo("body");
	clickSound[0].src = "audio/Ed_Sheeran_-_Shape_Of_You.mp3";

	button1.click(function(){
	clickSound[0].play();
	});
	button1.dblclick(function(){
	clickSound[0].pause();
	});	
	button3.click(function(){
	window.close();
	});

	button.click(function(){
		createWorld();
	});

});


