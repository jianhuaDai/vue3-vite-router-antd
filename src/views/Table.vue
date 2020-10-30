<template>
  <div class="main">
    <a-table v-model:columns="columns" v-model:data-source="tableData.data">
      <template v-slot:name="{ text }">
        <a>{{ text }}</a>
      </template>
      <template v-slot:customTitle>
        <span> Name</span>
      </template>
      <template v-slot:action="{ text, record }">
        <span>
          <a>Invite 一 {{ record.name }}</a>
          <a-divider type="vertical" />
          <a>Delete</a>
          <a-divider type="vertical" />
          <a class="ant-dropdown-link"> More actions </a>
        </span>
      </template>
    </a-table>
  </div>
</template>

<script type="module">
const columnsData = [
  {
    dataIndex: "name",
    key: "name",
    slots: { title: "customTitle", customRender: "name" },
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    slots: { customRender: "tags" },
  },
  {
    title: "Action",
    key: "action",
    slots: { customRender: "action" },
  },
];
import {
  watch,
  reactive,
  nextTick,
  ref,
  onBeforeUpdate,
  onMounted,
  computed,
} from "vue";
import apis from "../api/index.js";
export default {
  setup() {
    const columns = reactive(columnsData);
    const tableData = reactive({
      data: [],
    });
    const getTableData = () => {
      apis.getList().then((res) => {
        tableData.data = res.data;
      });
    };
    getTableData();
    return {
      columns,
      tableData,
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