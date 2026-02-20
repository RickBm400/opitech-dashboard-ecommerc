<script setup lang="ts">
import { categories } from '../constants/productCategories';
import CategoryChip from './CategoryChip.vue';
const emit = defineEmits(['update:searchCriteria', 'update:selectedCategory']);

// const props = defineProps({
//   searchCriteria: {
//     type: String,
//     required: false,
//   },
//   selectedCategory: {
//     type: String,
//     required: false,
//   },
// });

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
        @update:model-value="emit('update:searchCriteria', $event)"
      ></v-text-field>
    </v-col>
    <v-col cols="4">
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
            @click="emit('update:selectedCategory', key)"
          >
            <CategoryChip :category="key" size="small" />
          </v-list-item>
        </v-list>
      </v-menu>
    </v-col>
  </v-row>
</template>
<style scoped></style>
