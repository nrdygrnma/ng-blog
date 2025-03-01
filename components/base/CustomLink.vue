<template>
  <NLink
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
</script>
