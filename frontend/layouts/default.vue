<template>
  <div>
    <Header />
        <main class="main">
            <nuxt keep-alive />
        </main>
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/common/Header.vue'
import Footer from '~/components/common/Footer.vue'

export default {
    components: { Header, Footer },
}
</script>

<style>

</style>