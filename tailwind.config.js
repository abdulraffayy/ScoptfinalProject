// module.exports = {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",  // Ensures Tailwind scans all TypeScript and JSX/TSX files
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }







module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'lg': {'max': '1269px'},
      },
    },
  },
  plugins: [],

}
