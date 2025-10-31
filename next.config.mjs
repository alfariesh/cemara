/** @type {import('next').NextConfig} */
const nextConfig = {
    cacheComponents: true,  // Enable Cache Components (moved to root level in 16.0.1+)
    experimental: {
        optimizePackageImports: ["@untitledui/icons"],
    },
};

export default nextConfig;
