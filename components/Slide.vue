<template>
  <div class="slide_content">
    <Carousel>
      <div
        class="box-slide"
        :key="i"
        v-for="(item, i) in data"
        v-bind:style="{ backgroundImage: 'url(' + item.url + ')' }"
      ></div>
    </Carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
export default {
  data() {
    return {
      data: [
        {
          id: 13,
          name: "Dolce Gabana The One",
          price: 700,
          oldPrice: 999,
          promotion: true,
          promoPrice: 599,
          url: "http://localhost:1337/uploads/the_one_gold_ef149c1a53.jpg",
        },
        {
          id: 5,
          name: "bader zaml",
          price: 5000,
          oldPrice: 6000,
          promotion: true,
          promoPrice: 2999,
          url: "http://localhost:1337/uploads/man_5917529_1920_aa0f5fc4be.jpg",
        },
        {
          id: 7,
          name: "Fatima Ezzahrae",
          price: 5000,
          oldPrice: 6000,
          promotion: true,
          promoPrice: 4500,
          url: "http://localhost:1337/uploads/architecture_5705042_a2a6a76061.jpg",
        },
      ],
    };
  },
  components: {
    Carousel,
    Slide,
  },
};
</script>

<style scoped>
.slide_content {
  height: 300px;
  width: 100%;
}
.box-slide {
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>