module.exports = {
    pathPrefix: '/amp-landing',
    siteMetadata: {
        title: `Binary.com`,
        description: `Trade binary options with us and get access to over 100 financial instruments and assets across multiple markets worldwide including Forex, indices, and commodities. Create your Binary.com account now!`,
        author: `@gatsbyjs`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets`,
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
                background_color: `#0e0e0e`,
                theme_color: `#ff444f`,
                display: `minimal-ui`,
                icon: `src/assets/images/favicon.png`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: `gatsby-plugin-prefetch-google-fonts`,
                options: {
                    fonts: [
                        {
                            family: `Roboto`,
                            variants: [`300`, `400`, `700`]
                        },
                    ],
                },
          },
        {
            resolve: `gatsby-plugin-amp`,
            options: {
                analytics: {
                    type: 'gtag',
                    dataCredentials: 'include',
                    config: {
                        vars: {
                            gtag_id: 'UA-139927388-1',
                            config: {
                                'UA-139927388-1': {
                                    page_location: '{{pathname}}',
                                },
                            },
                        },
                    },
                },
                canonicalBaseUrl: 'https://amp.binary.com/',
                components: [
                    'amp-carousel',
                    'amp-sidebar',
                    'amp-animation',
                    'amp-position-observer',
                ],
                pathIdentifier: '/',
                relAmpHtmlPattern: '{{canonicalBaseUrl}}{{pathname}}{{pathIdentifier}}',
                useAmpClientIdApi: true,
            },
        },
        'gatsby-plugin-styled-components',
        `gatsby-plugin-offline`,
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
