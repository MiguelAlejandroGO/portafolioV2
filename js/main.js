
// Agregamos los listener de los enlaces para filtrar por categoria.
const enlaces = document.querySelectorAll('#navbarSupportedContent a');

enlaces.forEach((elemento) => {
    elemento.addEventListener('click', (evento) => {
        enlaces.forEach((enlace) => enlace.classList.remove('active'));
        evento.target.classList.add('active');


    });
});

/*	gallery */
$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            $('.filter').show('1000');
        }
        else
        {
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }

	        	if ($(".filter-button").removeClass("active")) {
			$(this).removeClass("active");
		    }
		    	$(this).addClass("active");
	    	});
});
/*	end gallery */

