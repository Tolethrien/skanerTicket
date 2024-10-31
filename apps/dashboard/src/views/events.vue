<script setup lang="ts">
import Window from "@/components/common/window.vue";
import VerticalBar from "@/components/events/verticalBar.vue";
import plus from "@/assets/icons/plus.svg";
import gridIcon from "@/assets/icons/grid.svg";
import listIcon from "@/assets/icons/list.svg";
import Searchbar from "@/components/common/inputs/searchbar.vue";
import SortedBy from "@/components/common/inputs/sortedBy.vue";
import FilterBy from "@/components/common/inputs/filterBy.vue";
import IconButton from "@/components/common/inputs/iconButton.vue";
import { getFromEventStore } from "@/stores/eventsStore";
const { getDisplayType, setDisplayType } = getFromEventStore("displayType");
</script>

<template>
  <Window>
    <VerticalBar>
      <Searchbar />
      <div class="flex h-full items-center gap-4">
        <SortedBy />
        <FilterBy />
      </div>
      <div class="flex gap-2">
        <IconButton
          :icon="listIcon"
          :size="{ x: 6, y: 6 }"
          :active="getDisplayType === 'list'"
          :click="() => setDisplayType('list')"
          :scale="true"
        />
        <IconButton
          :icon="gridIcon"
          :size="{ x: 6, y: 6 }"
          :active="getDisplayType === 'grid'"
          :click="() => setDisplayType('grid')"
          :scale="true"
        />
      </div>
      <button
        class="bg-dash-accent text-dash-TextActive flex flex-col items-center justify-center p-2 font-medium"
      >
        <img :src="plus" alt="buttonAddIcon" />
        <p>Add New</p>
      </button>
    </VerticalBar>
  </Window>
</template>
