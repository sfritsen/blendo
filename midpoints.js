var color1 = '#ff0000';
var color2 = '#00ff00';
var midpointColors = findMidpointColors(color1, color2);
console.log(midpointColors); // Outputs an array of up to 10 midpoint colors between red and green

function findMidpointColors(color1, color2) {
	var steps = 10; // number of steps to blend
	var stepSize = 1 / steps; // size of each step

	// Convert the hex color strings to RGB values
	var rgb1 = hexToRgb(color1);
	var rgb2 = hexToRgb(color2);

	// Calculate the step size for each color component
	var rStep = (rgb2.r - rgb1.r) * stepSize;
	var gStep = (rgb2.g - rgb1.g) * stepSize;
	var bStep = (rgb2.b - rgb1.b) * stepSize;

	// Create an array to store the midpoint colors
	var colors = [];

	// Loop through the steps and find the midpoint colors
	for (var i = 1; i <= steps; i++) {
		var r = Math.round(rgb1.r + rStep * i);
		var g = Math.round(rgb1.g + gStep * i);
		var b = Math.round(rgb1.b + bStep * i);
		colors.push(rgbToHex(r, g, b));
	}

	// Return the array of midpoint colors
	return colors;
}

// Helper function to convert hex color strings to RGB values
function hexToRgb(hex) {
	var r = parseInt(hex.slice(1, 3), 16);
	var g = parseInt(hex.slice(3, 5), 16);
	var b = parseInt(hex.slice(5, 7), 16);
	return { r: r, g: g, b: b };
}

// Helper function to convert RGB values to hex color strings
function rgbToHex(r, g, b) {
	var hex = '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
	return hex;
}
