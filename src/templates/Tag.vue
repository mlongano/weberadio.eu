<template>
  <Layout>
    <ClientOnly>
      <h1 class="mb-6">
        <span
          class="inline-block text-2xl bg-gray-200 rounded-full px-3 py-1 font-semibold text-gray-700 mr-2 mb-2"
        >
          # {{ $page.tags.edges[0].node.name }}
        </span>
      </h1>

      <div class="px-6">
        <PodcastCard
          v-for="podcast in $page.tags.edges[0].node.podcasts"
          :key="podcast.id"
          :podcast="podcast"
        />
      </div>
    </ClientOnly>
  </Layout>
</template>

<page-query>
query ($name: String!) {
  tags: allStrapiTag (
    filter: { name: {eq: $name} }
  ) {
    edges {
      node {
        id
        name
        episodes {
          id
          title
          slug
        }
        podcasts {
          id
          title
          slug
          description
          cover {
            url
            width
            height
          }

        }
        posts {
          id
          title
          slug
        }
      }
    }
  }
}
</page-query>

<script>
import PodcastCard from "~/components/PodcastCard.vue";

export default {
  components: {
    PodcastCard,
  },
  metaInfo: {
    title: "Tags",
  },
};
</script>


