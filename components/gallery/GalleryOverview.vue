<template>
  <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
  >
    <GalleryCard
      v-for="(gallery, index) in galleries"
      :key="index"
      :description="gallery.description"
      :image="gallery.image"
      :link="generateLink(gallery.title)"
      :title="gallery.title"
      class="flex flex-col"
    />
  </div>
</template>

<script lang="ts" setup>
import GalleryCard from "./GalleryCard.vue"

const router = useRouter()
const galleries = [
  {
    title: "Honduras",
    image:
      "https://images.unsplash.com/photo-1637353831495-80b454520a24?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Uncover the vibrant culture and natural beauty of Honduras — from lush rainforests to pristine Caribbean beaches.",
  },
  {
    title: "Nicaragua",
    image:
      "https://images.unsplash.com/photo-1539735016193-2bfc5a8f6699?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Discover Nicaragua’s rich colonial heritage, volcanic landscapes, and breathtaking lakes — a hidden gem in Central America.",
  },
  {
    title: "Anguilla",
    image:
      "https://images.unsplash.com/photo-1651697224183-1b25332e6967?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Escape to Anguilla’s crystal-clear waters and white sand beaches — a Caribbean paradise perfect for relaxation.",
  },
  {
    title: "Bali",
    image:
      "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Bali, a tropical paradise known for its rice terraces, volcanic mountains, and rich culture, awaits your next adventure.",
  },
  {
    title: "Azores",
    image:
      "https://images.unsplash.com/photo-1536308304182-5a2e0e04bb08?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "The Azores, an archipelago of lush islands in the Atlantic, offer volcanic landscapes, hot springs, and a peaceful atmosphere.",
  },
  {
    title: "Angola",
    image:
      "https://images.unsplash.com/photo-1543161949-1f9193812ce8?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Angola, a diverse and vibrant country in southern Africa, offers stunning beaches, jungles, and rich cultural heritage.",
  },
  {
    title: "Bhutan",
    image:
      "https://plus.unsplash.com/premium_photo-1661952578770-79010299a9f9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Bhutan, a landlocked kingdom nestled in the Himalayas, is famous for its stunning monasteries, scenic views, and focus on happiness.",
  },
  {
    title: "Comoros",
    image:
      "https://images.unsplash.com/photo-1594471383603-d4cd2bde19d4?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "The Comoros, an archipelago off the coast of Africa, is a tropical paradise with pristine beaches and unique marine life.",
  },
  {
    title: "Sao Tome and Principe",
    image:
      "https://images.unsplash.com/photo-1521411370814-23e0006694bc?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Sao Tome and Principe, two islands off the coast of Central Africa, offer lush rainforests, volcanic beaches, and untouched nature.",
  },
  {
    title: "Malawi",
    image:
      "https://images.unsplash.com/photo-1648357847462-688690bac736?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Malawi, the 'Warm Heart of Africa,' boasts breathtaking lake views, wildlife-rich parks, and a rich cultural tapestry.",
  },
  {
    title: "Papua New Guinea",
    image:
      "https://images.unsplash.com/photo-1608501407284-dadaebcc6786?q=80&w=964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Papua New Guinea is a land of rugged mountains, tropical rainforests, and rich indigenous cultures.",
  },
];

const generateLink = (title: string) => {
    return `/galleries/${title.toLowerCase().replace(/\s+/g, '-')}`;
};
</script>
