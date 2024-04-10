// Define an interface for a color object with background and text colors
interface Color {
	bg: string;
	text: string;
}

// Define an object containing different color options
const colors: { [key: string]: Color } = {
	red: { bg: "#fee2e2", text: "#dc2626" },
	rose: { bg: "#ffe4e6", text: "#e11d48" },
	blue: { bg: "#dbeafe", text: "#2563eb" },
	green: { bg: "#d1fae5", text: "#059669" },
	indigo: { bg: "#e0e7ff", text: "#4f46e5" },
	cyan: { bg: "#cffafe", text: "#0891b2" },
	lime: { bg: "#ecfccb", text: "#65a30d" },
	amber: { bg: "#fef3c7", text: "#d97706" },
};

// Function to get a random color from the colors object
export const getRandomColors = (): Color => {
	// Get all keys from the colors object
	const keys = Object.keys(colors);
	// Get a random key from the keys array
	const randomKey = keys[Math.floor(Math.random() * keys.length)];
	// Return the color object corresponding to the random key
	return colors[randomKey];
};
