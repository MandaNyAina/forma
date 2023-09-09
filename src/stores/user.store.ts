import { defineStore } from 'pinia'
import { ref } from 'vue'

export type User = {
  firstName: string;
  lastName: string;
}

export const UserStore = defineStore('user', () => {
  const user = ref<User | null>(null)
  function setUser(newUser: User) {
    user.value = newUser
  }
  return { user, setUser }
})

export const UserStore2 = defineStore('user2', {
  state: (): { user: User | null} => ({ user: null }),
  actions: {
    setUser(newUser: User) {
      this.user = newUser
    }
  }
})
