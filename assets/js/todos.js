// Remember to use on() instead of click()
// To take into account future values

// Check off specific todos by clicking
// must use on() on elements that exist when code is ran first <ul>
$("ul").on("click", "li", function(){
	console.log("clicked cross out")
	$(this).toggleClass("completed");
});

// Click on X to delete Todo
$("ul").on("click", "span", function(event){
	console.log("clicked delete")
	// remove <li> that contains it by (parent)
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	// stops check-off from calling
	event.stopPropagation();
});

// Add listener to text input
$("input[type='text']").keypress(function(){
	// enter on input (char code === 13)
	if (event.which === 13){
		// grabbing new todo text from input
		var todoText = $(this).val();
		// clear out input
		$(this).val("");
		// create a new li and add to ul
		$("ul").append("<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li>");
	}
});

// Drop down for input on plus
$(".fa-plus").on("click", function(){
	$("input[type='text']").fadeToggle();
});