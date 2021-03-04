<template>

  <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <g-image alt="Cover image" v-if="podcast.cover_image" class="w-full" :src="podcast.cover_image" />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2" v-html="podcast.title" />
      <div class="text-gray-700 text-base"><vue-markdown :source="podcast.description"/> </div>

      <Tags :post="podcast" />
      <g-link class="w-1/2 flex items-center justify-center rounded-md bg-black text-white" :to="podcast.path">Link</g-link>
    </div>
  </div>
</template>

<script>
import Tags from "~/components/Tags";

export default {
  components: {
    Tags,
  },
  props: ["podcast"],
};
</script>

