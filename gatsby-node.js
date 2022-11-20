const path = require("path")
const slugify = require("slugify")

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions

    const blogpage = await graphql(
        `
            {
                allContentfulBlog(sort: {fields: createdAt, order: DESC}){
                    edges {
                        node {
                            title
                            category {
                                name
                            }
                            shortdescription {
                                shortdescription
                            }
                            slug
                            image {
                                gatsbyImageData
                            }
                        }
                    }
                }
            }
    `
    ).then(res => res.data)

    if (blogpage.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    const posts = blogpage.allContentfulBlog.edges
    const postsPerPage = 6
    const numBlogPages = Math.ceil(posts.length / postsPerPage)


    Array.from({ length: numBlogPages > 1 ? numBlogPages : 1 }).forEach((_, i) => {
        createPage({
            path: i === 0 ? `/blog` : `/blog/${i + 1}`,
            component: path.resolve("./src/templates/BlogPageTemplate.jsx"),
            context: {
                limit: postsPerPage,
                skip: i * postsPerPage,
                numPages: numBlogPages,
                currentPage: i + 1,
            },
        })
    })

    const gallerypage = await graphql(`
        {
            allContentfulGaleria(sort: {fields: createdAt, order: DESC}){
                edges{
                    node{
                        title
                        category {
                            name
                        }
                        image {
                            gatsbyImageData
                        }
                        createdAt(formatString: "DD.MM.YYYY")
                    }
                }
            }
        }
    `).then(res => res.data)

    if (gallerypage.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    const images = gallerypage.allContentfulGaleria.edges
    const imagesPerPage = 12
    const numGalleryPages = Math.ceil(images.length / imagesPerPage)


    Array.from({ length: numGalleryPages > 1 ? numGalleryPages : 1 }).forEach((_, i) => {
        createPage({
            path: i === 0 ? `/galeria` : `/galeria/${i + 1}`,
            component: path.resolve("./src/templates/GalleryPageTemplate.jsx"),
            context: {
                limit: imagesPerPage,
                skip: i * imagesPerPage,
                numPages: numGalleryPages,
                currentPage: i + 1,
            },
        })
    })

    const blogpagewithcategory = await graphql(`
        {
            allContentfulKategorieDlaBlogaIGalerii{
                edges{
                    node{
                        name
                    }
                }
            }
        }
    `).then(res => res.data)

    if (blogpagewithcategory.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    const categories = blogpagewithcategory.allContentfulKategorieDlaBlogaIGalerii.edges;

    categories.map(category => {
        const postsWithThatCategory = blogpage.allContentfulBlog.edges.filter(post => post.node.category.name === category.node.name)
        const imagesWithThatCategory = gallerypage.allContentfulGaleria.edges.filter(image => image.node.category.name === category.node.name)
        const numBlogPagesWithThatCategory = Math.ceil(postsWithThatCategory.length / postsPerPage)
        const numGalleryPagesWithThatCategory = Math.ceil(imagesWithThatCategory.length / imagesPerPage)

        Array.from({ length: numBlogPagesWithThatCategory > 1 ? numBlogPagesWithThatCategory : 1 }).forEach((_, i) => {
            createPage({
                path: i === 0 ? `/blog/${slugify(category.node.name).toLowerCase()}` : `/blog/${slugify(category.node.name)}/${i + 1}`,
                component: path.resolve("./src/templates/BlogPageTemplate.jsx"),
                context: {
                    limit: postsPerPage,
                    skip: i * postsPerPage,
                    numPages: numBlogPagesWithThatCategory,
                    currentPage: i + 1,
                    category: category.node.name
                }
            })
        })

        Array.from({ length: numGalleryPagesWithThatCategory > 1 ? numGalleryPagesWithThatCategoryy : 1 }).forEach((_, i) => {
            createPage({
                path: i === 0 ? `/galeria/${slugify(category.node.name).toLowerCase()}` : `/galeria/${slugify(category.node.name)}/${i + 1}`,
                component: path.resolve("./src/templates/GalleryPageTemplate.jsx"),
                context: {
                    limit: imagesPerPage,
                    skip: i * imagesPerPage,
                    numPages: numGalleryPagesWithThatCategory,
                    currentPage: i + 1,
                    category: category.node.name
                }
            })
        })
    })

    const offerpages = await graphql(`
        {
            allContentfulOferty{
                edges{
                    node{
                        title
                        description {
                            description
                        }
                        image {
                            gatsbyImageData
                        }
                        moreInformations {
                            raw
                        }
                        secondimage {
                            gatsbyImageData
                        }
                        aboutdrinks {
                            aboutdrinks
                        }
                        drinks {
                            name
                            description {
                                description
                            }
                            image {
                                gatsbyImageData
                            }
                        }
                        iscontact
                        slug
                    }
                }
            }
            phonenumber: contentfulDaneKontaktowe(contactid: { eq: "Numer telefonu" }) {
                content
            }
            email: contentfulDaneKontaktowe(contactid: { eq: "Adres e-mail" }) {
                content
            }
        }
    `).then(res => res.data)

    if (offerpages.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    const offers = offerpages.allContentfulOferty.edges;
    const phonenumber = offerpages.phonenumber.content
    const email = offerpages.email.content

    offers.map(offer => {
        if (!offer.node.iscontact) {
            createPage({
                path: `/oferta/${offer.node.slug}`,
                component: path.resolve("./src/templates/OfferPageTemplate.jsx"),
                context: {
                    title: offer.node.title,
                    description: offer.node.description.description,
                    image: offer.node.image.gatsbyImageData,
                    moreInformations: offer.node.moreInformations,
                    secondimage: offer.node.secondimage.gatsbyImageData,
                    aboutdrinks: offer.node.aboutdrinks.aboutdrinks,
                    drinks: offer.node.drinks,
                    phonenumber,
                    email
                }
            })
        }
    })

    const articlepages = await graphql(`
        {
            allContentfulBlog(sort: {fields: createdAt, order: DESC}){
                edges{
                    node{
                        title
                        category {
                            name
                        }
                        articlecontent {
                            raw
                            references {
                                ... on ContentfulAsset {
                                    contentful_id
                                    title
                                    gatsbyImageData
                                    __typename
                                }
                            }
                        }
                        image{
                            gatsbyImageData
                        }
                        slug
                        gallery{
                            gatsbyImageData
                        }
                        createdAt
                    }
                }
            }
        }
    `).then(res => res.data)

    if (articlepages.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    const articles = articlepages.allContentfulBlog.edges

    articles.map(article => {
        createPage({
            path: `/blog/${article.node.slug}`,
            component: path.resolve("./src/templates/ArticlePageTemplate.jsx"),
            context: {
                title: article.node.title,
                date: article.node.createdAt,
                category: article.node.category.name,
                articlecontent: article.node.articlecontent,
                image: article.node.image.gatsbyImageData,
                gallery: article.node.gallery,
                otherarticles: blogpage.allContentfulBlog.edges.filter(currentArticle => currentArticle.node.title !== article.node.title).slice(0, 3)
            }
        })
    })

}
