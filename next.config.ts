import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   allowedDevOrigins: ['192.168.100.6'],
  images:{
    remotePatterns:[
      {

        protocol:"https",
        hostname:"images.pexels.com",
        
      },
      {

        protocol:"https",
        hostname:"blanckaeg.com",
        
      }
    ]
  }
};

export default nextConfig;
