<template>
  <b-container>
    <b-row>
      <b-col>
        <h1 class="title">
          Changelog
        </h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <version v-for="version in changelog.versions" :key="version.date" :version="version" class="my-2" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Version from '~/components/Version.vue'
import ChangeLogJson from '~/assets/changelog.json'
export default {
  components: {
    Version
  },
  data () {
    return {
      changelog: ChangeLogJson
    }
  }
}
</script>

<style>

</style>
