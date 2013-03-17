$ = jQuery;
//as user scrolls
	//Start moving the element proportionally to how fast
	//the user is scrolling
/*var lastY;
window.onscroll = function() {
	scrolled(window.scrollY);
};*/


//when user hits a certain distance down the screen
/*function scrolled(y){
	$("#header").css({
		"margin-top":(y - 0) * 1.5,
		
	});
}*/

//Start moving the element proportionally to how fast
	//the user is scrolling

	/*$(window).bind('scroll', function(){
			var puntero = $(this).scrollTop();
				
				if(puntero < 600 ) {
					$("#header").css({"margin-top": '200px'});
				} 
					
				if(puntero > 601 ) {
					$("#header").css({"margin-top": '10px'});

				} 
			
			});*/

	$(window).bind('scroll',function(e){
    parallaxScroll();
});
 
function parallaxScroll(){
    var scrolled = $(window).scrollTop(

    	);
    	//PARALLAX LOGO
    	if (scrolled < 200){
    		$('#header').css('top',(200-scrolled/50)+'px');
    	}
    	if (scrolled > 201){
    		$('#header').css('top',(scrolled-20)+'px');
    	}

    	//PARALLAX BOX 1a
    	if (scrolled < 450){
    		$('#box1a').css('top',(-2100+scrolled*3.5)+'px');
    	}
    	if (scrolled > 451){
    		$('#box1a').css('top',(scrolled-940)+'px');
    	}


    	//PARALLAX BOX 1b
    	if (scrolled < 300){
    		$('#box1b').css('top',(-1900+scrolled*4.3)+'px');
    	}
    	if (scrolled > 301){
    		$('#box1b').css('top',(scrolled-940)+'px');
    	}

    	//PARALLAX BOX 1c
    	if (scrolled < 350){
    		$('#box1c').css('top',(-1600+scrolled*2.9)+'px');
    	}
    	if (scrolled > 351){
    		$('#box1c').css('top',(scrolled-940)+'px');
    	}

    	//PARALLAX BOX 1d
    	if (scrolled < 400){
    		$('#box1d').css('top',(-2100+scrolled*3.8)+'px');
    	}
    	if (scrolled > 401){
    		$('#box1d').css('top',(scrolled-940)+'px');
    	}

    	//PARALLAX BOX 2a
    	if (scrolled < 350){
    		$('#box2a').css('top',(-1600+scrolled*2.8)+'px');
    	}
    	if (scrolled > 351){
    		$('#box2a').css('top',(scrolled-940)+'px');
    	}

    	//PARALLAX BOX 2b
    	if (scrolled < 450){
    		$('#box2b').css('top',(-2100+scrolled*3.57)+'px');
    	}
    	if (scrolled > 451){
    		$('#box2b').css('top',(scrolled-940)+'px');
    	}

    	//PARALLAX BOX 2c
    	if (scrolled < 450){
    		$('#box2c').css('top',(-2500+scrolled*4.4)+'px');
    	}
    	if (scrolled > 451){
    		$('#box2c').css('top',(scrolled-940)+'px');
    	}

    	//PARALLAX BOX 3a
    	if (scrolled < 350){
    		$('#box3a').css('top',(-2100+scrolled*4)+'px');
    	}
    	if (scrolled > 351){
    		$('#box3a').css('top',(scrolled-940)+'px');
    	}

    	//PARALLAX BOX 3b
    	if (scrolled < 450){
    		$('#box3b').css('top',(-2100+scrolled*3)+'px');
    	}
    	if (scrolled > 451){
    		$('#box3b').css('top',(scrolled-940)+'px');
    	}

    
}

