var menuTimeout = null;

function mouseMoveHandler(e) {

	if (e.pageX < 200) { // add hover condition
    	clearTimeout(menuTimeout);
    	menuTimeout = null;
    	showLMenu();

  	} else if (e.pageX > ($(window).width()-200)) {
  		clearTimeout(menuTimeout);
    	menuTimeout = null;
    	showRMenu();

  	} else if (menuTimeout === null) {
    	menuTimeout = setTimeout(hideMenu(), 30000);
  }
}

function showLMenu() {
  	/*$('#lMenu').animate({
        left: "2vw"
   	}, 1000);*/
   	$('#lMenu').fadeIn(2000);
}

function hideMenu() {
	console.log('hide');
  	/*$('#lMenu').animate({
        left: "-50vw"
  	}, 1000);

  	$('#rMenu').animate({
        left: "150vw"
  	}, 1000);*/
	$('#rMenu').fadeOut(500);
	$('#lMenu').fadeOut(500);

}	

function showRMenu() {
  	/*$('#rMenu').animate({
        left: "88vw"
   	}, 1000);*/
   	$('#rMenu').fadeIn(2000);
}

$(function() {
	$(window).on('mousemove', mouseMoveHandler);
});