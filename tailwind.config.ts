import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}", // ต้องมีบรรทัดนี้!
    ],
    theme: {
        extend: {
            colors: {
                primary: "#135bec",
            },
        },
    },
    plugins: [],
};
export default config;