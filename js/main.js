$(document).ready(function(){
	var viewport = 	$(window), contact = $('.contact_form');


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
