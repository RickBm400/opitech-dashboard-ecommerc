<template>
  <div id="dashboard-container" class="h-screen pa-10">
    <v-container fluid class="px-16">
    <h1>Dashboard</h1>
      <v-row v-for="(row, index) of products" :key="index">
        <v-col v-for="product of row" :key="product.id + '_' + index" cols="3">
          <ProductCard :data="product" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { getAllProducts } from '../services/product.client';
import ProductCard from '../components/ProductCard.vue';
import type { Product, ProductsResponsePaginated } from '../types/product.type';
import _ from 'lodash';

let products = ref<Array<Array<Product>>>([[]]);

onMounted(async () => {
  const productsData: ProductsResponsePaginated = await getAllProducts();
  products.value = _.chunk(productsData.products, 4);
  console.log(products.value);
});
</script>
