<template>
  <div class="main">
    <div class="menu-area">
      <div class="system-title">后台管理系统名称</div>
      <a-menu
        mode="inline"
        theme="dark"
        v-model:selectedKeys="selectedKeys"
        v-model:openKeys="openKeys"
      >
        <template v-for="item in menus" :key="item.id">
          <a-menu-item
            v-if="!item.children || item.children.length < 1"
            :key="item.id"
          >
            <span>
              {{ item.name }}
            </span>
          </a-menu-item>
          <a-sub-menu v-else :key="item.id">
            <template v-slot:title>
              <span
                ><span>{{ item.name }}</span></span
              >
            </template>
            <a-menu-item v-for="child in item.children" :key="child.id">{{
              child.name
            }}</a-menu-item>
          </a-sub-menu>
        </template>
      </a-menu>
    </div>
    <div class="right-area">
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
          <a-breadcrumb
            style="
              height: 64px;
              line-height: 64px;
              font-size: 20px;
              padding-left: 20px;
            "
          >
            <a-breadcrumb-item v-for="(item, index) in breadCrumbName" :key="index">{{ item }}</a-breadcrumb-item>
          </a-breadcrumb>
        </a-layout-header>
        <a-layout-content
          :style="{
            margin: '24px 16px',
            padding: '24px',
            background: '#fff',
            minHeight: 'calc(100vh - 120px)',
          }"
        >
          <div>
            <router-view />
          </div>
        </a-layout-content>
      </a-layout>
    </div>
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
import MENUS from "../config/menus";
import { useRouter } from "vue-router";
export default {
  setup() {
    const menus = ref(MENUS);
    const selectedKeys = ref([MENUS[0].id]);
		const openKeys = ref([MENUS[0].id]);
		const breadCrumbName = ref([]);
    const router = useRouter();
    const navigater = (name) => router.push({ name });
    watch(
      () => selectedKeys.value,
      (count, prevCount) => {
        console.log(count[0], 'count[0]');
        breadCrumbName.value = [];
        try {
          menus.value.forEach((item) => {
            if (item.id === count[0]) {
              breadCrumbName.value.push(item.name);
              throw Error;
            }
            if (item.children && item.children.length > 0) {
              breadCrumbName.value.push(item.name)
              item.children.forEach((child) => {
                if (child.id === count[0]) {
                  breadCrumbName.value.push(child.name);
                  throw Error;
                }
              });
            }
          });
        } catch (error) {
        }
        navigater(count[0]);
			},
			{immediate: true}
    );
    watch(
      () => openKeys.value,
      (count, prevCount) => {
        console.log(count, "openKeys");
      }
    );
    return {
      menus,
      selectedKeys,
      openKeys,
      breadCrumbName,
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