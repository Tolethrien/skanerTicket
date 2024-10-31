<script setup lang="ts">
import SidebarButton from "@/components/sidebar/sidebarButton.vue";
</script>
<template>
  <aside
    class="bg-dash-sec border-dash-stroke border-y-1 border-r-1 shadow-window-4 my-auto flex h-full flex-col rounded-r-md"
  >
    <p
      class="text-dash-accent py-6 text-center text-2xl font-semibold underline"
    >
      LOGO
    </p>
    <nav class="flex h-full flex-col gap-4">
      <SidebarButton link="Events" icon="events" />
      <SidebarButton link="Users" icon="users" />
      <SidebarButton link="Analytics" icon="alaytics" />
      <SidebarButton link="Settings" icon="settings" />
    </nav>
  </aside>
</template>
