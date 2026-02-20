<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue';
import { getAllProducts } from '../services/product.service';
import ProductCard from '../components/ProductCard.vue';
import NavBar from '../components/NavBar.vue';
import type {
  Product,
  ProductsRequestInput,
  ProductsResponsePaginated,
} from '../types/product.type';
import _ from 'lodash';
import { useDebounce } from '../composables/debounce';

let productList = ref<Array<Array<Product>>>([[]]);
const page = ref<number>(1);
const skip = ref<number>(0);
const searchCriteria = ref<string>('');
const selectedCategory = ref<string>('');
const totalPages = ref<number>(1);

const getProducts = async (payload?: ProductsRequestInput) => {
  const { products, total }: ProductsResponsePaginated =
    await getAllProducts(payload);

  productList.value = _.chunk(products, 4);
  totalPages.value = Math.ceil(total / 8);
  console.log(totalPages.value);
};

const updatePage = async (newPage: number) => {
  page.value = newPage;
  skip.value = (newPage - 1) * 8;
  console.log(page.value, skip.value);
  await getProducts({ skip: skip.value, search: searchCriteria.value });
};

const debounceSearch = useDebounce(getProducts, 1000);

watch(searchCriteria, (value) => {
  debounceSearch({search: value})
})

onMounted(async () => {
  await getProducts();
});
</script>

<template>
  <div id="dashboard-container" class="h-screen pa-10">
    <v-container fluid class="px-16">
      <div class="banner">
        <h1 class="mb-4">E-Commerce</h1>
      </div>
      <!-- Navigation bar -->
      <NavBar
        @update:searchCriteria="searchCriteria = $event"
        @update:selectedCategory="selectedCategory = $event"
      />

      <!-- Product card grid -->
      <v-row v-for="(row, index) of productList" :key="index">
        <v-col v-for="product of row" :key="product.id + '_' + index" cols="3">
          <ProductCard :data="product" />
        </v-col>
      </v-row>

      <!-- Pagination footer -->
      <v-row justify="end">
        <v-col cols="6">
          <v-pagination
            v-model="page"
            :length="totalPages"
            class="my-4"
            density="compact"
            @update:model-value="updatePage"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
