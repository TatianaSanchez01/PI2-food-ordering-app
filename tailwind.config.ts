import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: { // Corrected key
                white: "#EFECEC",
                black: "#1E1E1E",
                lightBlue: "#175AB0",
                darkBlue: "#0C2D57",
                orange: "#FC6736",
                darkOrange: "#8F3E24",
                pink: "#FFB0B0",
            },
        },
    },
    plugins: [],
};
export default config;
