$(document).ready(function() {
	$("button#submit").click(function() {
		$("ul#output").empty();
		$number = $("input:text").val();
		$output = pingPong($number)
		$("ul#output").prepend($output);
	});
});

function pingPong(num) {
	output = "";
	if ( isNaN(output) ) {
		output += "<li>please enter a valid number.</li>";
		return output;
	}
	for( i=0; i<=num; i++) {
		output += "<li>" + i + "</li>";
	}
	return output;
}