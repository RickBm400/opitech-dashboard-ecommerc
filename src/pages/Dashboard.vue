<template>
    <span>App</span>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue';
import { getAllProducts } from '../services/products.client';

onMounted(async () => {
  const products = await getAllProducts();
  console.log(products);
});
</script>