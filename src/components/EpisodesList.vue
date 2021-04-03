<template>
  <ClientOnly>
    <div class="px-6 pt-4 pb-2">
      <g-link
        class="episode-list"
        v-for="episode in podcast.episodes"
        :key="episode.slug"
        :to="'episode/'+episode.slug"
      >
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >{{ episode.title }}</span
        >
      </g-link>
    </div>
  </ClientOnly>
</template>

<style>
.episode-list {
  position: relative;
  z-index: 1;
}
</style>
<script>
export default {
  props: ["podcast"],
};
</script>

