<template>
  <form>
    <div class="flex items-center justify-center h-screen bg-gray-100">
      <div class="bg-white py-6 rounded-md px-10 max-w-lg shadow-md">
        <h1 class="text-center text-lg font-bold text-gray-500">Form Login</h1>
        <div class="space-y-4 mt-6">
          <div class="w-full">
            <input
              v-model="loginForm.email"
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
          class="w-full mt-5 bg-indigo-600 text-white py-2 rounded-md font-semibold tracking-tight"
        >
          Login
        </button>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue'
interface LoginForm {
  email: string
  password: string
}

const loginForm: Ref<LoginForm> = ref({
  email: 'catalina',
  password: 'cacevedo'
})
const { email, password } = loginForm.value
const data = {
  username: email,
  password: password
}
fetch('http://127.0.0.1:3000/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data),
  redirect: 'follow'
})
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error))
</script>
