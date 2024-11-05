// Function to find the greater integer
function greaterOfTwo(x, y) {
	// mid-point
	return Math.floor((Math.abs(x - y) + (x + y)) / 2);
}

// Driver function
	let a = 20, b = -1;

	// Function Call
	console.log(greaterOfTwo(a, b));


// This code is contributed by - Dwaipayan Bandyopadhyay

 console.log ((((a+b) + ((a-b))**2)**0.5) / 2);
