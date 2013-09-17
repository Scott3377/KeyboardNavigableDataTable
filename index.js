$(function(){

	/* ################### Templating Tables ################### */
	// Table striping helper (http://www.arlocarreon.com/blog/javascript/handlebars-js-everyother-helper/)
	Handlebars.registerHelper("everyOther", function (index, amount, scope) {
	    if ( ++index % amount ) 
	        return scope.inverse(this);
	    else 
	        return scope.fn(this);
	});

	// Handlebars template compilation
	var source  = $('#user-row-template').html();
	var template = Handlebars.compile(source);

	var context = $.getJSON("users.json", function(data){
		$('#usersTable tbody').html(template(data));
	});

	/* ######################################################### */



	/* ################### Keyboard Navigation Capture ################### */

	// Character code constants
	var ENTER_KEY = 13,
		UP_KEY = 38,
		DOWN_KEY = 40;
		
	// Handle keydown events
	$('body').on('keydown', function(e) {
		e.preventDefault();

		// get/cache selected row
		var selected = $('tr.selected-row');
		
		if (selected.size() > 0){
			if (e.which == ENTER_KEY){
				// Redirect to User#{id}
				window.location.href = 'Users.html#' + selected.find('.id-col').text();
			} else if (e.which == UP_KEY){	
					// Check if currently selected is not first child; change to selected
					if (!selected.is(':first-child')){
						selected.prev().addClass('selected-row');
						selected.removeClass('selected-row');
					}
			} else if (e.which == DOWN_KEY){
					// Check if currently selected is not last child; change to selected
					if (!selected.is(':last-child')){
						selected.next().addClass('selected-row');
						selected.removeClass('selected-row');
					}
			}

			/* ############ Keep scroll row in view ################### */

			// Convert to plain DOM object (instead of jQuery)
			selected = $('tr.selected-row')[0];
			
			// Get offset in current viewport
			var viewportOffset = selected.getBoundingClientRect().top;

			// Distance of selected item from viewport bounds
			var rowHeight = selected.offsetHeight;

			if (e.which == DOWN_KEY && viewportOffset >= (window.innerHeight - rowHeight)){
				selected.scrollIntoView(false);
			} else if (e.which == UP_KEY && viewportOffset <= rowHeight){
				selected.scrollIntoView(true);
			}

			/* ################################################## */
		}
	});
	

	/* ################################################################# */


	/* ############# Handle Row Click Events ############### */
	
	// Event Delegation required due to dynamically template-generated rows
	$('tbody').on('click', 'tr', function(){
		// reset selected row styles
		$('tr.selected-row').removeClass('selected-row');
		$(this).addClass('selected-row');
	});
	
	/* ################################################## */

});