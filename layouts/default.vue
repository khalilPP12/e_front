<template>
  <div class="position-relative body">
    <Header class="header_" />
    <Nuxt class="main_" />
    
  </div>
</template>
<script>
import Header from "@/components/Header";
export default {
  components: {
    Header,
  },
};
</script>
<style scoped>
/* .body {
} */
.main_ {
  padding-top: 156px;
}
.header_ {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
}
</style>