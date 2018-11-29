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
    }
  ]
};
