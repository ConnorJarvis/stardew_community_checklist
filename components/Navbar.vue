<template>
  <div>
    <b-navbar
      class="scc-navbar"
      toggleable="lg"
      type="dark"
      variant="primary"
      sticky
    >
      <b-navbar-brand to="/">
        Stardew Community Checklist
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" />

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#">
            Welcome
          </b-nav-item>
          <b-nav-item-dropdown text="Bundles" right />
          <b-nav-item-dropdown text="Search" right />
          <b-nav-form>
            <b-button variant="outline-light">
              <cog-outline />
            </b-button>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import CogOutline from 'mdi-vue/Cogs'
export default {
  components: {
    CogOutline
  }
}
</script>

<style lang="scss" scoped>
  .scc-navbar {
    box-shadow: 0 .25rem .25rem rgba(0,0,0,.25),inset 0 -1px 5px rgba(0,0,0,.25)
  }
</style>
