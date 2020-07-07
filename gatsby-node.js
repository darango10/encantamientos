const path = require('path')

exports.createPages = async({graphql,actions})=>{
  const{createPage}=actions

  const{data} = await graphql(`
    query{
      servicios: allWordpressPost(filter: {categories: {elemMatch: {name: {eq: "Servicios"}}}}) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  data.servicios.edges.forEach(({node}) =>{
    createPage({
      path:`servicio/${node.slug}`,
      component:path.resolve("./src/templates/servicioTemplate.js"),
      context:{
        slug: node.slug
      }
    })
  })
}
