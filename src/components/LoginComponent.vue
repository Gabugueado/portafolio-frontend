<template>
  <form>
    <div class="flex items-center justify-center h-screen bg-gray-100">
      <div class="bg-white py-6 rounded-md px-10 max-w-lg shadow-md">
        <h1 class="text-center text-lg font-bold text-gray-500">Form Login</h1>
        <div class="space-y-4 mt-6">
          <div class="w-full">
            <input
              v-model="loginForm.username"
              type="text"
              placeholder="email"
              class="px-4 py-2 bg-gray-50"
            />
          </div>
          <div class="w-full">
            <input
              v-model="loginForm.password"
              type="password"
              placeholder="password"
              class="px-4 py-2 bg-gray-50"
            />
          </div>
        </div>
        <button
          @click.stop.prevent="login"
          class="w-full mt-5 bg-indigo-600 text-white py-2 rounded-md font-semibold tracking-tight"
        >
          Login
        </button>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref, type Ref } from 'vue'
import Toastify from 'toastify-js'

const router = useRouter()

interface LoginForm {
  username: string
  password: string
}
console.log(router)
const loginForm: Ref<LoginForm> = ref({
  username: 'catalina',
  password: 'cacevedo'
})
// const { username, password } = loginForm.value
// const data = { username, password }
const login = () => {
  return router.push('/home')
  // const signIn = await fetch('http://127.0.0.1:3000/login', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify(data)
  // })
  // if (signIn.status === 401) {
  //   return Toastify({
  //     text: 'email or password incorrect',
  //     duration: 3000,
  //     gravity: 'bottom',
  //     position: 'center'
  //   }).showToast()
  // }
  // if (signIn.status != 201) {
  //   return Toastify({
  //     text: 'there was an error',
  //     duration: 3000,
  //     gravity: 'bottom',
  //     position: 'center'
  //   }).showToast()
  // }
  // if (signIn.status === 201) {
  //   Toastify({
  //     text: `Welcome! ${username}`,
  //     duration: 3000,
  //     gravity: 'bottom',
  //     position: 'center'
  //   }).showToast()
  //   return router.push('/home')
  // }
}
</script>
