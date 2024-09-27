<template>
  <div>
    <Sidebar />
    <div class="relative md:ml-64 bg-blueGray-100">
      <AdminNavbar />
      <div class="px-4 md:px-10 mx-auto w-full -m-24">
        <router-view />
        <FooterAdmin />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Sidebar from '@/components/Sidebar/AdminSidebar.vue'
import FooterAdmin from '@/components/Footers/FooterAdmin.vue'
</script>
