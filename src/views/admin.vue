<template>
  <div class="layout-admin">
    <div class="admin-header">
      <div class="_container">
        <span>Admin</span>
      </div>
    </div>
    <div class="admin-body">
      <AdminUpload />
    </div>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from "vue";

const AdminUpload = defineAsyncComponent(() =>
  import("@/components/AdminUpload/index.vue")
);
</script>

<style lang="scss">
body {
  overflow: hidden;
  // background: #f2f2f6;
}

.layout-admin {
  display: flex;
  height: 100vh;
  background-color: #f2f2f6;
  flex-flow: column;
  align-items: center;
  overflow: hidden;

  .admin-header {
    display: flex;
    width: 100%;
    height: 70px;
    z-index: 10;
    background-image: linear-gradient(to right, #495df3 0%, #b8feff 100%);
    color: #fdb912;
    align-items: center;
    padding: 0px 100px;
    font-size: 20px;
    font-weight: bold;
    flex: none;
    justify-content: center;

    ._container {
      width: 100%;
    }
  }

  .admin-body {
    display: flex;
    width: 100%;
    height: calc(100vh - 70px);
    justify-content: center;
  }

  .head-session {
    flex: none;
    height: 100%;
    position: sticky;
    top: 0px;
    border-radius: 10px;
  }

  .main-session {
    height: 100%;
    width: 100%;
    overflow: auto;
    scroll-behavior: smooth;
    border-radius: 10px;
  }
}
</style>
