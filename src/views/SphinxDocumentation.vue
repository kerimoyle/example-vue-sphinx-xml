<template>
  <div class="documentation">
    <sphinx-page baseURL="/sphinx-xml-files" />
  </div>
</template>

<script>
import { SphinxPage } from 'vue-sphinx-xml'

export default {
  name: 'Documentation',
  components: {
    SphinxPage,
  },
}
</script>
