<template>
  <div class="card-container">
    <NLink :to="link">
      <NCard
        :_card-content="{
          class: 'card-content',
        }"
        :_card-header="{
          class: 'card-header',
        }"
        card="soft"
        class="card card-hover"
      >
        <template #header>
          <div class="card-header-container">
            <div class="card-image-container">
              <img :alt="title" :src="image" class="card-image" />
            </div>
            <div class="card-title-container">
              <p class="card-title-text">{{ title }}</p>
            </div>
            <div class="card-description-container">
              <p class="card-description-text">
                {{ description }}
              </p>
            </div>
            <div class="gradient-overlay" />
            <div class="gradient-overlay-hover" />
          </div>
        </template>
      </NCard>
    </NLink>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  title: string;
  image: string;
  description: string;
  link: string;
}>();
</script>
