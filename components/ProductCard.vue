<template>
  <div class="text-center card">
    <img class="thumb" :src="product.image" alt="" />
    <p class="m-4 font-bold text-gray-500 truncate">{{ product.title }}</p>
    <NuxtLink :to="`/products/${product.id}`">
      <p class="my-4 btn">View Details</p>
    </NuxtLink>
  </div>
</template>

<script setup>
  const { product } = defineProps(["product"]);
</script>

<style scoped>
  .thumb {
    max-width: 70%px;
    max-height: 150px;
    margin: 0 auto;
  }
</style>
