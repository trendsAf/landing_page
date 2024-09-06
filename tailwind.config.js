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
			keyframes: {
				animateBG: {
					"0%": { backgroundImage: 'url("/image_slide2.png")' },
					"50%": { backgroundImage: 'url("/image_slide4.png")' },
					"100%": { backgroundImage: 'url("/image_slide1.png")' },
				},
			},
			animation: {
				animateBG: "animateBG 20s ease-in-out infinite alternate-reverse",
			},
		},
	},
	plugins: [],
};
