<template>
  <ClientOnly>
    <div class="relative max-w-sm rounded overflow-hidden shadow-lg mb-6">
      <g-image
        alt="Cover image"
        v-if="podcast.cover"
        class="w-full"
        :src="getStrapiMedia(podcast.cover.url)"
      />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2" v-html="podcast.title" />
        <markdown-it-vue class="text-gray-700 text-xs" :content="podcast.description" />

        <EpisodesList :podcast="podcast" />
        <Tags :post="podcast" />
        <g-link
          class="link w-1/2 flex items-center justify-center rounded-md bg-black text-white"
          :to="'podcast/'+podcast.slug"
          >Link</g-link
        >
      </div>
    </div>
  </ClientOnly>
</template>
<style>
.link {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  overflow: hidden;
  text-indent: -9999px;
  z-index: 0;
}
</style>
<script>
import Tags from "~/components/Tags";
import EpisodesList from "~/components/EpisodesList";
import { getStrapiMedia } from "~/utils/medias";

export default {
  components: {
    Tags,
    EpisodesList,
  },
  props: ["podcast"],
  methods: {
    getStrapiMedia,
  },
};
</script>

