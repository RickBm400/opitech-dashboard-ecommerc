<template>
  <v-chip :color="getCategoryData(category)?.color">{{
    getCategoryData(category)?.title
  }}</v-chip>
</template>
<script setup lang="ts">
const {category} = defineProps({
    category: {
        type: String,
        required: false,
    }
})
import { categories } from '../constants/productCategories';

const getCategoryData = (categoryId: string | null = null) => {
  if (!categoryId) return { title: 'Unknown', color: 'gray' };
  return categories[categoryId as keyof typeof categories];
};
</script>
