<template>
  <Layout>
    <div class="">
      <h1 class="">
        {{ $page.podcast.title }}
      </h1>

    </div>

    <div class="">
      <div class="">
        <g-image
          alt="Cover image"
          v-if="$page.podcast.cover_image"
          :src="$page.podcast.cover_image"
        />
      </div>

      <div class="" v-html="$page.podcast.content" />

      <div class="">
        <Tags :post="$page.podcast" />
      </div>
    </div>

    <div v-html="$page.podcast.spreaker_embed" />
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

