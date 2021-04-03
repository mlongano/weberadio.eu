<template>
  <Layout>
    <main class="px-6">
      <h1 class="text-2xl mb-6">
        {{ $page.post.title }}
      </h1>
      <div>
        <g-image  class="shadow-lg rounded-lg"
          alt="Cover image"
          v-if="$page.post.image"
          :src="$page.post.image.url"
        />
      </div>
      <markdown-it-vue class="text-gray-700 text-xs" :content="$page.post.article" />

      <div class="">
        <Tags :post="$page.post" />
      </div>
    </main>


  </Layout>
</template>

<script>
import Tags from "~/components/Tags";

export default {
  components: {
    Tags,
  },
  metaInfo () {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: "description",
          content: this.$page.post.description,
        }
      ]
    }
  }
}
</script>

<page-query>
query Post ($id: ID!) {
  post: strapiPost (id: $id) {
    title
    subtitle
    date (format: "D. MMMM YYYY")
    article
    image {
      url
      width
      height
    }
  }
}
</page-query>
