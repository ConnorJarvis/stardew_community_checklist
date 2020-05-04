<template>
  <div>
    <navigation />
    <nuxt class="is-fullheight" />
    <app-footer />
  </div>
</template>

<script>
import Navigation from '~/components/Navigation'
import AppFooter from '~/components/AppFooter'
export default {
  components: {
    Navigation,
    AppFooter
  },
  data () {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' }
        },
        {
          title: 'Inspire',
          icon: 'lightbulb',
          to: { name: 'inspire' }
        }
      ]
    }
  },
  created () {
    this.$store.commit('initState')
    const v1data = localStorage.getItem('user_data')
    if (v1data !== null && v1data !== '') {
      this.$store.dispatch('LoadV1State', JSON.parse(atob(v1data)))
      localStorage.removeItem('user_data')
      localStorage.setItem('v1data', v1data)
    }
  }
}
</script>
