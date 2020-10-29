<template>
  <div class="main">
		Home
  </div>
</template>

<script>
import {
  watch,
  reactive,
  nextTick,
  ref,
  onBeforeUpdate,
  onMounted,
  computed,
} from "vue";
export default {
  setup() {
    return {

    };
  },
};
</script>

<style scoped>
.main {
  height: 100%;
}
.main .menu-area {
  float: left;
  width: 256px;
  height: 100%;
  background: rgb(0, 21, 41);
}
.main .menu-area .system-title {
  height: 60px;
  line-height: 60px;
  background: rgb(0, 21, 41);
  color: #ffffff;
  text-align: center;
}
.right-area {
  padding-left: 256px;
}
</style>