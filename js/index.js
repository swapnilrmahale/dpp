function moveToCorner(elem) {
	
}

$(function() {
	$('.choose').each(function() {
		$(this).bind({
      		click : function() {
      			/*$('.choose').each(function() {
      				$(this).hide();
      			});*/
      			console.log('showing');
      			$('section.li').show();
      		}
    	});
	});

});