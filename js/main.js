$(document).ready(function(){
	var viewport = 	$(window);



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

	var bdotm = (function(){
		var hero= document.getElementById('hero');
		return {
			checkHero: function(){
				console.log(hero);
			}
		};
	})();

});
