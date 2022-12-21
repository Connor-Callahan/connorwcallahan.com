module.exports = {
  plugins: [
  {
    resolve: "gatsby-plugin-datadog-rum",
    options: {
      applicationId: 'b4107279-44bd-4fce-95cb-9f53510a191a',
      clientToken: 'pubcad8fc7ed25a1d7183d8bff696c82e49',
      site: 'datadoghq.com',
      sampleRate: 100,
      enabled: !IS_DEV,
    }
  }
],
  siteMetadata: {
    title: `Connor Callahan`,
    description: ``,
    author: `Connor Callahan`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-transition-link`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['DM Sans', 'sans-serif']
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
