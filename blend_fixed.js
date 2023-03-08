function blendColors(color1, color2) {
	var steps = 10; // number of steps to blend
	var stepSize = 1 / steps; // size of each step

	// Convert the hex color strings to RGB values
	var rgb1 = hexToRgb(color1);
	var rgb2 = hexToRgb(color2);

	// Create an array to store the blended colors
	var colors = [];

	// Loop through the steps and blend the colors
	for (var i = 0; i <= steps; i++) {
		var r = Math.round(rgb1.r * (1 - i * stepSize) + rgb2.r * (i * stepSize));
		var g = Math.round(rgb1.g * (1 - i * stepSize) + rgb2.g * (i * stepSize));
		var b = Math.round(rgb1.b * (1 - i * stepSize) + rgb2.b * (i * stepSize));
		colors.push(rgbToHex(r, g, b));
	}

	// Return the array of blended colors
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
