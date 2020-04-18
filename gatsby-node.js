const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    query {
      tours: allContentfulTour {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  data.tours.edges.forEach(({ node }) => {
    createPage({
      path: `excursions/${node.slug}`,
      component: path.resolve("./src/Templates/tourTemplate.js"),
      context: {
        slug: node.slug,
      },
    })
  })
}
