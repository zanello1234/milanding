/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'brand-bg': '#fdfbf7',
                'brand-surface': '#ffffff',
                'brand-accent': '#4f46e5',
                'brand-secondary': '#0ea5e9',
                'brand-warm': '#f59e0b',
                'slate-dark': '#0f172a',
            },
            fontFamily: {
                display: ['Outfit', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
