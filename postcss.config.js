const tailwindcss = require('tailwindcss');


module.exports = {
  plugins: [
    require("tailwindcss")("./src/tailwind.config.js"),
    require("autoprefixer"),
  ],
}

// module.exports = {
//   plugins: [
//     tailwindcss('./tailwind.js'),
//     require('autoprefixer')
//   ]
// }


// module.exports = {
//   ..., plugins: [
//     require('tailwindcss')('./tailwind.js'), 
//     ...
//   ]
// }