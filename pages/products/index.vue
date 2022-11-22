<template>
  <div>
    <div class="grid grid-cols-3 gap-5">
      <div v-for="p in products">
        <ProductCard :product="p"></ProductCard>
      </div>
    </div>
  </div>
</template>

<script setup>
  // import ProductCard from "~~/components/ProductCard.vue";

  definePageMeta({
    layout: "products",
  });

  /* Fetch Products */
  const { data: products } = await useFetch(
    "https://fakestoreapi.com/products"
  );

  useHead({
    title: "Nuxt Dojo | Merch",
    meta: [{ name: "description", content: "Listing of all products" }],
  });
</script>

<style scoped></style>
