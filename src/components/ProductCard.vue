<script setup lang="ts">
import type { Product } from '../types/product.type';
import { categories } from '../constants/productCategories';
import { formatCopCurrency } from '../utils/currencyFotmat';

const props = defineProps({
  data: {
    type: Object as () => Product,
    required: false,
  },
});

const getCategoryData = (categoryId: string | null = null) => {
  if (!categoryId) return { title: 'Unknown', color: 'gray' };
  return categories[categoryId as keyof typeof categories];
};
</script>
<template>
  <v-card elevation="0" class="h-100 border-gray rounded-lg">
    <div class="thumbnail">
      <v-chip :color="getCategoryData(data?.category)?.color" class="chip">{{
        getCategoryData(data?.category)?.title
      }}</v-chip>

      <v-img cover :src="data?.thumbnail" />
    </div>
    <div class="product-metadata pa-4 d-flex flex-column">
      <span class="product-brand">{{ data?.brand }}</span>
      <h3 class="font-weight-bold">{{ data?.title }}</h3>
      <span>{{ formatCopCurrency(data?.price || 0) }}</span>
    </div>
  </v-card>
</template>
<style scoped>
.product-description {
  font-size: 14px;
}

.product-brand {
    font-size: 12px;
    color: #0000008a;
}

.border-gray {
  border: 0.9px solid #00000017;
}

.thubnail {
  position: relative;
}

.chip {
  position: absolute;
  top: 12px;
  right: 10px;
}
</style>
