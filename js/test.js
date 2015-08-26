var menuTimeout = null;

function mouseMoveHandler(e) {

	if (e.pageX < 100 || $('#lMenu').is(':hover')) { // add hover condition
    	clearTimeout(menuTimeout);
    	menuTimeout = null;
    	showLMenu();

  	} else if (e.pageX > ($(window).width()-100) || $('#rMenu').is(':hover')) {
  		clearTimeout(menuTimeout);
    	menuTimeout = null;
    	showRMenu();

  	} else if (menuTimeout === null) {
    	menuTimeout = setTimeout(hideMenu(), 1000);
  }
}

function showLMenu() {
  	$('#lMenu').animate({
        left: "2vw"
   	}, 1000);
}

function hideMenu() {
  	$('#lMenu').animate({
        left: "-20vw"
  	}, 1000);
  	$('#rMenu').animate({
        left: "120vw"
  	}, 1000);
}

function showRMenu() {
  	$('#rMenu').animate({
        left: "88vw"
   	}, 1000);
}

$(function() {
	$(window).on('mousemove', mouseMoveHandler);
});