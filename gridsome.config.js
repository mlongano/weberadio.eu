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
  siteDescription: 'La scuola che si ascolta',
  templates: {
  },
  icon: {
    favicon: './src/favicon.png',
    touchicon: './src/touchicon.png'
  },
  plugins: [
    /* {
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
    }, */

    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: 'http://api.webe.radio:1337',
        queryLimit: 1000, // Defaults to 100
        contentTypes: [ 'post', 'podcast', 'episode', 'tag' ],
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        loginData: {
          identifier: '',
          password: ''
        },
        remark: {
          plugins: [
            '@gridsome/remark-prismjs',
            'gridsome-plugin-remark-youtube'
          ]
        },
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
  transformers: {
    remark: {
      autolinkClassName: 'icon icon-link heading-anchor',
      externalLinksTarget: '_blank',
      externalLinksRel: [ 'noopener', ],
      anchorClassName: 'icon icon-link',
    }
  },
}
