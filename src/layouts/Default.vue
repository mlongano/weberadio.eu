<template>
  <div class="font-sans text-gray-800 leading-normal">
<header class="flex flex-wrap flex-row justify-between items-begins  md:items-left md:space-x-4 py-6 px-6 relative border-t-8 border-red-800">
        <a href="/"><img src="../../static/images/logo.png" alt="Logo" width="50px"></a>
  <ToggleMobileMenu v-bind:mobileMenuOpen="mobileMenuOpen"  v-on:toggleMobileMenu="toogleMenu($event)"/>
  <nav class="absolute md:relative top-16 left-0 md:top-0 z-20 md:flex flex-col md:flex-row md:space-x-6 font-semibold w-full md:w-auto bg-white shadow-md rounded-lg md:rounded-none md:shadow-none md:bg-transparent p-6 pt-0 md:p-0"
  :class="{ 'flex' : mobileMenuOpen , 'hidden' : !mobileMenuOpen }" @click="mobileMenuOpen = true"
  >
    <a href="/posts/" class="block py-1 text-gray-600 hover:underline">Blog</a>
    <a href="/podcasts/" class="block py-1 text-gray-600 hover:underline">Podcasts</a>
    <a href="/" class="block py-1 text-gray-600 hover:underline">Chi siamo</a>
  </nav>
  </header>

    <slot/>

  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
<script>
import ToggleMobileMenu from '~/components/ToggleMobileMenu.vue'

export default {
  props: {
    showLogo: { default: true },
  },
  components: {
    ToggleMobileMenu
  },
  data () {
    return {
        mobileMenuOpen: false,
    }
  },
  methods: {
    toogleMenu: function(v) {
      this.mobileMenuOpen = v;
      console.log("Hello from Component");
    }
  }
}
</script>
