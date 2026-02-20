<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { getAllProducts } from '../services/product.client';
import ProductCard from '../components/ProductCard.vue';
import NavBar from '../components/NavBar.vue';
import type { Product, ProductsResponsePaginated } from '../types/product.type';
import _ from 'lodash';

const page = ref<number>(1);
const totalPages = ref<number>(1);
let productList = ref<Array<Array<Product>>>([[]]);

onMounted(async () => {
  const {products, total, limit}: ProductsResponsePaginated = await getAllProducts();
  console.log(products);
  productList.value = _.chunk(products, 4);
  totalPages.value = Math.ceil(total / limit);
  console.log(productList.value);
});
</script>

<template>
  <div id="dashboard-container" class="h-screen pa-10">
    <v-container fluid class="px-16">
      <div class="banner">
        <h1 class="mb-4">E-Commerce</h1>
      </div>
      <!-- Navigation bar -->
      <NavBar />

      <!-- Product card grid -->
      <v-row v-for="(row, index) of productList" :key="index">
        <v-col v-for="product of row" :key="product.id + '_' + index" cols="3">
          <ProductCard :data="product" />
        </v-col>
      </v-row>

      <!-- Pagination footer -->
      <v-row align="end">
        <v-col cols="12">
          <v-pagination
            v-model="page"
            :length="totalPages"
            class="my-4"
            density="compact"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
