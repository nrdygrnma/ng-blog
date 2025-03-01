<template>
  <header class="py-6">
    <div class="flex items-center justify-between">
      <h1
        class="text-xs font-bold tracking-wider uppercase text-gray-200 bg-gray-800 py-2 px-6 rounded-full"
      >
        nrdygrnma's Blog
      </h1>
      <MainNav />
    </div>
  </header>
</template>
<script lang="ts" setup>
import MainNav from "~/components/base/MainNav.vue";
</script>
