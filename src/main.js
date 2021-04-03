// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
// Import global styles
require( '~/main.css' );

import DefaultLayout from '~/layouts/Default.vue';

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component( 'Layout', DefaultLayout );
  if ( isClient ) {
    const MarkdownItVue = require( "markdown-it-vue" ).default;
    require( "markdown-it-vue/dist/markdown-it-vue.css" );
    Vue.component( 'markdown-it-vue', MarkdownItVue );
  }
  head.link.push( {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com'
  } );
  head.link.push( {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Lato'
  } );
}
