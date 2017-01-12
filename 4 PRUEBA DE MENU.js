//var MainOffset = $('#centro').offset().top;
var HEADEROffset = $('#principales').offset().top;        //en lugar de     pageYOffset
$(window).scroll(function(){
  if ($(window).scrollTop() >= HEADEROffset){
		$('#header').addClass('fixed');
	}
  else{
		$('#header').removeClass('fixed');
	}
	//if ($(window).scrollTop() >= MainOffset){
//		$('#header').addClass('fixedMain');
//	}
//  else{
//		$('#header').removeClass('fixedMain');
//	}
});