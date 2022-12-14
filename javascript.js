alert('¡BIENVENIDOS A LA LANDING PAGE OFICIAL DE LA I.E GERARDO S. MEJÍA SACO! Descubra lo más importante de la institución a través de las siguientes informaciones');

$(document).ready(function(){
	var zindex = 10;
	
	$("div.card").click(function(e){
	  e.preventDefault();
  
	  var isShowing = false;
  
	  if ($(this).hasClass("show")) {
		isShowing = true
	  }
  
	  if ($("div.cards").hasClass("showing")) {
		// ya hay una tarjeta a la vista
		$("div.card.show")
		  .removeClass("show");
  
		if (isShowing) {
		  // esta tarjeta estaba mostrando - restablecer la cuadrícula
		  $("div.cards")
			.removeClass("showing");
		} else {
		  // esta tarjeta no se muestra - entre con ella
		  $(this)
			.css({zIndex: zindex})
			.addClass("show");
  
		}
  
		zindex++;
  
	  } else {
		// no cards in view
		$("div.cards")
		  .addClass("showing");
		$(this)
		  .css({zIndex:zindex})
		  .addClass("show");
  
		zindex++;
	  }
	  
	});
  });





  


  



