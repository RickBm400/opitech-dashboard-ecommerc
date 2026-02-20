<template>
  <v-chip :color="getCategoryData(category)?.color" :size="size">{{
    getCategoryData(category)?.title
  }}</v-chip>
</template>
<script setup lang="ts">
const { category } = defineProps({
  category: {
    type: String,
    required: false,
  },
  size: {
    type: String,
    required: false,
    default: 'default',
  },
});
import { categories } from '../constants/productCategories';

const getCategoryData = (categoryId: string | null = null) => {
  if (!categoryId) return { title: 'Unknown', color: 'gray' };
  return categories[categoryId as keyof typeof categories];
};
</script>
