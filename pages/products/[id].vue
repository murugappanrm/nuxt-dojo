<template>
  <div>
    <Head>
      <Title>Nuxt Dojo | {{ product.title }}</Title>
      <Meta name="description" :content="product.description"></Meta>
    </Head>
    <div class="mt-8 ml-7">
      <ProductDetails :product="product" />
    </div>
  </div>
</template>

<script setup>
  const { id } = useRoute().params;

  const { data: product } = await useFetch(
    `https://fakestoreapi.com/products/${id}`,
    { key: id }
  );

  if (!product.value) {
    throw createError({
      statusCode: 404,
      message: "Ooops..product does not exist!",
      fatal: true,
    });
  }
  definePageMeta({
    layout: "products",
  });
</script>

<style scoped></style>
