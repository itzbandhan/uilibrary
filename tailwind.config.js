/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/uielemniv/dist/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                navy: {
                    50: '#f0f4f8',
                    100: '#d9e2ec',
                    200: '#bcccdc',
                    300: '#9fb3c8',
                    400: '#829ab1',
                    500: '#627d98',
                    600: '#486581',
                    700: '#334e68',
                    800: '#243b53',
                    900: '#102a43',
                },
                ink: {
                    50: '#f5f7fa',
                    100: '#e4e7eb',
                    200: '#cbd2d9',
                    300: '#9aa5b1',
                    400: '#7b8794',
                    500: '#616e7c',
                    600: '#52606d',
                    700: '#3e4c59',
                    800: '#323f4b',
                    900: '#1f2933',
                },
                yellow: {
                    400: '#FCD757', // High Voltage (Main Brand)
                    500: '#EBC340', // Deep Voltage (Hover/Active)
                    600: '#D9C52E', // Darker tone
                },
            },
            boxShadow: {
                'yellow-glow': '0 0 15px rgba(252, 215, 87, 0.4)',
                'sharp-lg': '0 10px 30px -10px rgba(0, 0, 0, 0.1)',
            }
        },
    },
    plugins: [],
}
