<template>
  <label class="gg-radio" :class="{'is-checked' : label === model}">
    <span class="gg-radio_input">
      <span class="gg-radio_inner"></span>
      <input
        type="radio"
        class="gg-radio_original"
        :value="label"
        :name="name"
        v-model="model"
      >
    </span>
    <span class="gg-radio_label">
      <slot></slot>
      <!-- 如果没有传值，就把label作为文本显示 -->
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>

<script>
export default {
  name: 'GgRatio',
  props: {
    label: {
      type: [String, Boolean, Number],
      default: ''
    },
    value: null,
    name: {
      type: String,
      default: ''
    }
  },
  inject: {
    RadioGroup: {
      default: ''
    }
  },
  // 计算属性
  computed: {
    model: {
      get () {
        return this.isGroup ? this.RadioGroup.value : this.value
      },
      set (value) {
        // 触发父组件的input事件
        // 触发父组件的input事件
        this.isGroup ? this.RadioGroup.$emit('input', value) : this.$emit('input', value)
      }
    },
    // 用于判断ratio是够被radioGroup包括
    isGroup () {
      return !!this.RadioGroup
    }
  }
}
</script>

<style lang="scss" scoped>
.gg-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;

  .gg-radio_input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;

    .gg-radio_inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;

      &:after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: transform .15s ease-in;
      }
    }

    .gg-radio_original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0px;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }

  .gg-radio_label {
    font-size: 14px;
    padding-left: 10px;;
  }
}

// 选中的样式
.gg-radio.is-checked {
  .gg-radio_input {
    .gg-radio_inner {
      border-color: #409eff;
      background-color: #409eff;

      &:after {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }

  .gg-radio_label {
    color: #409eff;
  }
}
</style>
