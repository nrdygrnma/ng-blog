<template>
  <div class="container mx-auto">
    <main-header />

    <main class="pt-12 pb-24">
      <slot />
    </main>
  </div>
</template>
<script lang="ts" setup>
import MainHeader from "~/components/base/MainHeader.vue";
</script>
