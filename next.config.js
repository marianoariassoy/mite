/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "dist",
};

module.exports = nextConfig;

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.mitegaleria.com.ar",
        port: "",
        pathname: "/**",
      },
    ],
  },
};
