<template>
  <Layout>
    <div class="podcast-title">
      <h1 class="podcast-title__text">
        {{ $page.podcast.title }}
      </h1>

    </div>

    <div class="podcast content-box">
      <div class="podcast__header">
        <g-image
          alt="Cover image"
          v-if="$page.podcast.cover_image"
          :src="$page.podcast.cover_image"
        />
      </div>

      <div class="podcast__content" v-html="$page.podcast.content" />

      <div class="podcast__footer">
        <Tags :post="$page.podcast" />
      </div>
    </div>

    <div class="podcast-comments">
      <!-- Add comment widgets here -->
    </div>
    <div v-html="$page.podcast.spreaker_embed"></div>
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
      title: this.$page.podcast.title,
      meta: [
        {
          name: "description",
          content: this.$page.podcast.description,
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
query podcast ($id: ID!) {
  podcast: podcast (id: $id) {
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

