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
    	if (scrolled < 400){
    		$('#box1a').css('top',(-1000+scrolled*2)+'px');
    	}
    	if (scrolled > 401){
    		$('#box1a').css('top',(scrolled-535)+'px');
    	}


    	//PARALLAX BOX 1b
    	if (scrolled < 250){
    		$('#box1b').css('top',(-800+scrolled*2.5)+'px');
    	}
    	if (scrolled > 251){
    		$('#box1b').css('top',(scrolled-535)+'px');
    	}

    	//PARALLAX BOX 1c
    	if (scrolled < 300){
    		$('#box1c').css('top',(-500+scrolled*1.5)+'px');
    	}
    	if (scrolled > 301){
    		$('#box1c').css('top',(scrolled-535)+'px');
    	}

    	//PARALLAX BOX 1d
    	if (scrolled < 350){
    		$('#box1d').css('top',(-1000+scrolled*2.5)+'px');
    	}
    	if (scrolled > 351){
    		$('#box1d').css('top',(scrolled-535)+'px');
    	}

    	//PARALLAX BOX 2a
    	if (scrolled < 300){
    		$('#box2a').css('top',(-500+scrolled*1.5)+'px');
    	}
    	if (scrolled > 301){
    		$('#box2a').css('top',(scrolled-535)+'px');
    	}

    	//PARALLAX BOX 2b
    	if (scrolled < 400){
    		$('#box2b').css('top',(-1000+scrolled*2)+'px');
    	}
    	if (scrolled > 401){
    		$('#box2b').css('top',(scrolled-535)+'px');
    	}

    	//PARALLAX BOX 2c
    	if (scrolled < 400){
    		$('#box2c').css('top',(-1000+scrolled*1.5)+'px');
    	}
    	if (scrolled > 401){
    		$('#box2c').css('top',(scrolled-535)+'px');
    	}

    	//PARALLAX BOX 3a
    	if (scrolled < 300){
    		$('#box3a').css('top',(-500+scrolled*2)+'px');
    	}
    	if (scrolled > 301){
    		$('#box3a').css('top',(scrolled-535)+'px');
    	}

    	//PARALLAX BOX 3b
    	if (scrolled < 400){
    		$('#box3b').css('top',(-1000+scrolled*2)+'px');
    	}
    	if (scrolled > 401){
    		$('#box3b').css('top',(scrolled-535)+'px');
    	}

    
}

