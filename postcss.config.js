module.exports = {
  plugins: [
    "postcss-import",
    "tailwindcss/nesting",
    "tailwindcss",
    "autoprefixer",
    [
      "postcss-preset-env",
      {
        features: {
          "nesting-rules": false,
        },
      },
    ],
    [
      "cssnano",
      process.env.NODE_ENV === "production"
        ? {
            preset: ["advanced", { discardComments: { removeAll: true } }],
          }
        : false,
    ],
    ["postcss-discard-comments", process.env.NODE_ENV === "production" ? { removeAll: true } : false],
  ],
};
