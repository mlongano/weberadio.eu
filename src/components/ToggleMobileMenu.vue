 <template>
  <button
    @click="$emit('toggleMobileMenu',!mobileMenuOpen)"
    class="inline-block md:hidden w-8 h-8 bg-gray-200 text-gray-600 p-1"
    aria-label="toogle mobile menu"
  >
    <svg
      aria-hidden="true"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
        clip-rule="evenodd"
      ></path>
    </svg>
  </button>
</template>

<script>
export default {

  props:[ 'mobileMenuOpen' ],
};
</script>