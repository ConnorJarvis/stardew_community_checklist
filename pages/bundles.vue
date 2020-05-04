<template>
  <div>
    <BundleNav />
    <section class="section">
      <transition
        name="fade"
        mode="out-in"
      >
        <nuxt-child />
      </transition>
    </section>
  </div>
</template>

<script>
import BundleNav from '~/components/bundles/BundleNav'
export default {
  name: 'Bundles',
  components: { BundleNav },
  computed: {
    bundle () {
      return this.$store.getters.GetBundleById(this.$route.params.id)
    }
  }
}
</script>

<style>
/* // .fade-enter-active, .fade-leave-active {
//   transition: opacity 0.5s ease;
// }
// .fade-enter, .fade-leave-active {
//   opacity: 0;
// } */
</style>
