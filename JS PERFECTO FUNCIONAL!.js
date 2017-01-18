// **NO HACER COMENTARIO A NINGUNA VARIABLE!!**   (DEJAN DE FUNCIONAR LOS EFECTOS DE BOOTSTRAP  (CLASE .active EN LOS BOTONES  Y SCROLLSPY ) )
$(document).ready(function(){
	//Viewport: It is your device screen.
	//Window: It is your browser window. The window can be as big as viewport or smaller.
	//Document: It is the webpage. It can be bigger than viewport or even bigger than window. 
	//var height = $("#Menu").height();
	//$('#centro').height(screen.height - $("#Menu").height());  //"screen.height" SI FUNCIONA (type NUMERO) "height"(variable) (type STRING) NO FUNCIONA 
	//document.getElementById("demo").innerHTML = screen.height - $("#Menu").height();
	
	var HeaderOffset = $('#principales').offset().top,        //en lugar de     pageYOffset
			LogoFormOffset = $('main').offset().top,
			SobreMiOffset = $('#SobreMi').offset().top,
			ContactoOffset = $('#Contacto').offset().top;
	$(window).scroll(function(){
		// para fijar la barra de #principales
		if ($(window).scrollTop() >= HeaderOffset){
			$('#header').addClass('fixed');
		}
		else{
			$('#header').removeClass('fixed');
		}
		// para el LOGO y FORM se fijen a la barra
		if ($(window).scrollTop() >= LogoFormOffset){  //menos 64px!! (altura de la barra)   DEPENDIENDO DEL EFECTO QUE QUIERA
			$('.navbar-form').addClass('fixed');
			$('.navbar-header').addClass('fixed');
      //$('#principales').css("background-color", "MISMO PERO SIN TRASPARENCIA");
		}
		else{
			$('.navbar-form').removeClass('fixed');
			$('.navbar-header').removeClass('fixed');
			//$('#principales').css("background-color", "CON TRASPARENCIA");
		}
		// para ajustar las secciones cuando se SALTE a ellas   (OPCIONAL)
		if ($(window).scrollTop() >= SobreMiOffset && $(window).scrollTop() <= ContactoOffset){
			$('#Contacto').removeClass("ClaseOnScroll");
			$('#SobreMi').addClass("ClaseOnScroll");
		}
		else if ($(window).scrollTop() >= ContactoOffset){
			$('#SobreMi').removeClass("ClaseOnScroll");
			$('#Contacto').addClass("ClaseOnScroll");
		}
		else{
			$('#SobreMi').removeClass("ClaseOnScroll");
			$('#Contacto').removeClass("ClaseOnScroll");
		}//INSERVIBLE SI NO SE USA ".ClaseOnScroll"
	});
		
	//AFFIX      FUNCIONA PERO CONVIENE USAR LA FUNCION DE ARRIBA
	//$("#principales").affix({offset: {top: $("#principales").offset().top} });
	
	// SROLLSPY  FUNCION DE   W3.COM
  // Add scrollspy to <body>
  $('body').scrollspy({target: "#principales", offset: 0});
	// PARA REFRESH EN CASO DE AGREGAR O QUITAR ELELMENTOS (TALVEZ CAMBIO DE TAMAÑO DE LA PANTALLA)
	//$('body').each(function () {
	//	var $spy = $(this).scrollspy('refresh')
	//})

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
	
	
	
	//ACTIVE            DEBE SER RELAVIVE(li = psition:relative) PARA FUNCIONAR
	//$('.nav li').click(function(event){
//		$('.active').removeClass('active');
//		$(this).addClass('active');
//	});
	
	//$('.nav li').click(function(e) {
//		var esteElemento = $(this);
//		if (!esteElemento.hasClass('active')) {
//			esteElemento.addClass('active');
//		}
//		e.preventDefault();
//	});

});