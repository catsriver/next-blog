/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    env: {
        mongodb_username: 'catsriver',
        mongodb_password: 'zhenxi',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'my-site'
    }
}

module.exports = nextConfig
