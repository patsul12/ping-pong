describe('pingPong', function() {
	it("returns \"ping\" for numbers divisible by 3", function() {
		expect(pingPong(6)).to.equal("ping");
	});

	it("returns \"pong\" for numbers divisible by 5", function() {
		expect(pingPong(10)).to.equal("pong");
	});

	it("returns \"pingpong\" for numbers divisible by 3 and 5", function() {
		expect(pingPong(15)).to.equal("pingpong");
	});

	it("returns input number for numbers not divisible by 3 or 5 #1", function() {
		expect(pingPong(2)).to.equal(2);
	});

	it("returns input number for numbers not divisible by 3 or 5 #2", function() {
		expect(pingPong(112)).to.equal(112);
	});
});
