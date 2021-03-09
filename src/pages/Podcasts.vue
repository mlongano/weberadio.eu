<template>
  <Layout :show-logo="true">

    <!-- List posts -->
    <div class="pl-6 podcasts">
      <PodcastCard v-for="edge in $page.podcasts.edges" :key="edge.node.id" :podcast="edge.node"/>
    </div>

  </Layout>
</template>

<page-query>
query {
  podcasts: allPodcast(filter: { published: { eq: true }}) {
    edges {
      node {
        id
        title
        date (format: "D. MMMM YYYY")
        timeToRead
        description
        content
        spreaker_embed
        cover_image (width: 770, height: 380, blur: 10)
        ...on Podcast {
        id
        title
        path
        }
        path
        tags {
          id
          title
          path
        }
      }
    }
  }
}
</page-query>
<style scoped>
div.bg-cover {
  background-image: none;
}
</style>

<script>
import PodcastCard from '~/components/PodcastCard.vue'

export default {
  components: {
    PodcastCard
  },
  metaInfo: {
    title: 'Podcasts'
  },

}
</script>
