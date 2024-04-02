/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
        extend: {},
    },
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
        "./src/components/**/*.{vue,js,ts,scss}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
    ],
    media: false, // or 'media' or 'class'
    variants: {
        extend: {},
    },
    plugins: [],
};