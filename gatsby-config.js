module.exports = {
    siteMetadata: {
        siteUrl: 'https://zavod-kd.ru',
        title: 'zavod-kd',
        description: 'hello desc',
    },
    plugins: [
        {
            resolve: `gatsby-plugin-sass`,
        },
        'gatsby-plugin-image',

        {
            resolve: 'gatsby-plugin-google-analytics',
            options: {
                trackingId: 'G-YGRVFHCSQ8',
            },
        },
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sitemap',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',

        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Zavod KD`,
                short_name: `Zavod`,
                description: `The Factory for the production of first-class mufflers for cars.`,
                lang: `ru`,
                display: `standalone`,
                icon: `src/images/favicon/logo.png`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#fff`,
            },
        },

        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: './src/images/',
            },
            __key: 'images',
        },
    ],
};
