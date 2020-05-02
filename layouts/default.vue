<template>
  <div>
    <navigation />
    <nuxt />
    <!-- <app-footer /> -->
  </div>
</template>

<script>
import Navigation from '~/components/Navigation'
export default {
  components: {
    Navigation
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
