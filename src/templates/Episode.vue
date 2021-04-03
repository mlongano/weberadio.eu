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
            v-if="$page.episode.cover"
            :src="$page.episode.cover.url"
          />
        </div>

        <markdown-it-vue class="text-gray-700 text-xs" :content="$page.episode.description" />

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
      },
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
  episode: strapiEpisode (id: $id) {
    title
    date (format: "D. MMMM YYYY")
    tags {
      name    }
      podcast {
          title
          id
    }

    description
    spreaker_id
            cover {
              url
              width
              height
            }
  }
}
</page-query>

