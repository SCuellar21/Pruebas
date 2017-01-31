// **NO HACER COMENTARIO A NINGUNA VARIABLE!!**   (DEJAN DE FUNCIONAR LOS EFECTOS DE BOOTSTRAP  (CLASE .active EN LOS BOTONES  Y SCROLLSPY ) )
$(document).ready(function(){
	//$(window).resize(function(){          //PARA REFRESH DE LA PAGINA Y QUE SE APLIQUEN BIEN LOS ESTILOS
	//	location.reload();
	//});//$('.principales2 a').onclick(document.location.reload());
	
	//Viewport/Screen: It is your device screen.
	//Window: It is your browser window. The window can be as big as viewport or smaller.
	//Document: It is the webpage. It can be bigger than viewport or even bigger than window. 
	//var height = $(".menu").height();
	//$('.centro').height(screen.height - $(".menu").height());  //"screen.height" SI FUNCIONA (type NUMERO) "height"(variable) (type STRING) NO FUNCIONA 
	//document.getElementById("demo").innerHTML = screen.height - $(".menu").height();
	
	if ($(window).width() <= 767) { //PHONE
  	$(".navbar").addClass("navbar-fixed-top");
		
		var PrincipalesOffset = $('.principales2').offset().top;        //en lugar de     pageYOffset
		$(window).scroll(function(){
			if ($(window).scrollTop() >= PrincipalesOffset){
				$('.header').addClass('fixed');
			}
			else{
				$('.header').removeClass('fixed');
			}
		});
		
		//AFFIX      FUNCIONA PERO CONVIENE USAR LA FUNCION DE ARRIBA
		//$(".principales").affix({offset: {top: $(".principales").offset().top} });

		//ACTIVE     FUNCIONA PERO NO CON LOS PRINCIPALES     CREO QUE POR LAS REGLAS CSS ESTABLECIDAS(QUITARLAS PARA PROBAR)                     DEBE SER RELAVIVE(li = psition:relative) PARA FUNCIONAR
		//$('.nav li').click(function(event){
	//		$('.active').removeClass('active');
	//		$(this).addClass('active');
	//	});

		//$('.nav li').click(function(e) {
	//		var $this = $(this);
	//		if (!$this.hasClass('active')) {
	//			$this.addClass('active');
	//		}
	//		e.preventDefault();
	//	});


		// SROLLSPY  FUNCION DE   W3.COM
		// Add scrollspy to <body>
		$('body').scrollspy({target: ".principales2", offset: 0});
		// PARA REFRESH EN CASO DE AGREGAR O QUITAR ELELMENTOS (TALVEZ CAMBIO DE TAMAÑO DE LA PANTALLA)
		//$('body').each(function () {
		//	var $spy = $(this).scrollspy('refresh')
		//})

		// Add smooth scrolling on all links inside the navbar
		$(".principales2 a").on('click', function(event) {
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
	}
	//else if ($(window).width() > 767 && $(window).width() <= 991) { //TABLET
//		
//	}
//	else if ($(window).width() > 991 && $(window).width() <= 1199) { //DESKTOP SM
//		
//	}
	else {
		var PrincipalesOffset = $('.principales').offset().top,        //en lugar de     pageYOffset
				MainOffset = $('main').offset().top,
				SobreMiOffset = $('#SobreMi').offset().top,
				ContactoOffset = $('#Contacto').offset().top;
		$(window).scroll(function(){
			// para fijar la barra de .principales
			if ($(window).scrollTop() >= PrincipalesOffset){
				$('.header').addClass('fixed');
			}
			else{
				$('.header').removeClass('fixed');
			}
			// para el LOGO y FORM se fijen a la barra
			if ($(window).scrollTop() >= MainOffset){  //menos 64px!! (altura de la barra)   DEPENDIENDO DEL EFECTO QUE QUIERA
				$('.navbar-form').addClass('fixed');
				$('.navbar-header').addClass('fixed');
				//$('.principales').css("background-color", "MISMO PERO SIN TRASPARENCIA");
			}
			else{
				$('.navbar-form').removeClass('fixed');
				$('.navbar-header').removeClass('fixed');
				//$('.principales').css("background-color", "CON TRASPARENCIA");
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
		//$(".principales").affix({offset: {top: $(".principales").offset().top} });

		//ACTIVE     FUNCIONA PERO NO CON LOS PRINCIPALES     CREO QUE POR LAS REGLAS CSS ESTABLECIDAS(QUITARLAS PARA PROBAR)                     DEBE SER RELAVIVE(li = psition:relative) PARA FUNCIONAR
		//$('.nav li').click(function(event){
	//		$('.active').removeClass('active');
	//		$(this).addClass('active');
	//	});

		//$('.nav li').click(function(e) {
	//		var $this = $(this);
	//		if (!$this.hasClass('active')) {
	//			$this.addClass('active');
	//		}
	//		e.preventDefault();
	//	});


		// SROLLSPY  FUNCION DE   W3.COM
		// Add scrollspy to <body>
		$('body').scrollspy({target: ".principales", offset: 0});
		// PARA REFRESH EN CASO DE AGREGAR O QUITAR ELELMENTOS (TALVEZ CAMBIO DE TAMAÑO DE LA PANTALLA)
		//$('body').each(function () {
		//	var $spy = $(this).scrollspy('refresh')
		//})

		// Add smooth scrolling on all links inside the navbar
		$(".principales a").on('click', function(event) {
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
	}
	
	
});