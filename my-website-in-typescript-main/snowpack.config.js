// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    /* ... */

    // Same behavior as the "src" example above:
    src: {url: '/my-website-alex-o-kwesi'},
    // Mount "public" to the root URL path ("/*") and serve files with zero transformations:
    public: {url: './', static: true, resolve: false},
  },
  plugins: [
    /* ... */
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
