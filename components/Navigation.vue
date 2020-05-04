<template>
  <b-navbar type="is-info" shadow wrapper-class="container">
    <template slot="brand">
      <b-navbar-item tag="a" href="https://www.stardewcommunitychecklist.com">
        <h1 class="is-size-3 has-text-weight-semibold is-hidden-mobile">
          Stardew Community Checklist
        </h1>
        <h1 class="is-size-3 has-text-weight-semibold is-hidden-tablet">
          SCC
        </h1>
      </b-navbar-item>
    </template>

    <template slot="end">
      <b-navbar-item tag="nuxt-link" :to="{ path: '/welcome' }">
        Welcome
      </b-navbar-item>
      <b-navbar-item tag="nuxt-link" :to="{ path: '/bundles' }">
        Bundles
      </b-navbar-item>
      <b-navbar-item>
        Search
      </b-navbar-item>
      <b-navbar-item tag="div">
        <div class="buttons">
          <b-button type="is-light" icon-left="cogs" outlined />
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: 'Navigation'

}
</script>

<style>

</style>
