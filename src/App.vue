<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
import { UserStore } from "@/stores/user.store"
const store = UserStore()

store.setUser({
  firstName: "John",
  lastName: "Doe"
})
</script>

<template>
  <div class="header">
    <NavBar />
  </div>
  <main>
    <router-view></router-view>
  </main>
</template>

<style scoped>
.header {
  position: fixed;
  width: 100%;
}

main {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>
