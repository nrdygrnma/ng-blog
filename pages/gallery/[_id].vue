<template>
  <div>
    <h1>{{ capitalizedTitle }}</h1>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();
const galleryItem = ref();

const fetchGalleryItem = async (id: string) => {
  // Simulating data fetching
  galleryItem.value = await fetch(`/api/gallery/${id}`).then((res) =>
    res.json(),
  );
};

const getTitle = computed(() => route.params._id);

const capitalizedTitle = computed(() => {
  return getTitle.value.replace(/\b\w/g, (char: any) => char.toUpperCase());
});

onMounted(() => {
  console.log(route.params._id);
});
</script>
