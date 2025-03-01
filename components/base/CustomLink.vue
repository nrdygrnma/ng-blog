<template>
  <NLink
    :class="{ 'parent-active-class': $route.path.startsWith('/gallery') }"
    :to="to"
    active-class="active"
    class="custom-link"
    exact-active-class="active"
  >
    <slot></slot>
  </NLink>
</template>

<script lang="ts" setup>
defineProps(["to"]);
const route = useRoute();

const activePage = computed(() => {
  if (route.path) return route.path.split("/")[1];
  return "";
});
</script>
