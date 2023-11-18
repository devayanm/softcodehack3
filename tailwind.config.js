// tailwind.config.js
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./public/index.html"
    ],
    theme: {
        extend: {
            backgroundImage: {
                'space': 'radial-gradient(circle, #050505 0%, #1a1a1a 100%)',
            },
        },
    },
    plugins: [],
}
