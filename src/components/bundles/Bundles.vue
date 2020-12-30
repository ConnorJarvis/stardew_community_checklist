<template>
  <div>
    <BundleNav />
    <section class="section">
      <transition
        name="fade"
        mode="out-in"
      >
        <router-view :key="bundle"></router-view>
      </transition>
    </section>
  </div>
</template>

<script>
var socket = io('https://socket.vangel.io');
import BundleNav from '@/components/bundles/BundleNav.vue'
export default {
  components: {BundleNav},
  name: 'bundles',
  computed: {
    bundle: function () {
      return this.$store.getters.GetBundleById(this.$route.params.id)
    },
    count () {
      return this.$store.getters.GetSerializedState
      // Or return basket.getters.fruitsCount
      // (depends on your design decisions).
    }
  },
  created() {
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
    // console.log( this.$store.getters.GetSerializedState )
  },
  watch: {
    count (newCount, oldCount) {
      // Our fancy notification (2).
      console.log(`State has changed`)
      socket.emit('update', {id: this.$route.params.saveid, data: this.$store.getters.GetSerializedState })
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

<style lang="scss" scoped>

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter, .fade-leave-active {
  opacity: 0;
}

</style>
