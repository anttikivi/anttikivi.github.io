// Copyright (c) 2021 Antti Kivi
// Licensed under the MIT License

require('dotenv').config();

const path = require('path');

const siteURL = 'https://anttikivi.fi';

module.exports = {
  siteMetadata: {
    siteURL,
    // The wrong case of the constant must be included as some plugins depend on it.
    siteUrl: siteURL,
    alternativeURLs: ['https://anttikivi.com', 'https://anttikivi-website-main.netlify.app'],
    title: 'Antti Kivi',
    description: 'Helsinkiläinen yrittäjä',
    twitterAuthor: '@anttikiwi',
    locales: ['fi', 'en-GB'],
    localePaths: { fi: '', 'en-GB': 'en' },
    simpleLocales: { fi: 'fi', 'en-GB': 'en' },
    defaultLocale: 'fi',
    defaultEmail: 'antti.kivi@visiosto.fi',
    facebookAppID: '544113829894022',
    socialMedia: {
      // facebook: 'https://facebook.com/visiosto',
      github: 'https://github.com/anttikivi',
      instagram: 'https://instagram.com/anttikiwi',
      linkedin: 'https://linkedin.com/in/anttikivi',
      twitter: 'https://twitter.com/anttikiwi',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'images'),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: path.join(__dirname, 'src', 'assets'),
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
    },
    'gatsby-transformer-json',
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || process.env.CONTENTFUL_DELIVERY_TOKEN,
      },
    },
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyDefault: 'fi',
        useLangKeyLayout: true,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Antti Kivi',
        short_name: 'Antti Kivi',
        icon: 'src/assets/favicon.png',
        theme_color: '#3f51b5',
        background_color: '#ffffff',
        display: 'browser',
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-plugin-netlify',
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-NX8V4NT',
        includeInDevelopment: true,
        routeChangeEventName: 'gatsby-route-change',
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
    },
  ],
};
