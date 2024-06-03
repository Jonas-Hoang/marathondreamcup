<template>
  <div class="layout-admin">
    <div class="admin-header">
      <div class="_container">
        <span>Admin</span>
      </div>
    </div>
    <div class="admin-body">
      <!-- <AdminUpload /> -->

      <div class="w-full mt-6">
        <LottieAnimation :animation-data="Animation" :auto-play="true" :loop="true" :speed="1" ref="anim" />
        <!-- <iframe src="https://lottie.host/embed/ab396e01-5adf-464a-a487-70c584bd4288/ar01xcjRDz.json"></iframe> -->
      </div>

      <div>
        <input type="file" @change="uploadImage" />
      </div>

    </div>
  </div>
</template>


<script>
import { supabase } from "../supabase";

export default {
  methods: {
    async uploadImage(event) {
      const file = event.target.files[0];
      const { data, error } = await supabase.storage
        .from("imageUpload")
        .upload(`public/${file.name}`, file);

      if (error) {
        console.error(error);
      } else {
        console.log("File uploaded successfully", data);
        alert("File uploaded success");
      }
    },
  },
};
</script>

<script setup>
import { defineAsyncComponent } from "vue";
  import { onMounted, ref } from "vue";
  import { LottieAnimation } from "lottie-web-vue";
  import Animation from "../../assets/json/animation.json";

  let anim = ref();

  onMounted(() => {
    setTimeout(() => {
      console.log(anim.value.goToAndPlay(150, true));
      anim.value;
    }, 500);
  });

// const AdminUpload = defineAsyncComponent(() =>
//   import("@/components/AdminUpload/index.vue")
// );
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
