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
    const numPages = Math.ceil(posts.length / postsPerPage)


    Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
            path: i === 0 ? `/blog` : `/blog/${i + 1}`,
            component: path.resolve("./src/templates/BlogPageTemplate.jsx"),
            context: {
                limit: postsPerPage,
                skip: i * postsPerPage,
                numPages,
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
        const numPagesWithThatCategory = Math.ceil(postsWithThatCategory.length / postsPerPage)

        Array.from({ length: numPagesWithThatCategory }).forEach((_, i) => {
            createPage({
                path: i === 0 ? `/blog/${slugify(category.node.name).toLowerCase()}` : `/blog/${slugify(category.node.name)}/${i + 1}`,
                component: path.resolve("./src/templates/BlogPageTemplate.jsx"),
                context: {
                    limit: postsPerPage,
                    skip: i * postsPerPage,
                    numPages,
                    currentPage: i + 1,
                    category: category.node.name
                }
            })
        })
    })
}
