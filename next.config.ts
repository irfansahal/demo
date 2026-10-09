import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/222e/live/b70c05a0-c132-11f1-ab53-7f9d9522c457.jpg.webp
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ichef.bbci.co.uk',
        port: '',
        pathname: '**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
