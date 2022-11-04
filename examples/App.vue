<template>
  <div id="app">
    <gg-switch v-model="active">111111</gg-switch>
  </div>
</template>

<script>

import GgSwitch from '../packages/switch'
export default {
  name: 'App',
  components: { GgSwitch },
  data () {
    return {
      active: false
    }
  }
}
</script>
