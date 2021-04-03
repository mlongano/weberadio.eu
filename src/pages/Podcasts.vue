<template>
  <Layout :show-logo="true">
    <ClientOnly>
      <!-- List posts -->
      <div class="px-6 podcasts">
        <PodcastCard
          v-for="edge in $page.podcasts.edges"
          :key="edge.node.id"
          :podcast="edge.node"
        />
      </div>
    </ClientOnly>
  </Layout>
</template>

<page-query>
query {
  podcasts: allStrapiPodcast {
    totalCount
    edges {
      node {
        id
        title
        slug
        date
        description
        spreaker_id
        cover {
          url
          width
          height
        }
        tags {
					name
        }
        episodes {
          id
          title
          slug
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
import PodcastCard from "~/components/PodcastCard.vue";

export default {
  components: {
    PodcastCard,
  },
  metaInfo: {
    title: "Podcasts",
  },
};
</script>
