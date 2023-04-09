<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container p-0">
      <a class="navbar-brand" href="#"
        ><img
          class="logo_mag"
          src="../public/assets/images/logo_noir.svg"
          alt=""
      /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li
            :key="i"
            v-for="(item, i) in router"
            class="nav-item active ps-0 m-0"
          >
            <NuxtLink
              class="nav-link"
              :class="{ disabled: item.disabled }"
              :to="item.path"
              >{{ item.label }}</NuxtLink
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import { route } from "../static/constants";
export default {
  data() {
    return {
      router: route,
    };
  },
};
</script>
<style lang="css" scoped>
.logo_mag {
  width: 40px;
  height: 40px;
}
a {
  font-weight: 600;
}
</style>