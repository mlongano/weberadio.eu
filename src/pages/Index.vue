<template>
  <Layout>
    <main class="pl-6">
    <h1 class="text-2xl font-semibold ">Webe Radio</h1>

    <p>
      Sito secondario di Webe Radio
    </p>

    <p class="home-links">
      <a href="https://www.weberadio.it/" target="_blank" rel="noopener">Sito ufficiale</a>
    </p>
    </main>
<footer class="pl-6 footer pb-10 text-sm text-gray-300 border-b-8 border-red-800 w-screen"><span>Photo by <a href="https://unsplash.com/@jasonrosewell?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Jason Rosewell</a> on <a href="https://unsplash.com/@jasonrosewell?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span></footer>
  </Layout>
</template>
<style scoped>
footer {
  position: absolute;
  bottom: 0;

}
div.bg-cover {
  background-image: url(~@/assets/images/jason-rosewell-ASKeuOZqhYU-unsplash.jpg);
}
</style>
<script>
export default {
  metaInfo: {
    title: 'Webe Radio'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
