<script setup lang="ts">
import Sidebar from "@/components/sidebar/sidebar.vue";
</script>

<template>
  <div class="bg-dash-main flex h-full w-full gap-4 p-2 pl-0">
    <Sidebar />
    <RouterView />
  </div>
</template>
