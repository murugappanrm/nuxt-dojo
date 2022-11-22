<template>
  <div>
    <h2>About</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo explicabo
      rerum perspiciatis et? Soluta voluptate, est delectus nemo ex aliquam!
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo explicabo
      rerum perspiciatis et? Soluta voluptate, est delectus nemo ex aliquam!
    </p>
    <div>{{ data }}</div>
  </div>
</template>

<script setup>
  // const { data } = await useFetch("/api/ninja?name=mario");
  // const { data } = await useFetch("/api/ninja");
  const { data } = await useFetch("/api/currency/GBP,MYR");
</script>

<style scoped>
  h2 {
    margin-bottom: 20px;
    font-size: 36px;
  }
  p {
    margin: 20px 0;
  }
</style>
