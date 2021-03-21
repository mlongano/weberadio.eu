<template>
  <Layout>
    <main class="px-6">
      <h1 class="text-2xl mb-6">
        {{ $page.post.title }}
      </h1>
      <div>
        <g-image  class="shadow-lg rounded-lg"
          alt="Cover image"
          v-if="$page.post.cover_image"
          :src="$page.post.cover_image"
        />
      </div>
      <div class="" v-html="$page.post.content" />

      <div class="">
        <Tags :post="$page.post" />
      </div>
    </main>


  </Layout>
</template>

<script>

export default {
  metaInfo () {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: 'description',
          content: this.$page.post.description
        }
      ]
    }
  }
}
</script>

<page-query>
query Post ($id: ID!) {
  post: post (id: $id) {
    title
    path
    date (format: "D. MMMM YYYY")
    timeToRead
    tags {
      id
      title
      path
    }
    description
    content
    cover_image (width: 860, blur: 10)
  }
}
</page-query>
