module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
primary:{
  base:'hsl(203,89%,53%)',
  dark:'hsl(203,89%,46%)',
  light:'hsl(203,89%,93%)',
},
gray:{
  lightest:'#F5F8FA',
  dark:'#657786',
  light:'#AABBC2',
  extraLight:'#E1E8ED',

}
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}