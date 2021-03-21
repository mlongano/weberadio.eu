<template>
  <Layout>
    <ClientOnly>
      <main class="px-6">
        <h1 class="text-2xl mb-6">
          {{ $page.episode.title }}
        </h1>

        <div>
          <g-image
            class="shadow-lg rounded-lg"
            alt="Cover image"
            v-if="$page.episode.cover_image"
            :src="$page.episode.cover_image"
          />
        </div>

        <div class="" v-html="$page.episode.content" />

        <div class="">
          <Tags :post="$page.episode" />
        </div>

        <div v-html="spreakerEmbed" />
      </main>
    </ClientOnly>
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
  computed: {
    spreakerEmbed () {
      let page = this.$page;
      let spreakerId = page.episode.spreaker_id;
      let spreakerCode = '<a class="spreaker-player"  href="https://www.spreaker.com/e/'
      + spreakerId
      +'"data-resource="episode_key='
      + spreakerId
      +'" data-theme="dark" data-width="100%" data-height="200px" data-theme="light" data-playlist="false" data-playlist-continuous="false" data-autoplay="false" data-live-autoplay="false" data-chapters-image="true" data-episode-image-position="left" data-hide-logo="false" data-hide-likes="false" data-hide-comments="false" data-hide-sharing="false" data-hide-download="true">'
      + 'Ascolta "' + page.episode.title + '" su Spreaker.'+
      '</a>'
      return spreakerCode;
      }
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
    podcast {
          title
          id
          path
    }

    description
    spreaker_id
    content
    cover_image (width: 860, blur: 10)
  }
}
</page-query>

