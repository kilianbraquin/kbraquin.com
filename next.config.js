module.exports = {
  sassOptions: {
    prependData: `@use 'styles/abstracts' as *;`,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
