<template>
  <div class="wrapper">
    <main-header />
    <div class="wrapper-content">
      <div class="container">
        <router-view />
      </div>
    </div>
    <main-footer />
  </div>
</template>

<script>
import MainHeader from "@/layouts/DefaultHeader.vue";
import MainFooter from "@/layouts/DefaultFooter.vue";

export default {
  components: { MainHeader, MainFooter },
};
</script>

<style lang="scss"></style>
