import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: projectRoot
  },
  async redirects() {
    return [
      {
        source: "/services/fiber-connectivity",
        destination: "/services/fiber-optics-dedicated-internet",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
