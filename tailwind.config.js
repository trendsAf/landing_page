/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#1456F5",
				secondary: "#EFF1FC",
				dark_grey: "#687588",
				normal_text_color: "#161616",
			},
			fontFamily: {
				heading: ["Space Grotesk"],
				body: ["Helvetica Neue"],
			},
			// backgroundImage: {
			// 	bgImage: `[url("/image_slide4.jpeg")]`
			// }
		},
	},
	plugins: [],
};
