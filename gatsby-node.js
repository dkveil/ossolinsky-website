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
                            shortdescription{
                                shortdescription
                            }
                            slug
                            image{
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
}
