<template>
      <div class="px-6 pt-4 pb-2">
   		<g-link class="podcast-tag" v-for="tag in post.tags" :key="tag.id" :to="tag.path">
   			<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{{ tag.title }}</span>
   		</g-link>
    </div>
</template>

<style>
.podcast-tag {
  position: relative;
  z-index: 1;
}
</style>
<script>
export default {
  props: ['post']
}
</script>

