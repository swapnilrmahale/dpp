var menuTimeout = null;

function mouseMoveHandler(e) {

	if (e.pageY < 50) { // add hover condition
    	clearTimeout(menuTimeout);
    	menuTimeout = null;
      $('.header').slideUp('slow', function() {
        $('.menu').slideDown('900', function() {});  
      });
      
  	} else if (menuTimeout === null) {
    	menuTimeout = setTimeout(function() {
        $('.menu').slideUp('', function() {
          $('.header').slideDown('900', function() {});
        });        
      }, 1000);
  }
}

$(function() {
	$(window).on('mousemove', mouseMoveHandler);
});