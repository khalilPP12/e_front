<template>
  <div :id="id" :class="`article article_${id}`">
    <div
      class="img"
      v-bind:style="{ backgroundImage: 'url(' + image + ')' }"
    ></div>
    <div class="d-flex justify-content-between">
      <h1 class="title w-75">{{ title }}</h1>
      <!-- <div v-if="hasPromo" class="pormotion-content">
        <span>{{ $t("Promotion") }}</span>
      </div> -->
    </div>
    <div class="dis_box">
      <p>{{ description }}</p>
    </div>
    <div class="footer_card d-flex justify-content-between">
      <div class="d-flex">
        <div>
          <span :class="{ textBarre: hasPromo }">{{
            (hasPromo ? oldPrice : price) + devise
          }}</span>
        </div>
        <div class="promo_box ml-2" v-if="hasPromo">
          <span>{{ promoPrice + devise }}</span>
        </div>
      </div>
      <NuxtLink class="btnBuy" :to="`/article/${id}`">{{
        $t("btnBuy")
      }}</NuxtLink>
    </div>
  </div>
</template>
  
<script>
export default {
  data() {
    return {};
  },
  props: [
    "id",
    "title",
    "price",
    "promoPrice",
    "description",
    "image",
    "btnName",
    "hasPromo",
    "oldPrice",
    "devise",
  ],
};
</script>

<style scoped>
.btnBuy {
  text-decoration: none;
  font-weight: 600;
}
.article {
  padding: 0;
  position: relative;
  width: 310px;
  height: 380px;
  min-height: 220px;
  display: inline-block;
  background: white;
  margin-bottom: 50px;
  border-radius: 10px;
  box-shadow: 0px 55px 60px 0px rgba(0, 0, 0, 0.27);
  transition: 1s;
}
.textBarre {
  text-decoration: line-through;
}
.article .img {
  max-width: 100%;
  border-radius: 10px 10px 0px 0px;
  margin-bottom: 10px;
  background-repeat: no-repeat;
  background-size: cover;
  height: 190px;
}
.promo_box {
  color: green;
}
.article .title {
  font-family: "Vidaloka", sans-serif;
  font-weight: 100;
  font-size: 20px;
  padding: 0px 30px 0px 30px;
}
.pormotion-content {
  margin: 0px 30px 0px 30px;
  padding: 0px 10px;
  border: solid 3px green;
  height: 30px;
  border-radius: 10px;
}
.pormotion-content span {
  color: green;
  font-weight: 500;
}

.article p {
  color: #444444;
  line-height: 1.5;
  font-size: 13px;
  font-weight: 300;
  padding: 0px 10px 0px 30px;
}

.article:hover {
  transition: 1s;
  transform: scale(1.01);
}
.footer_card {
  padding: 0px 30px 30px 30px;
}
.dis_box {
  height: 110px;
  overflow-y: scroll;
}
/* width */
.dis_box::-webkit-scrollbar {
  width: 5px;
}

/* Track */
.dis_box::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

/* Handle */
.dis_box::-webkit-scrollbar-thumb {
  background: #000000;
  border-radius: 10px;
}

/* Handle on hover */
.dis_box::-webkit-scrollbar-thumb:hover {
  background: #000000;
}
</style>