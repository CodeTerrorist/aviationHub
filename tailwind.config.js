/** @type {import('tailwindcss').Config} */
module.exports = {

    purge: ["./src/**/*.{js, jsx, ts, tsx}", "./public/index.html"],
    darkMode: false,
    theme: {
        extend:{},
        screens: {
            
            "xs": "400px",

            sm: "640px",

            md: "768px",

            lg: "1024px",

            xl: "1280px",

            "2xl": "1536px",
        },
    },

    variants:{
        extend: {},
    },

    plugins: [],
};