<template>
  <div>
    <h2>Home</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo explicabo
      rerum perspiciatis et? Soluta voluptate, est delectus nemo ex aliquam!
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo explicabo
      rerum perspiciatis et? Soluta voluptate, est delectus nemo ex aliquam!
    </p>
  </div>
</template>

<script setup>
  useHead({
    script: [
      {
        src: "js/myscript.js",
        type: "text/javascript",
        body: true,
      },
    ],
  });
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
