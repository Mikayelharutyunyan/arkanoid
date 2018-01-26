function createWorld(){
		$("div").empty();
		$('body').css('background-image','url("images/borders_positioned.png")');
		$("#song").css({
			"top":"10px",
			"left":"10px",
			"width":"100px"
		});

		window.myzangvac = [];
		window.zangvac = [];
		var img = $("<img/>") . attr("id","nkar") . attr("src","images/h-atom.png") . appendTo("body");
		window.div = $("<div/>") . attr("id","im") . appendTo("body");
		window.divak = $("<div/>") . attr("id","imak") . appendTo("body");
		window.divakkk = $("<div/>") . attr("id","myimak") . appendTo("body");
		window.divakk = $("<div/>") . attr("id","imakk") . appendTo("body");
		window.divaks = $("<div/>") . attr("id","imaks") . appendTo("body");
		window.divv = $("<div/>") . attr("id","divd") . appendTo("body");
		window.dig = $("<div/>") . attr("id","dvd") . appendTo("body");		
		window.img = $("<img/>") . attr("id","nkarr") . attr("src","images/90a3b657f87585f7073d594b30e074d3.png") . appendTo("body");
		window.imggg = $("<img/>") . attr("id","nkarok") . attr("src","images/0003.png") . appendTo("body");
		var div = $("<div/>") . attr("id","divok") . appendTo("body");
		window.score = $("<h1/>") . attr("id","myscore") . appendTo("body");
		window.points = 0; 
		window.over = $("<p/>") . attr("id","oven") . appendTo("body");
		window.win = $("<p/>") . attr("id","oven") . appendTo("body");
		//window.button5 = $("<button/>") . attr("id","yel") . appendTo("body");
		//button5.text("Play Again");
		over.text("Game Over");
		win.text("You Won");
		//score.text("Score");

		var c = 175;
		var brickId = 0;
		for(var i = 0; i < 3; i++){
			myzangvac.push( $("<img/>") . attr("class","nn") . attr("id","brick" + ++brickId) . attr("src","images/90a3b657f87585f7073d594b30e074d3.png") . appendTo("body"));
			myzangvac[myzangvac.length-1].css({
				"border-radius":"10px 10px 10px 10px",
				"position":"absolute",
				"top":"930px",
				"left":c+"px",
				"height":"20px",
				"width":"70px"
			});
			c += 76;
		}
		
		var b = 170;
		for(var i = 0; i < 15; i++){
			zangvac.push ($("<div/>") . attr("id","brick" + ++brickId).attr("class","mydiv").appendTo("body")); 
			zangvac[zangvac.length-1].css({
				"position":"absolute",
				"background-color":"darkgray",
				"top":"170px",
				"left":b+"px",
				"height":"30px",
				"width":"100px"
			});
			b += 106;
		}
		
		var b = 170;
		for(var i = 0; i < 15; i++){
			zangvac.push($("<div/>") . attr("id","brick" + ++brickId) . attr("class","mydiv") . appendTo("body")); 
			zangvac[zangvac.length-1].css({
				"position":"absolute",
				"background-color":"lightblue",
				"top":"205px",
				"left":b+"px",
				"height":"30px",
				"width":"100px"
			});
			b += 106;
		}

		var b = 170;
		for(var i = 0; i < 15; i++){
			zangvac.push($("<div/>") . attr("id","brick" + ++brickId) . attr("class","mydiv") . appendTo("body")); 
			zangvac[zangvac.length-1].css({
				"position":"absolute",
				"background-color":"green",
				"top":"240px",
				"left":b+"px",
				"height":"30px",
				"width":"100px"
			});
			b += 106;
		}

		var b = 170;
		for(var i = 0; i < 15; i++){
			zangvac.push( $("<div/>") . attr("id","brick" + ++brickId) . attr("class","mydiv") . appendTo("body")); 
			zangvac[zangvac.length-1].css({
				"position":"absolute",
				"background-color":"darkred",
				"top":"275px",
				"left":b+"px",
				"height":"30px",
				"width":"100px"
			});
			b += 106;
		}

		var b = 170;
		for(var i = 0; i < 15; i++){
			zangvac.push( $("<div/>") . attr("id","brick" + ++brickId) . attr("class","mydiv") . appendTo("body")); 
			zangvac[zangvac.length-1].css({
				"position":"absolute",
				"background-color":"gray",
				"top":"310px",
				"left":b+"px",
				"height":"30px",
				"width":"100px"
			});
			b += 106;
		}

		var b = 170;
		for(var i = 0; i < 15; i++){
			zangvac.push($("<div/>") . attr("id","brick" + ++brickId) . attr("class","mydiv") . appendTo("body")); 
			zangvac[zangvac.length-1].css({
				"position":"absolute",
				"background-color":"yellow",
				"top":"345px",
				"left":b+"px",
				"height":"30px",
				"width":"100px"
			});
			b += 106;
		}						

		var  taxtak = new Player(); 
		$('html').keyup(stop).keydown(charMovement);

		function charMovement(e){
			taxtak.directions[e.which] = true;
		}

		function stop(e){
			delete taxtak.directions[e.which];
		}
		window.interval = setInterval(function(){
			taxtak.move();
			taxtak.dzax();
			taxtak.check();

		},20);
		
}


