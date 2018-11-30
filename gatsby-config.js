module.exports = {
  pathPrefix: `/exre-site`,
  siteMetadata: {
    title: `Exam Resources`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    },
    {
      resolve: "gatsby-plugin-copy-files",
      options: {
        source: `${__dirname}/src/pages/books`,
        destination: "/pdf"
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "EXRE",
        short_name: "EXRE",
        icons: [
          {
            src: "favicons/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "favicons/android-chrome-384x384.png",
            sizes: "384x384",
            type: "image/png"
          }
        ],
        theme_color: "#1a263d",
        background_color: "#1a263d",
        start_url: "https://181192.github.io/exre-site/",
        display: "standalone"
      }
    },
    `gatsby-plugin-offline`
  ]
};
