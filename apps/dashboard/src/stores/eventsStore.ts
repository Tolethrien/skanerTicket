import { reactive, toRefs } from "vue";
export type SortType = "A-Z" | "Z-A" | "Date" | "Sold" | "Cap";
type Filters = "Location" | "Cap" | "Name" | "Date";
type DisplayType = "grid" | "list";
interface EventStore {
  searchParam: {
    getSearchParam: string;
    setSearchParam: (value: string) => void;
  };
  sortedBy: {
    getSortedBy: SortType;
    setSortedBy: (value: SortType) => void;
  };
  filters: {
    getFilterList: Set<Filters>;
    addFilter: (value: Filters) => void;
    removeFilter: (value: Filters) => void;
  };
  displayType: {
    getDisplayType: DisplayType;
    setDisplayType: (type: DisplayType) => void;
  };
}
export function getFromEventStore<T extends keyof EventStore>(key: T) {
  return toRefs(eventsStore[key]) as EventStore[T];
}
export const eventsStore = reactive({
  searchParam: {
    getSearchParam: "",
    setSearchParam: (value: string) =>
      (eventsStore.searchParam.getSearchParam = value),
  },
  sortedBy: {
    getSortedBy: "A-Z",
    setSortedBy: (value: SortType) =>
      (eventsStore.sortedBy.getSortedBy = value),
  },
  filters: {
    getFilterList: new Set<Filters>(["Cap", "Date", "Location", "Name"]),
    addFilter: (value: Filters) => eventsStore.filters.getFilterList.add(value),
    removeFilter: (value: Filters) =>
      eventsStore.filters.getFilterList.delete(value),
  },
  displayType: {
    getDisplayType: "list",
    setDisplayType: (type: DisplayType) =>
      (eventsStore.displayType.getDisplayType = type),
  },
});
