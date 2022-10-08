/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER } = require('next/dist/shared/lib/constants')

const nextConfig = (phase) => {
    const commonConfig = {
        reactStrictMode: true,
        swcMinify: true
    }

    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            ...commonConfig,
            // 为开发环境设置环境变量
            env: {
                mongodb_username: 'catsriver',
                mongodb_password: 'zhenxi',
                mongodb_clustername: 'cluster0',
                mongodb_database: 'my-site-dev'
            }
        }
    }

    return {
        ...commonConfig,
        // 为生产环境设置环境变量
        env: {
            mongodb_username: 'catsriver',
            mongodb_password: 'zhenxi',
            mongodb_clustername: 'cluster0',
            mongodb_database: 'my-site'
        }
    }
}

module.exports = nextConfig
