import type { NextConfig } from "next";
import type { Configuration } from "webpack";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,

  // ✅ Turbopack GLSL support
  turbopack: {
    rules: {
      "*.glsl": { loaders: ["raw-loader", "glslify-loader"] },
      "*.vert": { loaders: ["raw-loader", "glslify-loader"] },
      "*.frag": { loaders: ["raw-loader", "glslify-loader"] },
      "*.vs": { loaders: ["raw-loader", "glslify-loader"] },
      "*.fs": { loaders: ["raw-loader", "glslify-loader"] },
    },
  },

  // ✅ Webpack fallback (important)
  webpack(config: Configuration) {
    config.module?.rules?.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      exclude: /node_modules/,
      use: ["raw-loader", "glslify-loader"],
    });

    return config;
  },

  typedRoutes: false,

  // ✅ Images (CDN included)
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "sujitkoji.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.sujitkoji.com",
        pathname: "/**",
      },
    ],
  },

  // 🔥 CORS WORKAROUND (VERY IMPORTANT)
  async rewrites() {
    return [
      {
        source: "/models/:path*",
        destination: "https://cdn.sujitkoji.com/lighthouse/:path*",
      },
    ];
  },

  // ✅ Security headers (fixed CSP)
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: `
              default-src 'self';
              connect-src 'self' https://cdn.sujitkoji.com;
              img-src 'self' https://* data:;
              media-src 'self' https://*;
              script-src 'self' 'unsafe-eval' 'unsafe-inline';
              style-src 'self' 'unsafe-inline';
              frame-ancestors 'self' https://codepen.io https://cdpn.io https://lighthouse.sujitkoji.com;
            `.replace(/\n/g, ""),
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;