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


$(document).ready(function(){
	//AFFIX      FUNCIONA PERO NO SE APLICA POR LA REGLA DE #PRINCIPALES: position:absolute!!!!****DEBE SER RELATIVE
	$("#principales").affix({offset: {top: $("#principales").offset().top} });
	
	//ACTIVE     FUNCIONA PERO NO CON LOS PRINCIPALES     CREO QUE POR LAS REGLAS CSS ESTABLECIDAS(QUITARLAS PARA PROBAR)                     DEBE SER RELAVIVE(li = psition:relative) PARA FUNCIONAR
	//$('.nav li').click(function(event){
//		$('.active').removeClass('active');
//		$(this).addClass('active');
//	});
	
	
	// SROLLSPY  FUNCION DE   W3.COM
  // Add scrollspy to <body>
  $('body').scrollspy({target: "#principales", offset: 50});   

  // Add smooth scrolling on all links inside the navbar
  $("#principales a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }  // End if
  });
	
});