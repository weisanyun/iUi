<template>
  <div class="gg-switch" :class="{'is-checked':value}" @click="handleClick">
    <span class="gg-switch_core" ref="core">
      <span class="gg-switch_button"></span>
    </span>
    <input type="checkbox" class="gg-switch_input" :name="name" ref="input">
  </div>
</template>

<script>
export default {
  name: 'GgSwitch',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: ''
    },
    inactiveColor: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  mounted () {
    // 修改开关颜色
    if (this.activeColor || this.inactiveColor) {
      const color = this.value ? this.activeColor : this.inactiveColor
      this.$refs.core.style.borderColor = color
      this.$refs.core.style.backgroundColor = color
    }
    // 控制checkbox的值,input值同步value值
    this.$refs.input.checked = this.value
  },
  watch: {
    'value' (e) {
      // 修改开关颜色
      if (this.activeColor || this.inactiveColor) {
        const color = e ? this.activeColor : this.inactiveColor
        this.$refs.core.style.borderColor = color
        this.$refs.core.style.backgroundColor = color
      }
      // 控制checkbox的值,input值同步value值
      this.$refs.input.checked = this.value
    }
  },
  methods: {
    handleClick () {
      this.$emit('input', !this.value)
    }
  }
}
</script>

<style lang="scss" scoped>
.gg-switch{
  display: inline-block;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  vertical-align: middle;
  .gg-switch_core{
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color .3s,background-color .3s;
    vertical-align: middle;
    .gg-switch_button{
      position:absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all .3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
}
// 选中样式
.is-checked {
  .gg-switch_core{
    border-color: #409eff;
    background-color: #409eff;
    .gg-switch_button {
      transform: translateX(20px);
    }
  }
}

// 隐藏input标签
.gg-switch_input{
  position:absolute;
  width: 0;
  height: 0;
  opacity: 0;
  margin: 0;
}

</style>
