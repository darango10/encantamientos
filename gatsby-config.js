module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    {
      resolve:`gatsby-source-wordpress`,
      options:{
        excludedRoutes:[
          `/wp/v2/users/**`,
          `/wp/v2/settings*`,
          `/wp/v2/themes*`,
        ],
        baseUrl: `admin.encantamientos.com`,
        protocol: `http`,
        hostingWPCOM:false,
        searchAndReplaceContentUrls:{
          sourceUrl: `http://admin.encantamientos.com`,
          replacementUrl:``,
        }
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-tawk`,
      options: {
        tawkId: process.env.TAWK_ID,
        // get this from the tawk script widget
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
