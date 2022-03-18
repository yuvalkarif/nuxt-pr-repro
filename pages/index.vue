<template>
  <div>
    <Test :number="1" />
    <Test :number="2" />
    <Test :number="3" />
  </div>
</template>

<script>
import Test from "../components/Test.vue";
export default {
  name: "IndexPage",
  components: { Test },
};
</script>
