// jQuery(document).ready(function(){

// });

// jQuery(function ($) {
	
// });


$(document).ready(function() {
    $('#grid').click(function(){
        $('.products-list').removeClass('list-view');
        // $('.products-list').addClass('grid-view');
    });
    $('#list').click(function(){
        $('.products-list').addClass('list-view');
        $('.products-list').removeClass('grid-view');
    });
    
});
