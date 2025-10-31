/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        cacheComponents: true,  // Enable Cache Components (Next.js 16.0.x stable)
        optimizePackageImports: ["@untitledui/icons"],
    },
};

export default nextConfig;
