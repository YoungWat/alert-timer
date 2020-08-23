<template>
  <div id="app">
    <TimeDisplay :date=nowDate />
  </div>
</template>

<script>
import TimeDisplay from "./components/TimeDisplay.vue";

export default {
  name: "App",
  data: () => {
    return {
      nowDate: new Date(),
    };
  },
  components: {
    TimeDisplay,
  },
};
</script>

<style lang="less"></style>
