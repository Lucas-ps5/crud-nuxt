/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "srcDir/components/**/*.{vue,js,jsx,mjs,ts,tsx}",
    "srcDir/layouts/**/*.{vue,js,jsx,mjs,ts,tsx}",
    "srcDir/pages/**/*.{vue,js,jsx,mjs,ts,tsx}",
    "srcDir/plugins/**/*.{js,ts,mjs}",
    "srcDir/composables/**/*.{js,ts,mjs}",
    "srcDir/plugins/**/*.{js,ts,mjs}",
    "srcDir/{A,a}pp.{vue,js,jsx,mjs,ts,tsx}",
    "srcDir/{E,e}rror.{vue,js,jsx,mjs,ts,tsx}",
    "srcDir/app.config.{js,ts,mjs}",
    "srcDir/app/spa-loading-template.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

