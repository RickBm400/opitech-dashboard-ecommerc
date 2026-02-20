<template>
  <div id="dashboard-container" class="h-screen pa-10">
    <span>Dashboard</span>
    <div v-for="product, index of products" :key="index">
    <ProductCard :data="product"/>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { getAllProducts } from '../services/products.client';
import ProductCard from '../components/ProductCard.vue';
import type { Product, ProductsResponsePaginated } from '../types/product.type';

let products = ref<Product[]>([])

onMounted(async () => {
  const productsData: ProductsResponsePaginated = await getAllProducts();
  products.value = productsData.products;
});
</script>