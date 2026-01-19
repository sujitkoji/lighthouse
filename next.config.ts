import type { NextConfig } from "next";
import type { Configuration } from "webpack";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,

   turbopack: {
    rules: {
      "*.glsl": { loaders: ["raw-loader", "glslify-loader"] },
      "*.vert": { loaders: ["raw-loader", "glslify-loader"] },
      "*.frag": { loaders: ["raw-loader", "glslify-loader"] },
      "*.vs": { loaders: ["raw-loader", "glslify-loader"] },
      "*.fs": { loaders: ["raw-loader", "glslify-loader"] },
    },
  },

   webpack(config: Configuration) {
    config.module?.rules?.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      exclude: /node_modules/,
      use: ["raw-loader", "glslify-loader"],
    });
    return config;
  },

  typedRoutes: false,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "sujitkoji.vercel.app",
        pathname: "/**",
      },
    ],
  },

  /* ---------- SECURITY HEADERS ---------- */
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
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
