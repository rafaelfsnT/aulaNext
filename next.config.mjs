/** @type {import('next').NextConfig} */
    const nextConfig = {
        compiler: {
            styledComponents: true
        },
        images: {
            remotePatterns: [
                {
                    protocol: 'https',
                    hostname: 'raw.githubusercontent.com',
                    port: '',
                    pathname: '/profchines/**',
                },
            ],
        },
    };


export default nextConfig;
