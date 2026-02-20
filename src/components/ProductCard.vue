<script setup lang="ts">
import type { Product } from '../types/product.type';
import { formatCopCurrency } from '../utils/currencyFotmat';
import CategoryChip from './CategoryChip.vue';

const props = defineProps({
  data: {
    type: Object as () => Product,
    required: false,
  },
});
</script>
<template>
  <v-card elevation="0" class="h-100 border-gray rounded-lg">
    <div class="thumbnail">
      <CategoryChip
        :category="data?.category"
        size="small"
        class="chip-absolute"
      />
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

.thubnail {
  position: relative;
}

.chip-absolute {
  position: absolute;
  top: 12px;
  right: 10px;
}
</style>
