/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx}'],
    darkMode: 'class',
    mode: 'jit',
    theme: {
        extend: {
            colors: {
                primary: 'rgb(var(--color-primary) / <alpha-value>)',
                secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
                tertiary: 'rgb(var(--color-tertiary) / <alpha-value>)',
                'black-100': 'rgb(var(--color-surface) / <alpha-value>)',
                'black-200': 'rgb(var(--color-surface-alt) / <alpha-value>)',
                'white-100': 'rgb(var(--color-white-100) / <alpha-value>)',
                accent: 'rgb(var(--color-accent) / <alpha-value>)',
                'text-primary': 'rgb(var(--color-text-primary) / <alpha-value>)',
                'text-secondary': 'rgb(var(--color-text-secondary) / <alpha-value>)',
            },
            boxShadow: {
                card: '0px 35px 120px -15px var(--shadow-card)',
            },
            screens: {
                xs: '450px',
            },
            backgroundImage: {
                'hero-pattern': 'var(--hero-bg)',
            },
        },
    },
    plugins: [],
}
