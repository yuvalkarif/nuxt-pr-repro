<template>
  <div>
    <span>@Playwright Test {{ number }} </span>
  </div>
</template>

<script>
export default {
  name: "Test",
  props: {
    number: Number,
  },
};
</script>

<style></style>
