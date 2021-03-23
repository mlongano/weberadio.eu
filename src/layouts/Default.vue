<template>
    <div
      class="flex flex-col lg:h-screen bg-cover bg-center font-sans text-gray-500 leading-normal border-t-8 border-red-800 dark:text-gray-50"
    >
      <header
        class="flex flex-wrap flex-row justify-between items-begins md:items-left md:space-x-4 py-6 px-6 relative"
      >
        <a class="flex justify-start" href="/">
          <img
            class="mr-5"
            src="@/assets/images/logo.png"
            alt="Logo"
            width="50px"
            style="height: 50px"
          />
        </a>
        <ToggleMobileMenu
          v-bind:mobileMenuOpen="mobileMenuOpen"
          v-on:toggleMobileMenu="toogleMenu($event)"
        />
        <nav
          class="absolute md:relative top-16 left-0 md:top-0 z-20 md:flex flex-col md:flex-row md:space-x-6 font-semibold w-full md:w-auto bg-white shadow-md rounded-lg md:bg-opacity-25 p-6 md:pt-0 md:p-0 text-gray-500"
          :class="{ flex: mobileMenuOpen, hidden: !mobileMenuOpen }"
          @click="mobileMenuOpen = true"
        >
          <a
            href="/podcasts/"
            class="md:pl-2 md:m-auto block hover:underline"
            >Podcasts</a
          >
          <a
            href="/posts/"
            class="md:pl-2 md:m-auto block hover:underline my-2"
            >Blog</a
          >
          <a
            href="/about"
            class="block md:m-auto md:px-2 hover:underline"
            >Chi siamo</a
          >
        </nav>
      </header>

      <slot />
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
import ToggleMobileMenu from "~/components/ToggleMobileMenu.vue";

export default {
  props: {
    showLogo: { default: true },
  },
  components: {
    ToggleMobileMenu,
  },
  data() {
    return {
      mobileMenuOpen: false,
    };
  },
  methods: {
    toogleMenu: function (v) {
      this.mobileMenuOpen = v;
      console.log("Hello from Component");
    },
  },
};
</script>
