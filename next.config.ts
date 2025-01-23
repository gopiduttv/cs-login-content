import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{ hostname: "cdn.sanity.io" }],
    dangerouslyAllowSVG: true,
  },
  // experimental: {
  //   reactCompiler: true,
  // },
  logging: {
    fetches: {
      fullUrl: true,
    },
    // @ts-ignore
    incomingRequests: {
      ignore: [/\api\/v1\/health/],
    }
  },
};

export default nextConfig;
