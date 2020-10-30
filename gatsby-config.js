// Copyright (c) 2020 Antti Kivi
// Licensed under the MIT License

const path = require("path");

module.exports = {
  siteMetadata: {
    siteUrl: "https://anttikivi.fi",
    title: "Antti Kivi",
    description: "Helsinkiläinen yrittäjä",
    author: "@anttikiwi"
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-154440462-1"
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Antti Kivi",
        short_name: "Antti Kivi",
        icon: "src/images/favicon-alternative.png",
        theme_color: "#f55e96",
        background_color: "#ffffff",
        display: "browser"
      }
    },
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [require("autoprefixer")]
      }
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: path.join(__dirname, "src", "images")
      }
    },
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: path.join(__dirname, "src", "content")
      }
    },
    "gatsby-transformer-remark"
  ]
};
