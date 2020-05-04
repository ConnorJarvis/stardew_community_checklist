<template>
  <section class="container">
    <b-navbar>
      <template slot="brand">
        <b-navbar-item>
          <h1 class="subtitle">
            Bundles
          </h1>
        </b-navbar-item>
      </template>

      <template slot="start">
        <b-navbar-dropdown v-for="room in rooms" :key="room.id" hoverable boxed>
          <template slot="label">
            <b-icon v-if="IsRoomComplete(room)" type="is-success" icon="check-circle" size="is-small" />
            <span>
              {{ room.name }}
            </span>
          </template>
          <b-navbar-item v-for="bundle in room.bundles" :key="bundle.id" tag="nuxt-link" :to="{ name: 'bundles-id', params:{id: bundle.id} }">
            <b-icon v-if="IsBundleComplete(bundle)" type="is-success" icon="check-circle" size="is-small" />
            <span>
              {{ bundle.name }}
            </span>
          </b-navbar-item>
        </b-navbar-dropdown>
      </template>
    </b-navbar>
  </section>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'BundleNav',
  components: {
  },
  data () {
    return {
      menu_active: false
    }
  },
  computed: {
    ...mapState(['rooms'])
  },
  methods: {
    IsBundleComplete (bundle) { return this.$store.getters.IsBundleComplete(bundle) },
    IsRoomComplete (room) { return this.$store.getters.IsRoomComplete(room) }
  }
}
</script>
