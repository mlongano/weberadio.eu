<template>
  <Layout>
    <h1 class="tag-title text-center space-bottom">
      # {{ $page.tag.title }}
    </h1>

    <div class="posts">
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


