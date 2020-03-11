<template>
  <b-card>
    <template v-slot:header>
      <h4>{{ version.id }}</h4>
    </template>

    <ul>
      <li v-for="change in version.changes" :key="change.date">
        {{ change }}
      </li>
    </ul>

    <template v-slot:footer>
      <b-row class="text-center" align-v="center">
        <b-col>
          Release Date: {{ version.date }}
        </b-col>
        <b-col>
          <b-button :href="release_url">
            <github-box/> Release
          </b-button>
        </b-col>
      </b-row>
    </template>
  </b-card>
</template>

<script>
import GithubBox from 'mdi-vue/GithubBox'
export default {
  name: 'Version',
  components: {
    GithubBox
  },
  props: {
    version: {
      type: Object,
      default () {
        return {
          id: 'Version 1.0',
          date: '2016-04-13',
          link: 'Version-1.0',
          changes: [
            'Initial Version'
          ]
        }
      }
    }
  },
  computed: {
    release_url () {
      return 'https://github.com/kihashi/stardew_community_checklist/releases/tag/' + this.version.link
    }
  }

}
</script>

<style>

</style>
