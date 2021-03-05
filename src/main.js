// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
// Import global styles
require( '~/main.css' );

import DefaultLayout from '~/layouts/Default.vue';
import VueMarkdown from 'vue-markdown-render'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component( 'Layout', DefaultLayout , VueMarkdown);
  head.link.push( {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com'
  } );
  head.link.push( {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Lato'
  } );
}
