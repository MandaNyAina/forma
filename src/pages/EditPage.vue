<script setup lang="ts">
import { reactive, ref, watch } from 'vue';
import { UserStore } from "@/stores/user.store"
const store = UserStore()
const error = ref("");

const user = reactive({
  lastName: "",
  firstName: "",
})

const hasError = () => {
  if (!user.firstName) {
    error.value = "Prénom requis";
    return true;
  }
  if (!user.lastName) {
    error.value = "Nom requis";
    return true;
  }
  return false
}

const handleSubmit = () => {
  if (hasError()) {
    return;
  }
  store.setUser({ ...user })
  user.lastName = "";
  user.firstName = "";
  error.value = "";
}

watch(user, () => {
  if (hasError()) {
    return;
  }
  error.value = "";
})

</script>

<template>
  <div class="form">
    <div class="field">
      <label for="lastName">lastName</label>
      <input type="text" v-model="user.lastName">
    </div>
    <div class="field">
      <label for="firstName">firstName</label>
      <input type="text" v-model="user.firstName">
    </div>
    <div class="error" v-if="!!error">
      {{ error }}
    </div>
    <button @click="handleSubmit">Save</button>
  </div>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.field {
  display: flex;
  align-items: flex-start;
  gap: 16px;
}

button {
  background-color: #E5D283;
  border: 0;
  cursor: pointer;
  padding: 12px;
  border-radius: 12px;
}

button:hover {
  background-color: #213555;
  box-shadow: 1px 2px 1px 0px #213555;
  color: #E5D283;
  transition: 0.3 all;
}

.error {
  font-size: 12px;
  color: red;
}
</style>