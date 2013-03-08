
$(document).ready(function() {

		$('.pageProgramme button').click(function(e){
			var bouton = $(this);
		    var indice = bouton.attr("id");
			indice = indice.charAt(indice.length-1);
			var programme = $('#programme-'+indice);

			if(programme.hasClass('active')){
				programme.siblings('.content-programme').hide();
				programme.siblings('.content-programme').toggleClass('active');
				
			}
			else {
				programme.toggle();
				programme.toggleClass('active');
				programme.siblings('.content-programme').hide();
				programme.siblings().removeClass('active');
			}
			
			e.preventDefault();
		});


});

