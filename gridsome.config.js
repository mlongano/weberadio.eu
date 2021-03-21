// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const tailwind = require( 'tailwindcss' )
const purgecss = require( '@fullhuman/postcss-purgecss' )

const postcssPlugins = [
  tailwind(),
]

if ( process.env.NODE_ENV === 'production' ) postcssPlugins.push( purgecss( require( './purgecss.config.js' ) ) )

module.exports = {
  siteName: 'Webe Radio',
  templates: {
    Podcast: '/podcast/:title',
    Episode: '/episode/:title',
    Post: '/post/:title',
    Tag: '/tag/:id'
  },
  icon: {
    favicon: './src/favicon.png',
    touchicon: './src/touchicon.png'
  },
  plugins: [
    {
      // Create podcasts from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Podcast',
        path: 'content/podcasts/*.md',
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: 'Tag',
            create: true
          }
        }
      }
    },
    {
      // Create episodes for podcasts from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Episode',
        path: 'content/episodes/*.md',
        refs: {
          podcast: 'Podcast',
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: 'Tag',
          }
        }
      }
    },
    {
      // Create posts from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'content/posts/*.md',
        remark: {
          plugins: [
            [ 'gridsome-plugin-remark-youtube' ]
          ]
        },
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: 'Tag',
          }
        }
      }
    },

  ],
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
    },
  },
}
