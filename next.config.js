
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['5MtGqFvuHnLCxvcnVvop3D'] // An array of project ids.
});
module.exports = withPlasmic({
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
  // Your NextJS config.
});
  