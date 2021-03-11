module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.ejs$/,
      use: {
        loader: 'ejs-compiled-loader',
        options: {
          htmlmin: false,
        },
      },
    });

    return config;
  },
};
