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
    Podcast: '/:title',
    Episode: '/:podcast_title/:title',
    Tag: '/tag/:id'
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
      // Create podcasts from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Episode',
        path: 'content/episodes/*.md',
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: 'Tag',
            create: true
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
