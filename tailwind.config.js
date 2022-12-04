/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './layouts/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            typography: () => ({
                DEFAULT: {
                    css: {
                        pre: false,
                        code: false,
                        'code::before': false,
                        'code::after': false,
                    },
                },
            }),
            width: {
                0.5: '0.125rem',
            },
            borderWidth: {
                1: '1.5px',
            },
        },
    },

    plugins: [require('@tailwindcss/typography')],
}
