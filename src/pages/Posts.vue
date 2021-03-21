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
  posts: allPost(filter: { published: { eq: true }}) {
    edges {
      node {
        id
        title
        date (format: "D. MMMM YYYY")
        timeToRead
        description
        content
        cover_image (width: 770, height: 380, blur: 10)
        ...on Post {
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
import PostCard from '~/components/PostCard.vue'

export default {
  components: {
    PostCard
  },
  metaInfo: {
    title: 'Posts'
  },

}
</script>
