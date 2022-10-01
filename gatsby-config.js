const path = require("path");

require("dotenv").config({
    path: `.env`,
})

const gatsbyRequiredRules = path.join(
    process.cwd(),
    "node_modules",
    "gatsby",
    "dist",
    "utils",
    "eslint-rules"
);

module.exports = {
    siteMetadata: {
        title: `Ossolinsky`,
        siteUrl: `https://www.yourdomain.tld`
    },
    plugins: [
        {
            resolve: 'gatsby-source-contentful',
            options: {
                "accessToken": process.env.API_KEY,
                "spaceId": "ad8qyjvqy4cc"
            }
        },
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        "gatsby-plugin-react-helmet",
        "gatsby-transformer-sharp",
        "gatsby-plugin-styled-components",
        {
            resolve: 'gatsby-plugin-google-analytics',
            options: {
                "trackingId": "ad8qyjvqy4cc"
            }
        },
        "gatsby-plugin-sitemap",
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                "icon": "src/assets/icons/favicon.png"
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "images",
                "path": "./src/assets/images/"
            },
            __key: "images"
        },
        {
            resolve: "gatsby-plugin-root-import",
            options: {
                assets: path.join(__dirname, "src/assets"),
                components: path.join(__dirname, "src/components"),
                templates: path.join(__dirname, "src/templates"),
                styles: path.join(__dirname, "src/styles"),
                hooks: path.join(__dirname, "src/hooks"),
                utils: path.join(__dirname, "src/utils"),
                icons: path.join(__dirname, 'src/assets/icons')
            },
        },
        {
            resolve: "gatsby-plugin-eslint",
            options: {
                rulePaths: [gatsbyRequiredRules],
                stages: ["develop"],
                extensions: ["js", "jsx"],
                exclude: ["node_modules", "bower_components", ".cache", "public"],
            },
        },
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [
                    `poppins\:400,600,700,`
                ],
                display: 'swap'
            }
        },
        {
            resolve: "gatsby-plugin-react-svg",
            options: {
                rule: {
                    include: /assets/
                }
            }
        }
    ]
};