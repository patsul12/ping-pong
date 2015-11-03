$(document).ready(function() {
	$("button#submit").click(function() {
		$("ul#output").empty();
		$number = $("input:text").val();
		$output = "";
		if ( isNaN($number) ) {
			$output += "<li>please enter a valid number.</li>";
		}
		for (i=1; i<=$number; i++) {
			$output += "<li>" + pingPong(i) + "</li>";
		}
		$("ul#output").prepend($output);
	});
});

function pingPong(num) {
	if ( num % 15 === 0 ) {
		return "pingpong";
	} else if ( num % 3 === 0 ) {
		return "ping";
	} else if ( num % 5 === 0 ) {
			return "pong";;
	} else {
		return num;
	}
}