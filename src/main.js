// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
// Import global styles
require( '~/main.css' );

import DefaultLayout from '~/layouts/Default.vue';
import MarkdownItVueLight from 'markdown-it-vue/dist/markdown-it-vue-light.umd.min.js'
import 'markdown-it-vue/dist/markdown-it-vue-light.css'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component( 'Layout', DefaultLayout );
  Vue.component( 'markdown-it-vue', MarkdownItVueLight );
  head.link.push( {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com'
  } );
  head.link.push( {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Lato'
  } );
}
