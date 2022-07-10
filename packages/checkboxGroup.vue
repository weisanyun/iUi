<template>
  <div class="gg-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GgCheckBoxGroup',
  provide () {
    return {
      CheckboxGroup: this
    }
  },
  props: {
    value: {
      type: Array
    }
  }
}
</script>
