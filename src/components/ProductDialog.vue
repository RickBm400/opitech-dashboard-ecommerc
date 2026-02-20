<script setup lang="ts">
import { ref, watch } from 'vue';
import type { Product } from '../types/product.type';
import { formatCopCurrency } from '../utils/currencyFotmat';
const dialog = ref(false);
const emit = defineEmits(['update:close']);

const props = defineProps({
  data: {
    type: Object as () => Product,
    required: false,
  },
});

watch(
  () => props.data,
  (value) => {
    console.log(value);
    dialog.value = !!value;
  },
);
</script>
<template>
  <v-dialog max-width="700" v-model="dialog">
    <template v-slot:default="">
      <v-card rounded="lg">
        <v-row no-gutters>
          <v-col cols="5">
            <v-btn
              fab
              size="small"
              :ripple="false"
              icon="mdi-close"
              elevation="0"
              class="close-button"
              @click="emit('update:close', null)"
            >
            </v-btn>
            <v-img :src="data?.thumbnail" style="width: 300" />
          </v-col>
          <v-col cols="7" class="pa-4 d-flex flex-column">
            <h3>{{ data?.title }}</h3>
            <span class="product-price">{{
              formatCopCurrency(data?.price || 0)
            }}</span>
            <p class="product-description pt-2">
              {{ data?.description }}
            </p>
            <div class="mt-auto d-flex ga-1">
              <v-chip
                size="small"
                v-for="(tag, index) of data?.tags"
                :key="index"
                >#{{ tag }}</v-chip
              >
            </div>
          </v-col>
        </v-row>
      </v-card>
    </template>
  </v-dialog>
</template>
<style scoped>
.product-description {
  font-size: 12px;
}

.product-price {
  font-size: 14px;
  font-weight: 500;
  color: #5858588a;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1;
}
</style>
