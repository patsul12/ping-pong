function pingPong(num) {
	if ( num % 3 === 0 && num % 5 === 0 ) {
		return "pingpong";
	} else if ( num % 3 === 0 ) {
		return "ping";
	} else if ( num % 5 === 0 ) {
		return "pong";
	} else {
		return num;
	}
}