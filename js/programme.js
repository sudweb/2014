
$(document).ready(function() {

		$('.section-content button').click(function(e){
			var bouton = $(this);
		    var indice = bouton.attr("id");
			indice = indice.charAt(indice.length-1);
			var programme = $('#programme-'+indice);
			console.log(indice);
			console.log(programme);

			if(programme.hasClass('active')){
				programme.siblings('.content-programme').hide();
				programme.siblings('.content-programme').toggleClass('active');
				
			}
			else {
				console.log('toto');
				programme.toggle();
				programme.toggleClass('active');
				programme.siblings('.content-programme').hide();
				programme.siblings().removeClass('active');
			}
			
			e.preventDefault();
		});


});

