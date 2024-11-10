import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens:{
        xs: "320px",
        sm:"375px",
        xsm:"425px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1440px",
      },
      colors:{
        bodyColor:"hsl(300, 100%, 2%)",
        sectionColor:"hsl(300, 100%, 5%)",
        cardColor:"hsl(300, 100%, 10%)",
        titleColor:"hsl(300, 100%, 23%)",
        textColor:"hsl(0, 0%, 2%)",
      }
      
    },
    fontFamily:{
      Jost:["Jost" , "sans-serif"],
      DancingScript:[
        "Dancing Script", "cursive"
      ]
    },
    container:{
      center: true,
      padding:{
        DEFAULT:"12px",
        md:"32px",
      }
  }
},
  plugins: [],
};
export default config;
