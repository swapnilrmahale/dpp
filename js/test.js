var menuTimeout = null;

function mouseMoveHandler(e) {

	if (e.pageY < 50) { // add hover condition
    	clearTimeout(menuTimeout);
    	menuTimeout = null;
      $('.menu').slideDown(2000, function() {});  
      
  	} else if (menuTimeout === null) {
    	menuTimeout = setTimeout(function() {
        $('.menu').slideUp(2000, function() {});        
      }, 1000);
  }
}

$(function() {
	$(window).on('mousemove', mouseMoveHandler);
});