module.exports = {
  siteMetadata: {
    title: "XIAFLEX AAHS Registration and Thank You Landing Page",
  },
  pathPrefix: `/speakerprogramsurvey`,
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-plugin-sass",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#ff9900",
        theme_color: "#ff9900",
        display: "minimal-ui",
        icon: "src/images/xiaflex-icon.png", // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "xxxxx",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    "gatsby-plugin-offline",
  ],
};
