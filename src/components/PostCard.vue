<template>

  <div class="relative max-w-sm rounded overflow-hidden shadow-lg mb-6">
      <g-image alt="Cover image" v-if="post.cover_image" class="w-full" :src="post.cover_image" />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2" v-html="post.title" />
      <div class="text-gray-700 text-xs" v-html="htmlDescription"/>

      <Tags :post="post" />
      <g-link class="link w-1/2 flex items-center justify-center rounded-md bg-black text-white" :to="post.path">Link</g-link>
    </div>
  </div>
</template>
<style>
.link {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.0;
    overflow: hidden;
    text-indent: -9999px;
    z-index: 0;

}
</style>
<script>
import Tags from "~/components/Tags";
import marked from 'marked'

export default {
  components: {
    Tags,
  },
  props: ["post"],
  data () {
    return {
      htmlDescription: marked(this.post.description)
    }
  },
};
</script>

