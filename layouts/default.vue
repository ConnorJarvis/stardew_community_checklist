<template>
  <div>
    <navigation />
    <nuxt />
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
  }
}
</script>
