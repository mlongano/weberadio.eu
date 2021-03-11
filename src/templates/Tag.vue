<template>
  <Layout>
    <h1 class="mb-6">
      <span class="inline-block text-2xl bg-gray-200 rounded-full px-3 py-1 font-semibold text-gray-700 mr-2 mb-2"> # {{ $page.tag.title }} </span>
    </h1>

    <div class="px-6">
      <PodcastCard v-for="edge in $page.tag.belongsTo.edges" :key="edge.node.id" :podcast="edge.node"/>
    </div>
  </Layout>
</template>

<page-query>
query Tag ($id: ID!) {
  tag (id: $id) {
    title
    belongsTo {
      edges {
        node {
          ...on Podcast {
            title
            path
            date (format: "D. MMMM YYYY")
            timeToRead
            description
            content
            cover_image (width: 860, blur: 10)
          }
          ...on Episode {
            title
            path
            date (format: "D. MMMM YYYY")
            timeToRead
            description
            content
            cover_image (width: 860, blur: 10)
          }
        }
      }
    }
  }
}
</page-query>

<script>
import PodcastCard from '~/components/PodcastCard.vue'

export default {
  components: {
    PodcastCard
  },
  metaInfo: {
    title: 'Tags'
  }
}
</script>


