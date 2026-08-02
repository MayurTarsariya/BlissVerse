import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Product photos in data/products.json may point at Amazon's image CDN.
    // Local paths under /public need no entry here.
    remotePatterns: [
      { protocol: "https", hostname: "m.media-amazon.com" },
      { protocol: "https", hostname: "images-na.ssl-images-amazon.com" },
    ],
  },

  // Earlier QR URL shapes keep working; /p/<asin> is canonical.
  async redirects() {
    return ["product", "products", "item"].map((prefix) => ({
      source: `/${prefix}/:asin`,
      destination: "/p/:asin",
      permanent: false,
    }));
  },
};

export default nextConfig;
