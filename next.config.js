/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      "https://mdadul-blog.vercel.app/**/*",
      "https://avatars.githubusercontent.com/**/*",
    ],
  },
};

module.exports = nextConfig;
