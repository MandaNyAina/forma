<script setup lang="ts">
import { UserStore }  from  "@/stores/user.store"
const store = UserStore()
</script>

<template>
  <header>
    <div>
      <ul>
        <li><router-link to="/home">Home</router-link></li>
        <li><router-link to="/edit">Edit</router-link></li>
      </ul>
    </div>
    <div>
      {{ store.user?.firstName }} {{ store.user?.lastName }}
    </div>
  </header>
</template>

<style scoped>
header {
  width: 90%;
  margin: auto;
  margin-top: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #E5D283;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 1px 1px 2px 2px #4F709C;
}

ul {
  list-style: none;
  display: flex;
  gap: 14px;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}

a:hover {
  color: #4F709C;
  transition: all 0.3s;
}
</style>