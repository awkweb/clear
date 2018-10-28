module.exports = {
  siteMetadata: {
    title: 'Clear',
  },
  plugins: [
    `gatsby-plugin-sass`,
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Clear',
        short_name: 'Clear',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#000',
        display: 'minimal-ui',
        icon: 'src/assets/images/gatsby-icon.png',
      },
    },
    'gatsby-plugin-offline',
  ],
}
