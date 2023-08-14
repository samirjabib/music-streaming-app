/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ["image/avif", "image/webp",],
        remotePatterns: [
            {
                protocol: "https",
                hostname: 'png.pngtree.com'
            },
            {
                protocol: "https",
                hostname: 'wjemvbpdtqrrsukugbrd.supabase.co'
            }
        ],
    }
}

module.exports = nextConfig