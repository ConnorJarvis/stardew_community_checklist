<template>
  <section class="container">
    <div class="hero is-medium is-bold">
      <div class="hero-body">
        <h1 class="title">
          Stardew Community Checklist
        </h1>
        <h2 class="subtitle">
          Track Your Progress on the Community Center!
        </h2>
      </div>
    </div>
    <New :class="ShowModal ? 'is-active' : ''" v-on:dismiss-modal="ShowModal = false"></New>
  </section>
</template>

<script>
import ItemCard from '@/components/item_card/ItemCard'
import New from '@/components/New'
export default {
  components: {ItemCard, New},
  name: 'welcome',
  data: function () {
    return {
      ShowModal: false
    }
  },
  created () {
    console.log()
    if (this.$route.params.saveid === 'new') {
      console.log('No save ID')
      var id = makeid(15)
      var url = '/welcome/' + id
      window.location.href = url
    }
    console.log( this.$store.getters.GetSerializedState )
  }
  
}

function makeid (length) {
  var result = ''
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  var charactersLength = characters.length
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}
</script>

<style scoped>
</style>
