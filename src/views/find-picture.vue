<template>
  <div class="">
    <iframe src="https://enjoysport.vn/embed/marathon-dream-cup-2023" name="iframe_a" title="Running Diamond Cup 2024" width="100%" height="1500 scrolling="></iframe>
    <div class="min-h-screen bg-gray-100 flex items-center justify-center" data-id="1">
      <div class="rounded-lg border text-card-foreground w-full max-w-md mx-auto bg-white shadow-md" data-id="2" data-v0-t="card">
        <div class="flex flex-col space-y-1.5 p-6" data-id="3">
          <h3 class="whitespace-nowrap tracking-tight text-blue-600 text-3xl font-bold text-center" data-id="4">Login</h3>
          <p class="text-sm text-center text-gray-500 mt-2" data-id="5">
            Enter your credentials to access your account.
          </p>
        </div>
        <div class="p-6 space-y-4" data-id="6">
          <div class="space-y-2" data-id="7">
            <label class="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm text-gray-600" for="email" data-id="8">Email</label>
            <input v-model="email" class="flex h-10 bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full px-3 py-2 border border-gray-300 outline-none focus:border-indigo-500 rounded-md text-black" id="email" placeholder="example@example.com" required="" data-id="9" type="email">
          </div>
          <div class="space-y-2" data-id="10">
            <label class="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm text-gray-600" for="password" data-id="11">Password</label>
            <input v-model="pass" class="flex h-10 bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full px-3 py-2 border border-gray-300 outline-none focus:border-indigo-500 rounded-md text-black" id="password" required="" data-id="12" type="password">
          </div>
        </div>
        <div class="grid items-center p-6" data-id="13">
          <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 w-full py-2 px-4 text-center text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none" data-id="14" @click="login">Sign in</button>
          <div class="flex justify-between items-center mt-4" data-id="15"><a class="text-sm text-gray-600 hover:text-indigo-500" data-id="16" href="#">Forgot Password?</a><a class="text-sm text-indigo-600 hover:text-indigo-500" data-id="17" href="#">Create Account</a></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import router from "@/router";

const email = ref("");
const pass = ref("");
const selectedLink = ref("");
const selectedRouter = ref("");

const login = () => {
  if (email.value != "" && pass.value != "") {
    alert("Login succesful");
    selectedLink.value = "";
    selectedRouter.value = "";
    router.replace({ path: "/admin" + "" });
  } else {
    alert("Failed");
  }
};
</script>

