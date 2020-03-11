<template>
  <div>
    <navbar class="mb-3" />
    <b-container>
      <b-row>
        <b-col>
          <nuxt class="min-vh-100" />
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <app-footer class="mt-3" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import AppFooter from '~/components/Footer.vue'

export default {
  components: {
    Navbar,
    AppFooter
  }
}
</script>

<style>
</style>
