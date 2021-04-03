// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const fs = require( 'fs' );
const http = require( 'http' );
const path = require( 'path' );


module.exports = function ( api ) {
  api.loadSource( ( { addCollection } ) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  } )

  // Posts
  api.createPages( async ( { graphql, createPage } ) => {
    const { data } = await graphql( `{
      allStrapiPost {
        edges {
          node {
              id
              slug
              title
              subtitle
              article
              image {
                url
                caption
              }
          }
        }
      }
    }`);

    data.allStrapiPost.edges.forEach( ( { node } ) => {
      createPage( {
        path: `/blog/${node.slug}`,
        component: './src/templates/Post.vue',
        context: {
          slug: node.slug,
          id: node.id
        }
      } );
    } );
  } );

  // Podcasts
  api.createPages( async ( { graphql, createPage } ) => {
    const { data } = await graphql( `{
      allStrapiPodcast {
        totalCount
        edges {
          node {
            id
            title
            slug
            date
            description
            spreaker_id
            cover {
              url
              width
              height
            }
            tags {
              name
            }
            episodes {
              title
              slug
            }
          }
        }
      }
    }`);

    data.allStrapiPodcast.edges.forEach( ( { node } ) => {
      createPage( {
        path: `/podcast/${node.slug}`,
        component: './src/templates/Podcast.vue',
        context: {
          slug: node.slug,
          id: node.id
        }
      } );
    } );
  } );

  // Episode
  api.createPages( async ( { graphql, createPage } ) => {
    const { data } = await graphql( `{
   allStrapiEpisode {
    edges {
      node {
        id
        slug
        title
        description
        spreaker_id
        podcast {
          id
          title
          spreaker_id
        }
        episode_number
        cover {
          name
          alternativeText
          caption
          width
          height
          url
        }
        tags {
          name
        }
        audio {
          url
          name
        }
      }
    }

  }
    }`);

    data.allStrapiEpisode.edges.forEach( ( { node } ) => {
      createPage( {
        path: `/episode/${node.slug}`,
        component: './src/templates/Episode.vue',
        context: {
          slug: node.slug,
          id: node.id
        }
      } );
    } );


  } );

  // Tag
  api.createPages( async ( { graphql, createPage } ) => {
    const { data } = await graphql( `{
        allStrapiTag {
          edges {
            node {
              name
              podcasts {
                  id
                  title
                  slug
                  spreaker_id
              }
              episodes {
                  id
                  title
                  slug
                  spreaker_id
              }
              posts {
                  id
                  title
                  slug

              }
            }
          }
        }
      }`);

    data.allStrapiTag.edges.forEach( ( { node } ) => {
      createPage( {
        path: `/tag/${node.name}`,
        component: './src/templates/Tag.vue',
        context: {
          id: node.id,
          name: node.name,
        }
      } );
    } );
  } );

  // Fetch images
  api.onCreateNode( options => {
    let image = options.image || options.cover ;
    if ( image ) {
      const filePath = `./src/assets/images/${image.hash + image.ext}`;

      http.get( `http://api.webe.radio:1337${image.url}`, ( response ) => {
        image.url = path.resolve( __dirname, filePath );

        const file = fs.createWriteStream( filePath );
        response.pipe( file );
      } );
    };
  } );
}
