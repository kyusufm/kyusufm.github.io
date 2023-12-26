/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }

// module.exports = nextConfig

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
  output: 'export',
}
 
module.exports = {
  // Other configurations...

  // Add the exportPathMap function to define the paths to be exported
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
      // Add other paths as needed
    };
  },

  // Optional: Customize other export settings as needed
  // For example, you can set basePath if your app is not hosted at the root of the domain
  // basePath: '/your-base-path',

  // Optional: Set trailingSlash to true if you want to include trailing slashes in the exported paths
  // trailingSlash: true,
};
