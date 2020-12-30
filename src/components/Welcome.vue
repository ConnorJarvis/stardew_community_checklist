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
var socket = io('https://stardew.vangel.io');
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
    var storeState = this.$store
    if (this.$route.params.saveid === 'new') {
      console.log('No save ID')
      var id = makeid(15)
      var url = '/welcome/' + id
      socket.emit('new-save', {
        id: id,
      });
      socket.on('saveregistered', function(data) {
        window.location.href = url;
      });
      
    } else {
     
      var id = this.$route.params.saveid;
      socket.emit('request-update', {
        id: id,
      });
      console.log(id)
      
      socket.on(id, function(data) {
        console.log("From server " + data);
        storeState.commit('SetSerializedState', data);
      });
      
    }
  
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
