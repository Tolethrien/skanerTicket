<script setup lang="ts">
import Sidebar from "@/components/sidebar.vue";
</script>

<template>
  <main class="flex">
    <Sidebar />
    <RouterView />
  </main>
</template>
