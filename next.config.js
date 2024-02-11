/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.themealdb.com",
        port: "",
        pathname: "/images/**",
      },
    ],
  },

  env: {
    app_name: "MEALAPP",
    base_url: "https://www.themealdb.com/api/json/v1/1",
  },
};

module.exports = nextConfig;
