<template>
  <div class="podcast-card content-box" :class="{'podcast-card--has-poster' : podcast.poster}">
    <div class="podcast-card__header">
      <g-image alt="Cover image" v-if="podcast.cover_image" class="post-card__image" :src="podcast.cover_image" />
    </div>
    <div class="podcast-card__content">
      <h2 class="podcast-card__title" v-html="podcast.title" />
      <p class="podcast-card__description" v-html="podcast.description" />

      <Tags :post="podcast" />

      <g-link class="podcast-card__link" :to="podcast.path">Link</g-link>
    </div>
  </div>
</template>

<script>
import Tags from '~/components/Tags'

export default {
  components: {
    Tags
  },
  props: ['podcast'],
}
</script>

