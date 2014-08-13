$(document).ready(function(){
	var viewport = 	$(window), contact = $('.contact_form');



	// NAVIGATION
	// 
	// 
	// added .off("click")
	// stops redundant clicks
	// $('.mobile_nav_hamburger').off("click").on('click', function(){
	// 	$('.mobile_nav').toggle();
	// });

	// $('.body, .mobile_nav_links').off("click").on('click', function(){
	// 	$('.mobile_nav').hide();
	// });
	
	

	viewport.on({
		scroll:function() {
			console.log(viewport.scrollTop());
			bdotm.checkHero();
		}
	});

	contact.on({
		submit: function(event) {
			event.preventDefault();
			console.log($(this).serialize());
		}
	})

	var bdotm = (function(){
		var hero= document.getElementById('hero');
		return {
			checkHero: function(){
				console.log(hero);
			}
		};
	})();

});
