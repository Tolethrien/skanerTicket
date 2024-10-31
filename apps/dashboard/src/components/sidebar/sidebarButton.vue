<script setup lang="ts">
import users from "@/assets/icons/users.svg";
import alaytics from "@/assets/icons/alanytics.svg";
import events from "@/assets/icons/events.svg";
import settings from "@/assets/icons/settings.svg";
import { ref, watchEffect } from "vue";
import { useRouter } from "vue-router";
const ICONS = {
  users,
  alaytics,
  events,
  settings,
};
interface Props {
  link: string;
  icon: keyof typeof ICONS;
}
const { link, icon } = defineProps<Props>();
const router = useRouter();
const isActive = ref(true);

watchEffect(() => {
  isActive.value = router.currentRoute.value.path
    .toLowerCase()
    .includes(link.toLowerCase());
});
</script>
<template>
  <RouterLink
    :to="link"
    :class="`${isActive ? 'bg-dash-accent' : 'brightness-75'} flex flex-col items-center justify-center rounded-r-md px-10 py-5`"
  >
    <img :src="ICONS[icon]" alt="buttonIcon" class="h-8 w-8" />
    <p class="text-dash-TextActive">{{ link }}</p>
  </RouterLink>
</template>
