<template>
  <section class="time-setter">
    <template v-for="(item, index) in selectMap">
      <select
        :key="item.key"
        @change="
          (e) => {
            selectChangeHandler(item.key, e.target.value)
          }
        "
      >
        <option
          :selected="value[item.key] === idx"
          v-for="(n, idx) in item.max"
          :key="idx"
          :value="idx"
          >{{ idx }}
        </option>
      </select>
      <b class="text" :key="`text-${index}`">{{ item.text }}</b>
    </template>
    <slot></slot>
  </section>
</template>  
<script>
import utils from "../common/utils"

export default {
  props: {
    maxHour: {
      default: 24,
    },
    maxMinute: {
      default: 60,
    },
    maxSecond: {
      default: 60,
    },
    value: {},
  },
  data() {
    return {
      nowInfo: {
        ...{},
        ...this.value,
      },
    }
  },
  methods: {
    selectChangeHandler(key, value) {
      this.nowInfo[key] = Number(value)

      this.$emit("input", this.nowInfo)
    },
  },
  computed: {
    selectMap() {
      return [
        {
          key: "h",
          max: this.maxHour + 1,
          text: "时",
        },
        {
          key: "m",
          max: this.maxMinute + 1,
          text: "分",
        },
        {
          key: "s",
          max: this.maxSecond + 1,
          text: "秒",
        },
      ]
    },
  },
  mounted() {},
}
</script>
<style lang="less" scoped>
.text {
  margin: 0 10px;
}
</style>