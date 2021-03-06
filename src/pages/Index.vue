<template>
  <Layout>
    <div class="flex justify-items-start ">
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <!-- <g-image class="mr-10" alt="Logo1" src="@/assets/images/logo1.png" width="135"  style="height:135px"/>
    <g-image class="mr-10" alt="Logo2" src="@/assets/images/logo2.png" width="135"  style="height:27px"/>
    <g-image class="mr-10" alt="Logo3" src="@/assets/images/logo3.png" width="135"  style="height:25px"/>
    <g-image class="mr-10" alt="Logo4" src="@/assets/images/logo4.png" width="135"  style="height:79px"/> -->
  </div>
    <h1 class="text-2xl font-semibold ">Webe Radio</h1>

    <p>
      Sito secondario di Webe Radio
    </p>

    <p class="home-links">
      <a href="https://www.weberadio.it/" target="_blank" rel="noopener">Sito ufficiale</a>
    </p>

  </Layout>
</template>
<style scoped>
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
