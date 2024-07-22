/** @type {import('next').NextConfig} */
import nextPWA from 'next-pwa'

const nextConfig = {
    ...nextPWA({
        dest: 'public',
        register: true,
        skipWaiting: true
    })
};

export default nextConfig;
