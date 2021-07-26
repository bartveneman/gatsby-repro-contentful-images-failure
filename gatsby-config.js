module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Repro gatsby img failure",
  },
  plugins: [
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
