<template>
  <Layout>
    <ClientOnly>
      <main class="px-6">
        <h1 class="text-2xl mb-6">
          {{ $page.podcast.title }}
        </h1>

        <div>
          <g-image
            class="shadow-lg rounded-lg"
            alt="Cover image"
            v-if="$page.podcast.cover"
            :src="$page.podcast.cover.url"
          />
        </div>
        <markdown-it-vue class="text-gray-700 text-xs" :content="$page.podcast.description" />

        <div>
          <EpisodesList :podcast="$page.podcast" />
        </div>
        <div class="">
          <Tags :post="$page.podcast" />
        </div>

        <div v-html="spreakerEmbed" />
      </main>
    </ClientOnly>
  </Layout>
</template>

<script>
import Tags from "~/components/Tags";
import EpisodesList from "~/components/EpisodesList";

export default {
  components: {
    Tags,
    EpisodesList,
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
  computed: {
    spreakerEmbed() {
      let page = this.$page;
      let spreakerId = page.podcast.spreaker_id;
      let spreakerCode =
        '<a class="spreaker-player"  href="https://www.spreaker.com/s/' +
        spreakerId +
        '" data-resource="show_key=' +
        spreakerId +
        '" data-width="100%" data-height="500px" data-theme="dark" data-playlist="true" data-playlist-continuous="false" data-autoplay="false" data-live-autoplay="false" data-chapters-image="true" data-episode-image-position="left" data-hide-logo="false" data-hide-likes="false" data-hide-comments="false" data-hide-sharing="false" data-hide-download="true">' +
        'Ascolta "' +
        page.podcast.title +
        '" su Spreaker.' +
        "</a>";
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
    console.log(this.spreakerEmbed);
  },
};
</script>

<page-query>
query podcast ($id: ID!) {
  podcast: strapiPodcast (id: $id) {
    title
    slug
    date (format: "D. MMMM YYYY")
    episodes {
            title
            slug
            id
            episode_number
        }
    tags {
      name
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

