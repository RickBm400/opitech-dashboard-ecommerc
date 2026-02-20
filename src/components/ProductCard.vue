<template>
    <v-card elevation="1">
        {{data?.title}}
    </v-card>
</template>
<script setup lang="ts">
import type { Product } from '../types/product.type';
const props = defineProps({
    data: {
        type: Object as () => Product,
        required: false
    },
})
</script>