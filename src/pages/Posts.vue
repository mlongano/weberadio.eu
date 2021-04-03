<template>
  <Layout :show-logo="true">

    <!-- List posts -->
    <div class="px-6 posts">
      <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>
    </div>

  </Layout>
</template>

<page-query>
query {
  posts: allStrapiPost {
    edges {
      node {
        id
        title
        slug
        date (format: "D. MMMM YYYY")
        article
        image {
          url
          width
          height
        }
        tags {
					name
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
import Tags from "~/components/Tags";
import PostCard from '~/components/PostCard.vue'

export default {
  components: {
    Tags,
    PostCard
  },
  metaInfo: {
    title: 'Posts'
  },

}
</script>
