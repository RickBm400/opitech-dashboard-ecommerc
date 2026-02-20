<script setup lang="ts">
import { ref } from 'vue';
import { categories } from '../constants/productCategories';
import CategoryChip from './CategoryChip.vue';

const searchCriteria = ref<string>('');
const selectedCategory = ref<string>('cdscsd');
</script>
<template>
  <v-row>
    <v-col cols="4">
      <v-text-field
        elevation="0"
        color="black"
        rounded
        hide-details
        single-line
        append-inner-icon="mdi-magnify"
        density="compact"
        label="Search products..."
        variant="outlined"
        v-model="searchCriteria"
      ></v-text-field>
    </v-col>
    <v-col cols="2">
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn
            variant="outlined"
            rounded
            color="black"
            v-bind="props"
            class="text-capitalize"
          >
            Categories
            <v-icon class="pl-2">mdi-filter</v-icon>
          </v-btn>
        </template>
        <v-list height="300px">
          <v-list-item
            v-for="(_, key) in categories"
            :key="key"
            class="cursor-pointer"
            :value="selectedCategory"
            @click="selectedCategory = key"
          >
            <CategoryChip :category="key" />
          </v-list-item>
        </v-list>
      </v-menu>
    </v-col>
  </v-row>
</template>
<style scoped></style>
