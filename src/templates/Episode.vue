<template>
  <Layout>
    <main class="px-6">
      <h1 class="text-2xl mb-6">
        {{ $page.episode.title }}
      </h1>


      <div>
        <g-image  class="shadow-lg rounded-lg"
          alt="Cover image"
          v-if="$page.episode.cover_image"
          :src="$page.episode.cover_image"
        />
      </div>

      <div class="" v-html="$page.episode.content" />

      <div class="">
        <Tags :post="$page.episode" />
      </div>

    <div v-html="$page.episode.spreaker_embed" />
    </main>
  </Layout>
</template>

<script>
import Tags from "~/components/Tags";

export default {
  components: {
    Tags,
  },
  metaInfo() {
    return {
      title: this.$page.episode.title,
      meta: [
        {
          name: "description",
          content: this.$page.episode.description,
        },
      ],
    };
  },
  mounted() {
    let spreakerWidgets = document.createElement("script");
    spreakerWidgets.setAttribute("async", true);
    spreakerWidgets.setAttribute(
      "src",
      "https://widget.spreaker.com/widgets.js"
    );
    document.body.appendChild(spreakerWidgets);
    console.log("Spreaker mounted");
  },
};
</script>

<page-query>
query episode ($id: ID!) {
  episode: episode (id: $id) {
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
    spreaker_embed
    content
    cover_image (width: 860, blur: 10)
  }
}
</page-query>

