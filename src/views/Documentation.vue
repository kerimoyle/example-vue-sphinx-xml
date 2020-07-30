<template>
  <div class="documentation">
    <template v-if="isRoot">
      <ul>
        <li>
          <router-link
            :to="{
              name: 'Documentation',
              params: { version: 'v0.1.2' },
            }"
            >v0.1.2</router-link
          >
        </li>
        <li>
          <router-link
            :to="{
              name: 'Documentation',
              params: { version: 'v0.3.1' },
            }"
            >v0.3.1</router-link
          >
        </li>
      </ul>
    </template>
    <template v-else>
      <v-select
        :options="['v0.1.2', 'v0.3.1']"
        :clearable="false"
        :closeOnSelect="true"
        :value="version"
        @input="setSelected"
      ></v-select>
      <sphinx-page :baseURL="`/sphinx-xml-files/${this.version}`" />
    </template>
  </div>
</template>

<script>
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'

import { SphinxPage } from 'vue-sphinx-xml'

export default {
  name: 'Documentation',
  components: {
    SphinxPage,
    vSelect,
  },
  data() {
    return {
      version: '',
    }
  },
  watch: {
    $route(to) {
      if (to.params.version !== this.version) {
        this.version = to.params.version
      }
    },
  },
  created() {
    this.version = this.$route.params.version
  },
  computed: {
    isRoot() {
      return this.$route.name === 'DocumentationRoot'
    },
  },
  methods: {
    setSelected(value) {
      if (value) {
        this.version = value
        if (this.$route.params.version !== value) {
          this.$router.push({
            name: 'Documentation',
            params: { version: value, pageName: this.$route.params.pageName },
          })
        }
      }
    },
  },
}
</script>
