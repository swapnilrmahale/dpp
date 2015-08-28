var menuTimeout = null;

function mouseMoveHandler(e) {

	if (e.pageY < 50) { // add hover condition
    	clearTimeout(menuTimeout);
    	menuTimeout = null;
      $('.menu').slideDown('slow', function() {});

  	} else if (menuTimeout === null) {
    	menuTimeout = setTimeout(function() {
        $('.menu').slideUp('slow', function() {});
      }, 1000);
  }
}

$(function() {
	$(window).on('mousemove', mouseMoveHandler);
});