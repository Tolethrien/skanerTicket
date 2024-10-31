<script setup lang="ts">
import dropdown from "@/assets/icons/select.svg";
import { getFromEventStore, type SortType } from "@/stores/eventsStore";

const options: SortType[] = ["A-Z", "Z-A", "Date", "Sold", "Cap"];
const { getSortedBy, setSortedBy } = getFromEventStore("sortedBy");
</script>
<template>
  <div
    class="bg-dash-sec shadow-button-inner relative flex h-2/4 max-w-52 items-center rounded-md"
  >
    <select
      id="select-input"
      name="select-input"
      class="text-dash-TextActive placeholder:text-dash-TextInactive *:bg-dash-sec h-full w-full appearance-none text-ellipsis bg-transparent pl-2 pr-10 outline-none"
      v-model="getSortedBy"
      @change="
        (event) =>
          setSortedBy((event.target as HTMLSelectElement).value as SortType)
      "
    >
      <option v-for="option in options" :value="option" :key="option">
        {{ `Sorted By: ${option}` }}
      </option>
    </select>
    <img
      :src="dropdown"
      alt=""
      class="pointer-events-none absolute right-1 top-1/2 h-4 w-6 -translate-y-1/2"
    />
  </div>
</template>
