/**
 * This file only setts the sidebar menu.
 * In fact, it calls the jquery function 
 * that initializes it, and then, a button
 * to control its visibility.
 * 
 */
$(function(){
	$('.button-collapse').sideNav({
		 closeOnClick: true
	});
});