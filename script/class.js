function Player(){
	var that = this;
	this.nkarr = $("#nkar");
	this.nkar = $("#nkarr");
	this.img = $("#dvd");
	this.directions = {};
	this.speedX = 15;
	this.speedY = 0;
	this.ballspeedLeft = 7;
	this.ballspeedTop = 7;
	this.divspeed = 3;
	this.jumpState = true;
	this.state = true;

	this.STATIC_HOR_CENTER;
	this.STATIC_VER_CENTER;

	this.WIDTH_DIFFERENCE;
	this.WIDTHH_DIFFERENCE;
	this.HEIGHT_DIFFERENCE;
	this.HEIGHTT_DIFFERENCE;

	this.NKARI_HOR_CENTER;
	this.NKARI_VER_CENTER;

	this.DIVI_HOR_CENTER;
	this.DIVI_VER_CENTER;
	this.divinter;

	this.check = function()
	{
		that.STATIC_HOR_CENTER = that.nkar.position().left + that.nkar.width()/2;
		that.STATIC_VER_CENTER = that.nkar.position().top;
		that.IMG_HOR_CENTER = that.img.position().left + that.img.width()/2;
		that.IMG_VER_CENTER = that.img.position().top;

		that.IMG_DIFFERENCE = that.nkarr.width()/2 + that.img.width()/2;
		that.WIDTH_DIFFERENCE = that.nkarr.width()/2 + that.nkar.width()/2;

		that.NKARI_HOR_CENTER = that.nkarr.position().left + that.nkarr.width()/2;
		that.NKARI_VER_CENTER = that.nkarr.position().top + that.nkarr.height();

		if( Math.abs(that.NKARI_HOR_CENTER - that.STATIC_HOR_CENTER) < that.WIDTH_DIFFERENCE && 
			Math.abs(that.NKARI_VER_CENTER - that.STATIC_VER_CENTER) <= 5)
		{
			that.nkarr.css("top",that.nkar.position().top - that.nkarr.height() - 4);
			that.ballspeedTop = -1 * that.ballspeedTop;
		}

		if( Math.abs(that.NKARI_HOR_CENTER - that.IMG_HOR_CENTER) < that.IMG_DIFFERENCE && 
			Math.abs(that.NKARI_VER_CENTER - that.IMG_VER_CENTER) <= 5)
		{
			that.nkarr.css("top",that.img.position().top - that.nkarr.height() - 4);
			that.ballspeedTop = -1 * that.ballspeedTop;
		}

		if(that.nkarr.position().top < 55)
		{
			that.ballspeedTop = -1 * that.ballspeedTop;
		}

		if(that.nkarr.position().left - that.nkarr.width() > ($("#divok").width() - 30))
		{
			that.ballspeedLeft = -1 * that.ballspeedLeft;	
		}

		if(that.nkarr.position().left < 175)
		{
			that.ballspeedLeft = -1 * that.ballspeedLeft;
		}

		for(var index = 0; index < zangvac.length; index++ ) {
			//console.log(index)
	
			if(Math.abs(that.nkarr.position().top - (zangvac[index].position().top + zangvac[index].height() )) <= 5
				&& that.nkarr.position().left > zangvac[index].position().left && that.nkarr.position().left < (zangvac[index].position().left + zangvac[index].width()))
					
			{
				if(zangvac[index].attr('id') == "brick68"){
					that.divinter = setInterval(that.up,20);
				}
				else if(zangvac[index].attr('id') == "brick50"){
					that.divinter = setInterval(that.getup,20);
				}
				else if(zangvac[index].attr('id') == "brick32"){
					that.divinter = setInterval(that.myup,20);
				}
				else if(zangvac[index].attr('id') == "brick89"){
					that.divinter= setInterval(that.pickup,20);					
				}
				else if(zangvac[index].attr('id') == "brick82"){
					that.divinter= setInterval(that.wakeup,20);					
				}
				else if(zangvac[index].attr('id') == "brick23"){
					that.divinter= setInterval(that.divishe,20);					
				}

				/*if(Math(that.nkarr.position().top - ("brick82".position().top + "brick82".height()))<= 5){
					ballspeedTop;
				}*/
				
				that.nkarr.css("top",zangvac[index].position().top + zangvac[index].height() + 2);
				zangvac[index].remove();
				//if(zangvac[index].remove())
				
					points += 80;
					score.text("Score " + points);
				
				zangvac.splice(index, 1)
				
				that.ballspeedTop = -that.ballspeedTop;

				if(zangvac.length == 0){
					win.css({
						"font-size":"600%",
						"position":"absolute",
						"color":"white",
						"top":"300px",
						"left":"733px"
					});

					clearInterval(interval);

				that.nkarr.css({
					"position":"absolute",
					"top":"450px",
					"left":"1010px",
					"height":"20px",
					"width":"20px"
				});
				}
				break;

			}

			if(Math.abs(that.nkarr.position().top + that.nkarr.height() - zangvac[index].position().top) <= 5 && that.nkarr.position().left > zangvac[index].position().left && that.nkarr.position().left < (zangvac[index].position().left + zangvac[index].width()))
			{			
				if(zangvac[index].attr('id') == "brick68"){
					that.divinter = setInterval(that.up,20);
				}
				else if(zangvac[index].attr('id') == "brick50"){
					that.divinter = setInterval(that.getup,20);
				}
				else if(zangvac[index].attr('id') == "brick32"){
					that.divinter = setInterval(that.myup,20);
				}
				else if(zangvac[index].attr('id') == "brick89"){
					that.divinter= setInterval(that.pickup,20);					
				}	
				else if(zangvac[index].attr('id') == "brick82"){
					that.divinter= setInterval(that.wakeup,20);					
				}
				else if(zangvac[index].attr('id') == "brick23"){
					that.divinter= setInterval(that.divishe,20);					
				}

				that.nkarr.css("top", zangvac[index].position().top -that.nkarr.height() - 2);
				zangvac[index].remove();
					points += 80;
					score.text("Score " + points);
				
				zangvac.splice(index, 1)
				
				that.ballspeedTop = -that.ballspeedTop;

				if(zangvac.length == 0){
					win.css({
						"font-size":"600%",
						"position":"absolute",
						"color":"white",
						"top":"300px",
						"left":"733px"
					});

					clearInterval(interval);

				that.nkarr.css({
					"position":"absolute",
					"top":"450px",
					"left":"1010px",
					"height":"20px",
					"width":"20px"
				});
				}

			}
		
			

		}
		this.pickup = function pickup(){
			q=$("#myimak");
			that.WIDTHH_DIFFERENCE = q.width()/2 + q.width()/2;			
			
			that.DIVI_HOR_CENTER = q.position().left + q.width()/2;
			that.DIVI_VER_CENTER = q.position().top + q.height();

			q.css("top",q.position().top + that.divspeed);

			if( Math.abs(that.DIVI_HOR_CENTER - that.STATIC_HOR_CENTER) < that.WIDTHH_DIFFERENCE && 
				Math.abs(that.DIVI_VER_CENTER - that.STATIC_VER_CENTER) <= 4)
			{	
				q.remove();
				that.ballspeedTop = 3.5;
				that.ballspeedLeft = -3.5;
			}

		}
		
		this.up = function up(){
			e = $("#imak");
			that.WIDTHH_DIFFERENCE = e.width()/2 + e.width()/2;			
			
			that.DIVI_HOR_CENTER = e.position().left + e.width()/2;
			that.DIVI_VER_CENTER = e.position().top + e.height();

			e.css("left",e.position().left);
			e.css("top",e.position().top + that.divspeed);

			if( Math.abs(that.DIVI_HOR_CENTER - that.STATIC_HOR_CENTER) < that.WIDTHH_DIFFERENCE && 
				Math.abs(that.DIVI_VER_CENTER - that.STATIC_VER_CENTER) <= 4)
			{	
				e.remove();
				if(that.nkar == imggg)
				{
					img.css("left",that.nkar.position().left);
					that.nkar.remove();
					that.nkar = $("#nkarr");
				}
				that.nkar.css({
					"width":"250px"
				});
				that.ballspeedTop = 10;
				that.ballspeedLeft = -7;
			}
				
		}

		this.getup = function getup(){
			y = $("#imakk");
			that.WIDTHH_DIFFERENCE = y.width()/2 + y.width()/2;			
			
			that.DIVI_HOR_CENTER = y.position().left + y.width()/2;
			that.DIVI_VER_CENTER = y.position().top + y.height();

			y.css("left",y.position().left);
			y.css("top",y.position().top + that.divspeed);

			if( Math.abs(that.DIVI_HOR_CENTER - that.STATIC_HOR_CENTER) < that.WIDTHH_DIFFERENCE && 
				Math.abs(that.DIVI_VER_CENTER - that.STATIC_VER_CENTER) <= 4)
			{	
				y.remove();
				if(that.nkar == imggg)
				{
					img.css("left",that.nkar.position().left);
					that.nkar.remove();
					that.nkar = $("#nkarr");
				}
				that.nkar.css({
					"width":"250px"
				});
				that.ballspeedTop = 10;
				that.ballspeedLeft = -7;
			}
				
		}

		this.wakeup = function wakeup(){
			gr = $("#imaks");
			that.WIDTHH_DIFFERENCE = gr.width()/2 + gr.width()/2;			
			
			that.DIVI_HOR_CENTER = gr.position().left + gr.width()/2;
			that.DIVI_VER_CENTER = gr.position().top + gr.height();

			gr.css("left",gr.position().left);
			gr.css("top",gr.position().top + that.divspeed);

			if( Math.abs(that.DIVI_HOR_CENTER - that.STATIC_HOR_CENTER) < that.WIDTHH_DIFFERENCE && 
				Math.abs(that.DIVI_VER_CENTER - that.STATIC_VER_CENTER) <= 4)
			{	
				gr.remove();
				that.nkar.css({
					"width":"90"
				});
				that.ballspeedTop = -10;
				that.ballspeedLeft = 7;
			}
				
		}

		this.myup = function myup(){
			g = $("#im");
			that.WIDTHH_DIFFERENCE = g.width()/2 + g.width()/2;			
			
			that.DIVI_HOR_CENTER = g.position().left + g.width()/2;
			that.DIVI_VER_CENTER = g.position().top + g.height();

			g.css("left",g.position().left);
			g.css("top",g.position().top + that.divspeed);

			if( Math.abs(that.DIVI_HOR_CENTER - that.STATIC_HOR_CENTER) < that.WIDTHH_DIFFERENCE && 
				Math.abs(that.DIVI_VER_CENTER - that.STATIC_VER_CENTER) <= 4)
		{	
			g.remove();
			imggg.css("left",that.nkar.position().left);
			that.nkar.remove();
			that.nkar = $("#nkarok");
			that.nkar.css({
				"border-radius":"15px 15px 15px 15px",
				"position":"absolute",
				"height":"30px",
				"width":"180px",
				"top":"830px"
			});
		}
		}

		this.divishe = function divishe(){
			qw = $("#divd");
			that.WIDTHH_DIFFERENCE = qw.width()/2 + qw.width()/2;			
			
			that.DIVI_HOR_CENTER = qw.position().left + qw.width()/2;
			that.DIVI_VER_CENTER = qw.position().top + qw.height();

			qw.css("left",qw.position().left);
			qw.css("top",qw.position().top + that.divspeed);

			if( Math.abs(that.DIVI_HOR_CENTER - that.STATIC_HOR_CENTER) < that.WIDTHH_DIFFERENCE && 
				Math.abs(that.DIVI_VER_CENTER - that.STATIC_VER_CENTER) <= 4)
		{	
			qw.remove();
			that.img.css({
				"background-color":"white",
				"border-radius":"15px 15px 15px 15px",
				"position":"absolute",
				"height":"30px",
				"width":"120px",
				"left":"170px",
				"top":"830px"
			});
		}
		}

		
		if(that.nkarr.position().top > that.nkar.position().top + that.nkar.height() + 70)
			{
				if(myzangvac.length == 1) {
					over.css({
						"font-size":"600%",
						"position":"absolute",
						"color":"white",
						"top":"300px",
						"left":"730px"
					});
					
					clearInterval(interval);
						
				}
				
				that.nkarr.css({
					"position":"absolute",
					"top":"450px",
					"left":"1010px",
					"height":"20px",
					"width":"20px"
				});

				myzangvac[myzangvac.length-1].css("display","none");
				myzangvac.length = myzangvac.length - 1;
				

			}
	}


	this.move = function(e){
		for(var i in that.directions){
			if(that.nkar.position().left > 180 && i == 37)
			{
				that.nkar.css("left",(that.nkar.position().left - that.speedX) + "px");
			}

			if(that.nkar.position().left < ($("#divok").width() - that.nkar.width()) && i == 39)
			{
				that.nkar.css("left", (that.nkar.position().left + that.speedX) + "px");
			}

		}
	}

	this.dzax = function()
	{
		if(that.jumpState)
		{
			that.nkarr.css("left",that.nkarr.position().left + that.ballspeedLeft);
			that.nkarr.css("top",that.nkarr.position().top + that.ballspeedTop);
		}
	}
	
}

